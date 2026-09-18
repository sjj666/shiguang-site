import type { NextConfig } from "next";

// 部署到 GitHub Pages 时网址是 sjj666.github.io/shiguang-site，由部署流程传入这个前缀；本地开发为空
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // 打包成纯静态 HTML，输出到 out/ 目录
  basePath,
  images: { unoptimized: true }, // 静态导出没有服务器，不能在线压缩图片
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // next/image 不会自动加前缀，图片地址要手动拼上
};

export default nextConfig;
