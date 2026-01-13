import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export for informational website
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
