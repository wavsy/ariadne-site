import type { NextConfig } from "next";

// Static export: the site is plain files and can be hosted anywhere.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
