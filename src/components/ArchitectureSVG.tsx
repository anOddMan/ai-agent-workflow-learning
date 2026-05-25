/**
 * @file ArchitectureSVG.tsx
 * @description 系统架构分层图组件 - SVG 格式的三层架构图
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件渲染 Agent 系统的三层架构图，从上到下依次为：
 *
 * 1. 前端/客户端层 (Client Tier) - 用户交互界面
 *    - CLI/Terminal: Claude Code / Codex 等命令行工具
 *    - Web UI: React/Next.js 等网页界面
 *    - IDE Plugin: VS Code / JetBrains 等编辑器插件
 *    - Mobile SDK: iOS/Android 移动端 SDK
 *    - API/SDK: REST API / Python / TypeScript SDK
 *    - CI/CD Integration: GitHub Actions / Harness 等自动化集成
 *
 * 2. 服务层 (Service Tier) - Agent 核心编排引擎
 *    - API Gateway: Kong/Envoy 网关（认证、限流、路由）
 *    - Agent Runtime: Agent Loop 引擎（ReAct、规划、执行）
 *    - Context Engine: RAG、记忆、上下文工程
 *    - Tool Service: MCP、Function Call 工具注册路由
 *    - Safety Service: 注入检测、PII、内容安全
 *    - Sandbox: Docker/gVisor 代码执行隔离
 *    - Billing: Token 计量计费
 *
 * 3. 基础设施层 (Infrastructure Tier) - GPU 集群基础设施
 *    - GPU Cluster: A100/H100、CUDA、NCCL
 *    - 推理引擎: vLLM、TensorRT-LLM、Triton
 *    - 容器编排: Kubernetes、Istio、Helm
 *    - 云平台: AWS/GCP/Azure
 *    - 安全基础设施: Vault、mTLS、Zero-Trust、RBAC
 *
 * SVG 尺寸：1200 x 600（横向布局）
 */

