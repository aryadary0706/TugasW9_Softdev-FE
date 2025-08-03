import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['fakestoreapi.com'], // ✅ Wajib untuk <Image /> dengan URL eksternal
  },
};

export default nextConfig;
