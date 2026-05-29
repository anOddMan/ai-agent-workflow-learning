/**
 * @file PhaseTimeline.tsx
 * @description 阶段概览组件 - 时间线形式展示 5 个核心阶段详情
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件以时间线形式展示 AI Agent 的 5 个核心阶段的详细信息：
 *
 * 每个阶段包含：
 * - 阶段编号和标题
 * - 阶段副标题（英文技术名称）
 * - 大致耗时估算
 * - 详细描述说明
 * - 技术栈标签列表
 *
 * 布局特点：
 * - 左侧有时间轴线和圆形节点
 * - 右侧是详情卡片
 * - 移动端隐藏时间轴，改为卡片内嵌编号
 */

// 导入统一数据
import unifiedData from '../data/phasesData';
const { phases } = unifiedData;

/**
 * PhaseTimeline 主组件
 * 渲染 5 个阶段的时间线布局
 */
export default function PhaseTimeline() {
  return (
    // 外层容器：相对定位，用于放置时间轴线
    <div className="relative">
      {/* ===== 时间轴线 ===== */}
      {/* 仅在桌面端显示 */}
      {/* 渐变色时间轴：从蓝到紫到青绿到青到粉 */}
      {/* left-8 使时间轴线位于徽章中心（64px/2=32px=left-8） */}
      {/* top-[56px] 使时间轴线从第一个徽章中心开始（pt-6 + h-16/2 = 24 + 32 = 56） */}
      <div className="absolute left-8 top-[56px] bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-teal-500 via-cyan-500 to-pink-500 hidden md:block" />

      {/* ===== 阶段列表 ===== */}
      <div className="space-y-8">
        {phases.map((phase) => (
          // 每个阶段的容器
          <div key={phase.phaseNumber} className="relative flex gap-6">

            {/* ===== 时间轴节点（桌面端） ===== */}
            {/* w-20 固定宽度，items-start 让徽章与卡片顶部对齐 */}
            {/* pt-6 使徽章与卡片内内容顶部对齐（卡片有 p-6 内边距） */}
            <div className="hidden md:flex flex-col items-center shrink-0 w-20 pt-6">
              {/* 圆形节点 - 阶段编号 */}
              <div className={`w-16 h-16 rounded-full ${phase.bgColor} flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}>
                {phase.phaseNumber}
              </div>
              {/* 耗时标签 */}
              <div className={`mt-2 px-3 py-1 rounded-full ${phase.bgColor}/20 ${phase.color} text-xs font-mono font-bold`}>
                {phase.timeEstimate}
              </div>
            </div>

            {/* ===== 内容卡片 ===== */}
            <div className={`flex-1 card-dark rounded-2xl p-6 ${phase.borderColor} border`}>
              {/* ===== 移动端编号和耗时 ===== */}
              {/* 移动端隐藏左侧时间轴，改为卡片内嵌 */}
              <div className="flex items-center gap-3 mb-1 md:hidden">
                {/* 小圆形编号 */}
                <div className={`w-8 h-8 rounded-full ${phase.bgColor} flex items-center justify-center text-white font-bold text-sm`}>
                  {phase.phaseNumber}
                </div>
                {/* 耗时标签 */}
                <span className={`px-2 py-0.5 rounded-full ${phase.bgColor}/20 ${phase.color} text-xs font-mono font-bold`}>
                  {phase.timeEstimate}
                </span>
              </div>

              {/* ===== 阶段标题 ===== */}
              <h3 className={`text-xl font-bold ${phase.color} mb-1 flex items-center gap-2`}>
                <span className="text-lg">{phase.icon}</span>
                {phase.title}
              </h3>

              {/* ===== 副标题 ===== */}
              <p className="text-slate-500 text-sm font-medium mb-3">
                {phase.subtitle}
              </p>

              {/* ===== 详细描述 ===== */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {phase.description}
              </p>

              {/* ===== 技术栈标签 ===== */}
              <div className="flex flex-wrap gap-2">
                {phase.modules.map((module) => (
                  <span
                    key={module.id}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 text-xs border border-slate-700/50 font-mono flex items-center gap-1"
                  >
                    <span>{module.moduleIcon}</span>
                    {module.moduleName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}