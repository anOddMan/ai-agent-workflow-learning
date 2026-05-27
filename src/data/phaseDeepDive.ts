/**
 * @file phaseDeepDive.ts
 * @description 全环节深度解析模块的类型定义文件
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

// PhaseData 接口：定义单个阶段（Phase）的完整数据结构
export interface PhaseData {
  // 阶段的编号，从 1 到 8
  phaseNumber: number;

  // 阶段的标题，如 '用户输入层'
  title: string;

  // 阶段的副标题（英文），如 'User Input & Routing'
  subtitle: string;

  // 阶段的图标 emoji，如 '📥'
  icon: string;

  // 阶段标题的文字颜色类名，如 'text-blue-400'
  color: string;

  // 阶段编号徽章的背景颜色类名，如 'bg-blue-500'
  bgColor: string;

  // 阶段卡片边框的颜色类名，如 'border-blue-500/30'
  borderColor: string;

  // 阶段强调色的十六进制值，用于活动卡片内的强调元素，如 '#3b82f6'
  accentHex: string;

  // 阶段包含的模块列表，每个模块是一个 PhaseModule 对象
  modules: PhaseModule[];
}

// ==================== 数据导出 ====================

// 从 phasesData.ts 文件导入并导出完整的阶段数据数组
// 使用 default export 形式，方便其他模块直接导入使用
export { default as phases } from './phasesData';