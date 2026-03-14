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
      href: '/conversion/import',
      title: 'Import',
      tags: ['Start'],
      children: [
        {
          title: 'DOCX',
          href: '/conversion/import/docx/editor-import',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/import/docx/editor-import',
            },
            {
              title: '转换自定义节点',
              href: '/conversion/import/docx/custom-node-conversion',
            },
            {
              title: '转换自定义标记',
              href: '/conversion/import/docx/custom-mark-conversion',
            },
            {
              title: '保留图片',
              href: '/conversion/import/docx/preserve-images',
            },
            {
              title: 'REST API',
              href: '/conversion/import/docx/rest-api',
            },
          ],
        },
        {
          title: 'Markdown',
          href: '/conversion/import/markdown/rest-api',
          beta: true,
          children: [
            {
              title: 'REST API',
              href: '/conversion/import/markdown/rest-api',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/export',
      title: '导出',
      tags: ['Start'],
      children: [
        {
          title: 'DOCX',
          href: '/conversion/export/docx/editor-export',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/docx/editor-export',
            },
            {
              title: '页眉和页脚',
              href: '/conversion/export/docx/headers-footers',
            },
            {
              title: '自定义页面布局',
              href: '/conversion/export/docx/custom-page-layout',
            },
            {
              title: '转换自定义节点',
              href: '/conversion/export/docx/custom-node-conversion',
            },
            {
              title: '导出样式',
              href: '/conversion/export/docx/export-styles',
            },
            {
              title: 'REST API',
              href: '/conversion/export/docx/rest-api',
            },
          ],
        },
        {
          title: 'PDF',
          href: '/conversion/export/pdf/editor-export',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/pdf/editor-export',
            },
            {
              title: '页眉和页脚',
              href: '/conversion/export/pdf/headers-footers',
            },
            {
              title: '自定义页面布局',
              href: '/conversion/export/pdf/custom-page-layout',
            },
            {
              title: '转换自定义节点',
              href: '/conversion/export/pdf/custom-node-conversion',
            },
            {
              title: '导出样式',
              href: '/conversion/export/pdf/export-styles',
            },
            {
              title: 'REST API',
              href: '/conversion/export/pdf/rest-api',
            },
          ],
        },
        {
          title: 'ODT',
          href: '/conversion/export/odt/editor-export',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/odt/editor-export',
            },
            {
              title: '页眉和页脚',
              href: '/conversion/export/odt/headers-footers',
            },
            {
              title: '自定义页面布局',
              href: '/conversion/export/odt/custom-page-layout',
            },
            {
              title: '转换自定义节点',
              href: '/conversion/export/odt/custom-node-conversion',
            },
            {
              title: '导出样式',
              href: '/conversion/export/odt/export-styles',
            },
            {
              title: 'REST API',
              href: '/conversion/export/odt/rest-api',
            },
          ],
        },
        {
          title: 'EPUB',
          href: '/conversion/export/epub/editor-export',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/epub/editor-export',
            },
            {
              title: '页眉和页脚',
              href: '/conversion/export/epub/headers-footers',
            },
            {
              title: '自定义页面布局',
              href: '/conversion/export/epub/custom-page-layout',
            },
            {
              title: '转换自定义节点',
              href: '/conversion/export/epub/custom-node-conversion',
            },
            {
              title: '导出样式',
              href: '/conversion/export/epub/export-styles',
            },
            {
              title: 'REST API',
              href: '/conversion/export/epub/rest-api',
            },
          ],
        },
        {
          title: 'DOC',
          href: '/conversion/export/doc/editor-export',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/doc/editor-export',
            },
            {
              title: '页眉和页脚',
              href: '/conversion/export/doc/headers-footers',
            },
            {
              title: '自定义页面布局',
              href: '/conversion/export/doc/custom-page-layout',
            },
            {
              title: '转换自定义节点',
              href: '/conversion/export/doc/custom-node-conversion',
            },
            {
              title: '导出样式',
              href: '/conversion/export/doc/export-styles',
            },
            {
              title: 'REST API',
              href: '/conversion/export/doc/rest-api',
            },
          ],
        },
        {
          title: 'Markdown',
          href: '/conversion/export/markdown/editor-export',
          beta: true,
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/markdown/editor-export',
            },
            {
              title: 'REST API',
              href: '/conversion/export/markdown/rest-api',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/legacy',
      title: 'Legacy Import/Export',
      children: [
        {
          title: 'DOCX',
          href: '/conversion/legacy/overview',
          tags: ['Deprecated'],
        },
        {
          title: 'ODT',
          href: '/conversion/legacy/odt/editor-extensions',
          tags: ['Deprecated'],
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/legacy/odt/editor-extensions',
            },
            {
              title: 'REST API',
              href: '/conversion/legacy/odt/rest-api',
            },
          ],
        },
        {
          title: 'Markdown',
          href: '/conversion/legacy/markdown/editor-extensions',
          tags: ['Deprecated'],
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/legacy/markdown/editor-extensions',
            },
            {
              title: 'REST API',
              href: '/conversion/legacy/markdown/rest-api',
            },
          ],
        },
      ],
    },
  ],
}
