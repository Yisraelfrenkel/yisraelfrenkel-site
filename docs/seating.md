# Shul seating — how it works and how to run it

Three pages, one database, no spreadsheets and no chasing people in WhatsApp.

| Page | Who sees it | What it does |
| --- | --- | --- |
| `/seats/` | **The WhatsApp group.** This is the link you send. | The chart, live. Green = open, grey = taken, with names. Two steps: pay, then choose a seat. |
| `/seats/claim-5787-kesser/` | Only people who have paid. | Same chart, but seats are tappable. Enter your Cardcom confirmation number + name, tap a seat, done. Paid ₪300? It walks you through both seats. |
| `/seats/admin/` | Only you. | Place the names you've already promised, edit or free any seat, download the list as CSV. |

None of these are linked from the rest of the site, none appear in the nav or
footer, all three are `noindex`, and `robots.txt` blocks the whole `/seats/`
folder. Nobody browsing yisraelfrenkel.com will stumble into them.

---

## The flow

1. You post the `/seats/` link to the WhatsApp group.
2. Someone taps **Pay & reserve a seat** → Cardcom.
3. They come back to the chart and tap **Choose your seat** (or, if you set up
   the Cardcom redirect, they land on it automatically).
4. They type the confirmation number off their receipt, say whether
   they paid ₪200 or ₪300, pick a seat, and their name lands on the chart for
   the whole group to see.
5. On ₪300 they're taken straight back to pick the second seat, with the
   confirmation number already filled in.
6. Nobody can take a seat that's grey. Nobody can sign up without a
   confirmation number, and a number only covers the seats it paid for.

That last point is what makes this work without you approving anything: the
sign-up link *will* get forwarded around the group, and it doesn't matter,
because the confirmation number is the actual ticket.

---

## Setting it up

Run this from the project folder:

```bash
bash scripts/setup-seating.sh
```

It logs you into Cloudflare, creates the database, writes its id into
`wrangler.toml`, creates the tables, asks for an admin password and deploys.
Safe to re-run — it skips whatever is already done. Two prompts: a browser
window for the Cloudflare login, and the admin password (what unlocks
`/seats/admin/`).

<details>
<summary>The same thing by hand, if the script fails</summary>

```bash
npx wrangler login
npx wrangler d1 create shul-seating      # paste the id into wrangler.toml
npx wrangler d1 execute shul-seating --remote --file=./schema.sql
npx wrangler secret put ADMIN_TOKEN      # type a password
npm run build && npx wrangler deploy
```
</details>

### Then, in this order

1. **Place the seats you've promised** — `/seats/admin/`, tap a seat, type the
   name, save.
2. **Pay ₪200 yourself** and go through the whole flow. This is the step worth
   not skipping: it's the only way to see what Cardcom's confirmation number
   actually looks like on a real receipt. If it isn't obvious to a payer, fix
   the wording on the form before fifty people find out for you.
3. **Free your test seat** in `/seats/admin/`.
4. **Post the link.** Something like:

   > 🕍 *Kehilat Chaverim — seats for the Yamim Noraim*
   >
   > Seats are now open, first come first served:
   > https://yisraelfrenkel.com/seats/
   >
   > ₪200 a seat, ₪300 for two. Pay on the page, then come back and tap the
   > seat you want — your name goes straight onto the chart so everyone can
   > see what's left.
   >
   > Any problem, message Daniel Avrek.

## How people reach the sign-up page

Two ways. **The site is set up for the first one and needs nothing from
Cardcom** — the second is a tightening you can do later.

### A — the sign-up step is on the public page (how it's set now)

`claimLinkPublic: true` in `seating.js`. The chart link you post to WhatsApp
shows two numbered steps: **Pay on Cardcom**, then **Choose your seat**.

Anyone with the chart link can open the sign-up form — but they still have to
type a confirmation number, and each number only covers the seats it paid for.
So the honest gate is the number, not the secrecy of the link. Nothing to
configure, nothing to go wrong on the night.

### B — Cardcom hands out the link after payment

Tighter: the sign-up page is reachable only by its own address, and only
people who actually finished a payment ever see it.

1. In Cardcom, open your payment landing page (דף נחיתה לתשלום) → its general
   settings.
