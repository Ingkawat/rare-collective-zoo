import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // บังคับให้เป็น static ล้วน
  images: {
    unoptimized: true,       // ปิด Next Image optimization (กันโดนคิด quota)
  },
};

export default nextConfig;
