/**
 * @file AgentComparison.tsx
 * @description Agent 对比组件 - 对比 4 个主流 AI Agent 的技术架构
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件展示 4 个主流 AI Agent 的技术架构对比：
 *
 * 1. Claude Code (Anthropic)
 *    - 底层模型：Claude Sonnet/Opus
 *    - Agent 模式：ReAct + Extended Thinking
 *    - 工具协议：Native Tool Use + MCP
 *    - 沙盒：本地进程 + 权限守卫
 *    - 上下文窗口：200K Tokens
 *    - 记忆系统：CLAUDE.md + 项目记忆
 *    - 特色功能：并行工具调用、Git 感知
 *
 * 2. OpenAI Codex (OpenAI)
 *    - 底层模型：codex-mini (o4-mini 微调)
 *    - Agent 模式：ReAct + 云端沙盒
 *    - 工具协议：Function Calling
 *    - 沙盒：云端 Docker 容器
 *    - 上下文窗口：128K-200K Tokens
 *    - 记忆系统：AGENTS.md + Codex 配置
 *    - 特色功能：异步任务、PR 自动生成
 *
 * 3. Harness AI (Harness)
 *    - 底层模型：多模型路由 (GPT/Claude/Gemini)
 *    - Agent 模式：CI/CD Pipeline Agent
 *    - 工具协议：Plugin System + REST
 *    - 沙盒：K8s Pod 隔离
 *    - 上下文窗口：依模型而异
 *    - 记忆系统：Pipeline 上下文传递
 *    - 特色功能：DevOps 全流程自动化
 *
 * 4. Hermes / Devin (Various)
 *    - 底层模型：Claude/GPT + 自有微调
 *    - Agent 模式：全自主 Agent (Plan-Execute)
 *    - 工具协议：Browser + Terminal + Editor
 *    - 沙盒：完整 VM 环境
 *    - 上下文窗口：128K+ Tokens
 *    - 记忆系统：长期项目记忆
 *    - 特色功能：浏览器操控、全栈开发
 */

/**
 * Agent 特性数据结构
 */
interface AgentFeature {
  label: string;  // 特性标签
  value: string;  // 特性值
}

/**
 * Agent 数据结构
 */
interface Agent {
  name: string;           // Agent 名称
  company: string;        // 所属公司
  color: string;          // 主题渐变色类名
  borderColor: string;    // 边框颜色类名
  icon: string;           // emoji 图标
  features: AgentFeature[]; // 特性列表
}

// 4 个 Agent 的配置数据
const agents: Agent[] = [
  {
    name: 'Claude Code',
    company: 'Anthropic',
    color: 'from-orange-500 to-amber-500',
    borderColor: 'border-orange-500/30',
    icon: '🟠',
    features: [
      { label: '底层模型', value: 'Claude Sonnet/Opus' },
      { label: 'Agent 模式', value: 'ReAct + Extended Thinking' },
      { label: '工具协议', value: 'Native Tool Use + MCP' },
      { label: '沙盒', value: '本地进程 + 权限守卫' },
      { label: '上下文窗口', value: '200K Tokens' },
      { label: '记忆系统', value: 'CLAUDE.md + 项目记忆' },
      { label: '特色功能', value: '并行工具调用、Git 感知' },
    ],
  },
  {
    name: 'OpenAI Codex',
    company: 'OpenAI',
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/30',
    icon: '🟢',
    features: [
      { label: '底层模型', value: 'codex-mini (o4-mini 微调)' },
      { label: 'Agent 模式', value: 'ReAct + 云端沙盒' },
      { label: '工具协议', value: 'Function Calling' },
      { label: '沙盒', value: '云端 Docker 容器' },
      { label: '上下文窗口', value: '128K-200K Tokens' },
      { label: '记忆系统', value: 'AGENTS.md + Codex 配置' },
      { label: '特色功能', value: '异步任务、PR 自动生成' },
    ],
  },
  {
    name: 'Harness AI',
    company: 'Harness',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/30',
    icon: '🔵',
    features: [
      { label: '底层模型', value: '多模型路由 (GPT/Claude/Gemini)' },
      { label: 'Agent 模式', value: 'CI/CD Pipeline Agent' },
      { label: '工具协议', value: 'Plugin System + REST' },
      { label: '沙盒', value: 'K8s Pod 隔离' },
      { label: '上下文窗口', value: '依模型而异' },
      { label: '记忆系统', value: 'Pipeline 上下文传递' },
      { label: '特色功能', value: 'DevOps 全流程自动化' },
    ],
  },
  {
    name: 'Hermes / Devin',
    company: 'Various',
    color: 'from-purple-500 to-violet-500',
    borderColor: 'border-purple-500/30',
    icon: '🟣',
    features: [
      { label: '底层模型', value: 'Claude/GPT + 自有微调' },
      { label: 'Agent 模式', value: '全自主 Agent (Plan-Execute)' },
      { label: '工具协议', value: 'Browser + Terminal + Editor' },
      { label: '沙盒', value: '完整 VM 环境' },
      { label: '上下文窗口', value: '128K+ Tokens' },
      { label: '记忆系统', value: '长期项目记忆' },
      { label: '特色功能', value: '浏览器操控、全栈开发' },
    ],
  },
];

/**
 * AgentComparison 主组件
 * 渲染 4 个 Agent 的对比卡片
 */
export default function AgentComparison() {
  return (
    // 2 列网格布局：移动端单列，桌面端双列
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {agents.map((agent) => (
        // 每个 Agent 的卡片
        <div
          key={agent.name}
          className={`card-dark rounded-2xl overflow-hidden ${agent.borderColor} border`}
        >
          {/* ===== 卡片头部 ===== */}
          {/* 渐变背景区域 */}
          <div className={`bg-gradient-to-r ${agent.color} p-4`}>
            <div className="flex items-center gap-3">
              {/* Agent 图标 */}
              <span className="text-3xl">{agent.icon}</span>
              <div>
                {/* Agent 名称 */}
                <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                {/* 所属公司 */}
                <p className="text-white/80 text-sm">{agent.company}</p>
              </div>
            </div>
          </div>

          {/* ===== 特性列表 ===== */}
          <div className="p-5">
            {/* 表格形式展示特性 */}
            <table className="w-full">
              <tbody>
                {agent.features.map((feature, i) => (
                  // 每行一个特性
                  <tr key={i} className="border-b border-slate-700/30 last:border-0">
                    {/* 特性标签 */}
                    <td className="py-2.5 pr-3 text-slate-400 text-sm font-medium whitespace-nowrap">
                      {feature.label}
                    </td>
                    {/* 特性值 */}
                    <td className="py-2.5 text-slate-200 text-sm">
                      {feature.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}