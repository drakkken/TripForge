import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "61f62raiyt.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
