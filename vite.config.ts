/**
 * @file vite.config.ts
 * @description Vite 构建工具配置文件
 * @author AI Agent Technical Workflow Analysis
 *
 * Vite 是一个现代化的前端构建工具，具有以下特点：
 * - 开发服务器：极速热更新 (HMR)
 * - 生产构建：使用 Rollup 进行优化打包
 * - TypeScript/JSX：原生支持，无需额外配置
 *
 * 本配置包含：
 * - React 插件：支持 JSX 转换
 * - Tailwind CSS 插件：v4 新语法支持
 * - SingleFile 插件：打包为单个 HTML 文件
 * - 路径别名：@ 映射到 src 目录
 */

// 导入 Node.js path 模块 - 用于处理文件路径
import path from "path";

// 导入 URL 工具 - 用于获取当前文件的路径
import { fileURLToPath } from "url";

// 导入 Tailwind CSS v4 的 Vite 插件
// Tailwind v4 使用新的 CSS-first 配置方式
import tailwindcss from "@tailwindcss/vite";

// 导入 React 插件 - 提供 JSX 转换和热更新支持
import react from "@vitejs/plugin-react";

// 导入 Vite 配置定义函数
import { defineConfig } from "vite";

// 导入 SingleFile 插件 - 将所有资源内联到单个 HTML 文件
import { viteSingleFile } from "vite-plugin-singlefile";

// ===== 获取当前文件的目录路径 =====
// 在 ES Module 中，__dirname 不可用，需要手动计算
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Vite 配置 =====
// https://vite.dev/config/
export default defineConfig({
  // ===== 插件配置 =====
  plugins: [
    // React 插件：支持 JSX/TSX 转换
    react(),

    // Tailwind CSS v4 插件：自动处理 @tailwind 指令
    // 不需要 tailwind.config.js，直接在 CSS 中使用 @import "tailwindcss"
    tailwindcss(),

    // SingleFile 插件：将 JS/CSS 内联到 HTML
    // 适用于需要单文件部署的场景（如邮件、文档嵌入）
    viteSingleFile(),
  ],

  // ===== 路径解析配置 =====
  resolve: {
    // 路径别名：简化导入语句
    alias: {
      // 将 @ 映射到 src 目录
      // 例如：import App from '@/App' 代替 import App from './src/App'
      "@": path.resolve(__dirname, "src"),
    },
  },
});