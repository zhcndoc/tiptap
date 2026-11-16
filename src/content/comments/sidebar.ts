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
          title: '设置线程样式',
          href: '/comments/core-concepts/style-threads',
        },
        {
          title: '配置',
          href: '/comments/core-concepts/configure',
        },
        {
          title: '线程身份验证',
          href: '/comments/core-concepts/thread-authentication',
        },
      ],
    },
    {
      type: 'group',
      href: '/comments/integrate',
      title: '集成',
      children: [
        {
          title: '编辑器命令',
          href: '/comments/integrate/editor-commands',
        },
        {
          title: '编辑器事件',
          href: '/comments/integrate/editor-events',
        },
        {
          title: '代码评论',
          href: '/comments/integrate/code',
        },
        {
          title: 'REST API',
          href: '/comments/integrate/rest-api',
        },
        {
          title: '通过 API 创建线程',
          href: '/comments/integrate/create-thread-via-api',
        },
        {
          title: 'Webhook',
          href: '/comments/integrate/webhook',
        },
      ],
    },
  ],
}
