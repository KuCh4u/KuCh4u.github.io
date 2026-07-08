import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Colección de blog. Se excluyen automáticamente los archivos/carpetas
// que empiezan con "_" (ver src/content/blog/_drafts/), por convención
// de Astro Content Collections: nunca generan rutas ni entradas.
const blog = defineCollection({
  // El patrón excluye explícitamente `_drafts/` (plantillas privadas, ver
  // src/content/blog/_drafts/) para que nunca se generen rutas desde ahí.
  loader: glob({ pattern: ['**/*.md', '!_drafts/**'], base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      // Idioma del post. Cada post vive en un solo idioma; se empareja con
      // su traducción (si existe) a través de `translationKey`.
      lang: z.enum(['es', 'en']),
      // Identificador compartido entre la versión ES y EN del mismo post,
      // usado para enlazar el selector de idioma dentro de un post.
      translationKey: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
    }),
});

export const collections = { blog };
