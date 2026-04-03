/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Skip the /keystatic and /api/keystatic paths in the static export
  // Note: App Router's static export still creates files for Route Handlers
  // but we can try to filter them out if needed.
};

export default nextConfig;
