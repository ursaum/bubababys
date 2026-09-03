import rss from '@astrojs/rss';
import { SITE } from '../data/site';
import { getArtigosPublicados } from '../utils/artigos';

export async function GET(context) {
  const artigos = await getArtigosPublicados();
  return rss({
    title: SITE.nome,
    description: SITE.descricao,
    site: context.site,
    items: artigos.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `/artigos/${a.id}/`,
    })),
    customData: '<language>pt-BR</language>',
  });
}
