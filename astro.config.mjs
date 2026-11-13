// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://unity-developer-portfolio-58d.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