export default function ArchitectureSVG() {
  return (
    // 外层容器：提供横向滚动能力
    <div className="w-full overflow-x-auto py-6">
      {/* SVG 主画布 */}
      {/* viewBox: 1200x600 横向布局 */}
      <svg
        viewBox="0 0 1200 600"
        className="mx-auto min-w-[800px] max-w-[1200px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ===== SVG 资源定义区 ===== */}
        <defs>
          {/* 各层背景渐变 */}
          {/* 前端层 - 蓝色渐变 */}
          <linearGradient id="archBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
          </linearGradient>

          {/* 服务层 - 紫色渐变 */}
          <linearGradient id="archPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
          </linearGradient>

          {/* 基础设施层 - 绿色渐变 */}
          <linearGradient id="archGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.1" />
          </linearGradient>

          {/* 箭头标记 */}
          <marker id="archArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#60a5fa" />
          </marker>
        </defs>

        {/* ===== 第一层：前端/客户端层 ===== */}
        {/* 虚线边框区域 */}
        <rect x="30" y="30" width="1140" height="140" rx="16" fill="url(#archBlue)" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" />
        {/* 层级标签 */}
        <text x="60" y="55" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          前端/客户端层 (Client Tier)
        </text>

        {/* 前端层组件：CLI/Terminal */}
        <rect x="60" y="70" width="150" height="80" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <text x="135" y="100" textAnchor="middle" fill="#60a5fa" fontSize="22">💻</text>
        <text x="135" y="120" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">CLI / Terminal</text>
        <text x="135" y="138" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">Claude Code / Codex</text>

        {/* 前端层组件：Web UI */}
        <rect x="240" y="70" width="150" height="80" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <text x="315" y="100" textAnchor="middle" fill="#60a5fa" fontSize="22">🌐</text>
        <text x="315" y="120" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Web UI</text>
        <text x="315" y="138" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">React / Next.js</text>

        {/* 前端层组件：IDE Plugin */}
        <rect x="420" y="70" width="150" height="80" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <text x="495" y="100" textAnchor="middle" fill="#60a5fa" fontSize="22">🔌</text>
        <text x="495" y="120" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">IDE Plugin</text>
        <text x="495" y="138" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">VS Code / JetBrains</text>

        {/* 前端层组件：Mobile SDK */}
        <rect x="600" y="70" width="150" height="80" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <text x="675" y="100" textAnchor="middle" fill="#60a5fa" fontSize="22">📱</text>
        <text x="675" y="120" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Mobile SDK</text>
        <text x="675" y="138" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">iOS / Android</text>

        {/* 前端层组件：API/SDK */}
        <rect x="780" y="70" width="150" height="80" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <text x="855" y="100" textAnchor="middle" fill="#60a5fa" fontSize="22">⚡</text>
        <text x="855" y="120" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">API / SDK</text>
        <text x="855" y="138" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">REST / Python / TS</text>

        {/* 前端层组件：CI/CD Integration */}
        <rect x="960" y="70" width="180" height="80" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" />
        <text x="1050" y="100" textAnchor="middle" fill="#60a5fa" fontSize="22">🤖</text>
        <text x="1050" y="120" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="bold" fontFamily="sans-serif">CI/CD Integration</text>
        <text x="1050" y="138" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="sans-serif">GitHub Actions / Harness</text>

        {/* 连接箭头：前端层 -> 服务层 */}
        <line x1="600" y1="170" x2="600" y2="210" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#archArrow)" />

        {/* ===== 第二层：服务层 ===== */}
        {/* 虚线边框区域 */}
        <rect x="30" y="210" width="1140" height="180" rx="16" fill="url(#archPurple)" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 3" />
        {/* 层级标签 */}
        <text x="60" y="235" fill="#a78bfa" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          服务层 (Service Tier) - Agent Orchestration
        </text>

        {/* 服务层组件：API Gateway */}
        <rect x="60" y="250" width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="130" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">API Gateway</text>
        <text x="130" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Kong / Envoy</text>
        <text x="130" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">认证·限流·路由</text>

        {/* 服务层组件：Agent Runtime */}
        <rect x="220" y="250" width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="290" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Agent Runtime</text>
        <text x="290" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Agent Loop 引擎</text>
        <text x="290" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">ReAct·规划·执行</text>

        {/* 服务层组件：Context Engine */}
        <rect x="380" y="250" width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="450" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Context Engine</text>
        <text x="450" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">RAG·记忆·压缩</text>
        <text x="450" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">上下文工程</text>

        {/* 服务层组件：Tool Service */}
        <rect x="540" y="250" width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="610" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Tool Service</text>
        <text x="610" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">MCP·Function Call</text>
        <text x="610" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">工具注册·路由</text>

        {/* 服务层组件：Safety Service */}
        <rect x="700" y="250" width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="770" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Safety Service</text>
        <text x="770" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">注入检测·PII</text>
        <text x="770" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">内容安全·合规</text>

        {/* 服务层组件：Sandbox */}
        <rect x="860" y="250" width="140" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="930" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Sandbox</text>
        <text x="930" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Docker / gVisor</text>
        <text x="930" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">代码执行·隔离</text>

        {/* 服务层组件：Billing */}
        <rect x="1020" y="250" width="130" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1" />
        <text x="1085" y="275" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Billing</text>
        <text x="1085" y="295" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Token 计量</text>
        <text x="1085" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">用量·计费</text>

        {/* ===== 数据存储层 ===== */}
        {/* 服务层下方的数据存储组件 */}
        {/* Kafka 消息队列 */}
        <rect x="60" y="340" width="120" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="120" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">Kafka 消息队列</text>

        {/* Redis 缓存 */}
        <rect x="200" y="340" width="120" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="260" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">Redis 缓存</text>

        {/* PostgreSQL */}
        <rect x="340" y="340" width="120" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="400" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">PostgreSQL</text>

        {/* Vector DB */}
        <rect x="480" y="340" width="120" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="540" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">Vector DB</text>

        {/* S3 对象存储 */}
        <rect x="620" y="340" width="120" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="680" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">S3 对象存储</text>

        {/* OpenTelemetry */}
        <rect x="760" y="340" width="140" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="830" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">OpenTelemetry</text>

        {/* Prometheus */}
        <rect x="920" y="340" width="120" height="40" rx="6" fill="#1e293b" stroke="#6366f1" strokeWidth="1" />
        <text x="980" y="365" textAnchor="middle" fill="#818cf8" fontSize="10" fontFamily="sans-serif">Prometheus</text>

        {/* 连接箭头：服务层 -> 基础设施层 */}
        <line x1="600" y1="390" x2="600" y2="430" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#archArrow)" />

        {/* ===== 第三层：基础设施层 ===== */}
        {/* 虚线边框区域 */}
        <rect x="30" y="430" width="1140" height="140" rx="16" fill="url(#archGreen)" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 3" />
        {/* 层级标签 */}
        <text x="60" y="455" fill="#4ade80" fontSize="14" fontWeight="bold" fontFamily="sans-serif">
          基础设施层 (Infrastructure Tier) - GPU Cluster
        </text>

        {/* 基础设施层组件：GPU Cluster */}
        <rect x="60" y="470" width="180" height="80" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
        <text x="150" y="500" textAnchor="middle" fill="#4ade80" fontSize="22">🖥️</text>
        <text x="150" y="520" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">GPU Cluster</text>
        <text x="150" y="538" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">A100/H100 · CUDA · NCCL</text>

        {/* 基础设施层组件：推理引擎 */}
        <rect x="270" y="470" width="180" height="80" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
        <text x="360" y="500" textAnchor="middle" fill="#4ade80" fontSize="22">⚙️</text>
        <text x="360" y="520" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">推理引擎</text>
        <text x="360" y="538" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">vLLM · TensorRT-LLM · Triton</text>

        {/* 基础设施层组件：容器编排 */}
        <rect x="480" y="470" width="180" height="80" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
        <text x="570" y="500" textAnchor="middle" fill="#4ade80" fontSize="22">🐳</text>
        <text x="570" y="520" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">容器编排</text>
        <text x="570" y="538" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Kubernetes · Istio · Helm</text>

        {/* 基础设施层组件：云平台 */}
        <rect x="690" y="470" width="180" height="80" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
        <text x="780" y="500" textAnchor="middle" fill="#4ade80" fontSize="22">☁️</text>
        <text x="780" y="520" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">云平台</text>
        <text x="780" y="538" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">AWS / GCP / Azure</text>

        {/* 基础设施层组件：安全基础设施 */}
        <rect x="900" y="470" width="240" height="80" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
        <text x="1020" y="500" textAnchor="middle" fill="#4ade80" fontSize="22">🔒</text>
        <text x="1020" y="520" textAnchor="middle" fill="#e2e8f0" fontSize="11" fontWeight="bold" fontFamily="sans-serif">安全基础设施</text>
        <text x="1020" y="538" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Vault · mTLS · Zero-Trust · RBAC</text>
      </svg>
    </div>
  );
}