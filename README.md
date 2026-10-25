# Vineyard Linz

Static site for Vineyard Linz. Each page is an Astro file in `src/pages`. GitHub Actions publishes the build to GitHub Pages.

## Edit a page

Open the page in `src/pages`. The home page is `src/pages/index.astro`. Every other file name is the page address, for example `src/pages/hubs.astro` is `/hubs/`.

Layout pieces such as `HeroSection`, `Section`, `QuoteSection`, and `Card` live in `src/components/sections`.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:4321/vineyard-linz-website/

## Deploy

Pushes to `main` build the site and deploy `dist/` to GitHub Pages: https://b0x1.github.io/vineyard-linz-website/
