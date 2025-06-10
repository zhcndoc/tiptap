import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'all-docs',
  rootHref: '/',
  title: '首页',
  items: [
    {
      type: 'group',
      title: '入门',
      href: '/getting-started',
      children: [
        {
          href: '/',
          title: '概述',
        },
        {
          href: '/resources/whats-new',
          title: 'V3 有什么新内容',
        },
      ],
    },
    {
      type: 'group',
      title: '功能',
      href: '/suite-docs',
      children: [
        {
          href: '/editor/getting-started/overview',
          title: '编辑器',
        },
        {
          href: '/collaboration/getting-started/overview',
          title: '协作',
        },
        {
          href: '/comments/getting-started/overview',
          title: '评论',
        },
        {
          href: '/content-ai/getting-started/overview',
          title: '内容 AI',
        },
        {
          href: '/collaboration/documents/history',
          title: '历史',
        },
        {
          href: '/conversion/getting-started/overview',
          title: '转换',
        },
        {
          href: '/collaboration/documents/semantic-search',
          title: '语义搜索',
        },
      ],
    },
    {
      type: 'group',
      title: '资源',
      href: '/',
      children: [
        {
          href: '/guides',
          title: '指南',
        },
        {
          href: '/examples',
          title: '示例',
        },
        {
          href: '/resources/tiptap-trial',
          title: 'Tiptap 试用',
        },
        {
          href: '/resources/contributing',
          title: '贡献',
        },
        {
          href: '/resources/changelog',
          title: '更新日志',
        },
        {
          href: 'https://tiptap.dev/pro-license',
          title: '许可证',
        },
      ],
    },
  ],
}
