# Rosh Hashanah seudah sign-up

One page, one link, 50 places that cannot be overbooked.

**https://yisraelfrenkel.com/seudah/** — this is the link you send to WhatsApp.

---

## What it does

- The event as it appears on the flyer: date, time, address, sponsor, no cost.
- A live count — **"X of 50 places reserved"** and **"Y places left"** — with a
  meter that fills as people sign up.
- A form: name, how many people, and a phone or email that is **optional and
  never shown publicly**.
- The public guest list: every name and how many places they took. It updates
  the instant someone signs up, for them and for everyone else within 20
  seconds.
- Nobody can book past 50. Ask for more places than remain and it says exactly
  how many are left instead of silently trimming or overbooking.
- At 50 the form disappears on its own and is replaced by "the seudah is full",
  pointing people at the gabbai in case of a drop-out.

## Where it lives

Alongside the seating chart, on the same site and the same Cloudflare Worker.
There is nothing separate to host, pay for, or sign into. Pushing to GitHub
publishes it, the same as every other page.

Like the seating pages it is `noindex` and blocked in `robots.txt`, so it won't
turn up in searches for the practice site. It is reachable by anyone with the
link, which is the point — WhatsApp is the whole distribution.

## Changing the event details

Everything is in `src/data/seudah.js` — wording, address, times, sponsor, and:

```js
capacity: 50,      // the cap. Change it and the meter, the "places left" line
                   // and the point at which sign-ups close all follow.
maxPerSignup: 10,  // most one person can book in a single go
```

## Running it

The guest list and a **Remove** button for each entry are on `/seats/admin/`,
under the seating chart, behind the same password. Removing someone puts their
places straight back into the pot — and if the seudah had closed, it reopens.

Phone numbers and emails appear there and nowhere else. That is the reason the
page has a password.

**Download list (CSV)** gives you name, places, contact and time signed up, for
the kitchen and the table plan.

## This is not the davening seating

Different thing entirely. The seats sold at `/seats/` are places for davening;
the room is rearranged for the meal, so the seudah page is only a head count —
no seat numbers, no map. The page says so near the top, in `notSeatingLine`.

The seudah list appears on `/seats/admin/` purely so one password covers both.

## Worth knowing

- **Anyone can sign up under any name.** There is no login and no payment, so
  the guest list is as honest as the people on it. For a shul seudah that is
  the right trade; the list being public is itself the check, since a made-up
  name is visible to everybody.
- **Someone can sign up twice** — by accident, usually. You'll see it in the
  admin list; remove the duplicate and the places come back.
- **People cancel themselves.** On signing up they get a six-character code,
  shown on screen and remembered by their phone. "Cancel my reservation" frees
  their places at once, and the code works from any phone if they've switched
  devices. You don't get called about it.
- **The code is what makes that safe.** Without it, one tap from a stranger
  could take somebody off the list. A wrong code cancels nothing.
- **When it's full, nobody is told to phone anyone.** The page says places open
  up when people cancel and it's worth checking back — which is now true,
  because cancelling is self-service.

## The WhatsApp message

> 🍯 *Kehilat Chaverim — Rosh Hashanah Seudah, first night*
>
> Friday night, September 11 · 8:00 PM
> 14 Eliyahu Salman St, Nachlaot
>
> A community seudah, no cost — sponsored by Natan Shlomo in memory of his
> grandfather, David Goldstein.
>
> **Only 50 places, and sign-up is required.** Add your name here:
> https://yisraelfrenkel.com/seudah/
>
> The page shows how many places are left and who's already coming. If you
> sign up and then can't make it, you can cancel yourself on the same page —
> it frees your place for someone else straight away.
>
> (This is for the meal only — nothing to do with seats for davening.)
> Men and women welcome.
