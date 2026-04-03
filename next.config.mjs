/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure basePath and assetPrefix for GitHub Pages.
  // Update this to match the actual repository name if hosting on a subdirectory.
  basePath: '/vineyard-linz-website',
  assetPrefix: '/vineyard-linz-website',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Skip the /keystatic and /api/keystatic paths in the static export
  // Note: App Router's static export still creates files for Route Handlers
  // but we can try to filter them out if needed.
};

export default nextConfig;
