import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js defaults to quality 75 and only allows values listed here.
    // 100 serves project screenshots and design panels at maximum sharpness.
    qualities: [75, 95, 100],
  },
};

export default nextConfig;
