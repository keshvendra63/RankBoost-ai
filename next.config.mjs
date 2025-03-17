/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // If using Next.js images in a static export
    },
  };
  
  module.exports = nextConfig;
  