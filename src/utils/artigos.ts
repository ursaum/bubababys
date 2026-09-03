import { getCollection, type CollectionEntry } from 'astro:content';

/** Artigos publicados, do mais recente para o mais antigo. */
export async function getArtigosPublicados(): Promise<CollectionEntry<'artigos'>[]> {
  const todos = await getCollection('artigos', ({ data }) => !data.draft);
  return todos.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
