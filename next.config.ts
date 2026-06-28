import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js packages for proper SSR/bundling
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
  ],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
