import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'ui components',
  rootHref: '/ui-components/getting-started/',
  title: '组件',
  items: [
    {
      type: 'group',
      href: '/ui-components/getting-started/overview',
      title: '快速上手',
      children: [
        {
          title: '概述',
          href: '/ui-components/getting-started/overview',
        },
        {
          title: 'Style',
          href: '/ui-components/getting-started/style',
        },
        {
          title: 'CLI',
          href: '/ui-components/getting-started/cli',
        },
      ],
    },
    {
      type: 'group',
      href: '/ui-components/templates',
      title: '模板',
      children: [
        {
          title: '简易编辑器',
          href: '/ui-components/templates/simple-editor',
          tags: ['Open Source'],
        },
      ],
    },
    {
      type: 'group',
      href: '/ui-components/install',
      title: 'Install',
      children: [
        {
          title: 'Next.js',
          href: '/ui-components/install/next',
        },
        {
          title: 'Vite',
          href: '/ui-components/install/vite',
        },
      ],
    },
    {
      type: 'group',
      href: '/ui-components/components',
      title: 'UI 组件',
      children: [
        {
          title: '概述',
          href: '/ui-components/components/overview',
        },
        {
          title: '组件列表',
          href: '/ui-components/components/',
          children: [
            {
              title: '引用按钮',
              href: '/ui-components/components/blockquote-button',
            },
            {
              title: '代码块按钮',
              href: '/ui-components/components/code-block-button',
            },
            {
              title: '颜色高亮弹出框',
              href: '/ui-components/components/color-highlight-popover',
            },
            {
              title: '标题按钮',
              href: '/ui-components/components/heading-button',
            },
            {
              title: '标题下拉菜单',
              href: '/ui-components/components/heading-dropdown-menu',
            },
            {
              title: '图片上传按钮',
              href: '/ui-components/components/image-upload-button',
            },
            {
              title: '链接弹出框',
              href: '/ui-components/components/link-popover',
            },
            {
              title: '列表按钮',
              href: '/ui-components/components/list-button',
            },
            {
              title: '列表下拉菜单',
              href: '/ui-components/components/list-dropdown-menu',
            },
            {
              title: '标记按钮',
              href: '/ui-components/components/mark-button',
            },
            {
              title: '文本对齐按钮',
              href: '/ui-components/components/text-align-button',
            },
            {
              title: '撤销重做按钮',
              href: '/ui-components/components/undo-redo-button',
            },
            // {
            //   title: 'Comment button',
            //   href: '/ui-components/components/comment-button',
            // },
            // {
            //   title: 'Emoji dropdown',
            //   href: '/ui-components/components/emoji-dropdown-menu',
            // },
            // {
            //   title: 'Floating element',
            //   href: '/ui-components/components/floating-element',
            // },
            // {
            //   title: 'Floating toolbar',
            //   href: '/ui-components/components/floating-toolbar',
            // },
            // {
            //   title: 'Math button',
            //   href: '/ui-components/components/math-button',
            // },
            // {
            //   title: 'Mention dropdown',
            //   href: '/ui-components/components/mention-dropdown-menu',
            // },
            // {
            //   title: 'Slash menu',
            //   href: '/ui-components/components/slash-dropdown-menu',
            // },
            // {
            //   title: 'Thread',
            //   href: '/ui-components/components/thread',
            // },
            // {
            //   title: 'Trigger button',
            //   href: '/ui-components/components/trigger-button',
            // },
          ],
        },
        {
          title: '节点组件',
          href: '/ui-components/node-components',
          children: [
            {
              title: '代码块节点',
              href: '/ui-components/node-components/code-block-node',
            },
            {
              title: '图片节点',
              href: '/ui-components/node-components/image-node',
            },
            {
              title: '图片上传节点',
              href: '/ui-components/node-components/image-upload-node',
            },
            {
              title: '列表节点',
              href: '/ui-components/node-components/list-node',
            },
            {
              title: '段落节点',
              href: '/ui-components/node-components/paragraph-node',
            },
          ],
        },
        {
          title: '基础组件',
          href: '/ui-components/primitives',
          children: [
            // {
            //   title: 'Avatar',
            //   href: '/ui-components/primitives/avatar',
            // },
            // {
            //   title: 'Badge',
            //   href: '/ui-components/primitives/badge',
            // },
            {
              title: '按钮',
              href: '/ui-components/primitives/button',
            },
            {
              title: '下拉菜单',
              href: '/ui-components/primitives/dropdown-menu',
            },
            {
              title: '弹出框',
              href: '/ui-components/primitives/popover',
            },
            {
              title: '分隔线',
              href: '/ui-components/primitives/separator',
            },
            {
              title: '间隔器',
              href: '/ui-components/primitives/spacer',
            },
            {
              title: '工具栏',
              href: '/ui-components/primitives/toolbar',
            },
            {
              title: '工具提示',
              href: '/ui-components/primitives/tooltip',
            },
          ],
        },
      ],
    },
  ],
}
