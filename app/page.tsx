import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/sections/Section';
import QuoteSection from '@/components/sections/QuoteSection';
import GridSection from '@/components/sections/GridSection';
import Card from '@/components/sections/Card';
import ProfileCard from '@/components/sections/ProfileCard';
import YouTube from '@/components/sections/YouTube';
import Image from 'next/image';

const components = {
  HeroSection,
  Section,
  QuoteSection,
  GridSection,
  Card,
  ProfileCard,
  YouTube,
  Image,
};

export default async function Page() {
  const filePath = path.join(process.cwd(), 'content/pages', 'startseite.mdx');

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContent);

  return (
    <main>
      <MDXRemote source={content} components={components} />
    </main>
  );
}
