import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'ai-changes',
  rootHref: '/content-ai/capabilities/changes/overview',
  title: 'AI 变更（旧版）',
  items: [
    {
      type: 'link',
      title: '← 返回内容 AI',
      href: '/content-ai/getting-started/overview',
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/changes/overview',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/content-ai/capabilities/changes/overview',
        },
        {
          title: '安装',
          href: '/content-ai/capabilities/changes/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/changes/features/review-changes',
      title: '功能',
      children: [
        {
          title: '审核 AI 变更',
          href: '/content-ai/capabilities/changes/features/review-changes',
        },
        {
          title: '显示变更',
          href: '/content-ai/capabilities/changes/features/display-changes',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/changes/configure',
      title: '参考',
      children: [
        {
          title: '配置',
          href: '/content-ai/capabilities/changes/configure',
        },
        {
          title: 'API 参考',
          href: '/content-ai/capabilities/changes/api-reference',
        },
        {
          title: '更新日志',
          href: '/content-ai/capabilities/changes/changelog',
        },
      ],
    },
  ],
}
