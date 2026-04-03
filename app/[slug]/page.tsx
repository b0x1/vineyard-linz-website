import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand">{data.title}</h1>
      <div className="prose prose-slate lg:prose-xl">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
