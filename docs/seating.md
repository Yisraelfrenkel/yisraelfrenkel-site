# Shul seating — how it works and how to run it

Three pages, one database, no spreadsheets and no chasing people in WhatsApp.

| Page | Who sees it | What it does |
| --- | --- | --- |
| `/seats/` | **The WhatsApp group.** This is the link you send. | The chart, live. Green = open, grey = taken, with names. One button: pay. |
| `/seats/claim-5787-kesser/` | Only people who have paid. | Same chart, but seats are tappable. Enter your Cardcom confirmation number + name, tap a seat, done. |
| `/seats/admin/` | Only you. | Place the names you've already promised, edit or free any seat, download the list as CSV. |

None of these are linked from the rest of the site, none appear in the nav or
footer, all three are `noindex`, and `robots.txt` blocks the whole `/seats/`
folder. Nobody browsing yisraelfrenkel.com will stumble into them.

---

## The flow

1. You post the `/seats/` link to the WhatsApp group.
2. Someone taps **Pay & reserve a seat** → Cardcom.
3. Cardcom's thank-you page (and receipt email) gives them the sign-up link.
4. They open it, type the confirmation number off their receipt, pick a seat,
   and their name lands on the chart for the whole group to see.
5. Nobody can take a seat that's grey. Nobody can sign up without a
   confirmation number. One confirmation number seats one person.

That last point is what makes this work without you approving anything: the
sign-up link *will* get forwarded around the group, and it doesn't matter,
because the confirmation number is the actual ticket.

---

## Setting it up (once, about 20 minutes)

### 1. Fill in your details

Open `src/data/seating.js` and replace everything marked `REPLACE`:

```js
shulName, season          // the heading
paymentUrl                // your Cardcom link
priceLabel                // e.g. "₪180 per seat"
claimPath                 // the secret sign-up path — change it to something
                          // only you know before you go live
contactName, contactWhatsapp
sectionNotes              // a message shown above the chart for the men's or
                          // women's section — set one to "" to drop it
```

### 2. Create the database

```bash
npx wrangler d1 create shul-seating
```

Paste the `database_id` it prints into `wrangler.toml`, then create the tables:

```bash
npx wrangler d1 execute shul-seating --remote --file=./schema.sql
```

### 3. Set your admin password

```bash
npx wrangler secret put ADMIN_TOKEN
```

Type a password when it asks. That's what unlocks `/seats/admin/`.

### 4. Deploy

```bash
npm run build && npx wrangler deploy
```

### 5. Point Cardcom at the sign-up link

In your Cardcom payment page settings, set the **success / thank-you page** to
your sign-up URL:

```
https://yisraelfrenkel.com/seats/claim-5787-kesser/
```

Also paste that URL into the receipt email text, so people who close the tab
can still get in. This is the whole integration — no API keys, no webhook.

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
- **Someone paid twice / needs moving** — `/seats/admin/`, free the old seat
  (their confirmation number goes back into play automatically), then either
  place them yourself or let them re-pick.
- **Print the list for the gabbai** — `/seats/admin/` → **Download list (CSV)**,
  opens in Excel.
- **Kill the sign-up link** — change `claimPath` in `seating.js` and redeploy.
  The old link 404s instantly.

---

## What this deliberately does not do

- **It doesn't verify with Cardcom.** It trusts that a confirmation number
  someone types is real, and only enforces that each one is used once. If you
  ever want real verification, Cardcom's API can confirm a transaction —
  that's a change to `/api/claim` in `worker/index.js` and nothing else.
- **It doesn't hold seats while someone thinks.** A seat is taken the instant
  the button is pressed, not before. At 55 seats that is the right trade.
- **It doesn't take payment itself.** Cardcom does. No card details ever touch
  this site.
