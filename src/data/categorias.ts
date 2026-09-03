export interface Categoria {
  slug: string;
  nome: string;
  emoji: string;
  descricao: string;
}

export const CATEGORIAS: Categoria[] = [
  {
    slug: 'enxoval',
    nome: 'Enxoval',
    emoji: '🍼',
    descricao: 'Tudo para montar o enxoval do bebê sem gastar à toa.',
  },
  {
    slug: 'passeio',
    nome: 'Carrinhos e Passeio',
    emoji: '🚼',
    descricao: 'Carrinhos, bebês conforto e acessórios para sair com segurança.',
  },
  {
    slug: 'alimentacao',
    nome: 'Alimentação',
    emoji: '🥣',
    descricao: 'Amamentação, introdução alimentar e utensílios que ajudam de verdade.',
  },
  {
    slug: 'quarto-do-bebe',
    nome: 'Quarto do Bebê',
    emoji: '🛏️',
    descricao: 'Berços, colchões, babás eletrônicas e a decoração do cantinho do bebê.',
  },
  {
    slug: 'brinquedos',
    nome: 'Brinquedos',
    emoji: '🧸',
    descricao: 'Brinquedos por faixa etária que estimulam o desenvolvimento.',
  },
  {
    slug: 'guias-de-compra',
    nome: 'Guias de Compra',
    emoji: '🛒',
    descricao: 'Comparativos e listas dos melhores produtos, testados e pesquisados.',
  },
];

export function getCategoria(slug: string): Categoria {
  const cat = CATEGORIAS.find((c) => c.slug === slug);
  if (!cat) throw new Error(`Categoria desconhecida: ${slug}`);
  return cat;
}
