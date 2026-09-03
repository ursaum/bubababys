# Bubababys 👶

Blog de guias de compra e dicas de produtos para bebês, com monetização via
Programa de Afiliados do Mercado Livre. Site estático feito com [Astro](https://astro.build),
publicado automaticamente no GitHub Pages em **https://bubababys.com.br**.

## Como funciona

- **Artigos** ficam em `src/content/artigos/*.md`. O nome do arquivo vira a URL
  (`melhores-carrinhos-de-bebe.md` → `/artigos/melhores-carrinhos-de-bebe/`).
- **Categorias** ficam em `src/data/categorias.ts`.
- **Produtos recomendados** são declarados no frontmatter de cada artigo, no campo
  `produtos`. Cada item vira um card com botão "Ver no Mercado Livre".
- Todo push na branch `main` gera build e deploy pelo workflow em
  `.github/workflows/deploy.yml`.

## Trocando pelos links de afiliado

No portal de afiliados do Mercado Livre, gere o link do produto e cole no campo
`link` do produto no artigo, marcando `afiliado: true`:

```yaml
produtos:
  - nome: 'Travel System Burigotto'
    descricao: '...'
    link: 'https://www.mercadolivre.com.br/sec/SEU-LINK'
    afiliado: true
```

Links com `afiliado: false` são temporários (busca comum do Mercado Livre) e devem
ser substituídos assim que possível. Para listar os que ainda faltam:

```bash
grep -rn "afiliado: false" src/content/artigos
```

## Criando um artigo

Crie `src/content/artigos/meu-artigo.md` com o cabeçalho:

```yaml
---
title: 'Título do artigo'
description: 'Resumo de 1–2 frases (aparece no Google e nos cards).'
pubDate: 2026-09-10
category: guias-de-compra   # enxoval | passeio | alimentacao | quarto-do-bebe | brinquedos | guias-de-compra
emoji: '🛒'
tags: ['palavra-chave 1', 'palavra-chave 2']
draft: false                # true esconde o artigo do site
produtos:
  - nome: 'Nome do produto'
    descricao: 'Por que recomendamos'
    link: 'https://...'
    afiliado: true
    badge: 'Melhor custo-benefício'   # opcional
---

Conteúdo em Markdown...
```

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera a pasta dist/
```

## Publicação e domínio

1. Em **Settings → Pages** do repositório, defina *Source: GitHub Actions*.
2. O arquivo `public/CNAME` já aponta para `bubababys.com.br`.
3. No painel DNS da Hostinger, crie:
   - Registros **A** para `@` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - Registro **CNAME** para `www` → `ursaum.github.io`
4. Em **Settings → Pages → Custom domain**, informe `bubababys.com.br` e ative
   *Enforce HTTPS* após a verificação.
