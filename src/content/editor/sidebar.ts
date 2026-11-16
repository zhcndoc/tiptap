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
              href: '/editor/getting-started/install/vanilla-javascript#without-a-build-tool-cdn',
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
          href: '/editor/extensions/custom-extensions',
          title: '自定义扩展',
          children: [
            {
              href: '/editor/extensions/custom-extensions/create-new',
              title: '创建新扩展',
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
              title: '扩展现有扩展',
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
          title: '扩展',
        },
        {
          href: '/editor/core-concepts/nodes-and-marks',
          title: '节点和标记',
        },
        {
          href: '/editor/core-concepts/schema',
          title: 'Schema',
        },
        {
          href: '/editor/core-concepts/decorations',
          title: '装饰',
        },
        {
          href: '/editor/core-concepts/keyboard-shortcuts',
          title: '键盘快捷键',
        },
        {
          title: '持久化',
          href: '/editor/core-concepts/persistence',
        },
        {
          title: 'ProseMirror',
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
        { href: '/editor/markdown', title: '简介' },
        {
          href: '/editor/markdown/getting-started',
          title: '快速开始',
          children: [
            {
              title: '安装与设置',
              href: '/editor/markdown/getting-started/installation',
            },
            {
              title: '基本用法',
              href: '/editor/markdown/getting-started/basic-usage',
            },
          ],
        },
        {
          href: '/editor/markdown/advanced-usage',
          title: '高级用法',
          children: [
            {
              title: '自定义分词器',
              href: '/editor/markdown/advanced-usage/custom-tokenizer',
            },
            {
              title: '自定义解析',
              href: '/editor/markdown/advanced-usage/custom-parsing',
            },
            {
              title: '自定义序列化',
              href: '/editor/markdown/advanced-usage/custom-serializing',
            },
          ],
        },
        {
          href: '/editor/markdown/guides',
          title: '指南',
          children: [
            {
              title: '在扩展中集成 Markdown',
              href: '/editor/markdown/guides/integrate-markdown-in-your-extension',
            },
            {
              title: '创建 Highlight 扩展',
              href: '/editor/markdown/guides/create-a-highlight-mark',
            },
            {
              title: '创建提示框扩展',
              href: '/editor/markdown/guides/create-a-admonition-block',
            },
            {
              title: '创建 Emoji 扩展',
              href: '/editor/markdown/guides/create-a-emoji-inline-block',
            },
          ],
        },
        { href: '/editor/markdown/examples', title: '示例' },
        {
          href: '/editor/markdown/api',
          title: 'API 参考',
          children: [
            {
              title: '编辑器',
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
              title: '工具函数',
              href: '/editor/markdown/api/utilities',
            },
            {
              title: '类型',
              href: '/editor/markdown/api/types',
            },
          ],
        },
        { href: '/editor/markdown/glossary', title: '术语表' },
      ],
    },
    {
      type: 'group',
      href: '/editor/whiteboard',
      title: '白板',
      tags: ['alpha'],
      children: [
        { title: '概述', href: '/editor/whiteboard/getting-started/overview' },
        {
          title: '指南',
          href: '/editor/whiteboard/guides/react',
          children: [
            { title: 'React', href: '/editor/whiteboard/guides/react' },
            { title: '舞台与相机', href: '/editor/whiteboard/guides/stage-and-camera' },
            { title: '图形与工具', href: '/editor/whiteboard/guides/shapes-and-tools' },
            { title: '箭头', href: '/editor/whiteboard/guides/arrows' },
            { title: '画框', href: '/editor/whiteboard/guides/frames' },
            { title: '文档画框', href: '/editor/whiteboard/guides/doc-frames' },
            { title: '图片', href: '/editor/whiteboard/guides/images' },
            { title: '自定义图形', href: '/editor/whiteboard/guides/custom-shapes' },
            { title: '导出与导入', href: '/editor/whiteboard/guides/export-and-import' },
            {
              title: '白板协作',
              href: '/editor/whiteboard/guides/collaboration',
            },
            {
              title: '白板修订记录',
              href: '/editor/whiteboard/guides/tracked-changes',
            },
          ],
        },
        {
          title: '示例',
          href: '/editor/whiteboard/examples/simple',
          children: [
            { title: '简单白板', href: '/editor/whiteboard/examples/simple' },
            { title: '自定义图形', href: '/editor/whiteboard/examples/custom-shape' },
          ],
        },
        { title: 'AI 智能体', href: '/ai/ai-toolkit/agents/whiteboard' },
        {
          title: 'API 参考',
          href: '/editor/whiteboard/api-reference/extensions',
          children: [
            { title: '扩展', href: '/editor/whiteboard/api-reference/extensions' },
            { title: '命令', href: '/editor/whiteboard/api-reference/commands' },
            { title: '工具函数', href: '/editor/whiteboard/api-reference/utilities' },
            { title: '类型', href: '/editor/whiteboard/api-reference/types' },
            { title: '样式', href: '/editor/whiteboard/api-reference/styling' },
            { title: '编辑器事件', href: '/editor/whiteboard/api-reference/events' },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '/editor/api',
      title: 'API 参考',
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
              title: '内容',
              children: [
                {
                  href: '/editor/api/commands/content/clear-content',
                  title: 'clearContent',
                },
                {
                  href: '/editor/api/commands/content/cut',
                  title: 'cut',
                },
                {
                  href: '/editor/api/commands/content/insert-content',
                  title: 'insertContent',
                },
                {
                  href: '/editor/api/commands/content/insert-content-at',
                  title: 'insertContentAt',
                },
                {
                  href: '/editor/api/commands/content/set-content',
                  title: 'setContent',
                },
              ],
            },
            {
              href: '/editor/api/commands/nodes-and-marks',
              title: '节点和标记',
              children: [
                {
                  href: '/editor/api/commands/nodes-and-marks/clear-nodes',
                  title: 'clearNodes',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/create-paragraph-near',
                  title: 'createParagraphNear',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/delete-node',
                  title: 'deleteNode',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/extend-mark-range',
                  title: 'extendMarkRange',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/exit-code',
                  title: 'exitCode',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-backward',
                  title: 'joinBackward',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-down',
                  title: 'joinDown',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-forward',
                  title: 'joinForward',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-textblock-backward',
                  title: 'joinTextblockBackward',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-textblock-forward',
                  title: 'joinTextblockForward',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/join-up',
                  title: 'joinUp',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/lift',
                  title: 'lift',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/lift-empty-block',
                  title: 'liftEmptyBlock',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/newline-in-code',
                  title: 'newlineInCode',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/reset-attributes',
                  title: 'resetAttributes',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/set-mark',
                  title: 'setMark',
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
                  title: 'splitBlock',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/toggle-mark',
                  title: 'toggleMark',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/toggle-node',
                  title: 'toggleNode',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/toggle-wrap',
                  title: 'toggleWrap',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/undo-input-rule',
                  title: 'undoInputRule',
                },
                {
                  href: '/editor/api/commands/nodes-and-marks/unset-all-marks',
                  title: 'unsetAllMarks',
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
                  title: 'updateAttributes',
                },
              ],
            },
            {
              href: '/editor/api/commands/lists',
              title: '列表',
              children: [
                {
                  href: '/editor/api/commands/lists/lift-list-item',
                  title: 'liftListItem',
                },
                {
                  href: '/editor/api/commands/lists/sink-list-item',
                  title: 'sinkListItem',
                },
                {
                  href: '/editor/api/commands/lists/split-list-item',
                  title: 'splitListItem',
                },
                {
                  href: '/editor/api/commands/lists/toggle-list',
                  title: 'toggleList',
                },
                {
                  href: '/editor/api/commands/lists/wrap-in-list',
                  title: 'wrapInList',
                },
              ],
            },
            {
              href: '/editor/api/commands/selection',
              title: '选区',
              children: [
                {
                  href: '/editor/api/commands/selection/blur',
                  title: 'blur',
                },
                {
                  href: '/editor/api/commands/selection/delete-range',
                  title: 'deleteRange',
                },
                {
                  href: '/editor/api/commands/selection/delete-selection',
                  title: 'deleteSelection',
                },
                {
                  href: '/editor/api/commands/selection/enter',
                  title: 'enter',
                },
                {
                  href: '/editor/api/commands/selection/focus',
                  title: 'focus',
                },
                {
                  href: '/editor/api/commands/selection/keyboard-shortcut',
                  title: 'keyboardShortcut',
                },
                {
                  href: '/editor/api/commands/selection/scroll-into-view',
                  title: 'scrollIntoView',
                },
                {
                  href: '/editor/api/commands/selection/select-all',
                  title: 'selectAll',
                },
                {
                  href: '/editor/api/commands/selection/select-node-backward',
                  title: 'selectNodeBackward',
                },
                {
                  href: '/editor/api/commands/selection/select-node-forward',
                  title: 'selectNodeForward',
                },
                {
                  href: '/editor/api/commands/selection/select-parent-node',
                  title: 'selectParentNode',
                },
                {
                  href: '/editor/api/commands/selection/set-node-selection',
                  title: 'setNodeSelection',
                },
                {
                  href: '/editor/api/commands/selection/set-text-selection',
                  title: 'setTextSelection',
                },
              ],
            },
            {
              href: '/editor/api/commands/for-each',
              title: 'forEach',
            },
            {
              href: '/editor/api/commands/select-textblock-end',
              title: 'selectTextblockEnd',
            },
            {
              href: '/editor/api/commands/select-textblock-start',
              title: 'selectTextblockStart',
            },
            {
              href: '/editor/api/commands/set-meta',
              title: 'setMeta',
            },
          ],
        },
        {
          href: '/editor/api/utilities',
          title: '工具函数',
          children: [
            {
              href: '/editor/api/utilities/html',
              title: 'HTML',
            },
            {
              href: '/editor/api/utilities/jsx',
              title: 'JSX',
            },
            {
              href: '/editor/api/utilities/position',
              title: '位置',
            },
            {
              href: '/editor/api/utilities/static-renderer',
              title: '静态渲染器',
            },
            {
              href: '/editor/api/utilities/suggestion',
              title: '建议',
            },
            {
              href: '/editor/api/utilities/tiptap-for-php',
              title: 'PHP 版 Tiptap',
            },
          ],
        },
        {
          href: '/editor/api/node-positions',
          title: '节点位置',
        },
        {
          href: '/editor/api/decorations',
          title: '装饰',
        },
        {
          title: '可调整大小的节点视图',
          href: '/editor/api/resizable-nodeviews',
        },
        {
          href: '/editor/api/events',
          title: '事件',
        },
        {
          href: '/editor/api/input-rules',
          title: '输入规则',
        },
        {
          href: '/editor/api/paste-rules',
          title: '粘贴规则',
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
          title: 'Pro 许可证',
        },
      ],
    },
  ],
}
