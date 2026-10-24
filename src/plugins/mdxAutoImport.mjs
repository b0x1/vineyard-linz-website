export function mdxAutoImport(imports) {
  const lines = Object.entries(imports)
    .map(([name, source]) => `import ${name} from ${JSON.stringify(source)};`)
    .join('\n');

  return {
    name: 'mdx-auto-import',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [
              {
                name: 'mdx-auto-import',
                enforce: 'pre',
                transform(code, id) {
                  const filename = id.split('?')[0];
                  if (!filename.endsWith('.mdx') || code.includes('import HeroSection from')) return;
                  if (code.startsWith('---')) {
                    const end = code.indexOf('\n---', 3);
                    if (end !== -1) {
                      const insertAt = end + 4;
                      return `${code.slice(0, insertAt)}\n${lines}\n${code.slice(insertAt)}`;
                    }
                  }
                  return `${lines}\n${code}`;
                },
              },
            ],
          },
        });
      },
    },
  };
}
