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
          title: '3.0 有哪些新功能',
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
          href: '/tracked-changes/getting-started/overview',
          title: '修订记录',
        },
        {
          href: '/content-ai/getting-started/overview',
          title: '内容 AI',
        },
        {
          href: '/collaboration/documents/snapshot',
          title: '快照',
        },
        {
          href: '/conversion/getting-started/overview',
          title: '转换',
        },
        {
          href: '/pages/getting-started/overview',
          title: '页面',
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
          href: '/resources/agent-skill',
          title: '代理技能',
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
          title: '编辑器更新日志',
        },
        {
          href: '/resources/incidents',
          title: '事件',
        },
        {
          href: 'https://tiptap.dev/pro-license',
          title: '专业版许可证',
        },
      ],
    },
  ],
}
