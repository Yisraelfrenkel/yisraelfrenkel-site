import { defineConfig } from 'astro/config';

// Static output — deploys directly to Cloudflare Pages, no adapter needed.
export default defineConfig({
  site: 'https://yisraelfrenkel.com',
  output: 'static',
});
