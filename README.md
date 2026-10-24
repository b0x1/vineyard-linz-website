# Vineyard Linz

Static site for Vineyard Linz. Pages are MDX files in `content/pages`. Astro renders them and GitHub Actions publishes the result to GitHub Pages.

## Edit a page

Change the Markdown in `content/pages`. Layout pieces such as `<HeroSection>`, `<Section>`, `<QuoteSection>`, and `<Card>` are components in `src/components/sections`. Leave those tags in place and edit the text around them.

The home page is `content/pages/startseite.mdx`. Every other file name is the page address, for example `content/pages/hubs.mdx` is `/hubs/`.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321/vineyard-linz-website/

## Deploy

Pushes to `main` build the site and deploy `dist/` to GitHub Pages: https://b0x1.github.io/vineyard-linz-website/
