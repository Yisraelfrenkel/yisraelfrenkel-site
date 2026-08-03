import { defineConfig } from 'astro/config';

// Static output — deployed via Wrangler to Cloudflare Workers (static assets), no adapter needed.
export default defineConfig({
  site: 'https://yisraelfrenkel.com',
  output: 'static',
});
