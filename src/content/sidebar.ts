import { sidebarConfig as aiAssistantSidebar } from './ai/deprecated/agent/sidebar'
import { sidebarConfig as aiChangesSidebar } from './ai/deprecated/changes/sidebar'
import { sidebarConfig as aiSuggestionSidebar } from './ai/deprecated/suggestion/sidebar'
import { sidebarConfig as aiSidebar } from './ai/sidebar'
import { sidebarConfig as collaborationSidebar } from './collaboration/sidebar'
import { sidebarConfig as commentsSidebar } from './comments/sidebar'
import { sidebarConfig as compareSidebar } from './compare/sidebar'
import { sidebarConfig as composableDocsSidebar } from './composable-docs/sidebar'
import { sidebarConfig as conversionSidebar } from './conversion/sidebar'
import { sidebarConfig as diagramsSidebar } from './diagrams/sidebar'
import { sidebarConfig as editorSidebar } from './editor/sidebar'
import { sidebarConfig as examplesSidebar } from './examples/sidebar'
import { sidebarConfig as guidesSidebar } from './guides/sidebar'
import { sidebarConfig as hocuspocusSidebar } from './hocuspocus/sidebar'
import { sidebarConfig as pagesSidebar } from './pages/sidebar'
import { sidebarConfig as resourcesSidebar } from './resources/sidebar'
import { sidebarConfig as trackedChangesSidebar } from './tracked-changes/sidebar'
import { CATALOG_GROUPS, CatalogArea, catalogGroupUrl } from '@/content/catalog'
import { planFromLabel } from '@/content/plans'
import { getCatalog } from '@/server/getCatalog'
import { pageLabels } from '@/server/pageLabels'
import { SidebarConfig, SidebarGroup } from '@/types'
import { SidebarEntry, childrenOf, pick, section, toEntries } from '@/utils/composeSidebar'

// The one sidebar for all documentation. Each section keeps its own sidebar
// next to its content; this file decides where the sections sit. UI Components
// keeps a separate sidebar (src/content/ui-components/sidebar.ts).

/** One entry of a section sidebar, by its path of titles. */
function link(config: SidebarConfig, titles: string[]): SidebarEntry {
  return toEntries([pick(config, titles)])[0]
}

/** The catalog groups of an area, each folding open to its features. */
function catalogGroups(area: CatalogArea): SidebarEntry[] {
  const catalog = getCatalog()
  return (
    CATALOG_GROUPS.filter((group) => group.area === area)
      .map((group) => ({
        title: group.title,
        href: catalogGroupUrl(group) ?? '',
        children: catalog
          .filter((entry) => entry.group === group.id)
          .map((entry) => ({ title: entry.name, href: entry.url, tags: catalogTags(entry) })),
      }))
      .filter((group) => group.children.length > 0)
      // A group of one is just that entry
      .map((group) => (group.children.length === 1 ? group.children[0] : group))
  )
}

/** A feature's status and plan as sidebar tags; the sidebar shows only the label that matters. */
function catalogTags(entry: { plan?: string; status?: string }): string[] | undefined {
  const tags = [entry.status, entry.plan !== 'Open source' ? entry.plan : undefined].filter(
    (tag): tag is string => !!tag,
  )
  return tags.length ? tags : undefined
}

/**
 * A feature's plan and status as sidebar tags, from the frontmatter of its overview
 * page, so the feature's pages inherit both. The sidebar itself shows no Alpha or Beta.
 */
function featureTags(overview: string): string[] | undefined {
  const { plan, status } = pageLabels(overview)
  const tags: string[] = []
  if (plan && plan !== 'Open source') tags.push(plan)
  if (status) tags.push(status)
  return tags.length ? tags : undefined
}

/** A section as one feature entry, tagged with its plan and status. */
function feature(
  title: string,
  config: SidebarConfig,
  overview: string,
  options: Parameters<typeof section>[2] = {},
): SidebarEntry {
  return section(title, config, { ...options, tags: featureTags(overview) })
}

const isPaidPlan = (tag: string) => {
  const plan = planFromLabel(tag)
  return !!plan && plan !== 'Open source'
}
const isPaid = (tags?: string[]) => !!tags?.some((tag) => tag === 'Paid' || isPaidPlan(tag))

