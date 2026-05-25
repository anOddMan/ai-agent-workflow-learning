/**
 * @file PhaseTimeline.tsx
 * @description 8 大阶段详解组件 - 时间线形式展示各阶段详情
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件以时间线形式展示 AI Agent 的 8 个核心阶段的详细信息：
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

/**
 * 阶段数据结构定义
 */
interface Phase {
  number: number;           // 阶段编号 (1-8)
  title: string;            // 阶段标题（中文）
  subtitle: string;         // 阶段副标题（英文技术名称）
  time: string;             // 耗时估算
  color: string;            // 主题色类名（Tailwind CSS）
  glowColor: string;        // 发光效果类名
  borderColor: string;      // 边框颜色类名
  textColor: string;        // 文字颜色类名
  description: string;      // 详细描述
  techStack: string[];      // 技术栈标签列表
}

// 8 个阶段的详细数据配置
const phases: Phase[] = [
  {
    number: 1,
    title: '用户输入层',
    subtitle: 'Input & Routing',
    time: '~10ms',
    color: 'bg-blue-500',
    glowColor: 'glow-blue',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    description: '用户通过 CLI、Web UI 或 IDE 插件输入自然语言指令。客户端进行输入验证、会话管理、附件解析，通过 REST/gRPC/WebSocket 将请求发送至 API 网关。网关负责 JWT 鉴权、路由分发、流量控制和协议转换。',
    techStack: ['REST API', 'WebSocket', 'gRPC', 'JWT/OAuth2', 'Nginx/Kong', 'Kafka'],
  },
  {
    number: 2,
    title: '安全与合规层',
    subtitle: 'Safety & Compliance',
    time: '~50ms',
    color: 'bg-red-500',
    glowColor: 'glow-blue',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    description: '对用户输入进行多层安全检测：Prompt Injection 检测（规则+ML分类器）、PII/PHI 个人信息过滤、有害内容分类、权限等级验证、API 配额检查、沙盒权限控制，以及全链路审计日志记录。',
    techStack: ['Prompt Injection Detector', 'Presidio PII', 'Constitutional AI', 'RBAC', 'GDPR/CCPA', 'Audit Log'],
  },
  {
    number: 3,
    title: '上下文工程',
    subtitle: 'Context Engineering',
    time: '~200ms',
    color: 'bg-purple-500',
    glowColor: 'glow-purple',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    description: '这是 Agent 效果的核心环节。包括：构建 System Prompt（角色/约束/工具定义）、RAG 检索增强（向量检索+BM25+Reranking）、上下文窗口管理（Token 计算/截断/压缩）、记忆系统（短期/长期/工作记忆）。',
    techStack: ['Embedding Models', 'ChromaDB/Pinecone', 'BM25', 'Cross-Encoder', 'tiktoken', 'CLAUDE.md'],
  },
  {
    number: 4,
    title: '大模型推理',
    subtitle: 'LLM Inference',
    time: '~1-30s',
    color: 'bg-green-500',
    glowColor: 'glow-green',
    borderColor: 'border-green-500/30',
    textColor: 'text-green-400',
    description: 'Transformer 模型的核心推理过程。BPE 分词 → Prefill (KV Cache 构建) → 自回归解码 (Flash Attention + MoE) → 采样策略 (Temperature/Top-P/Top-K) → SSE 流式输出。利用 PagedAttention 和 Prompt Cache 大幅提升效率。',
    techStack: ['Transformer', 'Flash Attention 2', 'vLLM', 'PagedAttention', 'KV Cache', 'CUDA/Triton'],
  },
  {
    number: 5,
    title: 'Agent 循环',
    subtitle: 'Agentic Loop & Tool Use',
    time: '~5-300s',
    color: 'bg-orange-500',
    glowColor: 'glow-orange',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-400',
    description: '这是 Agent 与传统 ChatBot 的核心区别。模型输出 Tool Call → 路由到对应工具（文件读写/终端执行/搜索/Web浏览/MCP Server）→ 在沙盒中执行 → 将结果回注上下文 → 再次推理，循环直到任务完成。',
    techStack: ['ReAct Pattern', 'MCP Protocol', 'Docker/gVisor', 'Tool Use', 'Function Calling', 'Plan-Execute'],
  },
  {
    number: 6,
    title: '输出后处理',
    subtitle: 'Post-Processing',
    time: '~100ms',
    color: 'bg-cyan-500',
    glowColor: 'glow-cyan',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400',
    description: '模型输出经过输出安全过滤（有害内容/幻觉检测/PII脱敏）、格式化渲染（Markdown/代码高亮/Diff视图）、多级缓存（Redis精确缓存+语义缓存+Prompt Cache）、Token计量计费等处理后交付用户。',
    techStack: ['SSE Streaming', 'Redis', 'Semantic Cache', 'Shiki', 'Markdown-it', 'Token Billing'],
  },
  {
    number: 7,
    title: '可观测性',
    subtitle: 'Observability & Optimization',
    time: '持续',
    color: 'bg-yellow-500',
    glowColor: 'glow-blue',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400',
    description: '全链路可观测性体系：Prometheus/Grafana 监控指标（TTFT/TPS/P99延迟/GPU利用率）、OpenTelemetry 分布式追踪、LangSmith/Braintrust LLM 专用追踪、自动化 Evals 评测、A/B 实验、RLHF 用户反馈收集。',
    techStack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'LangSmith', 'Braintrust', 'RLHF Evals'],
  },
  {
    number: 8,
    title: '响应交付',
    subtitle: 'Response Delivery',
    time: '~50ms',
    color: 'bg-pink-500',
    glowColor: 'glow-blue',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400',
    description: '最终响应通过 SSE 流式传输给客户端，客户端实时渲染 Markdown、代码高亮、Diff 视图。用户可进行 Accept/Reject 审批，反馈数据回流至 RLHF 训练数据集，形成数据飞轮。',
    techStack: ['Server-Sent Events', 'Incremental Rendering', 'Diff View', 'User Feedback', 'RLHF Data', 'A/B Testing'],
  },
];

