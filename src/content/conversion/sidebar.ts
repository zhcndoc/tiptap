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
          title: '安装',
          href: '/conversion/getting-started/install',
        },
        {
          title: '在线演示',
          href: '/conversion/getting-started/demo',
        },
        {
          title: '支持功能',
          href: '/conversion/getting-started/feature-support-matrix',
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/import',
      title: '导入',
      children: [
        {
          title: 'DOCX',
          href: '/conversion/import/docx/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/import/docx/editor-extension',
            },
            {
              title: 'ConvertKit',
              href: '/conversion/import/docx/convertkit',
              tags: ['Beta'],
            },
            {
              title: 'CSS 注入',
              href: '/conversion/import/docx/css-injection',
              tags: ['Beta'],
            },
            {
              title: 'REST API',
              href: '/conversion/import/docx/rest-api',
            },
            {
              title: '自定义',
              href: '/conversion/import/docx/custom-node-mapping',
              children: [
                {
                  title: '节点映射',
                  href: '/conversion/import/docx/custom-node-mapping',
                },
                {
                  title: '标记映射',
                  href: '/conversion/import/docx/custom-mark-mapping',
                },
                {
                  title: '图片处理',
                  href: '/conversion/import/docx/image-handling',
                },
                {
                  title: '分页符',
                  href: '/conversion/import/docx/page-breaks',
                },
              ],
            },
          ],
        },
        {
          title: 'Markdown',
          href: '/conversion/import/markdown/rest-api',
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
      children: [
        {
          title: 'DOCX',
          href: '/conversion/export/docx/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/docx/editor-extension',
            },
            {
              title: 'CSS 转 DOCX',
              href: '/conversion/export/docx/css-to-docx',
              tags: ['Beta'],
            },
            {
              title: 'REST API',
              href: '/conversion/export/docx/rest-api',
            },
            {
              title: '自定义',
              href: '/conversion/export/docx/custom-nodes',
              children: [
                {
                  title: '自定义节点',
                  href: '/conversion/export/docx/custom-nodes',
                },
                {
                  title: 'Custom nodes DSL',
                  href: '/conversion/export/docx/custom-nodes-dsl',
                  tags: ['Beta'],
                },
                {
                  title: 'Custom nodes DSL builder',
                  href: '/conversion/export/docx/custom-nodes-dsl-builder',
                  tags: ['Beta'],
                },
                {
                  title: 'Styles',
                  href: '/conversion/export/docx/styles',
                },
                {
                  title: '页眉和页脚',
                  href: '/conversion/export/docx/headers-footers',
                },
                {
                  title: '分页符',
                  href: '/conversion/export/docx/page-breaks',
                },
                {
                  title: '页面布局',
                  href: '/conversion/export/docx/page-layout',
                },
              ],
            },
          ],
        },
        {
          title: 'PDF',
          href: '/conversion/export/pdf/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/pdf/editor-extension',
            },
            {
              title: 'REST API',
              href: '/conversion/export/pdf/rest-api',
            },
          ],
        },
        {
          title: 'ODT',
          href: '/conversion/export/odt/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/odt/editor-extension',
            },
            {
              title: 'REST API',
              href: '/conversion/export/odt/rest-api',
            },
          ],
        },
        {
          title: 'EPUB',
          href: '/conversion/export/epub/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/epub/editor-extension',
            },
            {
              title: 'REST API',
              href: '/conversion/export/epub/rest-api',
            },
          ],
        },
        {
          title: 'DOC',
          href: '/conversion/export/doc/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/doc/editor-extension',
            },
            {
              title: 'REST API',
              href: '/conversion/export/doc/rest-api',
            },
          ],
        },
        {
          title: 'Markdown',
          href: '/conversion/export/markdown/editor-extension',
          children: [
            {
              title: '编辑器扩展',
              href: '/conversion/export/markdown/editor-extension',
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
      href: '/conversion/content-types/overview',
      title: '内容参考',
      children: [
        {
          title: '概述',
          href: '/conversion/content-types/overview',
        },
        {
          title: '文本与格式',
          href: '/conversion/content-types/text-and-formatting/paragraphs',
          children: [
            {
              title: '段落',
              href: '/conversion/content-types/text-and-formatting/paragraphs',
            },
            {
              title: '标题',
              href: '/conversion/content-types/text-and-formatting/headings',
            },
            {
              title: '文本对齐',
              href: '/conversion/content-types/text-and-formatting/text-alignment',
            },
            {
              title: '加粗、斜体、下划线、删除线',
              href: '/conversion/content-types/text-and-formatting/bold-italic-underline-strike',
            },
            {
              title: '下标和上标',
              href: '/conversion/content-types/text-and-formatting/subscript-superscript',
            },
            {
              title: '文本颜色与高亮',
              href: '/conversion/content-types/text-and-formatting/text-color-highlight',
            },
            {
              title: '字体族和字号',
              href: '/conversion/content-types/text-and-formatting/font-family-size',
            },
            {
              title: '列表',
              href: '/conversion/content-types/text-and-formatting/lists',
            },
            {
              title: '制表符',
              href: '/conversion/content-types/text-and-formatting/tabs',
            },
          ],
        },
        {
          title: '结构与媒体',
          href: '/conversion/content-types/structures-and-media/tables',
          children: [
            {
              title: '表格',
              href: '/conversion/content-types/structures-and-media/tables',
            },
            {
              title: '图片',
              href: '/conversion/content-types/structures-and-media/images',
            },
            {
              title: '超链接和书签',
              href: '/conversion/content-types/structures-and-media/hyperlinks-bookmarks',
            },
            {
              title: '块级元素',
              href: '/conversion/content-types/structures-and-media/block-elements',
            },
            {
              title: '数学与公式',
              href: '/conversion/content-types/structures-and-media/math-equations',
            },
            {
              title: '脚注和尾注',
              href: '/conversion/content-types/structures-and-media/footnotes-endnotes',
            },
            {
              title: 'Word 样式',
              href: '/conversion/content-types/structures-and-media/word-styles',
            },
          ],
        },
        {
          title: '页面布局',
          href: '/conversion/content-types/page-layout/headers-footers',
          children: [
            {
              title: '页眉和页脚',
              href: '/conversion/content-types/page-layout/headers-footers',
            },
            {
              title: '分页符',
              href: '/conversion/content-types/page-layout/page-breaks',
            },
            {
              title: '页面结构',
              href: '/conversion/content-types/page-layout/page-structure',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/getting-started/guides',
      title: '指南',
      children: [
        {
          title: '端到端演示',
          href: '/conversion/getting-started/guides/end-to-end-walkthrough',
        },
        {
          title: '为转换后的内容设置样式',
          href: '/conversion/getting-started/guides/styling-converted-content',
        },
        {
          title: '自定义扩展',
          href: '/conversion/getting-started/guides/custom-extensions',
        },
        {
          title: '调试',
          href: '/conversion/getting-started/guides/debugging',
        },
      ],
    },
    {
      type: 'group',
      href: '/conversion/legacy/overview',
      title: '旧版',
      tags: ['Deprecated'],
      children: [
        {
          title: '概述',
          href: '/conversion/legacy/overview',
        },
        {
          title: '迁移指南',
          href: '/conversion/legacy/migration-guide',
        },
        {
          title: 'Markdown（旧版）',
          href: '/conversion/legacy/markdown/editor-extensions',
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
        {
          title: 'ODT（旧版）',
          href: '/conversion/legacy/odt/editor-extensions',
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
      ],
    },
  ],
}
