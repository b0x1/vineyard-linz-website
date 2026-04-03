import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function Page() {
  const filePath = path.join(process.cwd(), 'content/pages', 'startseite.mdx');

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-brand">{data.title}</h1>
      <div className="prose prose-slate lg:prose-xl">
        <MDXRemote source={content} />
      </div>
    </main>
  );
}