/**
 * An entry whose children all need a paid plan, whichever, says "Paid"; a group
 * that mixes paid and open source says nothing. The tag is for the label only:
 * page headers still take the plan from the pages and their features.
 */
function withSharedPlan(entry: SidebarEntry): SidebarEntry {
  if (!entry.children?.length) return entry
  const children = entry.children.map(withSharedPlan)
  const allPaid = children.every((child) => isPaid(child.tags))
  return isPaid(entry.tags) || !allPaid
    ? { ...entry, children }
    : { ...entry, tags: [...(entry.tags ?? []), 'Paid'], children }
}

/** Below a paid entry, its pages don't repeat the label: they share it. */
function labelWhereItDiffers(entries: SidebarEntry[], underPaid = false): SidebarEntry[] {
  return entries.map((entry) => {
    const paid = isPaid(entry.tags)
    return {
      ...entry,
      hidePlan: underPaid && paid ? true : undefined,
      children: entry.children && labelWhereItDiffers(entry.children, underPaid || paid),
    }
  })
}

/** Plan labels in a sidebar group: shared plans move up, repeated ones go. */
function planLabels(group: SidebarGroup): SidebarGroup {
  return { ...group, children: labelWhereItDiffers(group.children.map(withSharedPlan)) }
}

const compare = feature('Compare', compareSidebar, '/compare/getting-started/overview', {
  inline: ['开始使用'],
})

const legacyOptions = { inline: ['开始使用'], omit: ['← Back to Content AI'] }

// Guides and Examples have their own areas; the trial sits under Getting started
const elsewhere = ['/guides', '/examples', '/resources/tiptap-trial']

