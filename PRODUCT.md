# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Several equal audiences arrive at yisraelfrenkel.com, each through its own door (confirmed by Yisrael, 2026-10-24):

- **Religious men struggling with desire and shame.** They have been falling for years, believe something is wrong with them, and want a Torah path that does not ask them to hate their own longing. They meet the site through the free class *The Beauty of Human Desire* and may join an Or HaBris Chaburah (five weekly 90-minute Zoom sessions, small groups).
- **Young women before and during shidduchim.** They come for *The Love You're Meant to Build* (Or HaBat, אור הבת): six classes, first class free, in person in Nachlaot, Yerushalayim, then on Zoom for chutz la'aretz with circles led by women in Lakewood and Long Island.
- **Married and engaged couples** seeking couples coaching, the chatan-kallah course (Or HaBris, אור הברית) or the intimacy workshop. The workshop and the dating course do not have pages yet.
- **Individuals seeking private guidance** for marriage and intimacy, sexuality and desire, addiction, sexual, war, emotional and religious trauma, anxiety, depression and spiritual disconnection.

Visitors are English-speaking Orthodox Jews in Israel and abroad. Most arrive from WhatsApp groups, YouTube class recordings or a personal referral, on a phone.

## Product Purpose

The site is a beis medrash: an introduction to Yisrael's teaching and the ways to learn with him. Each page lets a visitor meet the ideas first, then offers the matching next step.

**Success is a booked personal session** (confirmed as the action that matters most). Course and Chaburah registrations and the free class are paths that lead there; they are not the end goal.

## Positioning

In Yisrael's own words from the About page, which is the authoritative statement of what makes the work different:

- Torah and psychology are not two disciplines to be combined but **two windows looking at the same human reality**.
- He looks for the **klalim**, the deep principles that give meaning to countless pratim, in Torah and in the human being alike. Marriage, addiction, trauma, sexuality, anxiety and faith are not isolated problems but expressions of deeper structures; when those become clear, healing reaches places symptom-work cannot.
- **Desire is not removed, only what stands in its way.** The story of Tikkun HaBris: Avraham was never asked to remove his desire, only the barrier, and what had been hidden there was revealed as the sign of covenant. The deepest desire is a compass toward the life a person truly longs to live.
- Credibility rests on both sides at once: a Rav and Rosh Yeshiva (Mir, Bat Ayin, his own yeshiva; Beis Din for hilchos ribis; sections of Oz VeHadar Shulchan Aruch HaMevoar; Rabbi of Kehilat Chaverim, Jerusalem) who has also spent more than twenty years with people's secrets, studied IFS, coaching and other therapeutic models, and led an Orthodox adaptation of the Call of the Shofar workshops.
- Stated aim: *to help people understand themselves through the eyes of the Torah, so they can build a deeper relationship with themselves, with those they love, and ultimately with Hashem.*

## Operating Context

- **Entry points:** WhatsApp broadcast groups, YouTube (class recordings, the Derech Hashem series), personal referrals. Phone-first traffic.
- **Funnels:** Tally forms for the free-class gate, Chaburah sign-up, personal-session booking and Or HaBat seat reservation. Tally's post-submit redirect sends free-class viewers to `/watch`, which plays the class and returns them to the page.
- **Payment:** CardCom (Kehilat Chaverim) for Or HaBat in shekels; the Or HaBris Chaburah is priced in dollars ($399).
- **Contact:** WhatsApp is the primary channel. The only phone number ever published is +972-58-761-3153. Email: Yisrael@YisraelFrenkel.com.
- **Delivery:** Zoom for Chaburot and chutz la'aretz courses; in person in Nachlaot for Or HaBat; private sessions in person and online.
- **Downloads offered:** the written version of the free class (PDF) and the Five Steps keepsake image.

## Capabilities and Constraints

- Astro 4 static site, deployed to Cloudflare Pages (Wrangler, `dist/`). Pages: `/` (placeholder), `/beauty-of-human-desire`, `/about`, `/or-habat`, `/watch`. A Derech Hashem section exists on an unmerged branch (`derech-hashem`).
- **All copy lives in `src/data/content.js` and `src/data/or-habat.js`.** The copy there is authored, reviewed and final; section order and line breaks are deliberate. Change wording in the data files, never in `.astro` files, and ask before altering factual copy.
- Language: English with Hebrew terms transliterated (Chaburah, Chavrusa, chutz la'aretz, shidduchim, ketubah, Tikkun HaBris, pnimiyus, klalim, pratim) and some words set in Hebrew script inline (ערלה, יחוד, אור הבת). Hebrew spans need correct text direction.
- Terminology: "Rav Yisrael Frenkel" or "Yisrael"; "Chaburah" (not "course") for Or HaBris; "young women" (never "girls") for Or HaBat; "personal session" for private work.
- Scroll-reveal animation is the one site-wide behaviour; `/watch` uses localStorage to remember a download choice.
- **Undecided:** what the homepage becomes (today a placeholder pointing to the free class); pages for the intimacy workshop (working name Or HaChibah: Closer) and the dating course; whether the Derech Hashem branch is published.

## Brand Commitments

- Name and assets: "Yisrael Frenkel" wordmark (`/images/yisrael-frenkel-wordmark.png`), logo (`/images/logo.png`), Or HaBris logo (`/images/or-habris-logo.jpeg`).
- Voice: first person, the teaching voice of a Rav speaking to one person. Unhurried, warm, exact. No hype, no urgency tricks, no shame. The price appears only after the reader has answered "is this for me?".
- **Photography rule (binding, confirmed by Yisrael):** only Yisrael and his students or clients appear on the site. No spouse, no children, no family. Edits to photos are invisible (wardrobe, kippah) and never change a face, expression or the truth of the moment. The curated selection and reasoning are in `docs/photography-bible.md`.
- Five commissioned paintings illustrate the five steps (Listen, Discern, Fulfill, Heal, Build) plus a Tikkun HaBris painting; these are part of the identity of the free-class page.

## Evidence on Hand

- Free class video (YouTube `jqa55Zmn-yY`) and its written version (`public/the-beauty-of-human-desire.pdf`).
- Four written testimonials signed with initials (D.C., Y.S., Y.J., Ben S.) and two video testimonials (YouTube `rXMn7cNHCHQ`, `dXONCJtdxCc`), all in `content.js`.
- Photographs in `public/images/` (study desk, vineyard portrait, teaching at whiteboard, teaching conversation, in-person Chaburah, Aron Kodesh portrait) chosen per `docs/photography-bible.md`.
- Credentials and teachers as listed on `/about`.
- Time claims that exist: "more than twenty years" of people confiding in him; "nearly a decade" leading Chaburot.
- **Not on hand, do not invent:** student counts, outcome statistics, press, named endorsements, case studies, prices for the intimacy workshop or dating course.

## Product Principles

1. **Meet the person without shame.** Every page reads as a conversation with Yisrael, not a funnel. Nobody is pushed; "no one is turned away" is policy, not copy.
2. **Ideas first, invitation second.** The reader meets the teaching, then the offer, then the price. Never reverse that order.
3. **Several doors, one beis medrash.** Each audience gets its own entrance and its own tone, and every door leads toward a personal conversation with him.
4. **The text is the product.** Copy is authored and final; design serves it, protects its pacing, and never rewrites it.
5. **Built for the phone in the WhatsApp group.** Fast, legible, one-thumb, works on older devices.

## Accessibility & Inclusion

Mixed English and Hebrew script on every page; many visitors on older phones over mobile data; some visitors arrive in distress and should never be rushed by motion or countdowns. Reduced-motion preferences must be honoured for the scroll reveals.
