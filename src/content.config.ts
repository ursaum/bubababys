import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'enxoval',
      'passeio',
      'alimentacao',
      'quarto-do-bebe',
      'brinquedos',
      'guias-de-compra',
    ]),
    emoji: z.string().default('👶'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Produtos recomendados no artigo. O campo `link` deve receber o link de
    // afiliado do Mercado Livre (formato mercadolivre.com/sec/...). Enquanto o
    // link de afiliado não existe, usamos o link comum de busca/produto e
    // marcamos `afiliado: false` para facilitar a auditoria.
    produtos: z
      .array(
        z.object({
          nome: z.string(),
          descricao: z.string(),
          link: z.string().url(),
          afiliado: z.boolean().default(false),
          badge: z.string().optional(),
        })
      )
      .default([]),
  }),
});

export const collections = { artigos };
