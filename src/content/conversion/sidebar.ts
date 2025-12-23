import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'conversion',
  rootHref: '/conversion/getting-started/overview',
  title: '转换',
  items: [
    {
      type: 'group',
      href: '/conversion/getting-started',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/conversion/getting-started/overview',
        },
        {
          title: '认证',
          href: '/conversion/getting-started/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/import-export',
      title: '导入和导出',
      children: [
        {
          title: 'DOCX',
          href: '/conversion/import-export/docx',
          beta: true,
          tags: ['Start'],
          children: [
            {
              title: '编辑器导入',
              href: '/conversion/import-export/docx/editor-import',
            },
            {
              title: '编辑器导出',
              href: '/conversion/import-export/docx/editor-export',
            },
            {
              title: 'REST API',
              href: '/conversion/import-export/docx/rest-api',
            },
            {
              title: '页眉和页脚',
              href: '/conversion/import-export/docx/headers-footers',
              tags: ['Team', 'New'],
            },
            {
              title: '自定义页面布局',
              href: '/conversion/import-export/docx/custom-page-layout',
              tags: ['New'],
            },
            {
              title: '转换自定义节点',
              href: '/conversion/import-export/docx/custom-node-conversion',
            },
            {
              title: '转换自定义标记',
              href: '/conversion/import-export/docx/custom-mark-conversion',
            },
            {
              title: '导出样式',
              href: '/conversion/import-export/docx/export-styles',
            },
            {
              title: '保存图像',
              href: '/conversion/import-export/docx/preserve-images',
            },
          ],
        },
        {
          href: '/conversion/import-export/odt',
          title: 'ODT',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/import-export/odt/editor-extensions',
            },
            {
              title: 'REST API',
              href: '/conversion/import-export/odt/rest-api',
            },
          ],
        },
        {
          href: '/conversion/import-export/markdown',
          title: 'Markdown',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/import-export/markdown/editor-extensions',
            },
            {
              title: 'REST API',
              href: '/conversion/import-export/markdown/rest-api',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/resources',
      title: '资源',
      children: [
        {
          title: '遗留扩展',
          href: '/guides/legacy-conversion',
        },
      ],
    },
  ],
}
