# AI Agent 底层业务流程全解析

这是一个使用 **Vite + React + TypeScript + Tailwind CSS** 构建的纯前端项目，展示 AI Agent 从用户输入到最终响应的完整业务流程。

## 📌 重要提示：如何正确启动项目

### ❌ 错误方式（会导致报错）
直接双击 `index.html` 文件打开，会出现以下错误：
- 页面空白不显示
- 浏览器控制台报错：`Failed to load module script`
- 原因：浏览器无法直接解析 TypeScript 和 JSX 代码

### ✅ 正确方式

#### 方式一：一键启动（推荐）
直接双击 `start.bat` 文件即可：
- 自动检测并安装依赖（首次运行时）
- 启动 Vite 开发服务器
- 自动打开浏览器访问项目

#### 方式二：手动命令
通过终端执行：

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 在浏览器访问
http://localhost:5173
```

## 为什么需要开发服务器？

这是一个 **React SPA（单页应用）** 项目，HTML 文件中的 `<script type="module">` 引用了 TypeScript/JSX 源代码：

```html
<script type="module" src="/src/main.tsx"></script>
```

浏览器**无法直接运行** TypeScript 和 JSX，需要 Vite 进行实时转译：
- TypeScript → JavaScript
- JSX → JavaScript 函数调用
- CSS @import → 实际样式

## 项目结构

```
ai-agent-technical-workflow-analysis/
├── index.html              # HTML 入口文件（挂载点）
├── package.json            # 项目依赖和脚本配置
├── vite.config.ts          # Vite 构建工具配置
├── tsconfig.json           # TypeScript 编译器配置
├── src/
│   ├── main.tsx            # React 应用入口
│   ├── App.tsx             # 主应用组件（导航 + 分区切换）
│   ├── index.css           # 全局样式（Tailwind CSS）
│   ├── components/
│   │   ├── FlowDiagramSVG.tsx    # 全景流程图（SVG）
│   │   ├── ArchitectureSVG.tsx   # 系统架构分层图（SVG）
│   │   ├── PhaseTimeline.tsx     # 5 阶段详解时间线
│   │   ├── CodeExamples.tsx      # 各阶段代码示例
│   │   └── AgentComparison.tsx   # 主流 Agent 对比
│   └── utils/
│       └── cn.ts           # CSS 类名合并工具
```

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vite | 7.x | 现代化前端构建工具 |
| React | 19.x | UI 组件框架 |
| TypeScript | 5.x | 类型安全的 JavaScript |
| Tailwind CSS | 4.x | CSS-in-JS 工具化样式框架 |

## 内容概览

项目包含 7 个主要内容分区：

1. **总览** - 项目介绍和快速概览卡片
2. **全景流程图** - 5 阶段 + 2 横切层 + 离线闭环的完整业务流程 SVG 图
3. **架构分层图** - 三层系统架构（前端/服务/基础设施）
4. **阶段概览** - 每个阶段的详细说明和技术栈
5. **全环节深度解析** - 技术活动详情（可展开）
6. **代码示例** - 各阶段核心代码实现
7. **Agent 对比** - Claude Code / Codex / Harness / Hermes/Devin 技术对比

## 🖼️ 全景流程图预览

以下是「全景流程图」模块的 SVG 渲染效果，展示了 AI Agent 从用户输入到最终响应的完整业务流程：

> 💡 启动项目即可查看可交互的 SVG 流程图，支持缩放和详细标注。


## 关于代理

**本项目不需要代理！**

这是一个纯静态前端项目，不调用任何外部 API：
- 所有内容都是静态文本和 SVG 图表
- 无网络请求
- 无后端服务依赖

直接在本地启动即可正常运行。

## 浏览器支持

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

需要支持 ES2020 和 CSS Grid/Flexbox。
