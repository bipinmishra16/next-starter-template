import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.89.172"],
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 70],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
};

export default nextConfig;
