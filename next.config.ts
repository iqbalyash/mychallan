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
  
  // Note: Headers should be configured at hosting level (Netlify, Vercel, etc.)
  // For static export, headers are not applied by Next.js
};

export default nextConfig;
