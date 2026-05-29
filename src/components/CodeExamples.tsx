/**
 * @file CodeExamples.tsx
 * @description 代码示例组件 - 展示 5 个核心阶段的技术实现代码
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个组件展示 AI Agent 5 个核心阶段的代码示例，
 * 涵盖前后端、推理引擎、工具调用等技术实现。
 *
 * 每个代码示例包含：
 * - 标题和描述
 * - 多个代码标签页（不同语言/场景）
 * - 可切换的标签页界面
 * - 代码高亮样式
 *
 * 示例涵盖的阶段：
 * - Phase 1: 接入与网关 - API 请求构建、WebSocket 连接
 * - Phase 2: 上下文工程 - RAG 检索管线、代码库索引、上下文窗口管理
 * - Phase 3: Agent循环 - vLLM推理、KV Cache、Agent Loop、Tool定义、MCP协议
 * - Phase 4: 输出后处理 - SSE 流式传输、响应缓存、计量计费
 * - Phase 5: 响应交付 - OpenTelemetry 集成、LLM Eval 评测
 */

import { useState } from 'react';
import CodeBlockHeader from './CodeBlockHeader';

/**
 * 代码标签页数据结构
 */
interface CodeTab {
  label: string;     // 标签页标题
  language: string;  // 编程语言
  code: string;      // 代码内容
}

/**
 * 代码示例属性接口
 */
interface CodeExampleProps {
  title: string;        // 示例标题
  description: string;  // 示例描述
  icon: string;         // emoji 图标
  color: string;        // 标题颜色类名
  borderColor: string;  // 边框颜色类名
  tabs: CodeTab[];      // 代码标签页列表
}

/**
 * CodeExample 单个示例组件
 * 渲染一个代码示例卡片，包含标签页切换功能
 *
 * @param props - 代码示例属性
 */
