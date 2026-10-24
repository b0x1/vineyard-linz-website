import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { mdxAutoImport } from './src/plugins/mdxAutoImport.mjs';
import { rehypeBaseLinks } from './src/plugins/rehypeBaseLinks.mjs';

const base = '/vineyard-linz-website';

const mdxComponents = {
  HeroSection: '@/components/sections/HeroSection.astro',
  Section: '@/components/sections/Section.astro',
  QuoteSection: '@/components/sections/QuoteSection.astro',
  GridSection: '@/components/sections/GridSection.astro',
  Card: '@/components/sections/Card.astro',
  Profile: '@/components/sections/Profile.astro',
  ProfileCard: '@/components/sections/ProfileCard.astro',
  YouTube: '@/components/sections/YouTube.astro',
  GoogleForm: '@/components/sections/GoogleForm.astro',
  ChurchSuite: '@/components/sections/ChurchSuite.astro',
  Image: '@/components/sections/Image.astro',
};

export default defineConfig({
  site: 'https://b0x1.github.io',
  base,
  trailingSlash: 'always',
  integrations: [
    mdxAutoImport(mdxComponents),
    mdx({
      rehypePlugins: [[rehypeBaseLinks, base]],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
