import type { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'pages',
  rootHref: '/pages/getting-started/overview',
  title: '页面',
  items: [
    {
      type: 'group',
      href: '/pages/getting-started',
      title: '入门',
      children: [
        {
          title: '概述',
          href: '/pages/getting-started/overview',
        },
        {
          title: '安装',
          href: '/pages/getting-started/install',
        },
        {
          title: '在线演示',
          href: '/pages/getting-started/live-demo',
          newSince: '2026-06-11',
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
          title: '脚注',
          href: '/pages/core-concepts/footnotes',
          newSince: '2026-06-10',
        },
        {
          title: '尾注',
          href: '/pages/core-concepts/endnotes',
          newSince: '2026-06-24',
        },
        {
          title: '页面间距和背景',
          href: '/pages/core-concepts/page-gap',
        },
        {
          title: '缩放',
          href: '/pages/core-concepts/zoom',
          newSince: '2026-04-09',
        },
        {
          title: '分页符节点',
          href: '/pages/core-concepts/page-break-node',
          newSince: '2026-03-19',
        },
        {
          title: '布局参与者',
          href: '/pages/core-concepts/layout-participants',
          newSince: '2026-09-18',
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
          title: '页面格式',
          href: '/pages/utilities/page-formats',
        },
        {
          title: 'cmToPixels',
          href: '/pages/utilities/cm-to-pixels',
        },
        {
          title: 'inchToPixels',
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
          title: '从零开始生成可打印文档',
          href: '/pages/guides/zero-to-print-ready',
        },
        {
          title: '包含表格的页面',
          href: '/pages/guides/table-with-pages',
        },
        {
          title: 'PagesTableKit',
          href: '/pages/guides/pages-tablekit',
          tags: ['Experimental'],
        },
        {
          title: '跨页表格行',
          href: '/pages/guides/row-fragmentation',
          tags: ['Experimental'],
        },
        {
          title: 'PageKit',
          href: '/pages/guides/pagekit-usage',
        },
        {
          title: '为 Pages 添加协作',
          href: '/pages/guides/collaboration-with-pages',
        },
      ],
    },
  ],
}