function CodeExample({ title, description, icon, color, borderColor, tabs }: CodeExampleProps) {
  // 当前激活的标签页索引
  const [activeTab, setActiveTab] = useState(0);

  return (
    // 卡片容器
    <div className={`card-dark rounded-2xl overflow-hidden border ${borderColor}`}>
      {/* ===== 卡片头部 ===== */}
      <div className="p-6 pb-4">
        {/* 标题和图标 */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{icon}</span>
          <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
        </div>
        {/* 描述 */}
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* ===== 标签页区域 ===== */}
      <div className="border-t border-slate-700/50">
        {/* 标签页按钮列表 */}
        <div className="flex overflow-x-auto">
          {tabs.map((tab, i) => (
            // 标签页按钮
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === i
                  ? `${color} border-current`
                  : 'text-slate-500 border-transparent hover:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===== 代码块 ===== */}
        <div className="code-block m-4 p-4 overflow-x-auto">
          {/* 代码块头部装饰 */}
          <CodeBlockHeader language={tabs[activeTab].language} />

          {/* 代码内容 */}
          <pre className="text-[13px] leading-relaxed">
            <code className="text-slate-300">{tabs[activeTab].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

// 所有代码示例的配置数据
// 每个示例对应一个 Phase，包含多个代码标签页
const codeExamples: CodeExampleProps[] = [
  // ===== Phase 1: API 请求构建 =====
  {
    title: 'Phase 1: 接入与网关',
    description: '用户输入经过客户端处理后，构建符合 LLM API 规范的请求体。包括消息格式化、工具定义注入、认证信息附加等。',
    icon: '📡',
    color: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    tabs: [
      {
        label: 'API 请求构建',
        language: 'TypeScript',
        code: `// ===== Claude Code 风格的 API 请求构建 =====

// 定义消息接口：包含角色和内容
// role: 消息发送者角色（user/assistant/system）
// content: 消息内容，可以是字符串或内容块数组
interface Message {
  role: 'user' | 'assistant' | 'system';  // 三种角色类型
  content: string | ContentBlock[];       // 内容可以是纯文本或结构化块
}

// 定义工具接口：描述 Agent 可调用的工具
// name: 工具名称
// description: 工具功能描述
// input_schema: 输入参数的 JSON Schema 定义
interface ToolDefinition {
  name: string;                          // 工具的唯一标识名
  description: string;                   // 工具用途说明
  input_schema: JSONSchema;              // 参数结构的 JSON Schema
}

// 构建 API 请求的异步函数
// userInput: 用户输入的原始文本
// session: 当前会话对象，包含历史和权限信息
async function buildAPIRequest(userInput: string, session: Session) {
  // ===== Step 1: 获取会话历史消息 =====
  const history = await session.getHistory();  // 从会话中读取过往对话

  // ===== Step 2: 构建系统提示词 =====
  // 系统提示词定义了 Agent 的行为规范和能力边界
  const systemPrompt = buildSystemPrompt({
    basePrompt: CLAUDE_CODE_SYSTEM_PROMPT,     // 基础系统提示模板
    projectContext: await loadProjectContext(), // 加载项目级配置（.claude/ 目录）
    permissions: session.permissions,           // 当前会话的权限策略
    tools: getAvailableTools(session),          // 获取可用工具列表
  });

  // ===== Step 3: 构造完整的请求体 =====
  const request = {
    model: "claude-sonnet-4-20250514",  // 指定使用的模型版本
    max_tokens: 8192,                   // 最大输出 Token 数限制
    system: systemPrompt,               // 系统提示词（定义 Agent 人设）
    messages: [                         // 对话消息列表
      ...history,                       // 展开历史消息
      { role: "user", content: userInput }  // 添加当前用户输入
    ],
    tools: TOOL_DEFINITIONS,            // 工具定义列表
    stream: true,                       // 启用 SSE 流式响应
    metadata: {                         // 请求元数据（用于追踪和计费）
      user_id: session.userId,          // 用户唯一标识
      session_id: session.id,           // 会话唯一标识
    }
  };

  // 返回构建好的请求对象
  return request;
}`
      },
      {
        label: 'WebSocket 连接',
        language: 'TypeScript',
        code: `// ===== Codex/Harness 风格的 WebSocket 实时通信 =====

// WebSocket 连接管理类
// 用于建立与服务器的双向实时通信通道
class AgentWebSocket {
  private ws: WebSocket;              // WebSocket 连接实例
  private reconnectAttempts = 0;      // 重连尝试次数计数器

  // 连接方法：建立 WebSocket 连接
  // sessionId: 会话唯一标识，用于服务器路由
  async connect(sessionId: string) {
    // ===== Step 1: 获取认证令牌 =====
    const token = await getAuthToken();  // 从认证服务获取 JWT

    // ===== Step 2: 创建 WebSocket 连接 =====
    // 使用 wss:// 协议（加密的 WebSocket）
    this.ws = new WebSocket(
      \`wss://api.agent.com/v1/sessions/\${sessionId}/ws\`,  // 连接 URL
      { headers: { Authorization: \`Bearer \${token}\` } }   // 认证头
    );

    // ===== Step 3: 设置消息处理回调 =====
    // 当收到服务器消息时触发
    this.ws.onmessage = (event) => {
      // 解析 JSON 格式的消息数据
      const data = JSON.parse(event.data);

      // 根据消息类型分发处理
      switch (data.type) {
        case 'text_delta':                // 文本增量更新
          this.onTextDelta(data.delta);   // 调用文本处理方法
          break;
        case 'tool_use':                  // 工具调用开始
          this.onToolCall(data.tool_name, data.input);  // 处理工具调用
          break;
        case 'tool_result':               // 工具执行结果
          this.onToolResult(data.result); // 显示工具结果
          break;
        case 'thinking':                  // 思维链输出
          this.onThinking(data.content);  // 显示 Agent 思考过程
          break;
        case 'error':                     // 错误消息
          this.onError(data.error);       // 错误处理
          break;
      }
    };

    // ===== Step 4: 设置断连重连机制 =====
    // 连接关闭时自动尝试重连
    this.ws.onclose = () => this.handleReconnect();
  }

  // 重连处理方法：指数退避策略
  private handleReconnect() {
    // 最多尝试 5 次重连
    if (this.reconnectAttempts < 5) {
      // 计算延迟时间：指数增长（2^n * 1000 ms）
      const delay = Math.pow(2, this.reconnectAttempts) * 1000;
      // 延迟后重新连接
      setTimeout(() => this.connect(this.sessionId), delay);
      this.reconnectAttempts++;  // 增加重连计数
    }
  }
}`
      }
    ]
  },
  // ===== Phase 2: 安全层实现 =====
  {
    title: '横切层: 安全与合规',
    description: 'Prompt Injection 检测、PII 过滤、权限验证等安全机制的核心实现。这是保护系统免受恶意攻击的关键屏障。',
    icon: '🛡️',
    color: 'text-red-400',
    borderColor: 'border-red-500/20',
    tabs: [
      {
        label: 'Prompt Injection 检测',
        language: 'Python',
        code: `# ===== Prompt Injection 检测系统 =====
# 用于检测用户输入中的恶意指令注入攻击

import re                                  # 正则表达式模块，用于模式匹配
from transformers import pipeline          # Hugging Face 推理管道

# Prompt Injection 检测器类
# 结合规则引擎和机器学习模型进行双重检测
class PromptInjectionDetector:
    def __init__(self):
        # ===== 初始化基于 ML 的分类器 =====
        # 使用专门训练的 DeBERTa 模型检测注入攻击
        self.classifier = pipeline(
            "text-classification",                          # 文本分类任务
            model="protectai/deberta-v3-base-prompt-injection-v2"  # 专用检测模型
        )

        # ===== 初始化规则引擎 =====
        # 预定义的恶意模式正则表达式列表
        self.patterns = [
            r"ignore (?:all )?(?:previous|above) instructions",  # "忽略所有之前指令"模式
            r"you are now (?:a|an|the)",                          # "你现在变成..."模式
            r"system prompt[:\\s]",                               # "系统提示:"关键词
            r"\\[INST\\]|\\[/INST\\]|<\\|im_start\\|>",           # LLaMA/Mistral 特殊标记
            r"jailbreak|DAN|bypass",                              # 常见绕过关键词
        ]

    async def detect(self, user_input: str) -> SafetyResult:
        """检测输入是否包含注入攻击"""

        # ===== Step 1: 规则匹配（快速路径）=====
        # 遍历所有预定义模式进行匹配
        for pattern in self.patterns:
            # 使用正则搜索，忽略大小写
            if re.search(pattern, user_input, re.IGNORECASE):
                # 匹配成功，返回不安全结果
                return SafetyResult(
                    is_safe=False,         # 标记为不安全
                    reason="rule_match",   # 原因：规则匹配
                    confidence=0.95        # 置信度：95%
                )

        # ===== Step 2: ML 分类器（深度检测）=====
        # 对前 512 个 Token 进行模型推理（截断以加速）
        result = self.classifier(user_input[:512])

        # 检查分类结果是否为 INJECTION（注入攻击）
        if result[0]["label"] == "INJECTION":
            # 如果置信度超过 85%，判定为攻击
            if result[0]["score"] > 0.85:
                return SafetyResult(
                    is_safe=False,              # 标记为不安全
                    reason="ml_classifier",     # 原因：模型检测
                    confidence=result[0]["score"]  # 返回实际置信度
                )

        # ===== Step 3: LLM-as-Judge（高置信检测）=====
        # 使用另一个 LLM 作为裁判进行最终判断
        judge_result = await self.llm_judge(user_input)

        # 所有检测通过，返回安全结果
        return SafetyResult(is_safe=True, confidence=0.99)`
      },
      {
        label: 'PII 脱敏',
        language: 'Python',
        code: `# ===== PII (个人身份信息) 检测与脱敏 =====
# 用于识别并隐藏文本中的敏感个人信息

import presidio_analyzer          # Microsoft Presidio 分析器
import presidio_anonymizer        # Microsoft Presidio 脱敏器

# PII 过滤器类
# 扫描文本中的敏感信息并进行脱敏处理
class PIIFilter:
    def __init__(self):
        # ===== 初始化分析引擎 =====
        # 用于识别文本中的 PII 实体
        self.analyzer = presidio_analyzer.AnalyzerEngine()

        # ===== 初始化脱敏引擎 =====
        # 用于对识别的 PII 进行替换/掩码处理
        self.anonymizer = presidio_anonymizer.AnonymizerEngine()

        # ===== 定义支持的 PII 类型 =====
        # 以下实体类型将被自动识别和处理
        self.entities = [
            "PERSON",          # 人名（如：张三、John Smith）
            "EMAIL_ADDRESS",   # 邮箱地址（如：user@example.com）
            "PHONE_NUMBER",    # 电话号码
            "CREDIT_CARD",     # 信用卡号
            "IBAN_CODE",       # 国际银行账号
            "IP_ADDRESS",      # IP 地址（如：192.168.1.1）
            "US_SSN",          # 美国社会安全号
            "CRYPTO",          # 加密货币钱包地址
            "MEDICAL_LICENSE", # 医疗执照号
            "URL",             # 网址链接
            "US_PASSPORT",     # 美国护照号
            "LOCATION",        # 地理位置
        ]

    def scan_and_redact(self, text: str) -> tuple[str, list]:
        """扫描文本中的 PII 并脱敏处理"""
        # 参数：text - 待扫描的原始文本
        # 返回：(脱敏后文本, 检测到的 PII 列表)

        # ===== Step 1: 分析检测阶段 =====
        # 使用分析引擎扫描文本中的 PII 实体
        results = self.analyzer.analyze(
            text=text,                  # 输入文本
            entities=self.entities,     # 要检测的实体类型列表
            language="en",              # 语言设置（支持 en/zh）
            score_threshold=0.7,        # 置信度阈值（70%以上才报告）
        )

        # ===== Step 2: 脱敏处理阶段 =====
        # 根据检测结果对敏感信息进行替换
        anonymized = self.anonymizer.anonymize(
            text=text,                  # 原始文本
            analyzer_results=results,   # 分析结果列表
            operators={                  # 不同类型的脱敏策略
                # 默认策略：完全替换为 <REDACTED>
                "DEFAULT": presidio_anonymizer.OperatorConfig(
                    "replace", {"new_value": "<REDACTED>"}  # 替换占位符
                ),
                # 邮箱专用策略：部分掩码（保留前缀）
                "EMAIL_ADDRESS": presidio_anonymizer.OperatorConfig(
                    "mask", {"chars_to_mask": 6, "masking_char": "*"}  # 后6位用*掩码
                ),
            }
        )

        # 返回脱敏后的文本和检测结果列表
        return anonymized.text, results`
      },
      {
        label: '权限沙盒',
        language: 'TypeScript',
        code: `// ===== Agent 权限控制与沙盒配置 (Claude Code 风格) =====

// 权限策略接口：定义 Agent 的操作边界
interface PermissionPolicy {
  file_read: PathPattern[];      // 允许读取的路径模式（如 "*.ts", "src/**"）
  file_write: PathPattern[];     // 允许写入的路径模式（更严格的白名单）
  bash_commands: string[];       // 允许执行的 shell 命令列表
  network_access: boolean;       // 是否允许网络访问（true/false）
  max_file_size: number;         // 最大文件大小限制（字节）
  allowed_tools: string[];       // 允许使用的工具名称列表
}

// 权限守卫类
// 在执行每个操作前检查是否符合策略
class PermissionGuard {
  private policy: PermissionPolicy;  // 当前生效的权限策略

  // 构造函数：初始化权限策略
  constructor(policy: PermissionPolicy) {
    this.policy = policy;  // 保存策略配置
  }

  // 检查工具调用权限
  // tool: 工具名称
  // params: 工具参数对象
  // 返回：PermissionResult（是否允许 + 原因）
  async checkToolPermission(
    tool: string,
    params: Record<string, any>
  ): Promise<PermissionResult> {
    // 根据不同工具类型进行权限检查
    switch (tool) {
      case 'write_file':  // 文件写入操作
        return this.checkFileWrite(params.path, params.content);

      case 'bash':  // Shell 命令执行
        return this.checkBashCommand(params.command);

      case 'web_fetch':  // 网络请求操作
        // 检查网络访问是否被启用
        if (!this.policy.network_access) {
          return { allowed: false, reason: "网络访问被禁用" };  // 返回拒绝
        }
        return { allowed: true };  // 允许执行

      default:  // 其他工具
        // 检查工具是否在白名单中
        if (!this.policy.allowed_tools.includes(tool)) {
          return { allowed: false, reason: \`工具 \${tool} 未授权\` };  // 未授权
        }
        return { allowed: true };  // 工具已授权
    }
  }

  // 检查文件写入权限
  // path: 目标文件路径
  // content: 待写入内容
  private checkFileWrite(path: string, content: string) {
    // ===== 检查路径白名单 =====
    // 使用 minimatch 库进行 glob 模式匹配
    const isAllowed = this.policy.file_write.some(
      pattern => minimatch(path, pattern)  // 检查路径是否匹配白名单模式
    );

    // 如果路径不在白名单中
    if (!isAllowed) {
      return {
        allowed: false,               // 拒绝写入
        reason: \`路径 \${path} 不在写入白名单中\`,  // 拒绝原因
        requiresApproval: true        // 标记需要用户手动审批
      };
    }

    // 路径合法，允许写入
    return { allowed: true };
  }
}`
      }
    ]
  },
  // ===== Phase 3: 上下文工程 =====
  {
    title: 'Phase 2: 上下文工程',
    description: 'RAG 检索增强、向量化、上下文窗口管理是 Agent 效果的关键。包括代码库索引、语义搜索、智能截断等技术。',
    icon: '🧠',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    tabs: [
      {
        label: 'RAG 检索管线',
        language: 'Python',
        code: `# ===== RAG 检索增强生成管线 =====
# 用于从知识库中检索相关信息以增强 LLM 回答质量

from sentence_transformers import SentenceTransformer  # Embedding 模型库
import chromadb                                         # 向量数据库客户端
from typing import List                                 # 类型提示

# RAG 管线类
# 实现多阶段检索：稀疏检索 + 密集检索 + 重排序
class RAGPipeline:
    def __init__(self):
        # ===== Step 1: 初始化 Embedding 模型 =====
        # 用于将文本转换为向量表示
        self.embedder = SentenceTransformer(
            "BAAI/bge-large-en-v1.5"  # BGE 大模型，中文可用 bge-large-zh-v1.5
        )

        # ===== Step 2: 初始化向量数据库 =====
        # 用于存储和检索文档向量
        self.vector_db = chromadb.HttpClient(host="vectordb.internal")  # 连接远程 Chroma
        self.collection = self.vector_db.get_collection("codebase")     # 获取代码库集合

        # ===== Step 3: 初始化重排序模型 =====
        # Cross-Encoder 用于对初步结果进行精确评分
        self.reranker = CrossEncoder("BAAI/bge-reranker-v2-m3")  # 多语言重排序模型

    async def retrieve(
        self, query: str, project_id: str, top_k: int = 20
    ) -> List[Document]:
        """多阶段检索流程"""
        # 参数：query - 用户查询文本
        #       project_id - 项目标识（用于过滤）
        #       top_k - 最终返回的文档数量

        # ===== Stage 1: 稀疏检索 (BM25) =====
        # 关键词匹配，适合精确查找
        sparse_results = await self.bm25_search(query, project_id, n=50)  # 取前50个

        # ===== Stage 2: 密集检索 (向量搜索) =====
        # 语义匹配，适合模糊/概念查询
        query_embedding = self.embedder.encode(query)  # 将查询转为向量
        dense_results = self.collection.query(
            query_embeddings=[query_embedding.tolist()],  # 查询向量列表
            n_results=50,                                 # 返回50个结果
            where={"project_id": project_id},             # 过滤条件：项目ID
        )

        # ===== Stage 3: 混合融合 (RRF) =====
        # Reciprocal Rank Fusion：合并两种检索结果
        fused = reciprocal_rank_fusion(sparse_results, dense_results)

        # ===== Stage 4: 精排 (Cross-Encoder Reranking) =====
        # 对融合结果进行精确评分，提升质量
        pairs = [(query, doc.content) for doc in fused[:top_k]]  # 构建查询-文档对
        scores = self.reranker.predict(pairs)                    # 模型评分

        # 按评分降序排列
        reranked = sorted(
            zip(fused[:top_k], scores),  # 将文档与评分配对
            key=lambda x: x[1],          # 按评分排序
            reverse=True                 # 降序（高分在前）
        )

        # 返回评分超过 0.3 的高质量文档
        return [doc for doc, score in reranked if score > 0.3]`
      },
      {
        label: '代码库索引',
        language: 'TypeScript',
        code: `// ===== 代码库索引构建 (AST + LSP 感知) =====
// 智能代码索引，支持语义搜索和代码导航

import Parser from 'tree-sitter';    // Tree-sitter AST 解析器
import * as path from 'path';        // Node.js 路径处理模块

// 代码库索引器类
// 对代码进行 AST 感知分块和向量化存储
class CodebaseIndexer {
  private parser: Parser;                    // Tree-sitter 解析器实例
  private embeddingModel: EmbeddingModel;    // Embedding 模型实例

  /**
   * 对代码库进行智能分块和索引
   * 与简单文本分块不同，这里使用 AST 感知分块
   * 优点：分块边界对齐到函数/类定义，语义更完整
   */
  async indexRepository(repoPath: string) {
    // ===== Step 1: 扫描代码文件 =====
    // 使用 glob 模式匹配所有源代码文件
    const files = await glob('**/*.{ts,tsx,py,js,jsx}', {
      cwd: repoPath  // 在仓库根目录下搜索
    });

    // 用于存储所有代码块的数组
    const chunks: CodeChunk[] = [];

    // ===== Step 2: 逐文件处理 =====
    for (const file of files) {
      // 读取文件内容
      const content = await fs.readFile(
        path.join(repoPath, file), 'utf-8'  // 拼接完整路径
      );

      // 使用 Tree-sitter 解析生成 AST
      const tree = this.parser.parse(content);

      // ===== Step 3: AST 感知分块 =====
      // 按函数/类/模块边界分割，而非简单行数切割
      const astChunks = this.extractSemanticChunks(tree, content);

      // ===== Step 4: 构建代码块对象 =====
      for (const chunk of astChunks) {
        chunks.push({
          file_path: file,           // 文件相对路径
          content: chunk.text,       // 代码块文本内容
          type: chunk.nodeType,      // AST 节点类型（function/class/module）
          name: chunk.name,          // 函数名/类名
          start_line: chunk.startLine,  // 起始行号
          end_line: chunk.endLine,      // 结束行号
          // ===== 上下文信息（用于增强检索）=====
          imports: chunk.imports,       // 导入的模块列表
          exports: chunk.exports,       // 导出的符号列表
          dependencies: chunk.dependencies,  // 依赖的其他代码块
          // ===== 语义摘要 =====
          summary: await this.summarize(chunk.text),  // LLM 生成的摘要
        });
      }
    }

    // ===== Step 5: 批量生成 Embedding =====
    // 将每个代码块转换为向量表示
    const embeddings = await this.embeddingModel.batchEncode(
      // 构建用于 Embedding 的文本：类型 + 名称 + 摘要
      chunks.map(c => \`\${c.type} \${c.name}: \${c.summary}\`)
    );

    // ===== Step 6: 写入向量数据库 =====
    await this.vectorDB.upsert(chunks, embeddings);

    // 输出索引统计信息
    console.log(\`Indexed \${chunks.length} chunks from \${files.length} files\`);
  }
}`
      },
      {
        label: '上下文窗口管理',
        language: 'TypeScript',
        code: `// ===== 上下文窗口管理器 - 智能填充 200K Token 窗口 =====
// 管理有限 Token 预算，确保关键信息优先包含

import { encode } from 'tiktoken';  // OpenAI Token 计算库

// 上下文项接口：描述单个上下文元素
interface ContextItem {
  content: string;             // 文本内容
  priority: number;            // 优先级（0-100，越高越重要）
  type: 'system' | 'history' | 'rag' | 'tool_result' | 'memory';  // 内容类型
  tokenCount: number;          // Token 数量
  compressible: boolean;       // 是否可压缩（如历史消息可摘要）
}

// 上下文窗口管理器类
// 智能填充有限的 Token 窗口
class ContextWindowManager {
  private maxTokens: number;           // 模型最大 Token 数（如 200K）
  private reservedForOutput: number;   // 为输出保留的 Token 数

  // 构造函数：初始化窗口大小
  constructor(modelMaxTokens = 200000, outputReserve = 8192) {
    this.maxTokens = modelMaxTokens;       // 模型上下文上限
    this.reservedForOutput = outputReserve;  // 输出 Token 预留
  }

  // 构建上下文：选择并组装最终消息列表
  buildContext(items: ContextItem[]): Message[] {
    // ===== Step 1: 计算可用 Token 预算 =====
    const budget = this.maxTokens - this.reservedForOutput;  // 总预算减输出预留
    let used = 0;  // 已使用的 Token 计数器

    // ===== Step 2: 按优先级排序 =====
    // 高优先级内容（如系统提示）优先被包含
    const sorted = [...items].sort((a, b) => b.priority - a.priority);

    // ===== Step 3: 贪心填充算法 =====
    const selected: ContextItem[] = [];  // 已选中的上下文项
    for (const item of sorted) {
      // 检查是否有足够预算容纳完整内容
      if (used + item.tokenCount <= budget) {
        selected.push(item);       // 加入选中列表
        used += item.tokenCount;   // 更新已用计数
      } else if (item.compressible) {
        // ===== Step 4: 压缩策略 =====
        // 对可压缩内容进行摘要/截断处理
        const compressed = await this.compress(item, budget - used);
        if (compressed) {
          selected.push(compressed);       // 加入压缩后的内容
          used += compressed.tokenCount;   // 更新计数
        }
      }
    }

    // ===== Step 5: 按类型组装最终上下文 =====
    // 将选中内容组装成标准消息格式
    return this.assembleMessages(selected);
  }

  // 压缩方法：对特定类型内容进行智能压缩
  private async compress(
    item: ContextItem, maxTokens: number
  ): Promise<ContextItem | null> {
    // 对话历史压缩：保留最近 N 轮 + 摘要旧对话
    if (item.type === 'history') {
      return this.summarizeHistory(item, maxTokens);  // 生成摘要
    }
    // 工具结果压缩：截断过长输出
    if (item.type === 'tool_result') {
      return this.truncateToolResult(item, maxTokens);  // 截断处理
    }
    // 其他类型不压缩，返回 null 表示跳过
    return null;
  }
}`
      }
    ]
  },
  // ===== Phase 4: 模型推理核心 =====
  {
    title: 'Phase 3: Agent循环 (推理+工具)',
    description: 'Transformer 推理引擎的核心实现，包括 KV Cache 管理、Flash Attention、推测解码等性能优化技术。',
    icon: '⚡',
    color: 'text-green-400',
    borderColor: 'border-green-500/20',
    tabs: [
      {
        label: 'vLLM 推理服务',
        language: 'Python',
        code: `# ===== vLLM 高性能推理服务部署 =====
# vLLM 是最流行的 LLM 推理框架，使用 PagedAttention 技术

from vllm import LLM, SamplingParams                # vLLM 核心模块
from vllm.engine.async_llm_engine import AsyncLLMEngine  # 异步引擎

# 推理服务类
# 封装 vLLM引擎，提供高性能流式生成
class InferenceService:
    def __init__(self):
        # ===== 初始化 vLLM 异步引擎 =====
        # AsyncLLMEngine 支持并发请求处理
        self.engine = AsyncLLMEngine.from_engine_args(
            model="anthropic/claude-3.5-sonnet",  # 模型名称（示例）
            tensor_parallel_size=8,               # 8 GPU 张量并行（分摊计算）
            max_model_len=200000,                 # 200K 上下文长度上限
            gpu_memory_utilization=0.92,          # GPU 显存利用率（92%）
            enable_prefix_caching=True,           # Prompt Cache（相同前缀复用）
            enable_chunked_prefill=True,          # 分块预填充（优化长 Prompt）
            max_num_seqs=256,                     # 最大并发序列数
            quantization="fp8",                   # FP8 量化（减少显存占用）
            kv_cache_dtype="fp8_e5m2",            # KV Cache 使用 FP8 存储
        )

    async def generate_stream(
        self, prompt: str, params: SamplingParams
    ):
        """流式生成：逐步返回生成的 Token"""
        # 参数：prompt - 输入提示词
        #       params - 采样参数（温度、top_p 等）

        # ===== 构建采样参数 =====
        sampling = SamplingParams(
            temperature=params.temperature or 0.7,    # 温度：控制随机性（0.7 为默认）
            top_p=params.top_p or 0.95,               # Top-p：核采样阈值
            max_tokens=params.max_tokens or 4096,     # 最大生成 Token 数
            stop=params.stop_sequences,               # 停止词列表（如 "###"）
            repetition_penalty=1.05,                  # 重复惩罚：抑制重复内容
        )

        # ===== 生成请求 ID =====
        request_id = generate_uuid()  # 唯一标识，用于追踪

        # ===== PagedAttention 工作原理 =====
        # 按需分配 KV Cache 显存页，而非预分配整个 max_seq_len
        # 优势：显著减少显存浪费，支持更多并发请求

        # ===== 流式生成循环 =====
        async for output in self.engine.generate(
            prompt, sampling, request_id  # 传入输入和参数
        ):
            # 每生成一个 Token 就立即返回
            yield {
                "token": output.outputs[0].text,  # 当前生成的文本片段
                "finish_reason": output.outputs[0].finish_reason,  # 结束原因
                "usage": {  # Token 使用统计
                    "prompt_tokens": len(output.prompt_token_ids),  # 输入 Token 数
                    "completion_tokens": len(  # 输出 Token 数
                        output.outputs[0].token_ids
                    ),
                }
            }`
      },
      {
        label: 'KV Cache & Flash Attention',
        language: 'Python',
        code: `# ===== Flash Attention 2 核心实现 (简化版) =====
# Flash Attention 是 IO 感知的精确注意力算法，显著加速 Transformer 推理

import torch             # PyTorch 张量库
import triton            # Triton GPU 编程语言
import triton.language as tl  # Triton 语言模块

# Triton JIT 编译的 Flash Attention 内核函数
# @triton.jit: 将 Python 代码编译为高效 GPU 内核
@triton.jit
def flash_attention_kernel(
    Q, K, V, Out,          # 输入输出张量：Query/Key/Value/输出
    sm_scale,               # Softmax 缩放因子：1/sqrt(d_k)，防止梯度爆炸
    stride_qz, stride_qh, stride_qm, stride_qk,  # Q 张量的步长（批次/头/序列/维度）
    stride_kz, stride_kh, stride_kn, stride_kk,  # K 张量的步长
    stride_vz, stride_vh, stride_vn, stride_vk,  # V 张量的步长
    stride_oz, stride_oh, stride_om, stride_ok,  # Out 张量的步长
    N_CTX,                  # 序列长度（上下文 Token 数）
    BLOCK_M: tl.constexpr,  # Query 分块大小（编译时常量）
    BLOCK_N: tl.constexpr,  # Key 分块大小
    BLOCK_K: tl.constexpr,  # Head 维度分块大小
):
    """
    Flash Attention 核心原理：
    - 将 Q/K/V 分块加载到 SRAM（GPU 高速缓存）
    - 在 SRAM 中计算注意力，避免频繁 HBM读写
    - 使用 Online Softmax 技巧避免全局归一化
    - 减少 HBM读写次数：从 O(N²d) 降到 O(N²d²/M)
    - 性能提升：2-4倍加速，内存占用减半
    """
    # ===== Step 1: 获取当前 block 的位置 =====
    start_m = tl.program_id(0)    # Query 分块的起始位置
    off_hz = tl.program_id(1)     # 当前处理的头和批次索引

    # ===== Step 2: 初始化累加器 =====
    # 用于保存 Softmax 的中间结果
    m_i = tl.zeros([BLOCK_M], dtype=tl.float32) - float("inf")  # 最大值初始化
    l_i = tl.zeros([BLOCK_M], dtype=tl.float32)                 # 累加和初始化
    acc = tl.zeros([BLOCK_M, BLOCK_K], dtype=tl.float32)        # 输出累加器

    # ===== Step 3: 分块迭代 Key/Value =====
    # 每次处理一个BLOCK_N大小的 K/V 分块
    for start_n in range(0, N_CTX, BLOCK_N):
        # 加载 Q 和 K 分块到 SRAM
        q = tl.load(Q_block_ptr)     # 加载 Query 分块
        k = tl.load(K_block_ptr)     # 加载 Key 分块

        # ===== Step 4: 计算 QK^T / sqrt(d) =====
        # 注意力得分矩阵，缩放防止数值过大
        qk = tl.dot(q, tl.trans(k)) * sm_scale  # 矩阵乘法 + 缩放

        # ===== Step 5: 应用因果掩码（自回归）=====
        # 确保只能看到当前位置之前的 Token
        qk = tl.where(causal_mask, qk, float("-inf"))  # 未来位置置为-inf

        # ===== Step 6: Online Softmax 算法 =====
        # Milakov & Gimelshein 2018 提出的增量 Softmax
        m_ij = tl.max(qk, axis=1)              # 当前分块的最大值
        m_new = tl.maximum(m_i, m_ij)          # 全局最大值更新
        alpha = tl.exp(m_i - m_new)            # 修正因子（旧值调整）
        p = tl.exp(qk - m_new[:, None])        # Softmax 概率分布

        # ===== Step 7: 更新累加器 =====
        # 增量更新输出，避免存储完整注意力矩阵
        l_i = l_i * alpha + tl.sum(p, axis=1)         # 更新归一化因子
        acc = acc * alpha[:, None] + tl.dot(p, v)     # 更新加权输出
        m_i = m_new                                   # 更新最大值

    # ===== Step 8: 写回最终结果 =====
    # 归一化并写入输出张量
    acc = acc / l_i[:, None]            # 除以归一化因子
    tl.store(Out_block_ptr, acc)        # 写入 HBM（显存）


# ===== KV Cache 管理 (PagedAttention) =====
# 像操作系统管理虚拟内存一样管理 KV Cache
class PagedKVCache:
    """
    PagedAttention 核心思想：
    - 避免预分配整个 max_seq_len 的 GPU 显存
    - 按需分配固定大小的 "页"（如每页16个Token）
    - 支持跨请求共享前缀（Prompt Caching）
    - 显存利用率提升 2-4 倍
    """

    def __init__(self, block_size=16, num_gpu_blocks=8192):
        self.block_size = block_size              # 每页的 Token 数
        self.free_blocks = list(range(num_gpu_blocks))  # 空闲页列表
        self.block_tables = {}                    # request_id -> [页ID列表]

    def allocate(self, request_id: str, num_tokens: int):
        """为新请求分配 KV Cache 页"""
        # 计算需要的页数（向上取整）
        num_blocks = (num_tokens + self.block_size - 1) // self.block_size
        # 从空闲列表弹出需要的页
        blocks = [self.free_blocks.pop() for _ in range(num_blocks)]
        # 记录分配关系
        self.block_tables[request_id] = blocks
        return blocks  # 返回分配的页 ID 列表`
      },
      {
        label: 'GPU 集群调度',
        language: 'Python',
        code: `# ===== GPU 集群调度与负载均衡 =====
# 使用 Ray Serve 和 Kubernetes 实现弹性扩缩容

from kubernetes import client, config    # Kubernetes Python 客户端
import ray                                # Ray 分布式计算框架
from ray import serve                     # Ray Serve 模型部署框架

# ===== Ray Serve 部署配置 =====
# @serve.deployment: 定义部署规格和自动扩缩容策略
@serve.deployment(
    num_replicas=4,                       # 初始副本数：4 个推理服务实例
    ray_actor_options={
        "num_gpus": 8,                    # 每个副本使用 8 GPU（张量并行）
        "memory": 200 * 1024**3,          # 200GB 内存配额
    },
    autoscaling_config={
        "min_replicas": 2,                # 最小副本数（空闲时保留）
        "max_replicas": 16,               # 最大副本数（峰值扩容上限）
        "target_ongoing_requests": 32,    # 每副本目标并发请求数
        "upscale_delay_s": 10,            # 扩容延迟（避免抖动）
        "downscale_delay_s": 300,         # 缩容延迟（5分钟稳定后）
    },
    max_ongoing_requests=64,              # 单副本最大并发数（排队上限）
)
class LLMDeployment:
    """LLM 推理服务部署类"""
    def __init__(self):
        self.engine = create_engine()     # 初始化 vLLM 引擎

    async def __call__(self, request):
        """处理推理请求"""
        # ===== 智能路由策略 =====
        # 根据请求特征选择最优副本
        # 1. 短请求 -> 低延迟实例（小模型）
        # 2. 长上下文 -> 大显存实例（8xH100）
        # 3. Prefix Cache命中 -> 同一实例（复用 KV Cache）

        # 计算请求前缀的哈希值（用于 Cache亲和性路由）
        prefix_hash = hash_prefix(request.messages[:5])  # 取前5条消息
        target = self.cache_affinity_router(prefix_hash)  # 选择目标副本

        # 调用目标副本生成响应
        return await target.generate(request)


# ===== Kubernetes HPA 自动扩缩容配置 =====
# Horizontal Pod Autoscaler: 根据 GPU利用率自动调整 Pod 数量
k8s_hpa_config = {
    "apiVersion": "autoscaling/v2",       # HPA API 版本
    "kind": "HorizontalPodAutoscaler",    # 资源类型
    "spec": {
        "minReplicas": 2,                 # 最小副本数
        "maxReplicas": 32,                # 最大副本数（集群上限）
        "metrics": [                      # 扩缩容依据的指标
            {
                "type": "Pods",           # Pod 级别指标
                "pods": {
                    "metric": {"name": "gpu_utilization"},  # GPU利用率指标
                    "target": {
                        "type": "AverageValue",             # 平均值目标
                        "averageValue": "80",               # 目标80%利用率
                    }
                }
            },
            {
                "type": "Pods",           # 第二个指标
                "pods": {
                    "metric": {"name": "request_queue_depth"},  # 请求队列深度
                    "target": {
                        "type": "AverageValue",
                        "averageValue": "10",               # 队列超过10时扩容
                    }
                }
            }
        ]
    }
}`
      }
    ]
  },
  // ===== Phase 5: Agent Loop & Tool Use =====
  {
    title: 'Phase 3: Agent循环 (Tool定义)',
    description: 'Agentic 循环是现代 AI Agent 的核心范式。Agent 通过 ReAct (思考-行动-观察) 模式，迭代调用工具完成复杂任务。',
    icon: '🔄',
    color: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    tabs: [
      {
        label: 'Agent Loop 核心',
        language: 'TypeScript',
        code: `// ===== Agent Loop 核心实现 (Claude Code / Codex 模式) =====
// Agentic 循环：思考 -> 行动 -> 观察 -> 思考...

// Agent 状态接口：跟踪 Agent 循环的执行状态
interface AgentState {
  messages: Message[];           // 对话消息列表（包含历史）
  toolResults: ToolResult[];     // 工具执行结果列表
  iteration: number;             // 当前迭代次数计数器
  maxIterations: number;         // 最大迭代限制（防止无限循环）
  isComplete: boolean;           // 任务完成标志
}

// Agent Loop 类
// 实现 ReAct (Reasoning + Acting) 循环模式
class AgentLoop {
  private llm: LLMClient;        // LLM API 客户端
  private toolRouter: ToolRouter;// 工具路由器（分发工具调用）
  private sandbox: Sandbox;      // 执行沙盒（安全隔离环境）

  // Agent 主循环：迭代执行直到任务完成
  async run(userQuery: string, context: Context): Promise<AgentResult> {
    // ===== Step 1: 初始化状态 =====
    const state: AgentState = {
      messages: [{ role: 'user', content: userQuery }],  // 初始用户输入
      toolResults: [],            // 空结果列表
      iteration: 0,               // 迭代计数从0开始
      maxIterations: 50,          // 最大50轮（防止死循环）
      isComplete: false,          // 任务未完成
    };

    // ===== Step 2: 进入 Agent Loop =====
    // 循环条件：任务未完成且未超迭代上限
    while (!state.isComplete && state.iteration < state.maxIterations) {
      state.iteration++;  // 迭代计数递增

      // ===== THINK阶段: LLM 推理 =====
      // 调用 LLM 分析当前状态并决策下一步行动
      const response = await this.llm.chat({
        messages: state.messages,           // 全部对话历史
        tools: this.toolRouter.getDefinitions(),  // 可用工具列表
        stream: true,                       // 启用流式响应
      });

      // ===== 判断响应类型 =====
      if (response.stop_reason === 'end_turn') {
        // ===== 情况1: 任务完成 =====
        // 模型认为无需更多工具调用，直接返回文本答案
        state.isComplete = true;            // 标记完成
        return {
          content: response.content,        // 返回最终答案
          iterations: state.iteration       // 总迭代次数
        };
      }

      if (response.stop_reason === 'tool_use') {
        // ===== 情况2: 需要调用工具 =====
        // 筛选出所有工具调用内容块
        const toolCalls = response.content.filter(
          block => block.type === 'tool_use'  // 只取 tool_use 类型
        );

        const results: ToolResult[] = [];   // 收集工具结果

        // ===== ACT阶段: 执行工具 =====
        for (const call of toolCalls) {
          // ===== 权限检查 =====
          // 检查工具调用是否符合安全策略
          const permitted = await this.checkPermission(call);
          if (!permitted.allowed && permitted.requiresApproval) {
            // 需要用户手动审批（如写入敏感文件）
            const approved = await this.requestApproval(call);
            if (!approved) continue;        // 用户拒绝，跳过此工具
          }

          // ===== 在沙盒中执行 =====
          // 安全隔离环境，防止工具破坏系统
          const result = await this.sandbox.execute(
            call.name,   // 工具名称（如 "bash"、"read_file"）
            call.input   // 工具参数（如 {command: "ls -la"}）
          );

          results.push({
            type: 'tool_result',            // 结果类型标识
            tool_use_id: call.id,           // 对应的工具调用 ID
            content: this.formatResult(result),  // 格式化的结果文本
          });
        }

        // ===== OBSERVE阶段: 将结果回注对话 =====
        // 添加助手消息（包含工具调用）和用户消息（包含结果）
        state.messages.push(
          { role: 'assistant', content: response.content },  // Agent的决策
          { role: 'user', content: results }                 // 工具执行结果
        );
      }
    }

    // ===== 异常：超迭代上限 =====
    throw new Error('Agent loop exceeded max iterations');  // 防止无限循环
  }
}`
      },
      {
        label: 'Tool 定义与路由',
        language: 'TypeScript',
        code: `// ===== 工具定义系统 (Claude Code 风格) =====
// 定义 Agent 可调用的工具及其参数规格

// 工具定义列表：每个工具描述其功能和使用方式
// LLM 通过这些描述来决定何时调用哪个工具
const TOOL_DEFINITIONS: Tool[] = [
  {
    name: "read_file",                  // 工具唯一标识名称
    description: "读取指定路径的文件内容",  // 工具用途说明（LLM依据此决策）
    input_schema: {                     // JSON Schema 定义的参数结构
      type: "object",                   // 参数是一个对象
      properties: {                     // 对象的属性定义
        path: {                         // path 参数
          type: "string",               // 类型：字符串
          description: "文件路径"        // 参数说明
        },
        offset: {                       // offset 参数（可选）
          type: "integer",              // 类型：整数
          description: "起始行号"        // 从第几行开始读
        },
        limit: {                        // limit 参数（可选）
          type: "integer",              // 类型：整数
          description: "读取行数"        // 读取多少行
        },
      },
      required: ["path"]                // 必需参数列表（path必须提供）
    }
  },
  {
    name: "write_file",                 // 写文件工具
    description: "创建或覆盖文件",        // 创建新文件或替换现有文件
    input_schema: {
      type: "object",
      properties: {
        path: { type: "string" },       // 目标文件路径
        content: { type: "string" },    // 要写入的内容
      },
      required: ["path", "content"]     // 两个参数都必须提供
    }
  },
  {
    name: "bash",                       // Shell 命令执行工具
    description: "在沙盒中执行 shell 命令",  // 安全隔离环境中执行
    input_schema: {
      type: "object",
      properties: {
        command: { type: "string" },    // 要执行的命令（如 "npm test"）
        timeout: {                      // 超时设置（可选）
          type: "integer",
          default: 30                   // 默认30秒超时
        },
      },
      required: ["command"]             // 命令参数必须
    }
  },
  {
    name: "grep_search",                // 正则搜索工具
    description: "正则搜索文件内容",      // 使用正则表达式搜索
    input_schema: {
      type: "object",
      properties: {
        pattern: { type: "string" },    // 正则表达式模式
        path: { type: "string" },       // 搜索目录（可选）
        glob: { type: "string" },       // 文件模式（如 "*.ts"）
      },
      required: ["pattern"]             // 正则模式必须
    }
  },
];

// ===== 工具路由器类 =====
// 接收工具调用请求并分发到对应的处理器
class ToolRouter {
  private handlers: Map<string, ToolHandler> = new Map();  // 工具处理器映射表

  // 注册工具处理器
  // name: 工具名称
  // handler: 处理器函数（执行具体逻辑）
  register(name: string, handler: ToolHandler) {
    this.handlers.set(name, handler);  // 将处理器存入映射表
  }

  // 分发工具调用
  // toolName: 要调用的工具名
  // input: 工具参数对象
  async dispatch(toolName: string, input: any): Promise<ToolResult> {
    // ===== Step 1: 查找处理器 =====
    const handler = this.handlers.get(toolName);  // 从映射表获取
    if (!handler) throw new Error(\`Unknown tool: \${toolName}\`);  // 未注册则报错

    // ===== Step 2: 执行并计时 =====
    const startTime = performance.now();  // 记录开始时间（毫秒）
    try {
      const result = await handler.execute(input);  // 调用处理器
      // 记录成功指标（用于监控）
      metrics.recordToolCall(toolName, performance.now() - startTime);
      return { success: true, output: result };  // 返回成功结果
    } catch (error) {
      // 捕获异常，返回错误信息（不中断流程）
      return { success: false, error: error.message };
    }
  }
}`
      },
      {
        label: 'MCP 协议连接',
        language: 'TypeScript',
        code: `// ===== MCP (Model Context Protocol) 服务器连接 =====
// MCP 是 Anthropic 提出的工具连接标准协议
// 用于统一集成各种外部工具（GitHub、Slack、数据库等）

import { Client } from "@modelcontextprotocol/sdk/client";                // MCP 客户端
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio";  // 标准IO传输

// MCP 管理器类
// 管理多个 MCP Server 的连接和工具调用
class MCPManager {
  private servers: Map<string, MCPServer> = new Map();  // 已连接的服务器映射表

  /**
   * 连接 MCP Server
   * MCP Server 可以是 GitHub、Slack、Postgres 等任何外部服务
   * 每个Server 通过 stdio（标准输入输出）与 Agent 通信
   */
  async connectServer(config: MCPServerConfig) {
    // ===== Step 1: 创建传输通道 =====
    // StdioClientTransport 通过子进程方式连接 MCP Server
    const transport = new StdioClientTransport({
      command: config.command,  // 启动命令（如 "npx"）
      args: config.args,        // 命令参数（如 ["-y", "@modelcontextprotocol/server-github"]）
      env: {                    // 环境变量（传递认证信息）
        ...process.env,         // 继承当前进程环境
        GITHUB_TOKEN: config.token,  // GitHub API Token
      }
    });

    // ===== Step 2: 创建 MCP 客户端 =====
    // 客户端负责与 Server 进行协议通信
    const client = new Client({
      name: "agent-client",     // 客户端名称标识
      version: "1.0.0",         // 客户端版本
    }, {
      capabilities: {           // 客户端能力声明
        tools: {},              // 支持工具调用
        resources: {},          // 支持资源访问
        prompts: {},            // 支持提示词模板
      }
    });

    // ===== Step 3: 建立连接 =====
    await client.connect(transport);  // 通过传输通道连接 Server

    // ===== Step 4: 获取工具列表 =====
    // 查询该 Server 提供的所有工具
    const { tools } = await client.listTools();

    // 输出连接信息和工具列表
    console.log(\`Connected to \${config.name}, tools: \${
      tools.map(t => t.name).join(', ')  // 格式化工具名称列表
    }\`);

    // ===== Step 5: 保存连接 =====
    this.servers.set(config.name, { client, tools });  // 存入映射表
  }

  /**
   * 调用 MCP Server 上的工具
   * serverName: 目标 Server 名称（如 "github"）
   * toolName: 工具名称（如 "create_issue"）
   * args: 工具参数（如 {title: "Bug report", body: "..."}）
   */
  async callTool(serverName: string, toolName: string, args: any) {
    // ===== Step 1: 查找 Server =====
    const server = this.servers.get(serverName);  // 从映射表获取
    if (!server) throw new Error(\`Server \${serverName} not connected\`);  // 未连接则报错

    // ===== Step 2: 发起工具调用 =====
    const result = await server.client.callTool({
      name: toolName,      // 工具名称
      arguments: args,     // 工具参数对象
    });

    // 返回工具执行结果
    return result.content;
  }
}

// ===== MCP Server 配置示例 =====
// 配置多个外部工具服务
const mcpConfigs = [
  {
    name: "github",        // GitHub MCP Server
    command: "npx",        // 使用 npx 启动
    args: ["-y", "@modelcontextprotocol/server-github"],  // Server 包名
    token: process.env.GITHUB_TOKEN,  // GitHub Token（环境变量）
  },
  {
    name: "filesystem",    // 文件系统 MCP Server
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-filesystem", "/workspace"],  // 工作目录
  },
  {
    name: "postgres",      // PostgreSQL MCP Server
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-postgres", DB_URL],  // 数据库连接字符串
  },
];`
      }
    ]
  },
  // ===== Phase 6: 输出后处理 =====
  {
    title: 'Phase 4: 输出后处理',
    description: '模型输出经过安全过滤、格式化渲染、缓存存储后，通过 SSE 流式传输给前端客户端。',
    icon: '✨',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    tabs: [
      {
        label: 'SSE 流式传输',
        language: 'TypeScript',
        code: `// ===== Server-Sent Events (SSE) 流式传输实现 =====
// SSE 是单向服务器推送协议，适合实时流式响应

import { Hono } from 'hono';              // Hono Web框架（轻量高效）
import { streamSSE } from 'hono/streaming';  // SSE流式响应工具

// 创建 Hono 应用实例
const app = new Hono();

// 注册 POST /v1/chat/completions 路由
// 处理聊天请求并返回 SSE 流式响应
app.post('/v1/chat/completions', async (c) => {
  // ===== Step 1: 解析请求体 =====
  const body = await c.req.json();  // 获取 JSON 格式的请求参数

  // ===== Step 2: 启动 SSE 流式响应 =====
  // streamSSE 自动设置正确的 HTTP 响应头
  return streamSSE(c, async (stream) => {
    // 创建 Agent Loop 实例
    const agentLoop = new AgentLoop();

    // ===== Step 3: 订阅 Agent 事件 =====
    // 当 Agent 生成文本增量时触发
    agentLoop.on('text_delta', async (delta) => {
      // 发送 SSE 事件：content_block_delta
      await stream.writeSSE({
        event: 'content_block_delta',     // SSE 事件类型
        data: JSON.stringify({            // JSON 格式数据
          type: 'content_block_delta',    // 数据类型标识
          delta: { type: 'text_delta', text: delta },  // 文本增量
        }),
      });
    });

    // 当 Agent 开始调用工具时触发
    agentLoop.on('tool_use', async (toolCall) => {
      // 发送 SSE 事件：content_block_start
      await stream.writeSSE({
        event: 'content_block_start',     // 工具调用开始事件
        data: JSON.stringify({
          type: 'content_block_start',
          content_block: {                // 工具调用详情
            type: 'tool_use',             // 内容块类型
            id: toolCall.id,              // 工具调用唯一 ID
            name: toolCall.name,          // 工具名称（如 "bash"）
            input: toolCall.input,        // 工具参数
          },
        }),
      });
    });

    // 当 Agent 输出思考过程时触发
    agentLoop.on('thinking', async (thought) => {
      // 发送 SSE 事件：thinking（思维链输出）
      await stream.writeSSE({
        event: 'thinking',                // 思维链事件类型
        data: JSON.stringify({
          type: 'thinking',
          thinking: thought,              // Agent 的思考内容
        }),
      });
    });

    // 当 Agent 完成任务时触发
    agentLoop.on('done', async (usage) => {
      // 发送 SSE 事件：message_stop（最终结束）
      await stream.writeSSE({
        event: 'message_stop',            // 响应结束事件
        data: JSON.stringify({
          type: 'message_stop',
          usage: {                        // Token 使用统计
            input_tokens: usage.inputTokens,      // 输入 Token 数
            output_tokens: usage.outputTokens,    // 输出 Token 数
            cache_read_input_tokens: usage.cacheReadTokens,   // 缓存读取
            cache_creation_input_tokens: usage.cacheWriteTokens, // 缓存写入
          },
        }),
      });
    });

    // ===== Step 4: 启动 Agent Loop =====
    // 开始执行 Agent 循环，触发上述事件
    await agentLoop.run(body.messages, body.tools);
  });
});`
      },
      {
        label: '响应缓存',
        language: 'Python',
        code: `# ===== 多级缓存策略 =====
# 实现精确匹配缓存 + 语义缓存 + Prompt Cache 三级体系

import hashlib                           # 哈希计算库
import redis                             # Redis 缓存客户端
import numpy as np                       # NumPy 数值计算库
from sentence_transformers import SentenceTransformer  # Embedding 模型

# 响应缓存类
# 实现 L1 精确缓存 + L2 语义缓存 + L3 Prompt Cache
class ResponseCache:
    def __init__(self):
        # ===== 初始化 Redis 缓存 =====
        # 用于存储精确匹配和语义匹配的缓存结果
        self.redis = redis.Redis(host='cache.internal')  # 连接 Redis 服务

        # ===== 初始化 Embedding 模型 =====
        # 用于计算查询的语义向量，进行语义缓存匹配
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')  # 轻量级模型

        # ===== 初始化语义索引 =====
        # FAISS 向量索引，用于快速检索相似查询
        self.semantic_index = FAISSIndex(dim=384)  # Embedding 维度384

    async def get(self, messages: list) -> CacheResult | None:
        """多级缓存查找：依次检查 L1、L2、L3"""
        # 参数：messages - 对话消息列表
        # 返回：命中返回 CacheResult，未命中返回 None

        # ===== Level 1: 精确匹配缓存 (Hash) =====
        # 对完全相同的请求直接返回缓存结果
        cache_key = self._hash_key(messages)        # 计算消息列表的哈希值
        exact_hit = self.redis.get(f"exact:{cache_key}")  # 查询 Redis

        if exact_hit:
            # 精确命中，直接返回缓存（最快路径）
            return CacheResult(hit=True, type='exact', data=exact_hit)

        # ===== Level 2: 语义缓存 (向量相似度) =====
        # 对语义相似的请求返回近似结果
        query = messages[-1]['content']             # 取最后一条消息作为查询
        query_embedding = self.embedder.encode(query)  # 计算 Embedding 向量

        # 在 FAISS 索引中搜索相似向量
        results = self.semantic_index.search(
            query_embedding,                        # 查询向量
            k=5,                                    # 返回前5个相似项
            threshold=0.95                          # 相似度阈值95%
        )

        # 检查是否有高相似度的命中
        if results and results[0].score > 0.95:
            # 从 Redis 获取语义缓存的结果
            cached = self.redis.get(f"semantic:{results[0].id}")
            if cached:
                # 语义命中，返回近似结果
                return CacheResult(
                    hit=True, type='semantic',      # 命中类型：语义匹配
                    data=cached,                    # 缓存数据
                    similarity=results[0].score     # 相似度分数
                )

        # ===== Level 3: Prompt Cache (LLM 引擎级别) =====
        # 由 vLLM/TensorRT-LLM 在 GPU 层面自动管理
        # 相同前缀的 KV Cache 可以跨请求复用
        # 例如：相同的 System Prompt 只需计算一次

        return None  # 三级缓存均未命中，需要实际调用 LLM

    async def put(self, messages: list, response: str, ttl=3600):
        """写入缓存：同时更新精确缓存和语义索引"""
        # 参数：messages - 请求消息列表
        #       response - LLM 响应文本
        #       ttl - 缓存过期时间（秒），默认1小时

        # ===== 计算缓存键 =====
        cache_key = self._hash_key(messages)  # 哈希消息列表

        # ===== 写入精确缓存 =====
        # 存储完整的请求-响应对应关系
        self.redis.setex(f"exact:{cache_key}", ttl, response)  # 设置键值+过期时间

        # ===== 更新语义索引 =====
        # 将查询加入向量索引，用于后续语义匹配
        query = messages[-1]['content']               # 取最后一条消息
        embedding = self.embedder.encode(query)       # 计算 Embedding
        self.semantic_index.add(cache_key, embedding)  # 加入 FAISS 索引

    def _hash_key(self, messages: list) -> str:
        """计算消息列表的哈希键"""
        # 将消息列表序列化为 JSON 字符串
        content = json.dumps(messages, sort_keys=True)  # 排序键保证稳定性
        # 计算 SHA256 哈希，取前16位作为缓存键
        return hashlib.sha256(content.encode()).hexdigest()[:16]`
      },
      {
        label: '计量计费',
        language: 'TypeScript',
        code: `// ===== Token 计量与计费系统 =====
// 记录 API 使用量并计算费用

// 使用量记录接口：单次请求的使用统计
interface UsageRecord {
  requestId: string;              // 请求唯一标识
  userId: string;                 // 用户 ID
  model: string;                  // 使用的模型名称
  inputTokens: number;            // 输入 Token 数量
  outputTokens: number;           // 输出 Token 数量
  cacheReadTokens: number;        // 缓存读取 Token 数（折扣计费）
  cacheWriteTokens: number;       // 缓存写入 Token 数（首次 Prompt）
  toolCalls: number;              // 工具调用次数
  latencyMs: number;              // 请求延迟（毫秒）
  timestamp: Date;                // 请求时间戳
}

// 计费服务类
// 根据使用量计算费用并记录到数据库
class BillingService {
  // ===== 模型定价表 =====
  // 每百万Token 的价格（美元）
  private pricing: Map<string, ModelPricing> = new Map([
    ['claude-sonnet-4-20250514', {
      inputPerMToken: 3.00,      // 输入Token：$3/百万
      outputPerMToken: 15.00,    // 输出Token：$15/百万
      cacheReadPerMToken: 0.30,  // 缓存读取：$0.30/百万（90%折扣）
      cacheWritePerMToken: 3.75, // 缓存写入：$3.75/百万
    }],
    ['gpt-4o', {
      inputPerMToken: 2.50,      // GPT-4o 输入定价
      outputPerMToken: 10.00,
      cacheReadPerMToken: 1.25,
      cacheWritePerMToken: 2.50,
    }],
  ]);

  // 计算单次请求的费用
  // usage: 使用量记录对象
  // 返回：总费用（美元）
  calculateCost(usage: UsageRecord): number {
    // ===== Step 1: 获取模型定价 =====
    const pricing = this.pricing.get(usage.model);  // 从定价表查询
    if (!pricing) throw new Error(\`Unknown model: \${usage.model}\`);  // 未定价模型报错

    // ===== Step 2: 计算各项费用 =====
    // 输入Token费用
    const inputCost = (usage.inputTokens / 1_000_000)
      * pricing.inputPerMToken;                     // 数量 × 单价

    // 输出Token费用（输出通常更贵）
    const outputCost = (usage.outputTokens / 1_000_000)
      * pricing.outputPerMToken;

    // 缓存读取费用（显著折扣，鼓励使用缓存）
    const cacheReadCost = (usage.cacheReadTokens / 1_000_000)
      * pricing.cacheReadPerMToken;

    // 缓存写入费用（首次创建 Prompt Cache 的成本）
    const cacheWriteCost = (usage.cacheWriteTokens / 1_000_000)
      * pricing.cacheWritePerMToken;

    // ===== Step 3: 汇总总费用 =====
    return inputCost + outputCost + cacheReadCost + cacheWriteCost;
  }

  // 记录使用量到数据库
  async recordUsage(usage: UsageRecord) {
    // ===== Step 1: 计算费用 =====
    const cost = this.calculateCost(usage);  // 调用计算方法

    // ===== Step 2: 写入计量数据库 =====
    await this.db.insert('usage_records', {
      ...usage,              // 展开 UsageRecord 所有字段
      cost_usd: cost,        // 添加计算的费用字段
    });

    // ===== Step 3: 检查预算告警 =====
    const monthlySpend = await this.getMonthlySpend(usage.userId);  // 本月累计消费
    const budgetLimit = this.getBudgetLimit(usage.userId);          // 用户预算上限

    // 如果消费超过预算的80%，发送告警
    if (monthlySpend > budgetLimit * 0.8) {
      await this.sendBudgetAlert(usage.userId, monthlySpend);  // 邮件/短信告警
    }

    // ===== Step 4: 实时指标上报 =====
    // 用于监控和分析
    metrics.gauge('billing.cost_usd', cost, {
      model: usage.model,         // 模型维度
      user_id: usage.userId,      // 用户维度
    });
  }
}`
      }
    ]
  },
  // ===== Phase 7: 可观测性 =====
  {
    title: 'Phase 5: 响应交付 & 可观测性',
    description: '分布式追踪、指标监控、日志聚合构成完整的可观测性体系，用于性能优化和故障排查。',
    icon: '📊',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/20',
    tabs: [
      {
        label: 'OpenTelemetry 集成',
        language: 'Python',
        code: `# ===== OpenTelemetry 全链路追踪 =====
# 用于监控和分析 Agent 执行全流程的性能数据

from opentelemetry import trace, metrics  # OpenTelemetry 核心模块
from opentelemetry.sdk.trace import TracerProvider  # 追踪器提供者
from opentelemetry.sdk.metrics import MeterProvider  # 指标提供者
from opentelemetry.exporter.otlp.proto.grpc import (
    OTLPSpanExporter, OTLPMetricExporter  # OTLP协议导出器（发送到 Collector）
)

# ===== 初始化追踪系统 =====
# TracerProvider 管理 Span 的创建和导出
tracer_provider = TracerProvider()  # 创建追踪提供者
tracer_provider.add_span_processor(
    BatchSpanProcessor(OTLPSpanExporter(
        endpoint="otel-collector:4317"  # OTLP Collector 地址（gRPC端口）
    ))
)
trace.set_tracer_provider(tracer_provider)  # 设置为全局追踪提供者
tracer = trace.get_tracer("agent-service")  # 获取命名追踪器

# ===== 初始化指标系统 =====
meter = metrics.get_meter("agent-service")  # 获取命名指标器

# 创建 Histogram 指标：用于记录分布型数据（如延迟）
ttft_histogram = meter.create_histogram(
    "llm.time_to_first_token",              # 指标名称：首Token延迟
    unit="ms",                              # 单位：毫秒
    description="Time to first token"       # 描述说明
)

tps_histogram = meter.create_histogram(
    "llm.tokens_per_second",                # 指标名称：生成速率
    unit="tokens/s"                         # 单位：Token/秒
)

# 创建 Counter 指标：用于记录累计值（如调用次数）
tool_call_counter = meter.create_counter(
    "agent.tool_calls_total",               # 指标名称：工具调用总数
    description="Total number of tool calls"  # 描述
)

# ===== 装饰器方式追踪 Agent Loop =====
# @tracer.start_as_current_span 自动创建 Span 并设置上下文
@tracer.start_as_current_span("agent.loop")
async def agent_loop(messages, tools):
    """Agent 主循环追踪"""
    # 获取当前 Span（追踪单元）
    span = trace.get_current_span()
    # 设置 Span 属性（用于筛选和分析）
    span.set_attribute("agent.model", "claude-3.5-sonnet")  # 模型名称
    span.set_attribute("agent.input_tokens", count_tokens(messages))  # 输入Token数

    iteration = 0  # 迭代计数器
    while not done:
        iteration += 1

        # ===== 子 Span: LLM 推理阶段 =====
        # with 语句自动管理 Span 的开始和结束
        with tracer.start_as_current_span("llm.inference") as llm_span:
            start = time.monotonic()  # 记录开始时间（高精度）
            response = await llm.generate(messages)  # 调用 LLM

            # 计算首Token延迟
            ttft = (time.monotonic() - start) * 1000
            ttft_histogram.record(ttft, {"model": model_name})  # 记录到 Histogram
            llm_span.set_attribute("llm.ttft_ms", ttft)  # 设置 Span 属性
            llm_span.set_attribute("llm.output_tokens", response.usage.output)

        # ===== 子 Span: 工具执行阶段 =====
        if response.tool_calls:
            for tool_call in response.tool_calls:
                # 为每个工具调用创建独立 Span
                with tracer.start_as_current_span(
                    f"tool.{tool_call.name}"  # Span 名称：tool.工具名
                ) as tool_span:
                    result = await execute_tool(tool_call)  # 执行工具
                    tool_span.set_attribute("tool.success", result.success)  # 结果状态
                    tool_call_counter.add(1, {"tool": tool_call.name})  # 累加计数

    # 设置最终属性
    span.set_attribute("agent.iterations", iteration)  # 总迭代次数
    span.set_attribute("agent.total_tokens", total_tokens)  # 总Token消耗`
      },
      {
        label: 'LLM Eval 评测',
        language: 'Python',
        code: `# ===== 自动化评测系统 (Evals) =====
# 用于评估 Agent 的质量和效果

from braintrust import Eval, init_logger  # Braintrust评测框架
import json                                # JSON处理模块

# ===== 定义评测数据集 =====
# 每个测试用例包含输入和预期输出
eval_dataset = [
    {
        "input": "重构 utils.py 中的 parse_date 函数，支持 ISO 8601",  # 用户任务描述
        "expected": {                                             # 预期结果规格
            "files_modified": ["utils.py"],                       # 修改的文件列表
            "tests_pass": True,                                   # 测试是否通过
            "code_quality_score": 0.8,                            # 代码质量评分阈值
        }
    },
    {
        "input": "修复 #1234 issue: 用户登录后重定向失败",  # Issue修复任务
        "expected": {
            "issue_resolved": True,               # Issue 是否解决
            "regression": False,                  # 是否引入回归bug
        }
    },
]

# Agent 评测器类
# 从多个维度评估 Agent 的表现质量
class AgentEvaluator:
    """多维度评测 Agent 质量"""

    async def evaluate(self, test_case):
        """执行评测流程"""
        # ===== Step 1: 运行 Agent =====
        # 让 Agent 执行测试用例中的任务
        result = await self.agent.run(test_case["input"])

        # ===== Step 2: 功能正确性评测 =====
        # 运行实际测试验证修改是否正确
        correctness = await self.check_correctness(result)

        # ===== Step 3: 代码质量评测 =====
        # 使用静态分析工具检查代码质量
        # 检查项目：风格规范、复杂度、潜在bug等
        quality = await self.check_code_quality(result)

        # ===== Step 4: 效率指标评测 =====
        # 评估 Agent 的资源消耗和时间效率
        efficiency = {
            "total_tokens": result.usage.total_tokens,      # Token 总消耗
            "iterations": result.iterations,                 # Agent迭代次数
            "tool_calls": result.tool_call_count,            # 工具调用次数
            "latency_s": result.latency,                     # 执行耗时（秒）
        }

        # ===== Step 5: LLM-as-Judge评测 =====
        # 使用另一个LLM（如GPT-4）对结果进行评分
        # 这是一种流行的自动化质量评估方法
        judge_score = await self.llm_judge(
            test_case["input"],        # 原始任务
            result.output,             # Agent输出
            test_case["expected"]      # 预期结果
        )

        # ===== Step 6: 计算综合评分 =====
        # 各维度加权平均得出最终分数
        return {
            "correctness": correctness,         # 正确性分数
            "code_quality": quality,            # 质量分数
            "efficiency": efficiency,           # 效率指标
            "judge_score": judge_score,         # LLM评分
            "overall": (                        # 综合评分（加权平均）
                correctness * 0.4               # 正确性权重40%
                + quality * 0.3                 # 质量权重30%
                + judge_score * 0.3             # LLM评分权重30%
            ),
        }

# ===== 运行评测 =====
# @Eval装饰器定义评测配置
@Eval(
    name="agent-benchmark",             # 评测名称标识
    data=lambda: eval_dataset,          # 数据集来源函数
    task=lambda input: agent.run(input),  # Agent执行函数
    scores=[correctness_scorer, quality_scorer, judge_scorer],  # 评分器列表
)
def run_eval():
    """定期运行评测，追踪模型/Prompt变更的影响"""
    # 评测结果会自动记录到 Braintrust 平台
    # 可用于对比不同版本的性能变化
    pass`
      }
    ]
  },
];

/**
 * CodeExamples 主组件
 * 渲染所有代码示例的列表
 */
export default function CodeExamples() {
  return (
    // 垂直排列的示例列表，间距 8 单位
    <div className="space-y-8">
      {codeExamples.map((example, i) => (
        // 每个代码示例卡片
        <CodeExample key={i} {...example} />
      ))}
    </div>
  );
}