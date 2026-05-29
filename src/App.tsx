/**
 * @file App.tsx
 * @description 主应用组件 - AI Agent 底层业务流程全解析
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件是整个应用的核心，包含：
 * - 顶部导航栏（桌面端和移动端适配）
 * - 7 个内容分区：总览、全景流程图、架构分层图、阶段概览、全环节深度解析、代码示例、Agent对比
 * - 页面底部信息
 *
 * 组件架构：
 * - 使用 useState 管理当前激活的分区和移动端导航状态
 * - 使用 React 函数组件 + TypeScript 类型定义
 * - 使用 Tailwind CSS 进行样式设计
 */

import { useState } from 'react';

// 导入子组件 - 各个内容区域的渲染组件
import FlowDiagramSVG from './components/FlowDiagramSVG';
import CodeExamples from './components/CodeExamples';
import AgentComparison from './components/AgentComparison';
import ArchitectureSVG from './components/ArchitectureSVG';
import PhaseTimeline from './components/PhaseTimeline';
import PhaseDeepDive from './components/PhaseDeepDive';

/**
 * 导航分区类型定义
 * - overview: 总览页面，包含 Hero 区域和快速概览卡片
 * - flow: 全景流程图，展示完整的 8 阶段业务流程
 * - architecture: 架构分层图，展示三层系统架构
 * - timeline: 阶段详解，详细说明每个阶段的技术细节
 * - code: 代码示例，展示各阶段的核心代码实现
 * - comparison: Agent对比，对比主流 AI Agent 的技术架构
 */
type Section = 'overview' | 'flow' | 'architecture' | 'timeline' | 'deepdive' | 'code' | 'comparison';

/**
 * 导航项配置
 * 定义导航栏中每个按钮的属性
 */
interface NavItem {
  id: Section;       // 分区唯一标识
  label: string;     // 显示文本
  icon: string;      // emoji 图标
}

// 导航项配置数组 - 用于渲染顶部导航栏按钮
const navItems: NavItem[] = [
  { id: 'overview', label: '总览', icon: '🏠' },
  { id: 'flow', label: '流程图', icon: '🗺️' },
  { id: 'architecture', label: '架构图', icon: '🏗️' },
  { id: 'timeline', label: '阶段概览', icon: '📋' },
  { id: 'deepdive', label: '全环节深度解析', icon: '🔬' },
  { id: 'code', label: '代码示例', icon: '💻' },
  { id: 'comparison', label: 'Agent 对比', icon: '⚔️' },
];

/**
 * HeroStats 组件
 * 渲染页面顶部统计数据卡片
 *
 * 展示核心统计信息：
 * - 5 个核心阶段
 * - 2 个横切层
 * - 80+ 个技术活动
 * - 4 个主流 Agent 对比
 */
