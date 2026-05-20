import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/rte/documentos/[file]": ["./RTE/**/*.pdf"],
  },
};

export default nextConfig;
