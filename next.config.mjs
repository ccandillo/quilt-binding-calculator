/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static site generation
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