/**
 * PhaseTimeline 主组件
 * 渲染 8 个阶段的时间线布局
 */
export default function PhaseTimeline() {
  return (
    // 外层容器：相对定位，用于放置时间轴线
    <div className="relative">
      {/* ===== 时间轴线 ===== */}
      {/* 仅在桌面端显示 */}
      {/* 渐变色时间轴：从蓝到紫到绿到橙到粉 */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 to-pink-500 hidden md:block" />

      {/* ===== 阶段列表 ===== */}
      <div className="space-y-8">
        {phases.map((phase) => (
          // 每个阶段的容器
          <div key={phase.number} className="relative flex gap-6">

            {/* ===== 时间轴节点（桌面端） ===== */}
            <div className="hidden md:flex flex-col items-center">
              {/* 圆形节点 - 阶段编号 */}
              <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}>
                {phase.number}
              </div>
              {/* 耗时标签 */}
              <div className={`mt-2 px-3 py-1 rounded-full ${phase.color}/20 ${phase.textColor} text-xs font-mono font-bold`}>
                {phase.time}
              </div>
            </div>

            {/* ===== 内容卡片 ===== */}
            <div className={`flex-1 card-dark rounded-2xl p-6 ${phase.borderColor} border`}>
              {/* ===== 移动端编号和耗时 ===== */}
              {/* 移动端隐藏左侧时间轴，改为卡片内嵌 */}
              <div className="flex items-center gap-3 mb-1 md:hidden">
                {/* 小圆形编号 */}
                <div className={`w-8 h-8 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {phase.number}
                </div>
                {/* 耗时标签 */}
                <span className={`px-2 py-0.5 rounded-full ${phase.color}/20 ${phase.textColor} text-xs font-mono font-bold`}>
                  {phase.time}
                </span>
              </div>

              {/* ===== 阶段标题 ===== */}
              <h3 className={`text-xl font-bold ${phase.textColor} mb-1`}>
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
                {phase.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 text-xs border border-slate-700/50 font-mono"
                  >
                    {tech}
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