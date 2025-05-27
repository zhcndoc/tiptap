import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'collaboration',
  rootHref: '/collaboration/getting-started/overview',
  title: '协作',
  items: [
    {
      type: 'group',
      href: '/collaboration/getting-started',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/collaboration/getting-started/overview',
        },
        {
          title: '安装',
          href: '/collaboration/getting-started/install',
        },
        {
          title: '认证',
          href: '/collaboration/getting-started/authenticate',
        },
      ],
    },
    {
      type: 'group',
      href: '/collaboration/provider',
      title: '提供商',
      children: [
        {
          title: '集成',
          href: '/collaboration/provider/integration',
        },
        {
          title: '事件',
          href: '/collaboration/provider/events',
        },
      ],
    },
    {
      type: 'group',
      href: '/collaboration/core-concepts',
      title: '特性',
      children: [
        {
          title: '感知',
          href: '/collaboration/core-concepts/awareness',
        },
        {
          title: 'Webhook',
          href: '/collaboration/core-concepts/webhooks',
        },
      ],
    },
    {
      type: 'group',
      href: '/collaboration/documents',
      title: '文档',
      children: [
        {
          title: '概述',
          href: '/collaboration/documents',
        },
        {
          title: 'REST API',
          href: '/collaboration/documents/rest-api',
        },
        {
          title: '快照',
          href: '/collaboration/documents/snapshot',
        },
        {
          title: '比较快照',
          href: '/collaboration/documents/snapshot-compare',
        },
        {
          title: '注入内容',
          href: '/collaboration/documents/content-injection',
        },
        {
          title: '语义搜索',
          href: '/collaboration/documents/semantic-search',
          tags: ['Beta'],
        },
      ],
    },
    {
      type: 'group',
      href: '/collaboration/operations',
      title: '操作',
      children: [
        {
          title: '配置运行时',
          href: '/collaboration/operations/configure',
        },
        {
          title: '指标',
          href: '/collaboration/operations/metrics',
        },
      ],
    },
  ],
}
