import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only use basePath in GitHub Actions environment
  ...(isGitHubPages && {
    basePath: '/feminas',
    assetPrefix: '/feminas/',
  }),
};

export default nextConfig;
