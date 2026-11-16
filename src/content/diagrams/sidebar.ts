import type { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'diagrams',
  rootHref: '/diagrams/getting-started/overview',
  title: '图表',
  items: [
    {
      type: 'group',
      href: '/diagrams/getting-started/overview',
      title: '图表',
      tags: ['Alpha'],
      children: [
        { title: '概述', href: '/diagrams/getting-started/overview' },
        { title: '安装', href: '/diagrams/getting-started/install' },
        {
          title: '图表',
          href: '/diagrams/charts/overview',
          children: [
            { title: '外观', href: '/diagrams/charts/appearance' },
            { title: '视觉风格', href: '/diagrams/charts/looks' },
            { title: '在图表中编辑', href: '/diagrams/charts/editing' },
            { title: '坐标轴', href: '/diagrams/charts/axes' },
            { title: '参考线', href: '/diagrams/charts/references' },
          ],
        },
        {
          title: '流程图',
          href: '/diagrams/flow-diagrams/overview',
          children: [
            { title: '格式', href: '/diagrams/flow-diagrams/formats' },
            { title: '在流程图中编辑', href: '/diagrams/flow-diagrams/editing' },
            { title: '从表格创建流程图', href: '/diagrams/flow-diagrams/from-table' },
          ],
        },
        {
          title: '数据',
          href: '/diagrams/data/overview',
          children: [
            {
              title: '快速输入',
              href: '/diagrams/data/quick-input',
              children: [{ title: '图表语法', href: '/diagrams/data/chart-syntax' }],
            },
            { title: '粘贴', href: '/diagrams/data/pasting' },
            { title: '表格', href: '/diagrams/data/tables' },
            { title: '数据源', href: '/diagrams/data/sources' },
          ],
        },
        {
          title: '渲染器',
          href: '/diagrams/renderers/overview',
          children: [
            { title: 'ECharts', href: '/diagrams/renderers/echarts' },
            { title: 'D3', href: '/diagrams/renderers/d3' },
            { title: 'Mermaid', href: '/diagrams/renderers/mermaid' },
            { title: 'draw.io', href: '/diagrams/renderers/drawio' },
            { title: 'BPMN', href: '/diagrams/renderers/bpmn' },
            { title: 'Pele', href: '/diagrams/renderers/pele' },
            {
              title: '自定义渲染器',
              href: '/diagrams/renderers/custom',
              children: [
                { title: '在画布上绘制', href: '/diagrams/renderers/custom-canvas' },
                { title: '自定义图表类型', href: '/diagrams/renderers/custom-chart-types' },
                { title: '自定义图表渲染器', href: '/diagrams/renderers/custom-diagrams' },
              ],
            },
          ],
        },
        { title: '导出', href: '/diagrams/export' },
        {
          title: '指南',
          href: '',
          children: [
            {
              title: 'Google Sheets、Excel 和 Airtable',
              href: '/diagrams/guides/spreadsheets',
            },
            { title: '协作', href: '/diagrams/guides/collaboration' },
            { title: '版本管理', href: '/diagrams/guides/versions' },
            { title: '供模型调用的工具', href: '/diagrams/guides/ai' },
            { title: '尺寸与视图', href: '/diagrams/guides/size-and-view' },
            { title: '图表旁的文本', href: '/diagrams/guides/split-view' },
            { title: '样式', href: '/diagrams/guides/styling' },
          ],
        },
        {
          title: 'API 参考',
          href: '',
          children: [
            { title: '选项', href: '/diagrams/api-reference/options' },
            { title: '命令', href: '/diagrams/api-reference/commands' },
            { title: '存储', href: '/diagrams/api-reference/storage' },
            { title: '选择器', href: '/diagrams/api-reference/selectors' },
          ],
        },
      ],
    },
  ],
}
