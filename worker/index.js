/* ---------------------------------------------------------------------------
   Seating API. Runs in front of the static site; every path that isn't
   /api/* falls through to the built Astro pages untouched.

   Storage is a single Durable Object rather than a database, deliberately:
   a Durable Object is created by deploying this file, so there is nothing to
   set up in the Cloudflare dashboard and no database id to paste anywhere.
   It also runs one request at a time, which means two people tapping the same
   seat at the same instant is impossible by construction rather than by
   careful SQL.

   The gabbai password is set on first visit to /seats/admin/ and stored here
   as a salted hash — this repository is public, so it can't live in the code.
--------------------------------------------------------------------------- */

import { DurableObject } from "cloudflare:workers";
import { allSeats } from "../src/data/seating.js";

const SEATS = new Map(allSeats.map((s) => [s.id, s]));

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });

const clean = (v, max) =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "";

const hex = (buf) =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

async function hash(password, salt) {
  return hex(
    await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${salt}:${password}`))
  );
}

/* Never let a wrong guess be distinguishable by how long the check took. */
function sameString(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export class Seating extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    const sql = ctx.storage.sql;
    sql.exec(`CREATE TABLE IF NOT EXISTS claims (
      id TEXT PRIMARY KEY, section TEXT NOT NULL, number INTEGER NOT NULL,
      name TEXT NOT NULL, phone TEXT NOT NULL DEFAULT '',
      receipt TEXT NOT NULL DEFAULT '', note TEXT NOT NULL DEFAULT '',
      claimed_at TEXT NOT NULL)`);
    sql.exec(`CREATE TABLE IF NOT EXISTS receipts (
      receipt TEXT PRIMARY KEY, seats_allowed INTEGER NOT NULL DEFAULT 1,
      seats_used INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL)`);
    sql.exec(`CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY, value TEXT NOT NULL)`);
  }

  #rows(query, ...bind) {
    return this.ctx.storage.sql.exec(query, ...bind).toArray();
  }

  #setting(key) {
    return this.#rows("SELECT value FROM settings WHERE key = ?", key)[0]?.value ?? null;
  }

  /* ---- public ---- */

  list() {
    const seats = {};
    for (const row of this.#rows("SELECT id, name FROM claims")) {
      seats[row.id] = { status: "taken", name: row.name };
    }
    return { seats };
  }

  claim({ seatId, receipt, name, phone, wanted, section, number }) {
    const existing = this.#rows(
      "SELECT seats_allowed, seats_used FROM receipts WHERE receipt = ?",
      receipt
    )[0];

    if (!existing) {
      this.#rows(
        "INSERT INTO receipts (receipt, seats_allowed, seats_used, created_at) VALUES (?, ?, 0, datetime('now'))",
        receipt,
        wanted
      );
    } else if (wanted > existing.seats_allowed) {
      // Bought the pair but said "one seat" the first time round. The allowance
      // is raised so they can come back for the second, never lowered.
      this.#rows("UPDATE receipts SET seats_allowed = ? WHERE receipt = ?", wanted, receipt);
    }

    const ticket = this.#rows(
      "SELECT seats_allowed, seats_used FROM receipts WHERE receipt = ?",
      receipt
    )[0];

    if (ticket.seats_used >= ticket.seats_allowed) {
      return {
        error:
          "That confirmation number has already been used for every seat it covers. " +
          "If this is a mistake, message the gabbai.",
        status: 409,
      };
    }

    if (this.#rows("SELECT id FROM claims WHERE id = ?", seatId).length) {
      return { error: "Someone just took that seat. Please pick another.", status: 409 };
    }

    this.#rows(
      "INSERT INTO claims (id, section, number, name, phone, receipt, note, claimed_at) " +
        "VALUES (?, ?, ?, ?, ?, ?, '', datetime('now'))",
      seatId,
      section,
      number,
      name,
      phone,
      receipt
    );
    this.#rows("UPDATE receipts SET seats_used = seats_used + 1 WHERE receipt = ?", receipt);

    return {
      seat: { id: seatId, section, number, name },
      remaining: ticket.seats_allowed - ticket.seats_used - 1,
    };
  }

  /* ---- gabbai ---- */

  needsSetup() {
    return { needsSetup: this.#setting("adminHash") === null };
  }

  async setPassword(password) {
    if (this.#setting("adminHash") !== null) {
      return { error: "A password has already been set for this chart.", status: 409 };
    }
    if (password.length < 6) {
      return { error: "Use at least 6 characters.", status: 400 };
    }
    const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
    this.#rows("INSERT INTO settings (key, value) VALUES ('adminSalt', ?)", salt);
    this.#rows(
      "INSERT INTO settings (key, value) VALUES ('adminHash', ?)",
      await hash(password, salt)
    );
    return { ok: true };
  }

  async checkPassword(password) {
    // A password set in the Cloudflare dashboard wins, for anyone who'd rather
    // manage it there.
    if (this.env.ADMIN_TOKEN) return sameString(password, this.env.ADMIN_TOKEN);
    const stored = this.#setting("adminHash");
    const salt = this.#setting("adminSalt");
    if (!stored || !salt) return false;
    return sameString(await hash(password, salt), stored);
  }

  exportRows() {
    return {
      rows: this.#rows(
        "SELECT c.section, c.number, c.name, c.phone, c.receipt, " +
          "COALESCE(r.seats_allowed, 0) AS paid_for, c.note, c.claimed_at " +
          "FROM claims c LEFT JOIN receipts r ON r.receipt = c.receipt " +
          "ORDER BY c.section DESC, c.number ASC"
      ),
    };
  }

  adminSeat({ seatId, section, number, name, phone, note, clear }) {
    if (clear) {
      const row = this.#rows("SELECT receipt FROM claims WHERE id = ?", seatId)[0];
      this.#rows("DELETE FROM claims WHERE id = ?", seatId);
      // Freeing a seat hands back one seat of the allowance, so moving one half
      // of a pair payment doesn't burn the other.
      if (row?.receipt) {
        this.#rows(
          "UPDATE receipts SET seats_used = MAX(seats_used - 1, 0) WHERE receipt = ?",
          row.receipt
        );
        this.#rows("DELETE FROM receipts WHERE receipt = ? AND seats_used = 0", row.receipt);
      }
      return { ok: true };
    }

    if (this.#rows("SELECT id FROM claims WHERE id = ?", seatId).length) {
      this.#rows(
        "UPDATE claims SET name = ?, phone = ?, note = ? WHERE id = ?",
        name,
        phone,
        note,
        seatId
      );
    } else {
      this.#rows(
        "INSERT INTO claims (id, section, number, name, phone, receipt, note, claimed_at) " +
          "VALUES (?, ?, ?, ?, ?, '', ?, datetime('now'))",
        seatId,
        section,
        number,
        name,
        phone,
        note
      );
    }
    return { ok: true };
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);

    try {
      // One chart, so one object. Everything is serialised through it.
      const room = env.SEATING.get(env.SEATING.idFromName("main"));
      return await route(request, env, url, room);
    } catch {
      return json({ error: "Server error. Try again in a moment." }, 500);
    }
  },
};

const reply = (result) =>
  result.error ? json({ error: result.error }, result.status ?? 400) : json(result);

async function route(request, env, url, room) {
  const path = url.pathname;
  const body =
    request.method === "POST" ? await request.json().catch(() => ({})) : {};

  /* ---- public ---- */
  if (path === "/api/seats" && request.method === "GET") {
    return json(await room.list());
  }

  if (path === "/api/claim" && request.method === "POST") {
    const seatId = clean(body.seatId, 8);
    const seat = SEATS.get(seatId);
    const receipt = clean(body.receipt, 40).toUpperCase();
    const name = clean(body.name, 40);
    const phone = clean(body.phone, 24);

    if (!seat) return json({ error: "That seat doesn't exist." }, 400);
    if (receipt.length < 4)
      return json({ error: "Enter the confirmation number from your receipt." }, 400);
    if (name.length < 2) return json({ error: "Enter your name." }, 400);
    if (phone.length < 7) return json({ error: "Enter a phone number." }, 400);

    return reply(
      await room.claim({
        seatId,
        receipt,
        name,
        phone,
        wanted: body.seats === 2 ? 2 : 1,
        section: seat.section,
        number: seat.number,
      })
    );
  }

  /* ---- gabbai ---- */
  if (path === "/api/admin/status" && request.method === "GET") {
    return json(await room.needsSetup());
  }

  if (path === "/api/admin/setup" && request.method === "POST") {
    return reply(await room.setPassword(clean(body.password, 80)));
  }

  if (path.startsWith("/api/admin/")) {
    const password = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
    if (!(await room.checkPassword(password))) return json({ error: "Wrong password." }, 401);

    if (path === "/api/admin/ping") return json({ ok: true });
    if (path === "/api/admin/export") return json(await room.exportRows());

    if (path === "/api/admin/seat" && request.method === "POST") {
      const seatId = clean(body.seatId, 8);
      const seat = SEATS.get(seatId);
      if (!seat) return json({ error: "That seat doesn't exist." }, 400);

      const name = clean(body.name, 40);
      if (!body.clear && name.length < 2) return json({ error: "Enter a name." }, 400);

      return reply(
        await room.adminSeat({
          seatId,
          section: seat.section,
          number: seat.number,
          name,
          phone: clean(body.phone, 24),
          note: clean(body.note, 80),
          clear: Boolean(body.clear),
        })
      );
    }
  }

  return json({ error: "Not found." }, 404);
}
