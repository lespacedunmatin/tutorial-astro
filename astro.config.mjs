// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://lighthearted-crumble-1fbbf2.netlify.app/",
  integrations: [preact()]
});