2. Find **כתובת להפניה בהצלחה** — "success redirect URL". This is the page the
   payer lands on after a successful charge. Set it to:

   ```
   https://yisraelfrenkel.com/seats/claim-5787-kesser/
   ```

   Cardcom also has a per-item version, **הפניה ייחודית בהצלחה** ("unique
   success redirect"), if you'd rather set it on each amount separately. Either
   works — the same address for both amounts is fine.
3. Set `claimLinkPublic: false` in `seating.js`, then rebuild and deploy. Step 2
   on the public page changes to "the link for this arrives with your receipt".

Worth knowing before you switch: if the redirect isn't set correctly, a payer
lands on Cardcom's own default thank-you page and has **no way to reach the
sign-up form** — they'll message you instead. So test one real payment
end-to-end before flipping `claimLinkPublic` to `false`, and paste the sign-up
address into your Cardcom receipt email text as well, for anyone who closes the
tab before the redirect.

Cardcom's own guides:
[payment landing page settings](https://support.cardcom.solutions/hc/he/articles/360002662654),
[unique success redirect](https://support.cardcom.solutions/hc/he/articles/360008721294).

---

## Before you publish: place the seats you've already promised

Go to `/seats/admin/`, enter your password, tap a seat, type the name, save.
Do this for every seat you've committed to someone. Those seats turn grey
immediately and nobody can take them.

Use the **note** field for your own record — "paid cash", "Rav's family",
whatever. Notes never appear on the public chart.

---

## Fixing the chart to match the room

The picture is generated entirely from `src/data/seating.js`. The room is one
grid, laid out like your sketch: the mechitza runs vertically, men to the left
of it, women to the right. Every table, bench and single chair is one line, and
it carries its own seat numbers exactly as you wrote them:

```js
{ id: "m-16-19", section: "men", label: "Table", col: 19, row: 9,
  numbers: [[16, 17], [18, 19]] },
```

- `numbers` — the seats, drawn row by row, left to right. It's a little picture
  of the table. `null` leaves a gap where a chair was pulled out.
- `section` — `"men"` or `"women"`; sets the colour and which numbering run it
  joins
- `col` / `row` — where the block's top-left corner sits (1 = far left / top)
- `w` — how many grid columns wide each seat is (default 2). Purely how wide
  the chair looks on the plan.

To move a table, change `col`/`row`. To renumber a seat, change the number —
it renames it everywhere at once: the picture, the sign-up list and the
database key.

**The build refuses to ship a broken chart.** If you duplicate a seat number or
leave a gap in a run, `npm run build` stops and names the offending number
rather than letting two people book the same chair.

Currently **men 1–34, women 1–21** — 55 seats, straight off your sketch.
**Once you've sent the link out, don't renumber anything** — people's seats
would move under them.

The `fixtures` list above the blocks holds the bima, chazan, wall and siddurim
shelves, seforim, doors, bathrooms and the mechitza itself. Those carry no
numbers — move them freely.

After any change: `npm run build && npx wrangler deploy`.

---

## Running it during the season

- **Watch it fill up** — `/seats/` shows the tally live.
- **Someone paid twice / needs moving** — `/seats/admin/`, free the old seat.
  That hands exactly one seat back to their confirmation number, so a ₪300
  payer who moves one of their two keeps the other. Then place them yourself
  or let them re-pick.
- **Print the list for the gabbai** — `/seats/admin/` → **Download list (CSV)**,
  opens in Excel.
- **Kill the sign-up link** — change `claimPath` in `seating.js` and redeploy.
  The old link 404s instantly.

---

## What this deliberately does not do

- **It doesn't verify with Cardcom.** It trusts that a confirmation number
  someone types is real, and enforces only that each one is used no more times
  than it paid for. Which price a person picks on the form is on their word
  too — the CSV export has a `seats_on_receipt` column so you can eyeball the
  pair claims against the ₪300 payments in Cardcom. If you ever want real
  verification, Cardcom's API can confirm a transaction and its amount — that's
  a change to `/api/claim` in `worker/index.js` and nothing else.
- **It doesn't hold seats while someone thinks.** A seat is taken the instant
  the button is pressed, not before. At 55 seats that is the right trade.
- **It doesn't take payment itself.** Cardcom does. No card details ever touch
  this site.
