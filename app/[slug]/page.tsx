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
import Profile from '@/components/sections/Profile';
import YouTube from '@/components/sections/YouTube';
import GoogleForm from '@/components/sections/GoogleForm';
import ChurchSuite from '@/components/sections/ChurchSuite';
import Image from 'next/image';

const components = {
  HeroSection,
  Section,
  QuoteSection,
  GridSection,
  Card,
  ProfileCard,
  Profile,
  YouTube,
  GoogleForm,
  ChurchSuite,
  Image,
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content/pages');
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith('.mdx') && file !== 'startseite.mdx')
    .map((file) => ({
      slug: file.replace('.mdx', ''),
    }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/pages', `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <main>
      <div className="bg-brand py-8 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">{data.title}</h1>
      </div>
      <MDXRemote source={content} components={components} />
    </main>
  );
}
