/**
 * @file phaseDeepDive.ts
 * @description 全环节深度解析模块的类型定义文件（统一 5 阶段版本）
 * @author AI Agent Technical Workflow Analysis
 */

// ==================== Activity 活动接口 ====================

// Activity 接口：定义单个技术活动的数据结构
export interface Activity {
  // 活动的唯一标识符，格式如 'p1m1a1'（阶段1模块1活动1）
  id: string;

  // 活动的名称，如 '输入验证 & 清洗'
  name: string;

  // 活动的图标 emoji，如 '✅'
  icon: string;

  // 概念介绍：解释这个活动是什么、为什么需要它
  concept: string;

  // 原理解释：说明这个活动的技术实现原理
  principle: string;

  // 使用的技术工具列表，如 ['Zod', 'Joi', 'JSON Schema']
  tools: string[];

  // 实际场景案例：描述一个具体的使用场景
  scenario: string;

  // 可选的代码示例，展示关键实现逻辑
  code?: string;

  // 可选的代码语言标识，如 'TypeScript'、'Python'
  codeLanguage?: string;
}

// ==================== PhaseModule 阶段模块接口 ====================

// PhaseModule 接口：定义阶段下的模块分组结构
export interface PhaseModule {
  // 模块的唯一标识符，格式如 'p1m1'（阶段1模块1）
  id: string;

  // 模块的名称，如 '客户端预处理'
  moduleName: string;

  // 模块的图标 emoji，如 '🖥️'
  moduleIcon: string;

  // 模块包含的活动列表，每个活动是一个 Activity 对象
  activities: Activity[];
}

// ==================== PhaseData 阶段数据接口 ====================

// PhaseData 接口：定义单个阶段（Phase）的完整数据结构（5 阶段版本）
export interface PhaseData {
  // 阶段的编号，从 1 到 5
  phaseNumber: number;

  // 阶段的标题，如 '接入与网关'
  title: string;

  // 阶段的副标题（英文），如 'Gateway & Routing'
  subtitle: string;

  // 阶段的图标 emoji，如 '🌐'
  icon: string;

  // 阶段标题的文字颜色类名，如 'text-blue-400'
  color: string;

  // 阶段编号徽章的背景颜色类名，如 'bg-blue-500'
  bgColor: string;

  // 阶段卡片边框的颜色类名，如 'border-blue-500/30'
  borderColor: string;

  // 阶段强调色的十六进制值，用于活动卡片内的强调元素，如 '#3b82f6'
  accentHex: string;

  // 阶段描述
  description: string;

  // 时间估算
  timeEstimate: string;

  // 阶段包含的模块列表，每个模块是一个 PhaseModule 对象
  modules: PhaseModule[];
}

// ==================== SwimLaneActivity 横切层活动接口 ====================

// SwimLaneActivity 接口：定义横切层单个活动的数据结构
export interface SwimLaneActivity {
  // 活动的唯一标识符
  id: string;

  // 活动的名称
  name: string;

  // 活动的图标
  icon: string;

  // 活动的描述
  description: string;

  // 概念介绍：解释这个活动是什么、为什么需要它
  concept: string;

  // 原理解释：说明这个活动的技术实现原理
  principle: string;

  // 使用的技术工具列表
  tools: string[];

  // 实际场景案例：描述一个具体的使用场景
  scenario: string;

  // 可选的代码示例，展示关键实现逻辑
  code?: string;

  // 可选的代码语言标识
  codeLanguage?: string;
}

// ==================== SwimLaneSection 横切层分区接口 ====================

// SwimLaneSection 接口：定义横切层的分区结构（如入口侧、执行侧）
export interface SwimLaneSection {
  // 分区名称
  sectionName: string;

  // 分区包含的活动列表
  activities: SwimLaneActivity[];
}

// ==================== SwimLaneData 横切层数据接口 ====================

// SwimLaneData 接口：定义横切层（安全与合规、可观测性）的完整数据结构
export interface SwimLaneData {
  // 横切层的唯一标识符
  id: string;

  // 横切层的名称，如 '安全与合规'
  name: string;

  // 横切层的图标
  icon: string;

  // 横切层的位置：左侧或右侧
  position: 'left' | 'right';

  // 横切层的颜色
  color: string;

  // 横切层的强调色（十六进制）
  accentHex: string;

  // 横切层的描述
  description: string;

  // 横切层的分区列表
  sections: SwimLaneSection[];
}

// ==================== OfflineLoopActivity 离线闭环活动接口 ====================

// OfflineLoopActivity 接口：定义离线优化闭环单个活动的数据结构
export interface OfflineLoopActivity {
  // 活动的名称
  name: string;

  // 活动的图标
  icon: string;

  // 活动的描述
  description: string;

  // 概念介绍：解释这个活动是什么、为什么需要它
  concept: string;

  // 原理解释：说明这个活动的技术实现原理
  principle: string;

  // 使用的技术工具列表
  tools: string[];

  // 实际场景案例：描述一个具体的使用场景
  scenario: string;

  // 可选的代码示例，展示关键实现逻辑
  code?: string;

  // 可选的代码语言标识
  codeLanguage?: string;
}

// ==================== OfflineLoopModule 离线闭环模块接口 ====================

// OfflineLoopModule 接口：定义离线优化闭环的模块结构
export interface OfflineLoopModule {
  // 模块的名称
  moduleName: string;

  // 模块的图标
  moduleIcon: string;

  // 模块包含的活动列表
  activities: OfflineLoopActivity[];
}

// ==================== OfflineLoopData 离线闭环数据接口 ====================

// OfflineLoopData 接口：定义离线优化闭环的完整数据结构
export interface OfflineLoopData {
  // 离线闭环的标题
  title: string;

  // 离线闭环的副标题
  subtitle: string;

  // 离线闭环的描述
  description: string;

  // 离线闭环的颜色
  color: string;

  // 离线闭环的强调色（十六进制）
  accentHex: string;

  // 离线闭环包含的模块列表
  modules: OfflineLoopModule[];
}

// ==================== UnifiedData 统一数据接口 ====================

// UnifiedData 接口：定义完整的统一数据结构（5 阶段 + 横切层 + 离线闭环）
export interface UnifiedData {
  // 5 个核心阶段
  phases: PhaseData[];

  // 2 个横切层（安全与合规、可观测性）
  swimLanes: SwimLaneData[];

  // 离线优化闭环
  offlineLoop: OfflineLoopData;
}

// ==================== 数据导出 ====================

// phasesData.ts 已导出 unifiedData，组件应直接从该文件导入