import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'comments',
  rootHref: '/comments/getting-started/overview',
  title: '评论',
  items: [
    {
      type: 'group',
      href: '/comments/getting-started',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/comments/getting-started/overview',
        },
        {
          title: '安装',
          href: '/comments/getting-started/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/comments/core-concepts',
      title: '核心概念',
      children: [
        {
          title: '管理线程',
          href: '/comments/core-concepts/manage-threads',
        },
        {
          title: '风格线程',
          href: '/comments/core-concepts/style-threads',
        },
        {
          title: '配置',
          href: '/comments/core-concepts/configure',
        },
        {
          title: '线程认证',
          href: '/comments/core-concepts/thread-authentication',
        },
      ],
    },
    {
      type: 'group',
      href: '/comments/integrate',
      title: '整合',
      children: [
        {
          title: '编辑器命令',
          href: '/comments/integrate/editor-commands',
        },
        {
          title: 'REST API',
          href: '/comments/integrate/rest-api',
        },
        {
          title: 'Webhook',
          href: '/comments/integrate/webhook',
        },
      ],
    },
  ],
}
