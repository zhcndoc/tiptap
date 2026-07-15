import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'ai-changes',
  rootHref: '/ai/deprecated/changes/overview',
  title: 'AI 变更（旧版）',
  items: [
    {
      type: 'link',
      title: '← 返回内容 AI',
      href: '/ai/ai-toolkit/overview',
    },
    {
      type: 'group',
      href: '/ai/deprecated/changes/overview',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/ai/deprecated/changes/overview',
        },
        {
          title: '安装',
          href: '/ai/deprecated/changes/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/ai/deprecated/changes/features/review-changes',
      title: '功能',
      children: [
        {
          title: '审核 AI 变更',
          href: '/ai/deprecated/changes/features/review-changes',
        },
        {
          title: '显示变更',
          href: '/ai/deprecated/changes/features/display-changes',
        },
      ],
    },
    {
      type: 'group',
      href: '/ai/deprecated/changes/configure',
      title: '参考',
      children: [
        {
          title: '配置',
          href: '/ai/deprecated/changes/configure',
        },
        {
          title: 'API 参考',
          href: '/ai/deprecated/changes/api-reference',
        },
        {
          title: '更新日志',
          href: '/ai/deprecated/changes/changelog',
        },
      ],
    },
  ],
}
