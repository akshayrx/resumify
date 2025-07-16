import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.akshay.ing',
        pathname: '/wp-content/uploads/**', // Optional: restricts to uploads folder
      },
    ],
  },
};

export default nextConfig;
