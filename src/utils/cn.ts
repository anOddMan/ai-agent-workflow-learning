/**
 * @file cn.ts
 * @description CSS 类名合并工具函数
 * @author AI Agent Technical Workflow Analysis
 *
 * 这个工具函数用于合并 Tailwind CSS 类名，并自动处理类名冲突。
 *
 * 使用场景：
 * - 合并多个类名字符串
 * - 处理条件类名
 * - 解决 Tailwind 类名冲突（后者覆盖前者）
 *
 * 示例：
 * cn('px-4 py-2', 'px-6') => 'px-6 py-2'  (px-6 覆盖 px-4)
 * cn('base-class', isActive && 'active-class') => 'base-class active-class'
 */

// 导入 clsx: 用于条件性合并类名
import { clsx, type ClassValue } from "clsx";

// 导入 tailwind-merge: 用于智能合并 Tailwind 类名，处理冲突
import { twMerge } from "tailwind-merge";

/**
 * cn 函数
 * 合并 CSS 类名，处理 Tailwind 类名冲突
 *
 * @param inputs - 类名输入（可以是字符串、对象、数组等）
 * @returns 合并后的类名字符串
 *
 * 工作原理：
 * 1. clsx: 将所有输入合并为单一类名字符串，支持条件表达式
 * 2. twMerge: 智能处理 Tailwind 类名冲突，后者覆盖前者
 *
 * 示例用法：
 * cn('text-red-500', 'text-blue-500') => 'text-blue-500'
 * cn('p-4', someCondition && 'p-6') => 'p-4' 或 'p-6'
 * cn(['flex', 'items-center'], 'justify-center') => 'flex items-center justify-center'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}