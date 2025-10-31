import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //domains:['images.unsplash.com'], obsolete
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      },
    ],
    domains: [
      'images.unsplash.com', 
      'source.unsplash.com'
    ],
  },
};

export default nextConfig;
