import type { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'composable-docs',
  title: '可组合文档',
  rootHref: '/composable-docs/slots/getting-started/overview',
  items: [
    {
      type: 'group',
      title: 'Slots',
      href: '/composable-docs/slots',
      children: [
        { title: '概述', href: '/composable-docs/slots/getting-started/overview' },
        {
          title: '指南',
          href: '/composable-docs/slots/guides/add-slots',
          children: [
            {
              title: '向文档添加 Slot',
              href: '/composable-docs/slots/guides/add-slots',
            },
            { title: '仅允许填写', href: '/composable-docs/slots/guides/fill-only' },
            {
              title: '验证 Slot 值',
              href: '/composable-docs/slots/guides/validate-submission',
            },
          ],
        },
        {
          title: '示例',
          href: '/composable-docs/slots/examples/table-fields',
          children: [
            { title: '表格字段示例', href: '/composable-docs/slots/examples/table-fields' },
          ],
        },
        {
          title: 'API 参考',
          href: '/composable-docs/slots/api-reference/extension',
          children: [
            {
              title: '扩展',
              href: '/composable-docs/slots/api-reference/extension',
            },
            { title: '命令', href: '/composable-docs/slots/api-reference/commands' },
            { title: '验证', href: '/composable-docs/slots/api-reference/validation' },
            { title: '工具', href: '/composable-docs/slots/api-reference/utilities' },
            { title: '类型', href: '/composable-docs/slots/api-reference/types' },
            { title: '配置', href: '/composable-docs/slots/api-reference/concepts' },
            {
              title: '渲染和 NodeView',
              href: '/composable-docs/slots/api-reference/rendering',
            },
            { title: '编辑器事件', href: '/composable-docs/slots/api-reference/events' },
          ],
        },
      ],
    },
    {
      type: 'group',
      title: '内容保护',
      href: '/composable-docs/content-protection',
      children: [
        { title: '概述', href: '/composable-docs/content-protection/getting-started/overview' },
        {
          title: '指南',
          href: '/composable-docs/content-protection/guides/example-policies',
          children: [
            {
              title: '策略示例',
              href: '/composable-docs/content-protection/guides/example-policies',
            },
            {
              title: '锁定选中的内容',
              href: '/composable-docs/content-protection/guides/lock-selected-content',
            },
          ],
        },
        {
          title: 'API 参考',
          href: '/composable-docs/content-protection/api-reference/extension',
          children: [
            {
              title: '扩展',
              href: '/composable-docs/content-protection/api-reference/extension',
            },
            {
              title: '命令',
              href: '/composable-docs/content-protection/api-reference/commands',
            },
            {
              title: '工具',
              href: '/composable-docs/content-protection/api-reference/utilities',
            },
            { title: '类型', href: '/composable-docs/content-protection/api-reference/types' },
            {
              title: '策略语言',
              href: '/composable-docs/content-protection/api-reference/policy',
            },
            {
              title: '已隐藏内容',
              href: '/composable-docs/content-protection/api-reference/rendering',
            },
          ],
        },
      ],
    },
  ],
}
