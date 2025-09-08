import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Always use basePath for GitHub Pages
  basePath: '/feminas',
  assetPrefix: '/feminas/',
};

export default nextConfig;
