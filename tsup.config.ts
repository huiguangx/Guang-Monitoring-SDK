import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // 入口文件
  format: ["esm", "cjs", "iife"], // 输出的模块格式，支持 ESM 和 CommonJS、iife
  dts: true, // 生成 .d.ts 类型声明文件
  sourcemap: true, // 生成 source map
  clean: true, // 清理输出目录
  minify: true, // 压缩输出文件
  target: "esnext", // 目标浏览器或 Node.js 版本
  outDir: "dist", // 输出目录
});
