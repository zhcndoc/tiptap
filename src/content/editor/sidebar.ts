import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'editor',
  rootHref: '/editor/getting-started/overview',
  title: '编辑器',
  items: [
    {
      type: 'group',
      href: '/editor/getting-started',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/editor/getting-started/overview',
        },
        {
          title: '安装',
          href: '/editor/getting-started/install',
          children: [
            {
              href: '/editor/getting-started/install/vanilla-javascript',
              title: '原生 JavaScript',
            },
            {
              href: '/editor/getting-started/install/react',
              title: 'React',
            },
            {
              href: '/editor/getting-started/install/nextjs',
              title: 'Next.js',
            },
            {
              href: '/editor/getting-started/install/vue3',
              title: 'Vue 3',
            },
            {
              href: '/editor/getting-started/install/vue2',
              title: 'Vue 2',
            },
            {
              href: '/editor/getting-started/install/nuxt',
              title: 'Nuxt',
            },
            {
              href: '/editor/getting-started/install/svelte',
              title: 'Svelte',
            },
            {
              href: '/editor/getting-started/install/alpine',
              title: 'Alpine',
            },
            {
              href: '/editor/getting-started/install/php',
              title: 'PHP',
            },
            {
              href: '/editor/getting-started/install/cdn',
              title: 'CDN',
            },
          ],
        },
        {
          title: '配置',
          href: '/editor/getting-started/configure',
        },
        {
          title: '样式',
          href: '/editor/getting-started/style-editor',
          children: [
            {
              href: '/editor/getting-started/style-editor/custom-menus',
              title: '自定义菜单',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      title: '扩展',
      href: '/editor/extensions',
      children: [
        {
          href: '/editor/extensions/overview',
          title: '概述',
        },
        {
          href: '/editor/extensions/nodes',
          title: '节点',
          children: [
            {
              href: '/editor/extensions/nodes/blockquote',
              title: '引用',
            },
            {
              href: '/editor/extensions/nodes/bullet-list',
              title: '无序列表',
            },
            {
              href: '/editor/extensions/nodes/code-block',
              title: '代码块',
            },
            {
              href: '/editor/extensions/nodes/code-block-lowlight',
              title: '代码块浅色主题',
            },
            {
              href: '/editor/extensions/nodes/details',
              title: '详情',
            },
            {
              href: '/editor/extensions/nodes/details-content',
              title: '详情内容',
            },
            {
              href: '/editor/extensions/nodes/details-summary',
              title: '详情摘要',
            },
            {
              href: '/editor/extensions/nodes/document',
              title: '文档',
            },
            {
              href: '/editor/extensions/nodes/emoji',
              title: '表情符号',
            },
            {
              href: '/editor/extensions/nodes/hard-break',
              title: '硬换行',
            },
            {
              href: '/editor/extensions/nodes/heading',
              title: '标题',
            },
            {
              href: '/editor/extensions/nodes/horizontal-rule',
              title: '水平线',
            },
            {
              href: '/editor/extensions/nodes/image',
              title: '图片',
            },
            {
              href: '/editor/extensions/nodes/list-item',
              title: '列表项',
            },
            {
              href: '/editor/extensions/nodes/mathematics',
              title: '数学',
            },
            {
              href: '/editor/extensions/nodes/mention',
              title: '提及',
            },
            {
              href: '/editor/extensions/nodes/ordered-list',
              title: '有序列表',
            },
            {
              href: '/editor/extensions/nodes/paragraph',
              title: '段落',
            },
            {
              href: '/editor/extensions/nodes/table',
              title: '表格',
            },
            {
              href: '/editor/extensions/nodes/table-cell',
              title: '表格单元格',
            },
            {
              href: '/editor/extensions/nodes/table-header',
              title: '表格头部',
            },
            {
              href: '/editor/extensions/nodes/table-row',
              title: '表格行',
            },
            {
              href: '/editor/extensions/nodes/task-list',
              title: '任务列表',
            },
            {
              href: '/editor/extensions/nodes/task-item',
              title: '任务项',
            },
            {
              href: '/editor/extensions/nodes/text',
              title: 'Text',
            },
            {
              href: '/editor/extensions/nodes/twitch',
              title: 'Twitch',
            },
            {
              href: '/editor/extensions/nodes/youtube',
              title: 'YouTube 视频',
            },
          ],
        },
        {
          href: '/editor/extensions/marks',
          title: '标记',
          children: [
            {
              href: '/editor/extensions/marks/bold',
              title: '加粗',
            },
            {
              href: '/editor/extensions/marks/code',
              title: '代码',
            },
            {
              href: '/editor/extensions/marks/highlight',
              title: '高亮',
            },
            {
              href: '/editor/extensions/marks/italic',
              title: '斜体',
            },
            {
              href: '/editor/extensions/marks/link',
              title: '链接',
            },
            {
              href: '/editor/extensions/marks/strike',
              title: '删除线',
            },
            {
              href: '/editor/extensions/marks/subscript',
              title: '下标',
            },
            {
              href: '/editor/extensions/marks/superscript',
              title: '上标',
            },
            {
              href: '/editor/extensions/marks/text-style',
              title: '文本样式',
            },
            {
              href: '/editor/extensions/marks/underline',
              title: '下划线',
            },
          ],
        },
        {
          href: '/editor/extensions/functionality',
          title: '功能扩展',
          children: [
            {
              href: '/editor/extensions/functionality/ai-generation',
              title: 'AI 生成',
              tags: ['Start'],
            },
            {
              href: '/editor/extensions/functionality/ai-toolkit',
              title: 'AI Toolkit',
              tags: ['Add-on'],
              beta: true,
            },
            {
              href: '/editor/extensions/functionality/bubble-menu',
              title: '气泡菜单',
            },
            {
              href: '/editor/extensions/functionality/character-count',
              title: '字符计数',
            },
            {
              href: '/editor/extensions/functionality/collaboration',
              title: '协作编辑',
            },
            {
              href: '/editor/extensions/functionality/collaboration-caret',
              title: '协作插入符',
            },
            {
              href: '/editor/extensions/functionality/background-color',
              title: '背景颜色',
            },
            {
              href: '/editor/extensions/functionality/color',
              title: '字体颜色',
            },
            {
              href: '/editor/extensions/functionality/comments',
              title: '评论',
              tags: ['Start'],
              beta: true,
            },
            {
              href: '/editor/extensions/functionality/drag-handle',
              title: '拖动手柄',
            },
            {
              href: '/editor/extensions/functionality/drag-handle-react',
              title: 'React 拖动手柄',
            },
            {
              href: '/editor/extensions/functionality/drag-handle-vue',
              title: 'Vue 拖动手柄',
            },
            {
              href: '/editor/extensions/functionality/dropcursor',
              title: '拖放光标',
            },
            {
              href: '/editor/extensions/functionality/export',
              title: '导出',
              tags: ['Start'],
              beta: true,
            },
            {
              href: '/editor/extensions/functionality/filehandler',
              title: '文件处理',
            },
            {
              href: '/editor/extensions/functionality/floatingmenu',
              title: '浮动菜单',
            },
            {
              href: '/editor/extensions/functionality/focus',
              title: '焦点控制',
            },
            {
              href: '/editor/extensions/functionality/fontfamily',
              title: '字体家族',
            },
            {
              href: '/editor/extensions/functionality/fontsize',
              title: '字体大小',
            },
            {
              href: '/editor/extensions/functionality/gapcursor',
              title: '间隙光标',
            },
            {
              href: '/editor/extensions/functionality/invisiblecharacters',
              title: '不可见字符',
            },
            {
              href: '/editor/extensions/functionality/line-height',
              title: '行高',
            },
            {
              href: '/editor/extensions/functionality/list-kit',
              title: '列表工具包',
            },
            {
              href: '/editor/extensions/functionality/listkeymap',
              title: '列表快捷键映射',
            },
            {
              href: '/editor/extensions/functionality/import',
              title: 'Import',
              tags: ['Start'],
              beta: true,
            },
            {
              href: '/editor/extensions/functionality/pages',
              title: 'Pages',
              tags: ['Team'],
            },
            {
              href: '/editor/extensions/functionality/placeholder',
              title: '占位文本',
            },
            {
              href: '/editor/extensions/functionality/snapshot',
              title: '版本',
              tags: ['Starter'],
            },
            {
              href: '/editor/extensions/functionality/snapshot-compare',
              title: 'Snapshot Compare',
              tags: ['Team'],
            },
            {
              href: '/editor/extensions/functionality/selection',
              title: '选区操作',
            },
            {
              href: '/editor/extensions/functionality/starterkit',
              title: '入门工具包',
            },
            {
              href: '/editor/extensions/functionality/table-kit',
              title: '表格工具包',
            },
            {
              href: '/editor/extensions/functionality/table-of-contents',
              title: '目录',
            },
            {
              href: '/editor/extensions/functionality/text-style-kit',
              title: '文本样式工具包',
            },
            {
              href: '/editor/extensions/functionality/textalign',
              title: '文本对齐',
            },
            {
              href: '/editor/extensions/functionality/trailing-node',
              title: '尾部节点',
            },
            {
              href: '/editor/extensions/functionality/typography',
              title: '排版',
            },
            {
              href: '/editor/extensions/functionality/undo-redo',
              title: '撤销与重做历史',
            },
            {
              href: '/editor/extensions/functionality/uniqueid',
              title: '唯一标识符',
            },
          ],
        },
        {
          href: '/editor/extensions/custom-extensions',
          title: '自定义扩展',
          children: [
            {
              href: '/editor/extensions/custom-extensions/create-new',
              title: '新建扩展',
              children: [
                {
                  href: '/editor/extensions/custom-extensions/create-new/extension',
                  title: '扩展 API',
                },
                {
                  href: '/editor/extensions/custom-extensions/create-new/node',
                  title: '节点 API',
                },
                {
                  href: '/editor/extensions/custom-extensions/create-new/mark',
                  title: '标记 API',
                },
              ],
            },
            {
              href: '/editor/extensions/custom-extensions/extend-existing',
              title: '扩展现有功能',
            },
            {
              href: '/editor/extensions/custom-extensions/node-views',
              title: '节点视图',
              children: [
                {
                  href: '/editor/extensions/custom-extensions/node-views/javascript',
                  title: 'JavaScript',
                },
                {
                  href: '/editor/extensions/custom-extensions/node-views/react',
                  title: 'React',
                },
                {
                  href: '/editor/extensions/custom-extensions/node-views/vue',
                  title: 'Vue',
                },
                {
                  href: '/editor/extensions/custom-extensions/node-views/examples',
                  title: '示例',
                },
              ],
            },
            {
              href: '/editor/extensions/custom-extensions/mark-views',
              title: '标记视图',
              children: [
                {
                  href: '/editor/extensions/custom-extensions/mark-views/javascript',
                  title: 'JavaScript',
                },
                {
                  href: '/editor/extensions/custom-extensions/mark-views/react',
                  title: 'React',
                },
                {
                  href: '/editor/extensions/custom-extensions/mark-views/vue',
                  title: 'Vue',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      title: '核心概念',
      href: '/editor/core-concepts',
      children: [
        {
          href: '/editor/core-concepts/introduction',
          title: '简介',
        },
        {
          href: '/editor/core-concepts/extensions',
          title: '扩展机制',
        },
        {
          href: '/editor/core-concepts/nodes-and-marks',
          title: '节点与标记',
        },
        {
          href: '/editor/core-concepts/schema',
          title: '模式定义',
        },
        {
          href: '/editor/core-concepts/keyboard-shortcuts',
          title: 'Keyboard shortcuts',
        },
        {
          title: 'Persistence',
          href: '/editor/core-concepts/persistence',
        },
        {
          title: 'ProseMirror 集成',
          href: '/editor/core-concepts/prosemirror',
        },
      ],
    },
    {
      type: 'group',
      href: '/editor/markdown',
      title: 'Markdown',
      tags: ['beta'],
      children: [
        { href: '/editor/markdown', title: 'Introduction' },
        {
          href: '/editor/markdown/getting-started',
          title: 'Getting Started',
          children: [
            {
              title: 'Installation & Setup',
              href: '/editor/markdown/getting-started/installation',
            },
            {
              title: 'Basic Usage',
              href: '/editor/markdown/getting-started/basic-usage',
            },
          ],
        },
        {
          href: '/editor/markdown/advanced-usage',
          title: 'Advanced Usage',
          children: [
            {
              title: 'Custom Tokenizer',
              href: '/editor/markdown/advanced-usage/custom-tokenizer',
            },
            {
              title: 'Custom Parsing',
              href: '/editor/markdown/advanced-usage/custom-parsing',
            },
            {
              title: 'Custom Serializing',
              href: '/editor/markdown/advanced-usage/custom-serializing',
            },
          ],
        },
        {
          href: '/editor/markdown/guides',
          title: 'Guides',
          children: [
            {
              title: 'Integrate Markdown in your Extension',
              href: '/editor/markdown/guides/integrate-markdown-in-your-extension',
            },
            {
              title: 'Create a Highlight Extension',
              href: '/editor/markdown/guides/create-a-highlight-mark',
            },
            {
              title: 'Create a Admonition Extension',
              href: '/editor/markdown/guides/create-a-admonition-block',
            },
            {
              title: 'Create a Emoji Extension',
              href: '/editor/markdown/guides/create-a-emoji-inline-block',
            },
          ],
        },
        { href: '/editor/markdown/examples', title: 'Examples' },
        {
          href: '/editor/markdown/api',
          title: 'API Reference',
          children: [
            {
              title: 'Editor',
              href: '/editor/markdown/api/editor',
            },
            {
              title: 'MarkdownManager',
              href: '/editor/markdown/api/markdown-manager',
            },
            {
              title: 'Extension',
              href: '/editor/markdown/api/extension',
            },
            {
              title: 'Utilities',
              href: '/editor/markdown/api/utilities',
            },
            {
              title: 'Types',
              href: '/editor/markdown/api/types',
            },
          ],
        },
        { href: '/editor/markdown/glossary', title: 'Glossary' },
      ],
    },
    {
      type: 'group',
      href: '/editor/api',
      title: 'API 文档',
      children: [
        {
          href: '/editor/api/editor',
          title: '编辑器实例',
        },
        {
          href: '/editor/api/commands',
          title: '命令',
          children: [
            {
              href: '/editor/api/commands/content',
              title: '内容操作',
              children: [
                {
                  href: '/editor/api/commands/content/clear-content',
                  title: '清空内容',
                },
                {
                  href: '/editor/api/commands/content/cut',
                  title: '剪切',
                },
                {
                  href: '/editor/api/commands/content/insert-content',
                  title: '插入内容',
                },
                {
                  href: '/editor/api/commands/content/insert-content-at',
                  title: '指定位置插入内容',
                },
                {
                  href: '/editor/api/commands/content/set-content',
                  title: '设置内容',
                },
              ],
            },
            {
              href: '/editor/api/commands/nodes-and-marks',
              title: '节点与标记操作',
              children: [
                {
                  href: '/editor/api/commands/nodes-and-marks/clear-nodes',
                  title: '清除节点',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/create-paragraph-near',
                  title: '就近创建段落',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/delete-node',
                  title: '删除节点',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/extend-mark-range',
                  title: '扩展标记范围',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/exit-code',
                  title: '退出代码模式',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-backward',
                  title: '向后合并',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-down',
                  title: '向下合并',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-forward',
                  title: '向前合并',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-textblock-backward',
                  title: '向后合并文本块',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-textblock-forward',
                  title: '向前合并文本块',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-up',
                  title: '向上合并',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/lift',
                  title: '提升节点层级',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/lift-empty-block',
                  title: '提升空块',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/newline-in-code',
                  title: '代码块内换行',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/reset-attributes',
                  title: '重置属性',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/set-mark',
                  title: '设置标记',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/set-node',
                  title: 'setNode',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/set-text-direction',
                  title: 'setTextDirection',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/split-block',
                  title: '拆分块',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/toggle-mark',
                  title: '切换标记',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/toggle-node',
                  title: '切换节点',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/toggle-wrap',
                  title: '切换包裹节点',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/undo-input-rule',
                  title: '撤销输入规则',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/unset-all-marks',
                  title: '清除所有标记',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/unset-mark',
                  title: 'unsetMark',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/unset-text-direction',
                  title: 'unsetTextDirection',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/update-attributes',
                  title: '更新属性',
                },
              ],
            },
            {
              href: '/editor/api/commands/lists',
              title: '列表操作',
              children: [
                {
                  href: '/editor/api/commands/lists/lift-list-item',
                  title: '提升列表项层级',
                },
                {
                  href: '/editor/api/commands/lists/sink-list-item',
                  title: '降低列表项层级',
                },
                {
                  href: '/editor/api/commands/lists/split-list-item',
                  title: '拆分列表项',
                },
                {
                  href: '/editor/api/commands/lists/toggle-list',
                  title: '切换列表类型',
                },
                {
                  href: '/editor/api/commands/lists/wrap-in-list',
                  title: '包裹为列表',
                },
              ],
            },
            {
              href: '/editor/api/commands/selection',
              title: '选区操作',
              children: [
                {
                  href: '/editor/api/commands/selection/blur',
                  title: '失去焦点',
                },
                {
                  href: '/editor/api/commands/selection/delete-range',
                  title: '删除选区范围',
                },
                {
                  href: '/editor/api/commands/selection/delete-selection',
                  title: '删除选区内容',
                },
                {
                  href: '/editor/api/commands/selection/enter',
                  title: '换行',
                },
                {
                  href: '/editor/api/commands/selection/focus',
                  title: '获取焦点',
                },
                {
                  href: '/editor/api/commands/selection/keyboard-shortcut',
                  title: '触发键盘快捷键',
                },
                {
                  href: '/editor/api/commands/selection/scroll-into-view',
                  title: '滚动到可见区域',
                },
                {
                  href: '/editor/api/commands/selection/select-all',
                  title: '全选',
                },
                {
                  href: '/editor/api/commands/selection/select-node-backward',
                  title: '向后选择节点',
                },
                {
                  href: '/editor/api/commands/selection/select-node-forward',
                  title: '向前选择节点',
                },
                {
                  href: '/editor/api/commands/selection/select-parent-node',
                  title: '选择父节点',
                },
                {
                  href: '/editor/api/commands/selection/set-node-selection',
                  title: '设置节点选区',
                },
                {
                  href: '/editor/api/commands/selection/set-text-selection',
                  title: '设置文本选区',
                },
              ],
            },
            {
              href: '/editor/api/commands/for-each',
              title: '遍历操作',
            },
            {
              href: '/editor/api/commands/select-textblock-end',
              title: '选择文本块末尾',
            },
            {
              href: '/editor/api/commands/select-textblock-start',
              title: '选择文本块开头',
            },
            {
              href: '/editor/api/commands/set-meta',
              title: '设置元数据',
            },
          ],
        },
        {
          href: '/editor/api/utilities',
          title: '工具函数',
          children: [
            {
              href: '/editor/api/utilities/html',
              title: 'HTML 处理',
            },
            {
              href: '/editor/api/utilities/jsx',
              title: 'JSX',
            },
            {
              href: '/editor/api/utilities/position',
              title: 'Position',
            },
            {
              href: '/editor/api/utilities/static-renderer',
              title: 'Static Renderer',
            },
            {
              href: '/editor/api/utilities/suggestion',
              title: '建议提示',
            },
            {
              href: '/editor/api/utilities/tiptap-for-php',
              title: 'PHP 集成工具',
            },
          ],
        },
        {
          href: '/editor/api/node-positions',
          title: 'Node Positions',
        },
        {
          title: 'Resizable Node views',
          href: '/editor/api/resizable-nodeviews',
        },
        {
          href: '/editor/api/events',
          title: 'Events',
        },
        {
          href: '/editor/api/input-rules',
          title: 'Input Rules',
        },
        {
          href: '/editor/api/paste-rules',
          title: 'Paste Rules',
        },
      ],
    },
    {
      type: 'group',
      title: '资源',
      href: '/editor/resources',
      children: [
        {
          href: '/guides',
          title: '指南',
        },
        {
          href: 'https://tiptap.dev/pro-license',
          title: '专业版授权',
        },
      ],
    },
  ],
}
