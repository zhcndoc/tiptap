import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'ai-suggestion',
  rootHref: '/content-ai/capabilities/suggestion/overview',
  title: 'AI 建议（旧版）',
  items: [
    {
      type: 'link',
      title: '← 返回内容 AI',
      href: '/content-ai/getting-started/overview',
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/suggestion/overview',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/content-ai/capabilities/suggestion/overview',
        },
        {
          title: '安装',
          href: '/content-ai/capabilities/suggestion/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/suggestion/features/define-rules',
      title: '功能',
      children: [
        {
          title: '定义规则',
          href: '/content-ai/capabilities/suggestion/features/define-rules',
        },
        {
          title: '配置建议加载时机',
          href: '/content-ai/capabilities/suggestion/features/configure-when-to-load-suggestions',
        },
        {
          title: '显示建议',
          href: '/content-ai/capabilities/suggestion/features/display-suggestions',
        },
        {
          title: '应用和拒绝建议',
          href: '/content-ai/capabilities/suggestion/features/apply-suggestions',
        },
        {
          title: '锁定内容',
          href: '/content-ai/capabilities/suggestion/features/lock-content',
        },
        {
          title: '为 LLM 提供上下文',
          href: '/content-ai/capabilities/suggestion/features/provide-llm-context',
        },
        {
          title: '差异视图',
          href: '/content-ai/capabilities/suggestion/features/diff-view',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/suggestion/use-with-content-ai-cloud',
      title: '集成',
      children: [
        {
          title: '在 Content AI Cloud 中使用',
          href: '/content-ai/capabilities/suggestion/use-with-content-ai-cloud',
        },
        {
          title: '集成你的大语言模型',
          href: '/content-ai/capabilities/suggestion/custom-llms',
        },
        {
          title: '配置',
          href: '/content-ai/capabilities/suggestion/configure',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/suggestion/api-reference',
      title: '参考',
      children: [
        {
          title: 'API 参考',
          href: '/content-ai/capabilities/suggestion/api-reference',
        },
        {
          title: '更新日志',
          href: '/content-ai/capabilities/suggestion/changelog',
        },
      ],
    },
  ],
}
