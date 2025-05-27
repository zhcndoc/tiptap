import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'examples',
  rootHref: '/examples',
  title: '示例',
  items: [
    {
      type: 'group',
      title: '快速开始',
      href: '/examples',
      children: [
        {
          href: '/examples',
          title: '概览',
        },
      ],
    },
    {
      type: 'group',
      href: '',
      title: '基础示例',
      children: [
        {
          title: '默认文本编辑器',
          href: '/examples/basics/default-text-editor',
        },
        {
          title: '格式化功能',
          href: '/examples/basics/formatting',
        },
        {
          title: '图片处理',
          href: '/examples/basics/images',
        },
        {
          title: '长文本编辑',
          href: '/examples/basics/long-texts',
        },
        {
          title: 'Markdown 快捷键',
          href: '/examples/basics/markdown-shortcuts',
        },
        {
          title: '最小化配置',
          href: '/examples/basics/minimal-setup',
        },
        {
          title: '表格编辑',
          href: '/examples/basics/tables',
        },
        {
          title: '任务列表',
          href: '/examples/basics/tasks',
        },
      ],
    },
    {
      type: 'group',
      href: '',
      title: '高级示例',
      children: [
        {
          title: '智能编辑器',
          href: '/examples/advanced/clever-editor',
        },
        {
          title: '协作编辑',
          href: '/examples/advanced/collaborative-editing',
        },
        {
          title: '绘图功能',
          href: '/examples/advanced/drawing',
        },
        {
          title: '强制内容结构',
          href: '/examples/advanced/forced-content-structure',
        },
        {
          title: '交互式 React 与 Vue 视图',
          href: '/examples/advanced/interactive-react-and-vue-views',
        },
        {
          title: '检索增强生成',
          href: '/examples/advanced/retrieval-augmented-generation-rag',
        },
        {
          title: 'React 性能优化',
          href: '/examples/advanced/react-performance',
        },
        {
          title: '菜单定制',
          href: '/examples/advanced/menus',
        },
        {
          title: '提及功能',
          href: '/examples/advanced/mentions',
        },
        {
          title: '语法高亮',
          href: '/examples/advanced/syntax-highlighting',
        },
      ],
    },
    {
      type: 'group',
      href: '',
      title: '实验性功能',
      children: [
        {
          title: 'AI 助手',
          href: '/examples/experiments/ai-agent',
        },
        {
          title: '协作字段',
          href: '/examples/experiments/collaborative-fields',
        },
        {
          title: '图形组件',
          href: '/examples/experiments/figure',
        },
        {
          title: '通用图形',
          href: '/examples/experiments/generic-figure',
        },
        {
          title: 'iFrame 嵌入',
          href: '/examples/experiments/iframe',
        },
        {
          title: '内容检查',
          href: '/examples/experiments/linting',
        },
        {
          title: '斜杠命令',
          href: '/examples/experiments/slash-commands',
        },
        {
          title: '尾部节点',
          href: '/examples/experiments/trailing-node',
        },
      ],
    },
  ],
}
