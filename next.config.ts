import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fbcdn.net", // Allow all Facebook CDN subdomains
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com", // Facebook profile images
      },
    ],
  },
};

export default nextConfig;
