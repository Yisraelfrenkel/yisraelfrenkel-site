/* ---------------------------------------------------------------------------
   Seating API. Runs in front of the static site; every path that isn't
   /api/* falls through to the built Astro pages untouched.

   Bindings (wrangler.toml + `wrangler secret put`):
     DB           D1 database
     ASSETS       the built site in ./dist
     ADMIN_TOKEN  secret — the gabbai password
--------------------------------------------------------------------------- */

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

function isAdmin(request, env) {
  const header = request.headers.get("authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "");
  const expected = env.ADMIN_TOKEN || "";
  if (!expected || token.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= token.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

async function listSeats(env) {
  const { results } = await env.DB.prepare("SELECT id, name, note FROM claims").all();
  const seats = {};
  for (const row of results) {
    seats[row.id] = { status: "taken", name: row.name, note: row.note };
  }
  return seats;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);

    try {
      return await route(request, env, url);
    } catch {
      return json({ error: "Server error. Try again in a moment." }, 500);
    }
  },
};

async function route(request, env, url) {
  const path = url.pathname;

  /* ---- public ---- */
  if (path === "/api/seats" && request.method === "GET") {
    return json({ seats: await listSeats(env) });
  }

  if (path === "/api/claim" && request.method === "POST") {
    const body = await request.json().catch(() => ({}));
    const seatId = clean(body.seatId, 8);
    const receipt = clean(body.receipt, 40).toUpperCase();
    const name = clean(body.name, 40);
    const phone = clean(body.phone, 24);

    const seat = SEATS.get(seatId);
    if (!seat) return json({ error: "That seat doesn't exist." }, 400);
    if (receipt.length < 4)
      return json({ error: "Enter the confirmation number from your receipt." }, 400);
    if (name.length < 2) return json({ error: "Enter your name." }, 400);
    if (phone.length < 7) return json({ error: "Enter a phone number." }, 400);

    // A pair payment covers two seats, so a confirmation number carries an
    // allowance rather than being spent outright. Someone who bought the pair
    // and only said "one seat" the first time can come back for the second, so
    // the allowance is raised, never lowered.
    const wanted = body.seats === 2 ? 2 : 1;
    await env.DB.prepare(
      "INSERT INTO receipts (receipt, seats_allowed, seats_used, created_at) " +
        "VALUES (?, ?, 0, datetime('now')) " +
        "ON CONFLICT(receipt) DO UPDATE SET seats_allowed = MAX(seats_allowed, excluded.seats_allowed)"
    )
      .bind(receipt, wanted)
      .run();

    // Spending the allowance before touching the seat means two people racing
    // with the same number can't both get in, however fast they tap.
    const ticket = await env.DB.prepare(
      "UPDATE receipts SET seats_used = seats_used + 1 WHERE receipt = ? AND seats_used < seats_allowed"
    )
      .bind(receipt)
      .run();

    if (ticket.meta.changes === 0) {
      return json(
        {
          error:
            "That confirmation number has already been used for every seat it covers. " +
            "If this is a mistake, message the gabbai.",
        },
        409
      );
    }

    const taken = await env.DB.prepare(
      "INSERT INTO claims (id, section, number, name, phone, receipt, note, claimed_at) " +
        "VALUES (?, ?, ?, ?, ?, ?, '', datetime('now')) ON CONFLICT(id) DO NOTHING"
    )
      .bind(seatId, seat.section, seat.number, name, phone, receipt)
      .run();

    if (taken.meta.changes === 0) {
      // Somebody beat them to it by a hair — give the allowance back so they
      // can try again on another seat.
      await env.DB.prepare(
        "UPDATE receipts SET seats_used = seats_used - 1 WHERE receipt = ?"
      )
        .bind(receipt)
        .run();
      return json({ error: "Someone just took that seat. Please pick another." }, 409);
    }

    const left = await env.DB.prepare(
      "SELECT seats_allowed - seats_used AS remaining FROM receipts WHERE receipt = ?"
    )
      .bind(receipt)
      .first();

    return json({
      seat: { id: seatId, section: seat.section, number: seat.number, name },
      remaining: left?.remaining ?? 0,
    });
  }

  /* ---- gabbai ---- */
  if (path.startsWith("/api/admin/")) {
    if (!isAdmin(request, env)) return json({ error: "Wrong password." }, 401);

    if (path === "/api/admin/ping") return json({ ok: true });

    if (path === "/api/admin/export") {
      const { results } = await env.DB.prepare(
        "SELECT c.section, c.number, c.name, c.phone, c.receipt, " +
          "COALESCE(r.seats_allowed, 0) AS paid_for, c.note, c.claimed_at " +
          "FROM claims c LEFT JOIN receipts r ON r.receipt = c.receipt " +
          "ORDER BY c.section DESC, c.number ASC"
      ).all();
      return json({ rows: results });
    }

    if (path === "/api/admin/seat" && request.method === "POST") {
      const body = await request.json().catch(() => ({}));
      const seatId = clean(body.seatId, 8);
      const seat = SEATS.get(seatId);
      if (!seat) return json({ error: "That seat doesn't exist." }, 400);

      if (body.clear) {
        const row = await env.DB.prepare("SELECT receipt FROM claims WHERE id = ?")
          .bind(seatId)
          .first();
        const statements = [env.DB.prepare("DELETE FROM claims WHERE id = ?").bind(seatId)];
        // Freeing a seat hands one seat of the allowance back, so the gabbai can
        // move somebody without burning their payment — and on a pair payment it
        // returns only the seat freed, not both.
        if (row && row.receipt) {
          statements.push(
            env.DB.prepare(
              "UPDATE receipts SET seats_used = MAX(seats_used - 1, 0) WHERE receipt = ?"
            ).bind(row.receipt),
            env.DB.prepare("DELETE FROM receipts WHERE receipt = ? AND seats_used = 0").bind(
              row.receipt
            )
          );
        }
        await env.DB.batch(statements);
        return json({ ok: true });
      }

      const name = clean(body.name, 40);
      if (name.length < 2) return json({ error: "Enter a name." }, 400);

      await env.DB.prepare(
        "INSERT INTO claims (id, section, number, name, phone, receipt, note, claimed_at) " +
          "VALUES (?, ?, ?, ?, ?, '', ?, datetime('now')) " +
          "ON CONFLICT(id) DO UPDATE SET name = excluded.name, phone = excluded.phone, note = excluded.note"
      )
        .bind(seatId, seat.section, seat.number, name, clean(body.phone, 24), clean(body.note, 80))
        .run();

      return json({ ok: true });
    }
  }

  return json({ error: "Not found." }, 404);
}
