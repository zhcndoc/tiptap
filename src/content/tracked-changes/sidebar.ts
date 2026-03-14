import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'tracked-changes',
  rootHref: '/tracked-changes/getting-started/overview',
  title: '修订记录',
  items: [
    {
      type: 'group',
      href: '/tracked-changes/getting-started',
      title: '快速上手',
      children: [
        {
          title: '概述',
          href: '/tracked-changes/getting-started/overview',
        },
        {
          title: '安装',
          href: '/tracked-changes/getting-started/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/tracked-changes/usage',
      title: '使用方法',
      children: [
        {
          title: '基础用法',
          href: '/tracked-changes/usage/basic-usage',
        },
        {
          title: '高级用法',
          href: '/tracked-changes/usage/advanced-usage',
        },
      ],
    },
    {
      type: 'group',
      href: '/tracked-changes/guides',
      title: '指南',
      children: [
        {
          title: '创建编辑器',
          href: '/tracked-changes/guides/editor-setup',
        },
        {
          title: '构建建议列表',
          href: '/tracked-changes/guides/suggestion-list',
        },
        {
          title: '带评论的修订记录',
          href: '/tracked-changes/guides/comments-integration',
        },
      ],
    },
    {
      type: 'group',
      href: '/tracked-changes/examples',
      title: '示例',
      children: [
        {
          title: '简单修订记录',
          href: '/tracked-changes/examples/simple',
        },
        {
          title: '协作模式',
          href: '/tracked-changes/examples/collaboration',
        },
        {
          title: '带评论',
          href: '/tracked-changes/examples/comments',
        },
      ],
    },
    {
      type: 'group',
      href: '/tracked-changes/api-reference',
      title: 'API 参考',
      children: [
        {
          title: '命令',
          href: '/tracked-changes/api-reference/commands',
        },
        {
          title: '事件',
          href: '/tracked-changes/api-reference/events',
        },
        {
          title: '工具函数',
          href: '/tracked-changes/api-reference/utilities',
        },
        {
          title: '类型',
          href: '/tracked-changes/api-reference/types',
        },
        {
          title: '样式',
          href: '/tracked-changes/api-reference/styling',
        },
      ],
    },
  ],
}
