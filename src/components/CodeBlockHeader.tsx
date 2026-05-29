/**
 * @file CodeBlockHeader.tsx
 * @description 代码块头部装饰组件 - macOS 风格的红黄绿圆点
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件用于在代码块顶部显示 macOS 窗口风格的装饰：
 * - 红色圆点（关闭）
 * - 黄色圆点（最小化）
 * - 绿色圆点（最大化）
 * - 可选的语言标签
 */

interface CodeBlockHeaderProps {
  language?: string;  // 代码语言标识，如 'TypeScript'、'Python'
}

/**
 * CodeBlockHeader 组件
 * 渲染 macOS 风格的代码块头部装饰
 */
export default function CodeBlockHeader({ language }: CodeBlockHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700/50">
      {/* 红色按钮 - 关闭 */}
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
      {/* 黄色按钮 - 最小化 */}
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
      {/* 绿色按钮 - 最大化 */}
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
      {/* 语言标签 */}
      {language && (
        <span className="text-slate-500 text-xs ml-1">{language}</span>
      )}
    </div>
  );
}