import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: false,
  // Optional: if you need to handle rewrites or redirects
  // async rewrites() {
  //   return [
  //     {
  //       source: '/best-fillers-in-dubai',
  //       destination: '/best-fillers-in-dubai',
  //     },
  //   ];
  // },
};

export default nextConfig;
