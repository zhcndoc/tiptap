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
          title: '页面页眉和页脚',
          href: '/pages/core-concepts/page-header-footer',
        },
        {
          title: '页面间隙与背景',
          href: '/pages/core-concepts/page-gap',
        },
        {
          title: '缩放',
          href: '/pages/core-concepts/zoom',
          tags: ['新增'],
        },
        {
          title: 'PageBreak 节点',
          href: '/pages/core-concepts/page-break-node',
          tags: ['新增'],
        },
        {
          title: '限制',
          href: '/pages/core-concepts/limitations',
        },
      ],
    },
    {
      type: 'group',
      href: '/pages/utilities',
      title: '工具函数',
      children: [
        {
          title: '页面格式常量',
          href: '/pages/utilities/page-formats',
        },
        {
          title: 'cmToPixels 工具',
          href: '/pages/utilities/cm-to-pixels',
        },
        {
          title: 'inchToPixels 工具',
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
          title: '从零开始到打印就绪',
          href: '/pages/guides/zero-to-print-ready',
        },
        {
          title: '在 Pages 中使用 TableKit',
          href: '/pages/guides/table-with-pages',
        },
        {
          title: 'PagesTableKit',
          href: '/pages/guides/pages-tablekit',
          tags: ['实验性'],
        },
        {
          title: 'PageKit',
          href: '/pages/guides/pagekit-usage',
        },
        {
          title: '为 Pages 添加协作功能',
          href: '/pages/guides/collaboration-with-pages',
        },
      ],
    },
  ],
}
