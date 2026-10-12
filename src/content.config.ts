import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// El esquema es lo que hace escalable al blog: si cada nota respeta estos
// campos, puedes cambiar de generador, hosting o diseño sin tocar el contenido.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    platform: z.enum(['bandit', 'tryhackme', 'portswigger', 'htb', 'project', 'note']),
    tags: z.array(z.string()).default([]),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    // 'draft' por defecto: nada se publica por accidente.
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { blog };
