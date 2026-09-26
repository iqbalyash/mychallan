import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Static export configuration
  output: 'export',
  
  // Image optimization (required for static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  
  // Headers are applied from public/_headers on Cloudflare Workers and Pages.
  // Static export does not apply Next.js headers.
};

export default nextConfig;
