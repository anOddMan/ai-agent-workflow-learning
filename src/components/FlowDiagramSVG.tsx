/**
 * @file FlowDiagramSVG.tsx
 * @description 全景流程图组件 - SVG 格式的 AI Agent 8 阶段业务流程图
 * @author AI Agent Technical Workflow Analysis
 *
 * SVG 尺寸：1400 x 2400（纵向长图，删除代码块后更紧凑）
 */

export default function FlowDiagramSVG() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <svg
        viewBox="0 0 1400 2400"
        className="mx-auto min-w-[900px] max-w-[1400px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* 渐变定义 */}
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>

          {/* 滤镜 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 箭头标记 */}
          <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
          </marker>
          <marker id="arrowPurple" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
          </marker>
          <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
          </marker>
          <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#f97316" />
          </marker>
          <marker id="arrowCyan" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#06b6d4" />
          </marker>
          <marker id="arrowPink" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ec4899" />
          </marker>
          <marker id="arrowYellow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#eab308" />
          </marker>
          <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
          </marker>
          <marker id="arrowWhite" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>

        {/* 标题 */}
        <text x="700" y="50" textAnchor="middle" fill="#e2e8f0" fontSize="28" fontWeight="bold" fontFamily="sans-serif">
          AI Agent 底层业务流程全景图
        </text>
        <text x="700" y="80" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="sans-serif">
          用户对话 → 响应生成 全链路解析 (Claude Code / Codex / Harness / Hermes)
        </text>

        {/* ===== PHASE 1: 用户输入层 (y: 110-390) ===== */}
        <rect x="50" y="110" width="1300" height="180" rx="16" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="100" width="200" height="28" rx="6" fill="url(#blueGrad)" />
        <text x="150" y="119" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 1: 用户输入层</text>

        <rect x="100" y="150" width="200" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" filter="url(#glow)" />
        <text x="200" y="185" textAnchor="middle" fill="#60a5fa" fontSize="30">👤</text>
        <text x="200" y="215" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold" fontFamily="sans-serif">用户</text>
        <text x="200" y="235" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">自然语言输入</text>

        <line x1="300" y1="200" x2="380" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
        <text x="340" y="190" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="sans-serif">HTTP/WS</text>

        <rect x="390" y="130" width="260" height="140" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="520" y="158" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="sans-serif">客户端预处理</text>
        <text x="520" y="180" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 输入验证 & 清洗</text>
        <text x="520" y="198" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 会话上下文管理</text>
        <text x="520" y="216" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 附件/文件解析</text>
        <text x="520" y="234" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Token 认证注入</text>
        <text x="520" y="252" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 速率限制检查</text>

        <line x1="650" y1="200" x2="730" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
        <text x="690" y="190" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="sans-serif">REST/gRPC</text>

        <rect x="740" y="130" width="260" height="140" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="870" y="158" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="sans-serif">API 网关</text>
        <text x="870" y="180" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• JWT/OAuth2 鉴权</text>
        <text x="870" y="198" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 请求路由 & 负载均衡</text>
        <text x="870" y="216" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 流量控制 (Rate Limiter)</text>
        <text x="870" y="234" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 请求日志 & 追踪</text>
        <text x="870" y="252" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 协议转换</text>

        <line x1="1000" y1="200" x2="1080" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />

        <rect x="1090" y="150" width="200" height="100" rx="12" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="1190" y="185" textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="bold" fontFamily="sans-serif">消息队列</text>
        <text x="1190" y="205" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">Kafka / RabbitMQ</text>
        <text x="1190" y="223" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">异步任务分发</text>
        <text x="1190" y="241" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">削峰填谷</text>

        {/* ===== PHASE 2: 安全与合规层 (y: 320-520) ===== */}
        <rect x="50" y="320" width="1300" height="200" rx="16" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="310" width="240" height="28" rx="6" fill="url(#redGrad)" />
        <text x="170" y="329" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 2: 安全与合规层</text>

        <line x1="700" y1="290" x2="700" y2="350" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="360" width="280" height="140" rx="12" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
        <text x="240" y="388" textAnchor="middle" fill="#f87171" fontSize="14" fontWeight="bold" fontFamily="sans-serif">🛡️ 输入安全检测</text>
        <text x="240" y="410" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Prompt Injection 检测</text>
        <text x="240" y="428" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 敏感信息过滤 (PII/PHI)</text>
        <text x="240" y="446" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 有害内容分类器</text>
        <text x="240" y="464" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• CSAM / 暴力内容检测</text>
        <text x="240" y="482" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Constitutional AI 约束</text>

        <line x1="380" y1="430" x2="460" y2="430" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

        <rect x="470" y="360" width="280" height="140" rx="12" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
        <text x="610" y="388" textAnchor="middle" fill="#f87171" fontSize="14" fontWeight="bold" fontFamily="sans-serif">🔐 权限与配额</text>
        <text x="610" y="410" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 用户权限等级验证</text>
        <text x="610" y="428" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• API 配额 & 用量计费</text>
        <text x="610" y="446" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 模型访问白名单</text>
        <text x="610" y="464" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 沙盒权限控制</text>
        <text x="610" y="482" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Tool Use 授权检查</text>

        <line x1="750" y1="430" x2="830" y2="430" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

        <rect x="840" y="360" width="280" height="140" rx="12" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
        <text x="980" y="388" textAnchor="middle" fill="#f87171" fontSize="14" fontWeight="bold" fontFamily="sans-serif">📋 审计与合规</text>
        <text x="980" y="410" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 请求/响应全链路日志</text>
        <text x="980" y="428" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• GDPR/CCPA 数据合规</text>
        <text x="980" y="446" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 数据驻留策略</text>
        <text x="980" y="464" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 可追溯性保障</text>
        <text x="980" y="482" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• AB 实验标记</text>

        {/* ===== PHASE 3: 上下文工程 (y: 540-780) ===== */}
        <rect x="50" y="540" width="1300" height="240" rx="16" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="530" width="280" height="28" rx="6" fill="url(#purpleGrad)" />
        <text x="190" y="549" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 3: 上下文工程</text>

        <line x1="700" y1="520" x2="700" y2="570" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="580" width="250" height="150" rx="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="225" y="608" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📝 System Prompt 构建</text>
        <text x="225" y="630" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 角色定义 & 人格设定</text>
        <text x="225" y="648" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Tool definitions 注入</text>
        <text x="225" y="666" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 行为规范 & 约束条件</text>
        <text x="225" y="684" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 输出格式指令</text>
        <text x="225" y="702" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 项目特定指令 (.claude)</text>
        <text x="225" y="720" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 安全护栏 (Guardrails)</text>

        <line x1="350" y1="655" x2="400" y2="655" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowPurple)" />

        <rect x="410" y="580" width="250" height="150" rx="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="535" y="608" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🔍 RAG 检索增强</text>
        <text x="535" y="630" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 代码库索引 (AST/LSP)</text>
        <text x="535" y="648" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 向量数据库检索</text>
        <text x="535" y="666" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Embedding 相似度匹配</text>
        <text x="535" y="684" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 文档/知识库检索</text>
        <text x="535" y="702" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Re-ranking 重排序</text>
        <text x="535" y="720" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Chunk 分块策略</text>

        <line x1="660" y1="655" x2="710" y2="655" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowPurple)" />

        <rect x="720" y="580" width="250" height="150" rx="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="845" y="608" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📦 上下文窗口管理</text>
        <text x="845" y="630" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Token 计算 (tiktoken)</text>
        <text x="845" y="648" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 历史对话截断策略</text>
        <text x="845" y="666" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 滑动窗口压缩</text>
        <text x="845" y="684" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 关键信息提取摘要</text>
        <text x="845" y="702" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 优先级排序填充</text>
        <text x="845" y="720" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 多模态内容编码</text>

        <line x1="970" y1="655" x2="1020" y2="655" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowPurple)" />

        <rect x="1030" y="580" width="250" height="150" rx="12" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="1155" y="608" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🧠 记忆系统</text>
        <text x="1155" y="630" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 短期记忆 (会话内)</text>
        <text x="1155" y="648" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 长期记忆 (跨会话)</text>
        <text x="1155" y="666" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 工作记忆 (当前任务)</text>
        <text x="1155" y="684" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 语义记忆检索</text>
        <text x="1155" y="702" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 记忆衰减 & 巩固</text>
        <text x="1155" y="720" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• CLAUDE.md 持久记忆</text>

        {/* ===== PHASE 4: 大模型推理 (y: 800-1020) ===== */}
        <rect x="50" y="800" width="1300" height="220" rx="16" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="790" width="250" height="28" rx="6" fill="url(#greenGrad)" />
        <text x="175" y="809" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 4: 大模型推理</text>

        <line x1="700" y1="780" x2="700" y2="830" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="840" width="200" height="120" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
        <text x="200" y="868" textAnchor="middle" fill="#4ade80" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🔤 Tokenization</text>
        <text x="200" y="890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• BPE 分词</text>
        <text x="200" y="908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Token ID 映射</text>
        <text x="200" y="926" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 特殊标记注入</text>
        <text x="200" y="944" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Attention Mask</text>

        <line x1="300" y1="900" x2="350" y2="900" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />

        <rect x="360" y="840" width="200" height="120" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
        <text x="460" y="868" textAnchor="middle" fill="#4ade80" fontSize="13" fontWeight="bold" fontFamily="sans-serif">⚡ Prefill 阶段</text>
        <text x="460" y="890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 并行计算 KV Cache</text>
        <text x="460" y="908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Flash Attention</text>
        <text x="460" y="926" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Prompt Cache 复用</text>
        <text x="460" y="944" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• GPU 集群调度</text>

        <line x1="560" y1="900" x2="610" y2="900" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />

        <rect x="620" y="840" width="210" height="120" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="2" filter="url(#glow)" />
        <text x="725" y="868" textAnchor="middle" fill="#4ade80" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🧠 Transformer 推理</text>
        <text x="725" y="890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Multi-Head Attention</text>
        <text x="725" y="908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• FFN / MoE 层</text>
        <text x="725" y="926" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• LayerNorm + 残差连接</text>
        <text x="725" y="944" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 自回归解码</text>

        <line x1="830" y1="900" x2="880" y2="900" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />

        <rect x="890" y="840" width="200" height="120" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
        <text x="990" y="868" textAnchor="middle" fill="#4ade80" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🎲 采样策略</text>
        <text x="990" y="890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Temperature 温度</text>
        <text x="990" y="908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Top-P / Top-K</text>
        <text x="990" y="926" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 重复惩罚</text>
        <text x="990" y="944" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 停止序列检测</text>

        <line x1="1090" y1="900" x2="1140" y2="900" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowGreen)" />

        <rect x="1150" y="840" width="180" height="120" rx="12" fill="#1e293b" stroke="#22c55e" strokeWidth="1.5" />
        <text x="1240" y="868" textAnchor="middle" fill="#4ade80" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📡 流式输出</text>
        <text x="1240" y="890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• SSE 推流</text>
        <text x="1240" y="908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Chunk 切分</text>
        <text x="1240" y="926" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 背压控制</text>
        <text x="1240" y="944" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 超时管理</text>

        {/* ===== PHASE 5: Agent 循环 (y: 1040-1320) ===== */}
        <rect x="50" y="1040" width="1300" height="280" rx="16" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="1030" width="280" height="28" rx="6" fill="url(#orangeGrad)" />
        <text x="190" y="1049" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 5: Agent 循环</text>

        <line x1="700" y1="1020" x2="700" y2="1070" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="1080" width="220" height="130" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
        <text x="210" y="1108" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🎯 意图解析</text>
        <text x="210" y="1130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Tool Call 决策</text>
        <text x="210" y="1148" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 参数抽取 (JSON)</text>
        <text x="210" y="1166" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 多步骤规划</text>
        <text x="210" y="1184" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 任务分解</text>
        <text x="210" y="1202" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 依赖分析</text>

        <line x1="320" y1="1145" x2="370" y2="1145" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowOrange)" />

        <rect x="380" y="1080" width="220" height="130" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
        <text x="490" y="1108" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🔧 工具路由器</text>
        <text x="490" y="1130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 文件读写 (read/write)</text>
        <text x="490" y="1148" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 终端执行 (bash)</text>
        <text x="490" y="1166" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 搜索工具 (grep/glob)</text>
        <text x="490" y="1184" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Web 搜索 & 浏览</text>
        <text x="490" y="1202" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• MCP Server 连接</text>

        <line x1="600" y1="1145" x2="650" y2="1145" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowOrange)" />

        <rect x="660" y="1080" width="220" height="130" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="2" filter="url(#glow)" />
        <text x="770" y="1108" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📦 沙盒执行</text>
        <text x="770" y="1130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Docker/gVisor 隔离</text>
        <text x="770" y="1148" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 文件系统快照</text>
        <text x="770" y="1166" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 网络策略限制</text>
        <text x="770" y="1184" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 资源配额 (CPU/Mem)</text>
        <text x="770" y="1202" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 超时 & 自动回滚</text>

        <line x1="880" y1="1145" x2="930" y2="1145" stroke="#f97316" strokeWidth="2" markerEnd="url(#arrowOrange)" />

        <rect x="940" y="1080" width="220" height="130" rx="12" fill="#1e293b" stroke="#f97316" strokeWidth="1.5" />
        <text x="1050" y="1108" textAnchor="middle" fill="#fb923c" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🔄 结果回注</text>
        <text x="1050" y="1130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Tool Result 格式化</text>
        <text x="1050" y="1148" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 错误处理 & 重试</text>
        <text x="1050" y="1166" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 结果截断策略</text>
        <text x="1050" y="1184" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 上下文追加</text>
        <text x="1050" y="1202" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 再次推理判断</text>

        {/* Agent Loop 回路 */}
        <path d="M 1160 1145 L 1220 1145 L 1220 1260 L 210 1260 L 210 1210" stroke="#f97316" strokeWidth="2" fill="none" markerEnd="url(#arrowOrange)" strokeDasharray="8 4" />
        <text x="700" y="1280" textAnchor="middle" fill="#fb923c" fontSize="12" fontWeight="bold" fontFamily="sans-serif">⟲ Agent Loop: 观察 → 思考 → 行动 → 观察 (循环直到完成)</text>

        {/* ===== PHASE 6: 输出后处理 (y: 1340-1540) ===== */}
        <rect x="50" y="1340" width="1300" height="200" rx="16" fill="none" stroke="#06b6d4" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="1330" width="220" height="28" rx="6" fill="url(#cyanGrad)" />
        <text x="160" y="1349" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 6: 输出后处理</text>

        <line x1="700" y1="1320" x2="700" y2="1370" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="1380" width="250" height="130" rx="12" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="225" y="1408" textAnchor="middle" fill="#22d3ee" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🛡️ 输出安全过滤</text>
        <text x="225" y="1430" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 有害内容检测</text>
        <text x="225" y="1448" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 幻觉检测</text>
        <text x="225" y="1466" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• PII 脱敏处理</text>
        <text x="225" y="1484" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 版权内容过滤</text>
        <text x="225" y="1502" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 代码安全审计</text>

        <line x1="350" y1="1445" x2="400" y2="1445" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" />

        <rect x="410" y="1380" width="250" height="130" rx="12" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="535" y="1408" textAnchor="middle" fill="#22d3ee" fontSize="13" fontWeight="bold" fontFamily="sans-serif">✨ 格式化 & 渲染</text>
        <text x="535" y="1430" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Markdown 解析</text>
        <text x="535" y="1448" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 代码高亮 (Shiki)</text>
        <text x="535" y="1466" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Diff 视图生成</text>
        <text x="535" y="1484" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 流式渐进渲染</text>
        <text x="535" y="1502" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• LaTeX 数学公式</text>

        <line x1="660" y1="1445" x2="710" y2="1445" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" />

        <rect x="720" y="1380" width="250" height="130" rx="12" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="845" y="1408" textAnchor="middle" fill="#22d3ee" fontSize="13" fontWeight="bold" fontFamily="sans-serif">💾 缓存 & 持久化</text>
        <text x="845" y="1430" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Redis 响应缓存</text>
        <text x="845" y="1448" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 语义缓存匹配</text>
        <text x="845" y="1466" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 会话状态持久化</text>
        <text x="845" y="1484" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Prompt Cache 存储</text>
        <text x="845" y="1502" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• CDN 边缘缓存</text>

        <line x1="970" y1="1445" x2="1020" y2="1445" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowCyan)" />

        <rect x="1030" y="1380" width="250" height="130" rx="12" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="1155" y="1408" textAnchor="middle" fill="#22d3ee" fontSize="13" fontWeight="bold" fontFamily="sans-serif">💰 计量计费</text>
        <text x="1155" y="1430" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Input/Output Token 计费</text>
        <text x="1155" y="1448" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Tool Use 次数计费</text>
        <text x="1155" y="1466" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 计算资源计量</text>
        <text x="1155" y="1484" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 用量报表生成</text>
        <text x="1155" y="1502" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 预算告警</text>

        {/* ===== PHASE 7: 可观测性 (y: 1560-1760) ===== */}
        <rect x="50" y="1560" width="1300" height="200" rx="16" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="1550" width="220" height="28" rx="6" fill="url(#yellowGrad)" />
        <text x="160" y="1569" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 7: 可观测性</text>

        <line x1="700" y1="1540" x2="700" y2="1590" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="1600" width="280" height="130" rx="12" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
        <text x="240" y="1628" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📊 监控指标</text>
        <text x="240" y="1650" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• TTFT (首 Token 时间)</text>
        <text x="240" y="1668" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• TPS (Token/秒 吞吐量)</text>
        <text x="240" y="1686" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• P99 延迟 & 错误率</text>
        <text x="240" y="1704" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• GPU 利用率</text>
        <text x="240" y="1722" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Prometheus + Grafana</text>

        <line x1="380" y1="1665" x2="450" y2="1665" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrowYellow)" />

        <rect x="460" y="1600" width="280" height="130" rx="12" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
        <text x="600" y="1628" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🔗 分布式追踪</text>
        <text x="600" y="1650" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• OpenTelemetry Tracing</text>
        <text x="600" y="1668" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• LLM 调用链追踪</text>
        <text x="600" y="1686" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• LangSmith / Braintrust</text>
        <text x="600" y="1704" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Tool Call 链路分析</text>
        <text x="600" y="1722" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 端到端延迟分解</text>

        <line x1="740" y1="1665" x2="810" y2="1665" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrowYellow)" />

        <rect x="820" y="1600" width="280" height="130" rx="12" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
        <text x="960" y="1628" textAnchor="middle" fill="#fbbf24" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📈 评估 & 优化</text>
        <text x="960" y="1650" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 用户反馈收集 (RLHF)</text>
        <text x="960" y="1668" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 自动化 Evals 评测</text>
        <text x="960" y="1686" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• A/B 实验分析</text>
        <text x="960" y="1704" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Prompt 版本管理</text>
        <text x="960" y="1722" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 模型微调 (Fine-tuning)</text>

        {/* ===== PHASE 8: 响应交付 (y: 1780-1940) ===== */}
        <rect x="50" y="1780" width="1300" height="160" rx="16" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
        <rect x="50" y="1770" width="200" height="28" rx="6" fill="url(#pinkGrad)" />
        <text x="150" y="1789" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Phase 8: 响应交付</text>

        <line x1="700" y1="1760" x2="700" y2="1810" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowWhite)" strokeDasharray="5 3" />

        <rect x="100" y="1820" width="250" height="100" rx="12" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
        <text x="225" y="1850" textAnchor="middle" fill="#f472b6" fontSize="13" fontWeight="bold" fontFamily="sans-serif">📡 SSE 流式传输</text>
        <text x="225" y="1872" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Server-Sent Events</text>
        <text x="225" y="1890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 断线重连机制</text>
        <text x="225" y="1908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 增量 Diff 传输</text>

        <line x1="350" y1="1870" x2="430" y2="1870" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowPink)" />

        <rect x="440" y="1820" width="250" height="100" rx="12" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
        <text x="565" y="1850" textAnchor="middle" fill="#f472b6" fontSize="13" fontWeight="bold" fontFamily="sans-serif">🖥️ 客户端渲染</text>
        <text x="565" y="1872" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 实时 Markdown 渲染</text>
        <text x="565" y="1890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 代码 Diff 高亮显示</text>
        <text x="565" y="1908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 交互式审批控件</text>

        <line x1="690" y1="1870" x2="770" y2="1870" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowPink)" />

        <rect x="780" y="1820" width="250" height="100" rx="12" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" />
        <text x="905" y="1850" textAnchor="middle" fill="#f472b6" fontSize="13" fontWeight="bold" fontFamily="sans-serif">✅ 用户确认</text>
        <text x="905" y="1872" textAnchor="c-middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• Accept/Reject 审批</text>
        <text x="905" y="1890" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 文件变更预览</text>
        <text x="905" y="1908" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">• 反馈 → RLHF 数据</text>

        <line x1="1030" y1="1870" x2="1110" y2="1870" stroke="#ec4899" strokeWidth="2" markerEnd="url(#arrowPink)" />

        <rect x="1120" y="1820" width="180" height="100" rx="12" fill="#1e293b" stroke="#ec4899" strokeWidth="2" filter="url(#glow)" />
        <text x="1210" y="1855" textAnchor="middle" fill="#f472b6" fontSize="30">👤</text>
        <text x="1210" y="1885" textAnchor="middle" fill="#e2e8f0" fontSize="14" fontWeight="bold" fontFamily="sans-serif">用户</text>
        <text x="1210" y="1905" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif">获得最终响应</text>

        {/* 底部技术栈标注 */}
        <text x="700" y="2000" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif">
          技术栈: Transformer · vLLM · Flash Attention · KV Cache · RAG · MCP · ReAct · RLHF · OpenTelemetry
        </text>
        <text x="700" y="2020" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="sans-serif">
          代表性 Agent: Claude Code · OpenAI Codex · Harness AI · Hermes · Devin · Cursor · Windsurf
        </text>

        {/* 全局时间轴 */}
        <line x1="40" y1="130" x2="40" y2="1900" stroke="#334155" strokeWidth="2" />

        {/* Phase 1 时间标记 - 对齐到 y=200 */}
        <circle cx="40" cy="200" r="5" fill="#3b82f6" />
        <text x="20" y="205" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 205)">~10ms</text>

        {/* Phase 2 时间标记 - 对齐到 y=430 */}
        <circle cx="40" cy="430" r="5" fill="#ef4444" />
        <text x="20" y="435" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 435)">~50ms</text>

        {/* Phase 3 时间标记 - 对齐到 y=655 */}
        <circle cx="40" cy="655" r="5" fill="#8b5cf6" />
        <text x="20" y="660" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 660)">~200ms</text>

        {/* Phase 4 时间标记 - 对齐到 y=900 */}
        <circle cx="40" cy="900" r="5" fill="#22c55e" />
        <text x="20" y="905" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 905)">~1-30s</text>

        {/* Phase 5 时间标记 - 对齐到 y=1145 */}
        <circle cx="40" cy="1145" r="5" fill="#f97316" />
        <text x="20" y="1150" textAnchor="middle" fill="#f97316" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 1150)">~5-300s</text>

        {/* Phase 6 时间标记 - 对齐到 y=1445 */}
        <circle cx="40" cy="1445" r="5" fill="#06b6d4" />
        <text x="20" y="1450" textAnchor="middle" fill="#06b6d4" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 1450)">~100ms</text>

        {/* Phase 7 时间标记 - 对齐到 y=1665 */}
        <circle cx="40" cy="1665" r="5" fill="#eab308" />
        <text x="20" y="1670" textAnchor="middle" fill="#eab308" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 1670)">持续</text>

        {/* Phase 8 时间标记 - 对齐到 y=1870 */}
        <circle cx="40" cy="1870" r="5" fill="#ec4899" />
        <text x="20" y="1875" textAnchor="middle" fill="#ec4899" fontSize="9" fontFamily="sans-serif" transform="rotate(-90, 20, 1875)">~50ms</text>
      </svg>
    </div>
  );
}