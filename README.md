# yisraelfrenkel.com

A single-page Astro site: bio, the course (5-step syllabus), testimonials,
a sign-up link, and a WhatsApp join button.

## 1. Edit your content

Everything you'd want to change — headline, bio text, syllabus steps,
testimonials, sign-up link, WhatsApp link — lives in one file:

```
src/data/content.js
```

Open it and replace every `[Replace — ...]` placeholder. You don't need to
touch anything in `src/components/` or `src/pages/`.

The two links that matter most, near the top of the file:

```js
signupUrl: "https://tally.so/r/REPLACE_WITH_YOUR_FORM_ID",
whatsappUrl: "https://chat.whatsapp.com/REPLACE_WITH_YOUR_INVITE_CODE",
```

## 2. Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL it prints (usually http://localhost:4321) to preview.

## 3. Deploy to Cloudflare Pages

**Option A — connect a GitHub repo (recommended, auto-deploys on every push):**

1. Push this folder to a GitHub repository.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages →
   Connect to Git → select the repo.
3. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Then in the Pages project → Custom domains, add
   `yisraelfrenkel.com` and follow the DNS instructions (Cloudflare will
   walk you through it if the domain is already on your Cloudflare
   account).

**Option B — deploy from your machine with Wrangler:**

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=yisraelfrenkel-site
```

Then add the custom domain the same way as in Option A, step 4.

## Structure

```
src/
  data/content.js       ← all editable text + links
  layouts/Layout.astro  ← page shell, fonts, scroll-reveal script
  components/           ← Nav, Hero, Bio, Course, Testimonials,
                           SignupSection, WhatsAppFloat, Footer
  pages/index.astro     ← composes the page
```
