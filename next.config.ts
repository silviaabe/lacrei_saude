import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['i.imgur.com'],
  },
};

export default nextConfig;
