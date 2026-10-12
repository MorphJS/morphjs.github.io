import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Si algún día usas dominio propio, cambia solo esta línea
// (y agrega un archivo public/CNAME con el dominio).
export default defineConfig({
  site: 'https://morphjs.github.io',
  integrations: [mdx(), sitemap()],
});