const items: SidebarGroup[] = [
  {
    type: 'group',
    title: '入门',
    href: '/getting-started',
    collapsible: true,
    defaultOpen: true,
    children: [
      { href: '/', title: '概述' },
      { ...link(editorSidebar, ['开始使用', '概述']), title: 'Tiptap 编辑器' },
      { ...link(editorSidebar, ['开始使用', '安装']), title: '快速开始' },
      {
        href: '/authentication',
        title: '身份验证',
        newSince: '2026-04-29',
        children: [
          { href: '/authentication/migrate', title: '从旧版迁移' },
          { href: '/authentication/legacy', title: '旧版身份验证' },
        ],
      },
      { ...link(guidesSidebar, ['入门指南', '集成专业扩展']), title: 'Pro 扩展访问' },
      { href: '/resources/tiptap-trial', title: 'Tiptap 试用' },
      { href: '/resources/whats-new', title: '3.0 新版特性' },
    ],
  },
  {
    type: 'group',
    title: '功能',
    href: '/features',
    collapsible: true,
    defaultOpen: true,
    divider: true,
    children: [
      { ...link(editorSidebar, ['扩展', '概述']), title: '全部功能' },
      // The products of the Tiptap Platform first, then the editor's extensions
      {
        title: 'AI',
        href: '',
        children: [
          { ...link(aiSidebar, ['AI Toolkit']), href: '' },
          ...childrenOf(aiSidebar, ['Other Options']),
          {
            title: '旧版 AI',
            href: '',
            // Paid like the rest of AI; the label says Deprecated
            tags: ['Deprecated', 'Paid'],
            children: [
              section('AI Assistant', aiAssistantSidebar, legacyOptions),
              section('AI Suggestion', aiSuggestionSidebar, legacyOptions),
              section('AI Changes', aiChangesSidebar, { ...legacyOptions, inline: ['开始使用'] }),
            ],
          },
        ],
      },
      {
        title: '审阅',
        href: '',
        children: [
          feature('Comments', commentsSidebar, '/comments/getting-started/overview', {
            inline: ['开始使用'],
          }),
          feature(
            'Tracked Changes',
            trackedChangesSidebar,
            '/tracked-changes/getting-started/overview',
            {
              inline: ['快速上手'],
              // Links to Conversion pages, which have their place there
              omit: ['DOCX conversion'],
            },
          ),
        ],
      },
      {
        ...compare,
        children: [
          ...compare.children!,
          {
            ...link(collaborationSidebar, ['文档', '比较快照']),
            title: '比较快照',
          },
        ],
      },
      feature('Conversion', conversionSidebar, '/conversion/getting-started/overview', {
        inline: ['开始使用'],
      }),
      feature(
        'Composable Docs',
        composableDocsSidebar,
        '/composable-docs/slots/getting-started/overview',
      ),
      feature('Diagrams', diagramsSidebar, '/diagrams/getting-started/overview', {
        inline: ['图表'],
      }),
      feature('Pages', pagesSidebar, '/pages/getting-started/overview', {
        inline: ['入门'],
      }),
      {
        ...link(editorSidebar, ['白板']),
        href: '',
        tags: featureTags('/editor/whiteboard/getting-started/overview'),
        // The AI agent guide has its place in the AI Toolkit
        children: childrenOf(editorSidebar, ['白板']).filter(
          (entry) => entry.href !== '/ai/ai-toolkit/agents/whiteboard',
        ),
      },
      ...catalogGroups('editor'),
      ...toEntries([pick(editorSidebar, ['Markdown'])]),
    ],
  },
  {
    // Where documents live, sync, and run: the base the features of the platform build on
    type: 'group',
    title: '文档',
    href: '/documents',
    collapsible: true,
    children: [
      ...childrenOf(collaborationSidebar, ['开始使用']),
      {
        title: '文档 API',
        href: '',
        children: [
          { ...link(collaborationSidebar, ['文档', '概述']), title: '概述' },
          link(collaborationSidebar, ['文档', 'REST API']),
          link(collaborationSidebar, ['文档', '注入内容']),
        ],
      },
      link(collaborationSidebar, ['文档', '快照']),
      {
        title: '实时同步',
        href: '',
        children: [
          { ...link(collaborationSidebar, ['提供商', '集成']), title: '提供商' },
          { ...link(collaborationSidebar, ['提供商', '事件']), title: '提供商事件' },
          link(collaborationSidebar, ['特性', '感知']),
        ],
      },
      link(collaborationSidebar, ['特性', 'Webhook']),
      { title: '操作', href: '', children: childrenOf(collaborationSidebar, ['操作']) },
      section('Hocuspocus', hocuspocusSidebar, {
        inline: ['开始使用'],
        tags: ['Open source'],
      }),
    ],
  },
  {
    type: 'group',
    title: '概念',
    href: '/concepts',
    collapsible: true,
    children: [
      ...childrenOf(editorSidebar, ['核心概念']).slice(0, 1),
      link(editorSidebar, ['开始使用', '配置']),
      link(editorSidebar, ['开始使用', '样式']),
      ...childrenOf(editorSidebar, ['核心概念']).slice(1),
    ],
  },
  {
    type: 'group',
    title: '自定义扩展',
    href: '/custom-extensions',
    collapsible: true,
    children: [
      {
        ...link(editorSidebar, ['扩展', '自定义扩展']),
        title: '概述',
        children: undefined,
      },
      ...childrenOf(editorSidebar, ['扩展', '自定义扩展']),
    ],
  },
  {
    type: 'group',
    title: 'API 参考',
    href: '/api-reference',
    collapsible: true,
    children: childrenOf(editorSidebar, ['API 参考']),
  },
  {
    type: 'group',
    title: '指南',
    href: '/guides',
    collapsible: true,
    children: [
      { href: '/guides', title: '概述' },
      // Pro access sits under Getting started
      ...toEntries(guidesSidebar.items.filter((item) => item.title !== '入门指南')),
    ],
  },
  {
    type: 'group',
    title: '示例',
    href: '/examples',
    collapsible: true,
    children: [
      { href: '/examples', title: '概述' },
      ...toEntries(examplesSidebar.items.filter((item) => item.title !== '快速开始')),
    ],
  },
  {
    type: 'group',
    title: '资源',
    href: '/resources',
    collapsible: true,
    children: childrenOf(resourcesSidebar, ['资源']).filter(
      (entry) => !elsewhere.includes(entry.href),
    ),
  },
]

export const sidebarConfig: SidebarConfig = {
  id: 'all-docs',
  rootHref: '/',
  title: '首页',
  items: items.map(planLabels),
}
