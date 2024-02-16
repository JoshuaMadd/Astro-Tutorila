import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://joshuamadd.github.io',
  base: '/Astro-Tutorila',
  integrations: [preact()]
});