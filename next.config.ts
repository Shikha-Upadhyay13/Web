import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't pick up a stray parent lockfile.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "airbrickinfra.com" },
      { protocol: "https", hostname: "blogs.airbrickinfra.com" },
    ],
  },
};

export default nextConfig;
