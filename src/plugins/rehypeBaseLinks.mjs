export function rehypeBaseLinks(base) {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;

  return (tree) => {
    visit(tree);
  };

  function visit(node) {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'element' && node.properties) {
      for (const attr of ['href', 'src']) {
        const value = node.properties[attr];
        if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) continue;
        if (value === prefix || value.startsWith(`${prefix}/`)) continue;
        node.properties[attr] = `${prefix}${value}`;
      }
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) visit(child);
    }
  }
}
