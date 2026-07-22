import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85, 90, 100],
    remotePatterns: [
      {
        // Higgsfield CDN — generated editorial assets (see src/data/generated-registry.ts)
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
        pathname: "/user_3CMRVYJQZdncYM0yA1qLrI0bRyR/**",
      },
    ],
  },
};

export default nextConfig;
