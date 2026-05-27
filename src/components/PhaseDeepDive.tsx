/**
 * @file PhaseDeepDive.tsx
 * @description 全环节深度解析组件 - 展示 8 个阶段的技术活动详情
 * @author AI Agent Technical Workflow Analysis
 */

// ==================== 导入依赖 ====================

// 导入 React 的 useState 钩子，用于管理组件状态
import { useState } from 'react';

// 导入类型定义，用于类型安全
import type { PhaseData, PhaseModule, Activity } from '../data/phaseDeepDive';

// 导入阶段数据数组
import { phases } from '../data/phaseDeepDive';

// ==================== ActivityCard 活动卡片组件 ====================

/**
 * ActivityCard 组件
 * @description 渲染单个技术活动的卡片，可展开查看详情
 * @param activity - 活动数据对象
 * @param accentHex - 阶段强调色（十六进制）
 */
function ActivityCard({ activity, accentHex }: { activity: Activity; accentHex: string }) {
  // 使用 useState 管理卡片展开状态，默认为 false（收起）
  const [expanded, setExpanded] = useState(false);

  // 返回活动卡片的 JSX 结构
  return (
    // 外层容器：带边框、圆角、背景色的卡片
    <div className="border border-slate-700/40 rounded-xl overflow-hidden bg-slate-900/40 hover:bg-slate-900/60 transition-all">
      {/* ==================== 卡片头部 - 始终可见 ==================== */}
      {/* 使用 button 实现点击展开/收起功能 */}
      <button
        // 点击时切换展开状态
        onClick={() => setExpanded(!expanded)}
        // 样式：全宽、左对齐、内边距、flex 布局
        className="w-full text-left p-5 flex items-start gap-4 group"
      >
        {/* 活动图标 - 2xl 大号，不缩小 */}
        <span className="text-2xl flex-shrink-0 mt-0.5">{activity.icon}</span>

        {/* 内容区域 - 占据剩余空间 */}
        <div className="flex-1 min-w-0">
          {/* 标题行：活动名称 + 展开/收起箭头 */}
          <div className="flex items-center gap-2">
            {/* 活动名称 - hover 时变白 */}
            <h4 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
              {activity.name}
            </h4>

            {/* 展开/收起箭头图标 - 根据状态旋转 */}
            <svg
              // 动态类名：展开时旋转 180 度
              className={`w-4 h-4 text-slate-500 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
              // SVG 基础属性
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              {/* 箭头路径：向下箭头 */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* 概念预览 - 截取前 120 字符，最多显示 2 行 */}
          <p className="text-slate-400 text-sm mt-1 line-clamp-2">{activity.concept.slice(0, 120)}...</p>
        </div>
      </button>

      {/* ==================== 展开内容 - 仅展开时可见 ==================== */}
      {/* 条件渲染：仅在 expanded 为 true 时显示 */}
      {expanded && (
        // 展开内容容器：内边距、间距、顶部边框
        <div className="px-5 pb-5 space-y-5 border-t border-slate-700/30 pt-5">

          {/* ==================== 概念介绍区块 ==================== */}
          <div>
            {/* 区块标题：圆点 + 文字 */}
            <div className="flex items-center gap-2 mb-2">
              {/* 圆点标记 - 使用阶段强调色 */}
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
              {/* 区块标题 */}
              <h5 className="text-sm font-bold text-slate-300">📖 概念介绍</h5>
            </div>
            {/* 概念内容 - 左侧内边距 */}
            <p className="text-slate-400 text-sm leading-relaxed pl-4">{activity.concept}</p>
          </div>

          {/* ==================== 原理解释区块 ==================== */}
          <div>
            {/* 区块标题 */}
            <div className="flex items-center gap-2 mb-2">
              {/* 圆点标记 */}
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
              {/* 区块标题 */}
              <h5 className="text-sm font-bold text-slate-300">⚙️ 原理解释</h5>
            </div>
            {/* 原理内容 */}
            <p className="text-slate-400 text-sm leading-relaxed pl-4">{activity.principle}</p>
          </div>

          {/* ==================== 使用工具区块 ==================== */}
          <div>
            {/* 区块标题 */}
            <div className="flex items-center gap-2 mb-2">
              {/* 圆点标记 */}
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
              {/* 区块标题 */}
              <h5 className="text-sm font-bold text-slate-300">🛠️ 使用工具</h5>
            </div>
            {/* 工具标签容器 - flex 布局自动换行 */}
            <div className="flex flex-wrap gap-2 pl-4">
              {/* 遍历工具数组，渲染每个工具标签 */}
              {activity.tools.map((tool) => (
                <span
                  // 工具名称作为 key
                  key={tool}
                  // 样式：内边距、圆角、小字体、等宽字体、边框
                  className="px-2.5 py-1 rounded-lg text-xs font-mono border"
                  // 动态样式：使用阶段强调色
                  style={{
                    borderColor: accentHex + '30',      // 边框色：强调色 + 30% 透明度
                    color: accentHex,                    // 文字色：强调色
                    backgroundColor: accentHex + '10',   // 背景色：强调色 + 10% 透明度
                  }}
                >
                  {/* 显示工具名称 */}
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ==================== 实际场景区块 ==================== */}
          <div>
            {/* 区块标题 */}
            <div className="flex items-center gap-2 mb-2">
              {/* 圆点标记 */}
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
              {/* 区块标题 */}
              <h5 className="text-sm font-bold text-slate-300">💡 实际场景案例</h5>
            </div>
            {/* 场景内容容器 - 带背景和边框 */}
            <div className="pl-4 p-3 rounded-lg bg-slate-800/50 border border-slate-700/30">
              {/* 场景描述文字 */}
              <p className="text-slate-300 text-sm leading-relaxed">{activity.scenario}</p>
            </div>
          </div>

          {/* ==================== 代码示例区块 ==================== */}
          {/* 条件渲染：仅当活动有代码示例时显示 */}
          {activity.code && (
            <div>
              {/* 区块标题 */}
              <div className="flex items-center gap-2 mb-2">
                {/* 圆点标记 */}
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentHex }} />
                {/* 区块标题 */}
                <h5 className="text-sm font-bold text-slate-300">💻 代码逻辑</h5>
                {/* 代码语言标识 - 条件渲染 */}
                {activity.codeLanguage && (
                  <span className="text-xs text-slate-500 font-mono">({activity.codeLanguage})</span>
                )}
              </div>

              {/* 代码块容器 */}
              <div className="code-block p-4 overflow-x-auto ml-4">
                {/* ==================== 代码块头部装饰 ==================== */}
                {/* macOS 风格的窗口按钮（红黄绿） */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700/50">
                  {/* 红色按钮 */}
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  {/* 黄色按钮 */}
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  {/* 绿色按钮 */}
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  {/* 语言标识 */}
                  <span className="text-slate-500 text-xs ml-1">{activity.codeLanguage || 'Code'}</span>
                </div>

                {/* 代码内容 - 使用 pre 保持格式 */}
                <pre className="text-[12.5px] leading-[1.6] whitespace-pre-wrap">
                  {/* 代码文本 */}
                  <code className="text-slate-300">{activity.code}</code>
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ==================== ModuleSection 模块区块组件 ====================

/**
 * ModuleSection 组件
 * @description 渲染单个模块及其包含的所有活动卡片
 * @param module - 模块数据对象
 * @param accentHex - 阶段强调色
 */
function ModuleSection({ module, accentHex }: { module: PhaseModule; accentHex: string }) {
  // 返回模块区块的 JSX 结构
  return (
    // 外层容器：间距
    <div className="space-y-3">
      {/* 模块标题行 */}
      <div className="flex items-center gap-3 mb-4">
        {/* 模块图标 */}
        <span className="text-xl">{module.moduleIcon}</span>
        {/* 模块名称 */}
        <h3 className="text-lg font-bold text-slate-200">{module.moduleName}</h3>
        {/* 活动数量统计 */}
        <span className="text-xs text-slate-500 font-mono">{module.activities.length} 个活动</span>
      </div>

      {/* 活动卡片列表容器 */}
      <div className="space-y-3">
        {/* 遍历活动数组，渲染每个活动卡片 */}
        {module.activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} accentHex={accentHex} />
        ))}
      </div>
    </div>
  );
}

// ==================== PhaseSection 阶段区块组件 ====================

/**
 * PhaseSection 组件
 * @description 渲染单个阶段区块，可点击展开查看模块和活动
 * @param phase - 阶段数据对象
 */
function PhaseSection({ phase }: { phase: PhaseData }) {
  // 使用 useState 管理阶段展开状态，默认为 false（收起）
  const [isOpen, setIsOpen] = useState(false);

  // 计算阶段的总活动数（所有模块的活动数之和）
  const totalActivities = phase.modules.reduce((sum, m) => sum + m.activities.length, 0);

  // 返回阶段区块的 JSX 结构
  return (
    // 外层容器：动态边框色、圆角
    <div className={`border rounded-2xl overflow-hidden ${phase.borderColor}`}>

      {/* ==================== 阶段头部 ==================== */}
      {/* 点击按钮展开/收起 */}
      <button
        // 点击切换展开状态
        onClick={() => setIsOpen(!isOpen)}
        // 样式：全宽、左对齐、内边距、hover 效果
        className="w-full text-left p-6 flex items-center gap-4 group hover:bg-slate-800/30 transition-colors"
      >
        {/* 阶段编号徽章 - 大号圆角方块 */}
        <div className={`w-14 h-14 rounded-xl ${phase.bgColor} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg`}>
          {/* 显示阶段编号 */}
          {phase.phaseNumber}
        </div>

        {/* 阶段信息区域 */}
        <div className="flex-1 min-w-0">
          {/* 标题行：图标 + 标题 + 副标题 */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* 阶段图标 */}
            <span className="text-2xl">{phase.icon}</span>
            {/* 阶段标题 - 动态颜色 */}
            <h2 className={`text-xl font-bold ${phase.color}`}>{phase.title}</h2>
            {/* 英文副标题 */}
            <span className="text-slate-500 text-sm font-mono">{phase.subtitle}</span>
          </div>
          {/* 统计信息：模块数 + 活动数 */}
          <p className="text-slate-400 text-sm mt-1">
            {phase.modules.length} 个模块 · {totalActivities} 个活动
          </p>
        </div>

        {/* 展开/收起箭头 */}
        <svg
          // 动态类名：展开时旋转 180 度
          className={`w-6 h-6 text-slate-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          {/* 箭头路径 */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* ==================== 阶段内容 ==================== */}
      {/* 条件渲染：仅展开时显示 */}
      {isOpen && (
        // 内容容器：内边距、间距、顶部边框
        <div className="p-6 pt-2 space-y-8 border-t border-slate-700/30">
          {/* 遍历模块数组，渲染每个模块区块 */}
          {phase.modules.map((module) => (
            <ModuleSection key={module.id} module={module} accentHex={phase.accentHex} />
          ))}
        </div>
      )}
    </div>
  );
}

// ==================== PhaseDeepDive 主组件 ====================

/**
 * PhaseDeepDive 组件（默认导出）
 * @description 全环节深度解析的主组件，展示 8 个阶段的所有模块和活动
 */
export default function PhaseDeepDive() {
  // 使用 useState 管理"全部展开"状态，默认为 false
  const [expandAll, setExpandAll] = useState(false);

  // 计算所有阶段的总活动数
  const totalActivities = phases.reduce(
    // 外层 reduce：累加每个阶段的活动数
    (sum, p) => sum + p.modules.reduce(
      // 内层 reduce：累加模块的活动数
      (s, m) => s + m.activities.length, 0
    ), 0
  );

  // 返回主组件的 JSX 结构
  return (
    <div>
      {/* ==================== 页面标题区 ==================== */}
      {/* 标题和统计信息 */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        {/* 左侧：标题和统计 */}
        <div>
          {/* 页面主标题 - 渐变色效果 */}
          <h2 className="text-3xl font-bold gradient-text">全环节深度解析</h2>
          {/* 统计信息 */}
          <p className="text-slate-400 mt-1">
            {/* 阶段数 · 模块数 · 活动数 */}
            8 个阶段 · {phases.reduce((s, p) => s + p.modules.length, 0)} 个模块 · {totalActivities} 个活动
            {/* 提示文字 */}
            <span className="text-slate-500 ml-2">— 点击展开查看详情</span>
          </p>
        </div>

        {/* 右侧：全部展开/收起按钮 */}
        <button
          // 点击切换全部展开状态
          onClick={() => setExpandAll(!expandAll)}
          // 样式
          className="px-4 py-2 rounded-lg text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 transition-colors"
        >
          {/* 根据状态显示不同文字 */}
          {expandAll ? '全部收起' : '全部展开'}
        </button>
      </div>

      {/* ==================== 阶段列表 ==================== */}
      {/* 阶段卡片容器 */}
      <div className="space-y-4">
        {/* 遍历所有阶段 */}
        {phases.map((phase) => (
          // 根据 expandAll 状态选择不同组件
          expandAll ? (
            // 全部展开时使用 PhaseOpenSection（默认展开）
            <PhaseOpenSection key={phase.phaseNumber} phase={phase} />
          ) : (
            // 默认状态使用 PhaseSection（可手动展开）
            <PhaseSection key={phase.phaseNumber} phase={phase} />
          )
        ))}
      </div>
    </div>
  );
}

// ==================== PhaseOpenSection 预展开阶段组件 ====================

/**
 * PhaseOpenSection 组件
 * @description 默认展开状态的阶段区块，用于"全部展开"模式
 * @param phase - 阶段数据对象
 */
function PhaseOpenSection({ phase }: { phase: PhaseData }) {
  // 计算阶段的总活动数
  const totalActivities = phase.modules.reduce((sum, m) => sum + m.activities.length, 0);

  // 返回预展开的 JSX 结构
  return (
    // 外层容器
    <div className={`border rounded-2xl overflow-hidden ${phase.borderColor}`}>
      {/* 阶段头部（不可点击，仅展示） */}
      <div className="p-6 flex items-center gap-4">
        {/* 阶段编号徽章 */}
        <div className={`w-14 h-14 rounded-xl ${phase.bgColor} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg`}>
          {phase.phaseNumber}
        </div>

        {/* 阶段信息 */}
        <div className="flex-1 min-w-0">
          {/* 标题行 */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* 阶段图标 */}
            <span className="text-2xl">{phase.icon}</span>
            {/* 阶段标题 */}
            <h2 className={`text-xl font-bold ${phase.color}`}>{phase.title}</h2>
            {/* 英文副标题 */}
            <span className="text-slate-500 text-sm font-mono">{phase.subtitle}</span>
          </div>
          {/* 统计信息 */}
          <p className="text-slate-400 text-sm mt-1">
            {phase.modules.length} 个模块 · {totalActivities} 个活动
          </p>
        </div>
      </div>

      {/* 阶段内容（始终展开） */}
      <div className="p-6 pt-2 space-y-8 border-t border-slate-700/30">
        {/* 遍历模块 */}
        {phase.modules.map((module) => (
          <ModuleSection key={module.id} module={module} accentHex={phase.accentHex} />
        ))}
      </div>
    </div>
  );
}