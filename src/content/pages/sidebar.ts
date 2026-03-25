import type { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'pages',
  rootHref: '/pages/getting-started/overview',
  title: '页面',
  items: [
    {
      type: 'group',
      href: '/pages/getting-started',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/pages/getting-started/overview',
        },
        {
          title: '安装',
          href: '/pages/getting-started/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/pages/core-concepts',
      title: '核心概念',
      children: [
        {
          title: '选项',
          href: '/pages/core-concepts/options',
        },
        {
          title: '页面格式',
          href: '/pages/core-concepts/page-format',
        },
        {
          title: '页眉和页脚',
          href: '/pages/core-concepts/page-header-footer',
        },
        {
          title: '页面间隙和背景',
          href: '/pages/core-concepts/page-gap',
        },
        {
          title: '分页节点',
          href: '/pages/core-concepts/page-break-node',
          tags: ['New'],
        },
        {
          title: '限制条件',
          href: '/pages/core-concepts/limitations',
        },
      ],
    },
    {
      type: 'group',
      href: '/pages/utilities',
      title: '实用工具',
      children: [
        {
          title: '页面格式',
          href: '/pages/utilities/page-formats',
        },
        {
          title: '厘米转像素',
          href: '/pages/utilities/cm-to-pixels',
        },
        {
          title: '英寸转像素',
          href: '/pages/utilities/inch-to-pixels',
        },
      ],
    },
    {
      type: 'group',
      href: '/pages/guides',
      title: '指南',
      children: [
        {
          title: '打印准备',
          href: '/pages/guides/zero-to-print-ready',
        },
        {
          title: '页面与表格',
          href: '/pages/guides/table-with-pages',
        },
        {
          title: '页面套件',
          href: '/pages/guides/pagekit-usage',
        },
        {
          title: '向页面添加协作功能',
          href: '/pages/guides/collaboration-with-pages',
        },
      ],
    },
  ],
}
