/**
 * @file agentsData.ts
 * @description Agent 对比数据 - 4 个主流 AI Agent 的技术架构对比数据
 * @author AI Agent Technical Workflow Analysis
 */

/**
 * Agent 特性数据结构
 */
export interface AgentFeature {
  label: string;  // 特性标签
  value: string;  // 特性值
}

/**
 * Agent 数据结构
 */
export interface Agent {
  name: string;           // Agent 名称
  company: string;        // 所属公司
  color: string;          // 主题渐变色类名
  borderColor: string;    // 边框颜色类名
  icon: string;           // emoji 图标
  features: AgentFeature[]; // 特性列表
}

// 4 个 Agent 的配置数据
export const agents: Agent[] = [
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