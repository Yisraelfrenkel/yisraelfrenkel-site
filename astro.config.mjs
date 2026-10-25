import { defineConfig } from 'astro/config';

// Static output — deployed via Wrangler to Cloudflare Workers (static assets), no adapter needed.
export default defineConfig({
  site: 'https://yisraelfrenkel.com',
  output: 'static',
  // The young women's course page was first built at /or-habat; the public
  // address is /orhaisha. Keep the old link working.
  redirects: { '/or-habat': '/orhaisha' },
  // Respects an externally-assigned dev port (e.g. when another local
  // session already holds the default), falling back to 4321.
  server: { port: process.env.PORT ? Number(process.env.PORT) : 4321 },
});
