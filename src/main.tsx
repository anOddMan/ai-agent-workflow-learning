/**
 * @file main.tsx
 * @description React 应用入口文件
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个文件是整个应用的启动点，负责：
 * 1. 导入全局样式 (Tailwind CSS)
 * 2. 创建 React 根节点
 * 3. 将 App 组件挂载到 DOM
 *
 * 注意：这是一个 Vite 项目，不能直接在浏览器中打开 HTML 文件。
 * 必须通过 `npm run dev` 启动开发服务器，Vite 会自动处理
 * TypeScript 和 JSX 的转译工作。
 */

// 导入 React 严格模式包装器 - 用于检测潜在问题
import { StrictMode } from "react";

// 导入 React DOM 渲染函数 - 用于创建和渲染 React 根节点
import { createRoot } from "react-dom/client";

// 导入全局 CSS 样式 - 包含 Tailwind CSS 基础样式和自定义组件样式
import "./index.css";

// 导入主应用组件 - 包含所有页面内容和导航逻辑
import App from "./App";

// 获取 HTML 中定义的根节点容器
// document.getElementById("root") 返回 <div id="root"></div> 元素
// 使用 "!" 断言表示该元素必定存在（如果不存在会抛出错误）
const rootElement = document.getElementById("root")!;

// 创建 React 根节点
// createRoot 是 React 18+ 的新 API，支持并发渲染特性
const root = createRoot(rootElement);

// 渲染应用
// StrictMode 是开发环境的辅助工具，它会：
// - 检测组件中不安全的生命周期方法
// - 检测过时的 API 使用
// - 检测意外的副作用
// 注意：StrictMode 只在开发环境生效，不影响生产构建
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);