function HeroStats() {
  // 统计数据配置数组
  const stats = [
    { label: '核心阶段', value: '5', color: 'text-blue-400' },
    { label: '横切层', value: '2', color: 'text-red-400' },
    { label: '技术活动', value: '80+', color: 'text-purple-400' },
    { label: 'Agent 对比', value: '4', color: 'text-orange-400' },
  ];

  return (
    // 使用 Grid 布局，移动端 2 列，桌面端 4 列
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {stats.map((stat) => (
        // 每个统计卡片
        <div
          key={stat.label}
          className="card-dark rounded-xl p-4 text-center border border-slate-700/30"
        >
          {/* 统计数值 */}
          <div className={`text-3xl font-bold ${stat.color}`}>
            {stat.value}
          </div>
          {/* 统计标签 */}
          <div className="text-slate-400 text-sm mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * OverviewSection 组件
 * 渲染"总览"分区的内容
 *
 * 包含内容：
 * - Hero 区域（标题、描述）
 * - 快速概览卡片（4 个阶段的简要说明）
 * - Agent vs ChatBot 核心区别对比
 */
function OverviewSection() {
  return (
    <div className="space-y-12">
      {/* ===== Hero 区域 ===== */}
      <div className="text-center py-12">
        {/* 徽章：深度技术解析 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-blue-400 text-sm font-medium">深度技术解析</span>
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">AI Agent</span>
          <br />
          <span className="text-slate-200">底层业务流程全解析</span>
        </h1>

        {/* 描述文字 */}
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          从用户输入一条指令，到 Agent 完成任务返回结果，
          <br className="hidden md:block" />
          中间究竟经历了哪些环节？每个环节的技术底层逻辑是什么？
        </p>

        {/* 涵盖的 Agent 类型 */}
        <p className="text-slate-500 text-sm mt-4">
          覆盖 Claude Code · OpenAI Codex · Harness AI · Hermes · Devin 等主流 Agent
        </p>

        {/* 统计卡片 */}
        <HeroStats />
      </div>

      {/* ===== 快速概览卡片 ===== */}
      <div>
        <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">
          ⚡ 端到端流程概览
        </h2>

        {/* 4 个阶段的概览卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: '🌐',
              title: '接入与网关',
              phases: '1',
              desc: '客户端预处理 → API网关鉴权 → 路由分流 → 安全检测',
              color: 'border-blue-500/30',
              time: '~50ms',
            },
            {
              icon: '🧠',
              title: '上下文工程',
              phases: '2',
              desc: 'System Prompt → RAG检索 → 记忆注入 → 上下文窗口管理 → 缓存命中',
              color: 'border-purple-500/30',
              time: '~500ms',
            },
            {
              icon: '🔄',
              title: 'Agent 循环',
              phases: '3',
              desc: 'LLM推理 → Tool Call → 沙盒执行 → 结果回注 → 循环直到完成',
              color: 'border-teal-500/30',
              time: '2-300s',
            },
            {
              icon: '✨',
              title: '输出与交付',
              phases: '4-5',
              desc: '安全过滤 → 格式化 → SSE流式传输 → 客户端渲染 → 用户反馈',
              color: 'border-pink-500/30',
              time: '实时流式',
            },
          ].map((item) => (
            // 每个阶段卡片
            <div
              key={item.title}
              className={`card-dark rounded-xl p-5 border ${item.color} hover:scale-[1.02] transition-transform`}
            >
              {/* 图标 */}
              <div className="text-3xl mb-3">{item.icon}</div>
              {/* 标题和阶段编号 */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-slate-200">{item.title}</h3>
                <span className="text-xs text-slate-500 font-mono">Phase {item.phases}</span>
              </div>
              {/* 描述 */}
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.desc}</p>
              {/* 耗时 */}
              <div className="text-xs text-slate-500 font-mono">⏱ {item.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Agent vs ChatBot 对比 ===== */}
      <div className="card-dark rounded-2xl p-8 border border-indigo-500/20">
        <h2 className="text-2xl font-bold text-slate-200 mb-4">
          🤖 Agent vs ChatBot: 核心区别
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 传统 ChatBot */}
          <div>
            <h3 className="text-lg font-bold text-slate-400 mb-3">传统 ChatBot</h3>
            <div className="code-block p-4 text-sm">
              <code className="text-slate-400">
                用户输入 → LLM 推理 → 文本输出<br />
                <span className="text-slate-600">// 单次请求-响应，无工具调用</span><br />
                <span className="text-slate-600">// 无法执行代码、修改文件</span><br />
                <span className="text-slate-600">// 无自主决策能力</span>
              </code>
            </div>
          </div>

          {/* AI Agent */}
          <div>
            <h3 className="text-lg font-bold text-green-400 mb-3">AI Agent ✨</h3>
            <div className="code-block p-4 text-sm">
              <code className="text-green-300">
                用户输入 → LLM 推理 → <span className="text-orange-400">Tool Call</span> → 执行 → <span className="text-purple-400">观察</span> → 再推理 → ...<br />
                <span className="text-slate-500">// 多步骤自主循环 (Agentic Loop)</span><br />
                <span className="text-slate-500">// 可读写文件、执行代码、搜索网络</span><br />
                <span className="text-slate-500">// 自主规划、决策、纠错</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * App 主组件
 * 整个应用的根组件，负责：
 * - 管理当前激活的分区状态
 * - 管理移动端导航菜单的展开/关闭状态
 * - 渲染导航栏和对应的内容分区
 */
export default function App() {
  // 当前激活的分区状态，默认显示"总览"
  const [activeSection, setActiveSection] = useState<Section>('overview');

  // 移动端导航菜单的展开状态，默认关闭
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  /**
   * renderSection 函数
   * 根据当前激活的分区渲染对应的内容组件
   *
   * @returns 当前分区对应的 React 组件
   */
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'flow':
        return (
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">全景流程图</h2>
            <p className="text-slate-400 mb-6">
              从用户输入到最终响应的完整业务流程，展示 5 个核心阶段、2 个横切层及离线优化闭环的技术细节。
            </p>
            <FlowDiagramSVG />
          </div>
        );
      case 'architecture':
        return (
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">系统架构分层图</h2>
            <p className="text-slate-400 mb-6">
              Agent 系统的三层架构：前端客户端层、服务编排层、GPU 基础设施层。
            </p>
            <ArchitectureSVG />
          </div>
        );
      case 'timeline':
        return (
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">阶段概览</h2>
            <p className="text-slate-400 mb-6">
              5 个核心阶段的详细说明、耗时估算和技术栈，外加 2 个贯穿全程的横切层。
            </p>
            <PhaseTimeline />
          </div>
        );
      case 'deepdive':
        return <PhaseDeepDive />;
      case 'code':
        return (
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">核心代码示例</h2>
            <p className="text-slate-400 mb-6">
              每个阶段的关键技术实现代码，涵盖前后端、推理引擎、工具调用等。
            </p>
            <CodeExamples />
          </div>
        );
      case 'comparison':
        return (
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-2">主流 Agent 对比</h2>
            <p className="text-slate-400 mb-6">
              Claude Code、OpenAI Codex、Harness AI、Hermes/Devin 的技术架构对比。
            </p>
            <AgentComparison />
          </div>
        );
    }
  };

  return (
    // 主容器 - 设置最小高度和背景色
    <div className="min-h-screen bg-[#0a0e1a]">

      {/* ===== 顶部导航栏 ===== */}
      {/* sticky 定位：滚动时固定在顶部 */}
      {/* backdrop-blur：背景模糊效果 */}
      <nav className="sticky top-0 z-50 bg-[#0a0e1a]/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo 区域 */}
            <div className="flex items-center gap-3">
              {/* Logo 图标 */}
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                AI
              </div>
              {/* Logo 文字 - 小屏幕隐藏 */}
              <span className="text-slate-200 font-bold hidden sm:block">
                Agent 流程解析
              </span>
            </div>

            {/* 桌面端导航按钮 */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {/* 图标 */}
                  <span className="mr-1.5">{item.icon}</span>
                  {/* 文字 */}
                  {item.label}
                </button>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {/* Hamburg/Close 图标 */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileNavOpen ? (
                  // 关闭状态：X 图标
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // 打开状态：汉堡菜单图标
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {/* 仅在移动端和菜单打开时显示 */}
        {mobileNavOpen && (
          <div className="md:hidden border-t border-slate-800/50 bg-[#0a0e1a]/95 backdrop-blur-xl">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileNavOpen(false); // 点击后关闭菜单
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-500/15 text-blue-400'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {/* 图标 */}
                  <span className="mr-2">{item.icon}</span>
                  {/* 文字 */}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== 主内容区域 ===== */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderSection()}
      </main>

      {/* ===== 页面底部 ===== */}
      <footer className="border-t border-slate-800/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            {/* 项目描述 */}
            <p className="text-slate-500 text-sm">
              AI Agent 底层业务流程全解析 — 涵盖 Claude Code · OpenAI Codex · Harness AI · Hermes · Devin 等主流 Agent
            </p>
            {/* 技术栈 */}
            <p className="text-slate-600 text-xs mt-2">
              技术栈: Transformer · vLLM · Flash Attention · RAG · MCP · ReAct · RLHF · OpenTelemetry
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}