/**
 * @file FlowDiagramSVG.tsx
 * @description 全景流程图组件 - SVG 格式的 AI Agent 底层业务流程全景图（修订版）
 * @author AI Agent Technical Workflow Analysis
 *
 * SVG 尺寸：1400 x 1860（纵向长图）
 * 配色方案：蓝、紫、青绿、青、粉为主色调，适配深色背景
 */

export default function FlowDiagramSVG() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <svg
        viewBox="0 0 1400 1860"
        className="mx-auto min-w-[900px] max-w-[1400px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 蓝色渐变 - 阶段1 */}
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6"/>
            <stop offset="100%" stopColor="#2563eb"/>
          </linearGradient>
          {/* 紫色渐变 - 阶段2 */}
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6"/>
            <stop offset="100%" stopColor="#7c3aed"/>
          </linearGradient>
          {/* 青绿渐变 - 阶段3 Agent循环 */}
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6"/>
            <stop offset="100%" stopColor="#0d9488"/>
          </linearGradient>
          {/* 青色渐变 - 阶段4 */}
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4"/>
            <stop offset="100%" stopColor="#0891b2"/>
          </linearGradient>
          {/* 粉紫渐变 - 阶段5 */}
          <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899"/>
            <stop offset="100%" stopColor="#db2777"/>
          </linearGradient>
          {/* 灰蓝渐变 - 离线闭环 */}
          <linearGradient id="slateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b"/>
            <stop offset="100%" stopColor="#475569"/>
          </linearGradient>

          {/* 发光滤镜 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* 箭头标记 */}
          <marker id="aBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0,10 3.5,0 7" fill="#60a5fa"/>
          </marker>
          <marker id="aPurple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0,10 3.5,0 7" fill="#c4b5fd"/>
          </marker>
          <marker id="aTeal" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0,10 3.5,0 7" fill="#5eead4"/>
          </marker>
          <marker id="aCyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0,10 3.5,0 7" fill="#22d3ee"/>
          </marker>
          <marker id="aPink" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0,10 3.5,0 7" fill="#f9a8d4"/>
          </marker>
          <marker id="aSlate" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0,10 3.5,0 7" fill="#94a3b8"/>
          </marker>
        </defs>

        {/* 标题 */}
        <text x="700" y="38" textAnchor="middle" fill="#f8fafc" fontSize="26" fontWeight="bold" filter="url(#glow)">
          AI Agent 底层业务流程全景图 · 修订版
        </text>
        <text x="700" y="62" textAnchor="middle" fill="#94a3b8" fontSize="13">
          推理内嵌于 Agent 循环 · 安全/可观测贯穿全程 · 审批前置 · 横切能力去重 (Claude Code / Codex / Cursor / Devin)
        </text>

        {/* 图例: 横切能力 */}
        <rect x="200" y="80" width="1000" height="48" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
        <text x="218" y="100" fill="#f8fafc" fontSize="11" fontWeight="bold">横切能力图例 (在多个环节复用, 不重复绘制):</text>
        <text x="218" y="119" fill="#cbd5e1" fontSize="11">🔒 鉴权(网关唯一入口)   🚦 限流   📝 日志/追踪   ⚡ 缓存(Prompt/语义)   📡 流式 SSE   💰 计量计费   🛡️ 安全护栏</text>

        {/* ===== 左侧泳道: 安全与合规 - 蓝紫色 ===== */}
        <rect x="30" y="150" width="150" height="1300" rx="14" fill="#172554" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="30" y="150" width="150" height="34" rx="14" fill="url(#blueGrad)"/>
        <text x="105" y="172" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">🛡️ 安全与合规</text>
        <text x="105" y="202" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">(贯穿全程 · 横切层)</text>
        <text x="105" y="240" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">入口侧</text>
        <text x="105" y="262" textAnchor="middle" fill="#e2e8f0" fontSize="10">Prompt 注入检测</text>
        <text x="105" y="280" textAnchor="middle" fill="#e2e8f0" fontSize="10">有害内容分类</text>
        <text x="105" y="298" textAnchor="middle" fill="#e2e8f0" fontSize="10">PII/PHI 识别</text>
        <text x="105" y="320" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">执行侧</text>
        <text x="105" y="342" textAnchor="middle" fill="#e2e8f0" fontSize="10">权限/配额校验</text>
        <text x="105" y="360" textAnchor="middle" fill="#e2e8f0" fontSize="10">Tool Use 授权</text>
        <text x="105" y="378" textAnchor="middle" fill="#e2e8f0" fontSize="10">沙盒权限控制</text>
        <text x="105" y="400" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">出口侧</text>
        <text x="105" y="422" textAnchor="middle" fill="#e2e8f0" fontSize="10">输出有害过滤</text>
        <text x="105" y="440" textAnchor="middle" fill="#e2e8f0" fontSize="10">PII 脱敏/版权</text>
        <text x="105" y="458" textAnchor="middle" fill="#e2e8f0" fontSize="10">代码安全审计</text>
        <text x="105" y="480" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">合规底座</text>
        <text x="105" y="502" textAnchor="middle" fill="#e2e8f0" fontSize="10">GDPR/CCPA</text>
        <text x="105" y="520" textAnchor="middle" fill="#e2e8f0" fontSize="10">数据驻留策略</text>
        <text x="105" y="538" textAnchor="middle" fill="#e2e8f0" fontSize="10">审计可追溯</text>
        <text x="105" y="560" textAnchor="middle" fill="#e2e8f0" fontSize="10">Constitutional AI</text>
        <line x1="55" y1="585" x2="155" y2="585" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3"/>
        <text x="105" y="606" textAnchor="middle" fill="#60a5fa" fontSize="9" fontStyle="italic">↕ 作用于每个阶段</text>

        {/* ===== 右侧泳道: 可观测性 - 紫色 ===== */}
        <rect x="1220" y="150" width="150" height="1300" rx="14" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2"/>
        <rect x="1220" y="150" width="150" height="34" rx="14" fill="url(#purpleGrad)"/>
        <text x="1295" y="172" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold">📊 可观测性</text>
        <text x="1295" y="202" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="bold">(贯穿全程 · 横切层)</text>
        <text x="1295" y="238" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold">指标 Metrics</text>
        <text x="1295" y="260" textAnchor="middle" fill="#e2e8f0" fontSize="10">TTFT / TPS</text>
        <text x="1295" y="278" textAnchor="middle" fill="#e2e8f0" fontSize="10">P99 延迟 / 错误率</text>
        <text x="1295" y="296" textAnchor="middle" fill="#e2e8f0" fontSize="10">GPU 利用率</text>
        <text x="1295" y="318" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold">追踪 Tracing</text>
        <text x="1295" y="340" textAnchor="middle" fill="#e2e8f0" fontSize="10">OpenTelemetry</text>
        <text x="1295" y="358" textAnchor="middle" fill="#e2e8f0" fontSize="10">LLM 调用链</text>
        <text x="1295" y="376" textAnchor="middle" fill="#e2e8f0" fontSize="10">Tool Call 链路</text>
        <text x="1295" y="398" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold">日志 Logging</text>
        <text x="1295" y="420" textAnchor="middle" fill="#e2e8f0" fontSize="10">请求/响应全链路</text>
        <text x="1295" y="438" textAnchor="middle" fill="#e2e8f0" fontSize="10">结构化事件流</text>
        <text x="1295" y="460" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold">计量 Metering</text>
        <text x="1295" y="482" textAnchor="middle" fill="#e2e8f0" fontSize="10">Token 计费</text>
        <text x="1295" y="500" textAnchor="middle" fill="#e2e8f0" fontSize="10">Tool Use 计费</text>
        <text x="1295" y="518" textAnchor="middle" fill="#e2e8f0" fontSize="10">预算告警</text>
        <text x="1295" y="540" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="bold">在线评估</text>
        <text x="1295" y="562" textAnchor="middle" fill="#e2e8f0" fontSize="10">实时 Evals / 守护</text>
        <line x1="1245" y1="585" x2="1345" y2="585" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="3 3"/>
        <text x="1295" y="606" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontStyle="italic">↕ 采集每个阶段</text>
        <text x="1295" y="640" textAnchor="middle" fill="#c4b5fd" fontSize="9">数据 → 离线闭环 ↓</text>

        {/* ===== STAGE 1: 接入与网关 - 蓝色 ===== */}
        <rect x="200" y="160" width="1000" height="150" rx="14" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4"/>
        <rect x="200" y="150" width="230" height="26" rx="6" fill="url(#blueGrad)"/>
        <text x="315" y="168" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">阶段 1 · 接入与网关</text>

        <rect x="220" y="200" width="130" height="90" rx="10" fill="#172554" stroke="#60a5fa" strokeWidth="1.5"/>
        <text x="285" y="232" textAnchor="middle" fill="#60a5fa" fontSize="22">👤</text>
        <text x="285" y="258" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">用户</text>
        <text x="285" y="276" textAnchor="middle" fill="#cbd5e1" fontSize="10">自然语言输入</text>
        <line x1="350" y1="245" x2="392" y2="245" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#aBlue)"/>

        <rect x="400" y="200" width="220" height="90" rx="10" fill="#172554" stroke="#60a5fa" strokeWidth="1.5"/>
        <text x="510" y="222" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">客户端预处理</text>
        <text x="510" y="242" textAnchor="middle" fill="#cbd5e1" fontSize="10">输入校验/清洗 · 附件解析</text>
        <text x="510" y="259" textAnchor="middle" fill="#cbd5e1" fontSize="10">会话上下文 · 🔒携带 Token</text>
        <text x="510" y="276" textAnchor="middle" fill="#64748b" fontSize="9">(仅携带凭证, 不做鉴权)</text>
        <line x1="620" y1="245" x2="662" y2="245" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#aBlue)"/>
        <text x="641" y="238" textAnchor="middle" fill="#60a5fa" fontSize="9">HTTPS/WS</text>

        <rect x="670" y="200" width="230" height="90" rx="10" fill="#172554" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)"/>
        <text x="785" y="222" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">API 网关 (唯一可信入口)</text>
        <text x="785" y="242" textAnchor="middle" fill="#cbd5e1" fontSize="10">🔒 鉴权 JWT/OAuth2 · 🚦 限流</text>
        <text x="785" y="259" textAnchor="middle" fill="#cbd5e1" fontSize="10">路由/负载均衡 · 协议转换</text>
        <text x="785" y="276" textAnchor="middle" fill="#cbd5e1" fontSize="10">📝 请求日志注入 TraceID</text>
        <line x1="900" y1="245" x2="942" y2="245" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#aBlue)"/>

        <rect x="950" y="200" width="230" height="90" rx="10" fill="#172554" stroke="#60a5fa" strokeWidth="1.5"/>
        <text x="1065" y="222" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="bold">请求分流</text>
        <text x="1065" y="244" textAnchor="middle" fill="#f8fafc" fontSize="10">● 实时对话 → SSE 同步链路 ↓</text>
        <text x="1065" y="263" textAnchor="middle" fill="#cbd5e1" fontSize="10">● 长任务/批处理 → MQ 异步</text>
        <text x="1065" y="280" textAnchor="middle" fill="#64748b" fontSize="9">(Kafka 削峰, 回调通知)</text>

        <line x1="700" y1="310" x2="700" y2="356" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#aSlate)"/>

        {/* ===== STAGE 2: 上下文工程 - 紫色 ===== */}
        <rect x="200" y="360" width="1000" height="170" rx="14" fill="#1e1b4b" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4"/>
        <rect x="200" y="350" width="230" height="26" rx="6" fill="url(#purpleGrad)"/>
        <text x="315" y="368" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">阶段 2 · 上下文工程</text>

        <rect x="220" y="400" width="225" height="115" rx="10" fill="#1e1b4b" stroke="#c4b5fd" strokeWidth="1.5"/>
        <text x="332" y="424" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="bold">📝 System Prompt 构建</text>
        <text x="332" y="446" textAnchor="middle" fill="#cbd5e1" fontSize="10">角色/人格 · 行为规范</text>
        <text x="332" y="464" textAnchor="middle" fill="#cbd5e1" fontSize="10">Tool definitions 注入</text>
        <text x="332" y="482" textAnchor="middle" fill="#cbd5e1" fontSize="10">输出格式指令 · 🛡️护栏</text>
        <text x="332" y="500" textAnchor="middle" fill="#cbd5e1" fontSize="10">项目/持久指令 (CLAUDE.md)</text>
        <line x1="445" y1="457" x2="487" y2="457" stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#aPurple)"/>

        <rect x="495" y="400" width="225" height="115" rx="10" fill="#1e1b4b" stroke="#c4b5fd" strokeWidth="1.5"/>
        <text x="607" y="424" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="bold">🔍 检索与记忆 (统一)</text>
        <text x="607" y="446" textAnchor="middle" fill="#cbd5e1" fontSize="10">RAG: 代码/文档向量检索</text>
        <text x="607" y="464" textAnchor="middle" fill="#cbd5e1" fontSize="10">语义记忆 (共用向量底座)</text>
        <text x="607" y="482" textAnchor="middle" fill="#cbd5e1" fontSize="10">短期/长期/工作记忆</text>
        <text x="607" y="500" textAnchor="middle" fill="#cbd5e1" fontSize="10">Re-ranking 重排序</text>
        <line x1="720" y1="457" x2="762" y2="457" stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#aPurple)"/>

        <rect x="770" y="400" width="225" height="115" rx="10" fill="#1e1b4b" stroke="#c4b5fd" strokeWidth="1.5"/>
        <text x="882" y="424" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="bold">📦 上下文窗口管理</text>
        <text x="882" y="446" textAnchor="middle" fill="#cbd5e1" fontSize="10">Token 预估 (tiktoken)</text>
        <text x="882" y="464" textAnchor="middle" fill="#cbd5e1" fontSize="10">历史截断 · 滑窗压缩</text>
        <text x="882" y="482" textAnchor="middle" fill="#cbd5e1" fontSize="10">关键信息摘要 · 优先级</text>
        <text x="882" y="500" textAnchor="middle" fill="#cbd5e1" fontSize="10">多模态内容编码</text>
        <line x1="995" y1="457" x2="1037" y2="457" stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#aPurple)"/>

        <rect x="1045" y="400" width="135" height="115" rx="10" fill="#2e2654" stroke="#c4b5fd" strokeWidth="1.5"/>
        <text x="1112" y="430" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="bold">⚡ 缓存命中</text>
        <text x="1112" y="454" textAnchor="middle" fill="#cbd5e1" fontSize="10">Prompt Cache</text>
        <text x="1112" y="472" textAnchor="middle" fill="#cbd5e1" fontSize="10">语义缓存</text>
        <text x="1112" y="494" textAnchor="middle" fill="#64748b" fontSize="9">命中则直接</text>
        <text x="1112" y="508" textAnchor="middle" fill="#64748b" fontSize="9">跳到阶段 4</text>

        <line x1="700" y1="530" x2="700" y2="576" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#aSlate)"/>

        {/* ===== STAGE 3: AGENT 循环 - 青绿色 ===== */}
        <rect x="200" y="580" width="1000" height="560" rx="14" fill="#134e4a" stroke="#14b8a6" strokeWidth="2.5" strokeDasharray="6 4"/>
        <rect x="200" y="570" width="340" height="26" rx="6" fill="url(#tealGrad)"/>
        <text x="370" y="588" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">阶段 3 · Agent 循环 (推理内嵌于循环)</text>
        <text x="700" y="615" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">
          ⟲ ReAct: 推理(LLM) → 决策 → [需工具] 审批·执行·回注 → 再推理 … 直到产出最终回答
        </text>

        {/* 顶行: 规划 → LLM推理 → 决策菱形 → 最终回答 */}
        <rect x="225" y="640" width="180" height="120" rx="10" fill="#134e4a" stroke="#5eead4" strokeWidth="1.5"/>
        <text x="315" y="664" textAnchor="middle" fill="#5eead4" fontSize="12" fontWeight="bold">🎯 规划/意图</text>
        <text x="315" y="686" textAnchor="middle" fill="#cbd5e1" fontSize="10">任务分解</text>
        <text x="315" y="704" textAnchor="middle" fill="#cbd5e1" fontSize="10">多步骤规划</text>
        <text x="315" y="722" textAnchor="middle" fill="#cbd5e1" fontSize="10">依赖分析</text>
        <text x="315" y="740" textAnchor="middle" fill="#cbd5e1" fontSize="10">(首轮 / 重规划)</text>
        <line x1="405" y1="700" x2="447" y2="700" stroke="#5eead4" strokeWidth="2" markerEnd="url(#aTeal)"/>

        {/* LLM 推理引擎 - 青绿色高亮 */}
        <rect x="455" y="635" width="300" height="130" rx="10" fill="#0f766e" stroke="#14b8a6" strokeWidth="2.5" filter="url(#glowStrong)"/>
        <text x="605" y="658" textAnchor="middle" fill="#5eead4" fontSize="13" fontWeight="bold">🧠 LLM 推理引擎 (循环核心)</text>
        <text x="605" y="680" textAnchor="middle" fill="#cbd5e1" fontSize="10">Tokenize(BPE) → Prefill(KV Cache/Flash Attn)</text>
        <text x="605" y="698" textAnchor="middle" fill="#cbd5e1" fontSize="10">Transformer: MHA · FFN/MoE · 自回归解码</text>
        <text x="605" y="716" textAnchor="middle" fill="#cbd5e1" fontSize="10">采样: Temperature · Top-P/K · 重复惩罚</text>
        <text x="605" y="734" textAnchor="middle" fill="#cbd5e1" fontSize="10">⚡ 命中 Prompt Cache · GPU 集群调度</text>
        <text x="605" y="752" textAnchor="middle" fill="#5eead4" fontSize="9" fontStyle="italic">每轮循环都会执行 — 不是一次性步骤</text>
        <line x1="755" y1="700" x2="800" y2="700" stroke="#5eead4" strokeWidth="2" markerEnd="url(#aTeal)"/>

        {/* 决策菱形 */}
        <polygon points="865,650 935,700 865,750 795,700" fill="#134e4a" stroke="#14b8a6" strokeWidth="2"/>
        <text x="865" y="694" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">需要</text>
        <text x="865" y="710" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">工具?</text>
        <line x1="935" y1="700" x2="977" y2="700" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#aCyan)"/>
        <text x="958" y="692" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">否</text>

        <rect x="985" y="640" width="190" height="120" rx="10" fill="#134e4a" stroke="#22d3ee" strokeWidth="1.5"/>
        <text x="1080" y="668" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">✍️ 生成最终回答</text>
        <text x="1080" y="690" textAnchor="middle" fill="#cbd5e1" fontSize="10">完整作答内容</text>
        <text x="1080" y="708" textAnchor="middle" fill="#cbd5e1" fontSize="10">停止序列触发</text>
        <text x="1080" y="726" textAnchor="middle" fill="#cbd5e1" fontSize="10">📡 开始流式输出</text>
        <text x="1080" y="744" textAnchor="middle" fill="#64748b" fontSize="9">(此时才推给用户)</text>

        {/* "是" 路径 */}
        <text x="845" y="772" textAnchor="middle" fill="#5eead4" fontSize="10" fontWeight="bold">是</text>
        <path d="M 865 750 L 865 800 L 315 800 L 315 840" fill="none" stroke="#5eead4" strokeWidth="2" markerEnd="url(#aTeal)"/>
        <text x="560" y="793" textAnchor="middle" fill="#5eead4" fontSize="10">调用工具 (含参数抽取 JSON)</text>

        {/* 底行: 工具路由 → HITL审批 → 沑盒 → 结果回注 */}
        <rect x="225" y="840" width="180" height="120" rx="10" fill="#134e4a" stroke="#5eead4" strokeWidth="1.5"/>
        <text x="315" y="864" textAnchor="middle" fill="#5eead4" fontSize="12" fontWeight="bold">🔧 工具路由器</text>
        <text x="315" y="886" textAnchor="middle" fill="#cbd5e1" fontSize="10">文件读写 · bash</text>
        <text x="315" y="904" textAnchor="middle" fill="#cbd5e1" fontSize="10">grep/glob · Web</text>
        <text x="315" y="922" textAnchor="middle" fill="#cbd5e1" fontSize="10">MCP Server</text>
        <text x="315" y="940" textAnchor="middle" fill="#cbd5e1" fontSize="10">🔒 Tool 授权检查</text>
        <line x1="405" y1="900" x2="447" y2="900" stroke="#5eead4" strokeWidth="2" markerEnd="url(#aTeal)"/>

        {/* HITL 审批菱形 */}
        <polygon points="525,850 600,900 525,950 450,900" fill="#134e4a" stroke="#14b8a6" strokeWidth="2"/>
        <text x="525" y="894" textAnchor="middle" fill="#5eead4" fontSize="10" fontWeight="bold">高危</text>
        <text x="525" y="910" textAnchor="middle" fill="#5eead4" fontSize="10" fontWeight="bold">操作?</text>

        {/* 用户审批分支 */}
        <rect x="455" y="1000" width="170" height="78" rx="10" fill="#134e4a" stroke="#5eead4" strokeWidth="1.5"/>
        <text x="540" y="1024" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">✅ 用户审批 (HITL)</text>
        <text x="540" y="1044" textAnchor="middle" fill="#cbd5e1" fontSize="10">变更预览 · Diff</text>
        <text x="540" y="1062" textAnchor="middle" fill="#cbd5e1" fontSize="10">Accept / Reject</text>
        <path d="M 525 950 L 525 998" fill="none" stroke="#5eead4" strokeWidth="2"/>
        <text x="582" y="978" textAnchor="middle" fill="#5eead4" fontSize="9">需确认</text>

        {/* 审批通过 → 沙盒 */}
        <path d="M 625 1030 L 720 1030 L 720 962" fill="none" stroke="#5eead4" strokeWidth="2"/>
        <text x="700" y="1050" textAnchor="middle" fill="#5eead4" fontSize="9">批准后执行 / 拒绝则回注反馈</text>

        {/* 低危直接执行 */}
        <line x1="600" y1="900" x2="647" y2="900" stroke="#5eead4" strokeWidth="2" markerEnd="url(#aTeal)"/>
        <text x="623" y="892" textAnchor="middle" fill="#cbd5e1" fontSize="9">低危/自动</text>

        {/* 沙盒执行 - 青绿色高亮 */}
        <rect x="650" y="840" width="180" height="120" rx="10" fill="#0f766e" stroke="#14b8a6" strokeWidth="2" filter="url(#glow)"/>
        <text x="740" y="864" textAnchor="middle" fill="#5eead4" fontSize="12" fontWeight="bold">📦 沙盒执行</text>
        <text x="740" y="886" textAnchor="middle" fill="#cbd5e1" fontSize="10">Docker/gVisor 隔离</text>
        <text x="740" y="904" textAnchor="middle" fill="#cbd5e1" fontSize="10">文件快照 · 网络策略</text>
        <text x="740" y="922" textAnchor="middle" fill="#cbd5e1" fontSize="10">资源配额 CPU/Mem</text>
        <text x="740" y="940" textAnchor="middle" fill="#cbd5e1" fontSize="10">超时 · 自动回滚</text>
        <line x1="830" y1="900" x2="872" y2="900" stroke="#5eead4" strokeWidth="2" markerEnd="url(#aTeal)"/>

        <rect x="880" y="840" width="180" height="120" rx="10" fill="#134e4a" stroke="#5eead4" strokeWidth="1.5"/>
        <text x="970" y="864" textAnchor="middle" fill="#5eead4" fontSize="12" fontWeight="bold">🔄 结果回注</text>
        <text x="970" y="886" textAnchor="middle" fill="#cbd5e1" fontSize="10">Tool Result 格式化</text>
        <text x="970" y="904" textAnchor="middle" fill="#cbd5e1" fontSize="10">错误处理 · 重试</text>
        <text x="970" y="922" textAnchor="middle" fill="#cbd5e1" fontSize="10">结果截断 · 追加上下文</text>
        <text x="970" y="940" textAnchor="middle" fill="#cbd5e1" fontSize="10">观察 → 准备再推理</text>

        {/* 回路 */}
        <path d="M 970 840 L 970 600 L 605 600 L 605 633" fill="none" stroke="#5eead4" strokeWidth="2.5" markerEnd="url(#aTeal)" strokeDasharray="9 5"/>
        <text x="788" y="592" textAnchor="middle" fill="#5eead4" fontSize="11" fontWeight="bold">⟲ 回注后再次进入 LLM 推理 (循环直到无需工具)</text>

        {/* 阶段3 出口 */}
        <path d="M 1080 760 L 1080 1110 L 700 1110 L 700 1166" fill="none" stroke="#22d3ee" strokeWidth="2.5" markerEnd="url(#aCyan)"/>
        <text x="1095" y="940" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold" transform="rotate(90,1095,940)">最终回答出口</text>

        {/* ===== STAGE 4: 输出后处理 - 青色 ===== */}
        <rect x="200" y="1170" width="1000" height="150" rx="14" fill="#164e63" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6 4"/>
        <rect x="200" y="1160" width="280" height="26" rx="6" fill="url(#cyanGrad)"/>
        <text x="340" y="1178" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">阶段 4 · 输出后处理 (服务端)</text>

        <rect x="230" y="1205" width="290" height="100" rx="10" fill="#164e63" stroke="#22d3ee" strokeWidth="1.5"/>
        <text x="375" y="1229" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">🛡️ 输出安全 + 结构化</text>
        <text x="375" y="1251" textAnchor="middle" fill="#cbd5e1" fontSize="10">有害/幻觉检测 · 代码安全审计</text>
        <text x="375" y="1269" textAnchor="middle" fill="#cbd5e1" fontSize="10">PII 脱敏 · 版权过滤</text>
        <text x="375" y="1289" textAnchor="middle" fill="#cbd5e1" fontSize="10">Markdown/Diff 结构化 (生成数据)</text>
        <line x1="520" y1="1255" x2="562" y2="1255" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#aCyan)"/>

        <rect x="570" y="1205" width="290" height="100" rx="10" fill="#164e63" stroke="#22d3ee" strokeWidth="1.5"/>
        <text x="715" y="1229" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">⚡ 缓存与持久化</text>
        <text x="715" y="1251" textAnchor="middle" fill="#cbd5e1" fontSize="10">写入 Prompt Cache / 语义缓存</text>
        <text x="715" y="1269" textAnchor="middle" fill="#cbd5e1" fontSize="10">会话状态持久化</text>
        <text x="715" y="1289" textAnchor="middle" fill="#cbd5e1" fontSize="10">CDN 边缘缓存</text>
        <line x1="860" y1="1255" x2="902" y2="1255" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#aCyan)"/>

        <rect x="910" y="1205" width="270" height="100" rx="10" fill="#164e63" stroke="#22d3ee" strokeWidth="1.5"/>
        <text x="1045" y="1229" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">💰 计量计费</text>
        <text x="1045" y="1251" textAnchor="middle" fill="#cbd5e1" fontSize="10">Input/Output Token 计费</text>
        <text x="1045" y="1269" textAnchor="middle" fill="#cbd5e1" fontSize="10">Tool Use 次数 · 计算资源</text>
        <text x="1045" y="1289" textAnchor="middle" fill="#64748b" fontSize="9">(数据来自右侧可观测层)</text>

        <line x1="700" y1="1320" x2="700" y2="1366" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#aSlate)"/>

        {/* ===== STAGE 5: 响应交付 - 粉紫色 ===== */}
        <rect x="200" y="1370" width="1000" height="130" rx="14" fill="#4c1d95" stroke="#ec4899" strokeWidth="2" strokeDasharray="6 4"/>
        <rect x="200" y="1360" width="260" height="26" rx="6" fill="url(#pinkGrad)"/>
        <text x="330" y="1378" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">阶段 5 · 响应交付 (客户端)</text>

        <rect x="230" y="1405" width="260" height="80" rx="10" fill="#4c1d95" stroke="#f9a8d4" strokeWidth="1.5"/>
        <text x="360" y="1430" textAnchor="middle" fill="#f9a8d4" fontSize="12" fontWeight="bold">📡 SSE 流式传输</text>
        <text x="360" y="1451" textAnchor="middle" fill="#cbd5e1" fontSize="10">Server-Sent Events · 背压控制</text>
        <text x="360" y="1469" textAnchor="middle" fill="#cbd5e1" fontSize="10">断线重连 · 增量 Diff 传输</text>
        <line x1="490" y1="1445" x2="532" y2="1445" stroke="#f9a8d4" strokeWidth="2" markerEnd="url(#aPink)"/>

        <rect x="540" y="1405" width="290" height="80" rx="10" fill="#4c1d95" stroke="#f9a8d4" strokeWidth="1.5"/>
        <text x="685" y="1430" textAnchor="middle" fill="#f9a8d4" fontSize="12" fontWeight="bold">🖥️ 客户端渲染</text>
        <text x="685" y="1451" textAnchor="middle" fill="#cbd5e1" fontSize="10">实时 Markdown · 代码高亮 · Diff</text>
        <text x="685" y="1469" textAnchor="middle" fill="#cbd5e1" fontSize="10">LaTeX · 渐进渲染 (仅展示, 不重复处理)</text>
        <line x1="830" y1="1445" x2="872" y2="1445" stroke="#f9a8d4" strokeWidth="2" markerEnd="url(#aPink)"/>

        <rect x="880" y="1405" width="290" height="80" rx="10" fill="#4c1d95" stroke="#f9a8d4" strokeWidth="1.5"/>
        <text x="1015" y="1432" textAnchor="middle" fill="#f9a8d4" fontSize="22">👤</text>
        <text x="1015" y="1456" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">用户获得最终响应</text>
        <text x="1015" y="1475" textAnchor="middle" fill="#cbd5e1" fontSize="10">满意度反馈 → 喂给离线闭环</text>

        {/* ===== 离线优化闭环 - 灰色 ===== */}
        <rect x="200" y="1540" width="1000" height="150" rx="14" fill="#1e293b" stroke="#64748b" strokeWidth="2" strokeDasharray="10 5"/>
        <rect x="200" y="1530" width="360" height="26" rx="6" fill="url(#slateGrad)"/>
        <text x="380" y="1548" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">离线优化闭环 (跨请求 · 非实时 · 长周期)</text>

        <rect x="230" y="1575" width="215" height="95" rx="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="337" y="1599" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">📊 数据与评估</text>
        <text x="337" y="1620" textAnchor="middle" fill="#cbd5e1" fontSize="10">用户反馈/RLHF 数据集</text>
        <text x="337" y="1638" textAnchor="middle" fill="#cbd5e1" fontSize="10">自动化 Evals 评测</text>
        <text x="337" y="1656" textAnchor="middle" fill="#cbd5e1" fontSize="10">A/B 实验分析</text>
        <line x1="445" y1="1622" x2="487" y2="1622" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#aSlate)"/>

        <rect x="495" y="1575" width="215" height="95" rx="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="602" y="1599" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">🔧 模型/Prompt 迭代</text>
        <text x="602" y="1620" textAnchor="middle" fill="#cbd5e1" fontSize="10">Fine-tuning / 对齐训练</text>
        <text x="602" y="1638" textAnchor="middle" fill="#cbd5e1" fontSize="10">Prompt 版本管理</text>
        <text x="602" y="1656" textAnchor="middle" fill="#cbd5e1" fontSize="10">安全策略更新</text>
        <line x1="710" y1="1622" x2="752" y2="1622" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#aSlate)"/>

        <rect x="760" y="1575" width="215" height="95" rx="10" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="867" y="1599" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">🚀 灰度发布</text>
        <text x="867" y="1620" textAnchor="middle" fill="#cbd5e1" fontSize="10">新模型/Prompt 上线</text>
        <text x="867" y="1638" textAnchor="middle" fill="#cbd5e1" fontSize="10">金丝雀 / 回滚</text>
        <text x="867" y="1656" textAnchor="middle" fill="#cbd5e1" fontSize="10">回流至阶段 2/3</text>

        <rect x="995" y="1575" width="180" height="95" rx="10" fill="#334155" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="1085" y="1610" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">↺ 持续改进</text>
        <text x="1085" y="1632" textAnchor="middle" fill="#cbd5e1" fontSize="10">能力回流到</text>
        <text x="1085" y="1650" textAnchor="middle" fill="#cbd5e1" fontSize="10">在线链路</text>

        {/* 离线闭环回流虚线 */}
        <path d="M 1085 1575 L 1085 1520 L 1190 1520" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 4"/>
        <text x="1120" y="1512" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">非实时回流</text>

        {/* 底部技术栈 */}
        <text x="700" y="1735" textAnchor="middle" fill="#94a3b8" fontSize="11">
          技术栈: Transformer · vLLM · Flash Attention · KV/Prompt Cache · RAG · MCP · ReAct · RLHF · OpenTelemetry
        </text>
        <text x="700" y="1756" textAnchor="middle" fill="#94a3b8" fontSize="11">
          代表性 Agent: Claude Code · OpenAI Codex · Cursor · Windsurf · Devin · Harness · Hermes
        </text>

        {/* 关键修订点说明 */}
        <rect x="200" y="1775" width="1000" height="68" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="1"/>
        <text x="218" y="1796" fill="#f8fafc" fontSize="11" fontWeight="bold">相对原图的关键修订:</text>
        <text x="218" y="1814" fill="#cbd5e1" fontSize="10">
          ① 推理(原 Phase4)内嵌为 Agent 循环核心, 每轮执行并经"决策菱形"回路;  ② 安全/可观测改为左右纵向贯穿泳道(横切层);
        </text>
        <text x="218" y="1830" fill="#cbd5e1" fontSize="10">
          ③ 用户审批前移至"沙盒执行前"(HITL 高危拦截);  ④ 鉴权/限流/日志/缓存/流式/计费 去重(图例统一标注);  ⑤ 训练/微调拆为离线闭环;  ⑥ 入口区分同步/异步。
        </text>
      </svg>
    </div>
  );
}