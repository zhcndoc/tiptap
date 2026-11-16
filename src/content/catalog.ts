// The feature catalog: every page whose frontmatter has an `extension` block
// with a `group` appears in /editor/extensions/overview and, for editor
// groups, in the sidebar under Features. The order here is the
// order on the page and in the sidebar.

export type CatalogArea = 'editor' | 'platform'

export type CatalogGroup = {
  id: string
  title: string
  area: CatalogArea
}

/** A group of editor features that has its own page, `/editor/extensions/<id>`. */
export function catalogGroupUrl(group: CatalogGroup): string | undefined {
  return group.area === 'editor' && group.id !== 'kits'
    ? `/editor/extensions/${group.id}`
    : undefined
}

export const CATALOG_AREAS: Record<CatalogArea, string> = {
  editor: '编辑器',
  platform: '文档平台',
}

export const CATALOG_GROUPS: CatalogGroup[] = [
  // Paid products and paid editor groups first, as in the sidebar, then the open source editor's groups
  { id: 'ai', title: 'AI', area: 'platform' },
  { id: 'review', title: '审阅', area: 'platform' },
  { id: 'compare', title: '文档比较', area: 'platform' },
  { id: 'conversion', title: '格式转换', area: 'platform' },
  { id: 'composable-docs', title: '可组合文档', area: 'platform' },
  // Its entry comes from the overview's frontmatter, which the tiptap-pro docs sync writes
  { id: 'diagrams', title: 'Diagrams', area: 'platform' },
  { id: 'page-layout', title: '页面', area: 'platform' },
  { id: 'whiteboard', title: '白板', area: 'platform' },
  { id: 'kits', title: 'StarterKit', area: 'editor' },
  { id: 'text-formatting', title: '文本格式', area: 'editor' },
  { id: 'text-styling', title: '文本样式', area: 'editor' },
  { id: 'text-blocks', title: '文本块', area: 'editor' },
  { id: 'lists', title: '列表', area: 'editor' },
  { id: 'tables', title: '表格', area: 'editor' },
  { id: 'code-and-math', title: '代码和数学公式', area: 'editor' },
  { id: 'media', title: '媒体和嵌入内容', area: 'editor' },
  { id: 'mentions-and-emoji', title: '提及和表情符号', area: 'editor' },
  { id: 'menus', title: '菜单和拖动手柄', area: 'editor' },
  { id: 'cursor-and-selection', title: '光标和选区', area: 'editor' },
  { id: 'writing-helpers', title: '写作辅助', area: 'editor' },
  { id: 'document-helpers', title: '文档辅助', area: 'editor' },
  { id: 'clipboard-and-files', title: '剪贴板和文件', area: 'editor' },
  { id: 'collaboration', title: '实时协作', area: 'editor' },
  // Snapshots belong to the Document Server, under Platform in the sidebar
  { id: 'documents', title: '文档', area: 'platform' },
]

/** Plans in the order the filter shows them. A page's plan comes from its tags. */
export const CATALOG_PLANS = ['Open source', 'Start', 'Team', 'Add-on', 'Pilot program'] as const

export type CatalogPlan = (typeof CATALOG_PLANS)[number]

// The catalog cards and the plan filter name the plans as the page header does
export { PLAN_LABELS } from './plans'

/** The statuses to filter by; Stable is a released feature without a status. */
export const CATALOG_STATUSES = ['Stable', 'Beta', 'Alpha', 'Experimental', 'Deprecated'] as const
