import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js defaults to quality 75 and only allows values listed here.
    // 100 serves project screenshots and design panels at maximum sharpness.
    qualities: [75, 95, 100],
  },
  // PostHog analytics goes through this site's own address (/ingest) so ad
  // blockers do not drop visits. PostHog US region.
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: "https://us-assets.i.posthog.com/static/:path*" },
      { source: "/ingest/array/:path*", destination: "https://us-assets.i.posthog.com/array/:path*" },
      { source: "/ingest/:path*", destination: "https://us.i.posthog.com/:path*" },
    ];
  },
  // Required by PostHog: its API paths end in a slash.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
