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
of it, women to the right. Each table, bench or single chair is one line:

```js
{ id: "m-t1", section: "men", label: "Table 1 (5′)", col: 7, row: 15, cols: 4, rows: 2, seats: 4 },
```

- `section` — `"men"` or `"women"`; decides the colour and which numbering run
  the block joins
- `col` / `row` — where the top-left corner sits on the grid (1 = far left / top)
- `cols` / `rows` — how wide and tall the block is
- `seats` — how many seats in it, filling left→right then top→bottom

Seats are numbered in the order the blocks appear in the array — currently men
1–27, women 1–18, running top-to-bottom and left-to-right so a number is easy
to find while standing in the room. **Once you've sent the link out, don't
reorder or resize blocks** — the numbers would shift under people who've
already signed up.

The `fixtures` list above the blocks holds the bima, chamber, wall and siddurim
shelves, doors, bathroom, seforim and the mechitza itself. Those carry no
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
  the button is pressed, not before. At 45 seats that is the right trade.
- **It doesn't take payment itself.** Cardcom does. No card details ever touch
  this site.

---

## Things I read off your sketch that you should check

The chart mirrors your second sketch. A few cells I couldn't read with
certainty — check these against the room and correct them in
`src/data/seating.js`:

| In the sketch | What I built | Check |
| --- | --- | --- |
| Top row `1 · 2 · 4 · Shtigh ½` | 4 seats ("Top wall row") | Is the last one a real seat or a shtender? Is `4` meant to be `3`? |
| `Fiddle Rev` | "Middle row", 2 seats | I read this as *Middle Row*. Rename it if it's something else. |
| The `½ / ½` column | "Shtenders", 2 seats | Two half-places, or one seat? |
| `5½ · 2 / 3 · 5` (women, far right) | Table 4, 4 seats | The numbers didn't run 1–4 — how many seats is it really? |
| `Chamber` | A fixture, no seats | Correct? |
| `S` and `5'` marks | Ignored | I took these as table lengths in feet, not seat counts. |

Totals as built: **men 27, women 18**. Your first sketch said 33 and 22, so
either the plan changed or something above is under-counted — worth a look
before you publish.
