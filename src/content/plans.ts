// What a page needs, and how far along it is, named the same way in the sidebar
// and the page header. A page's plan and status come from its frontmatter tags.

/** Plans in the order readers compare them. */
export const PLANS = [
  'Open source',
  'Start',
  'Team',
  'Business',
  'Add-on',
  'Pilot program',
] as const

export type Plan = (typeof PLANS)[number]

/** How the page header names each plan, and what its tooltip says. */
export const PLAN_LABELS: Record<Plan, { label: string; tooltip: string }> = {
  'Open source': { label: '开源', tooltip: '基于 MIT 许可证发布，可免费使用。' },
  Start: { label: 'Start 计划', tooltip: '包含在 Start、Team、Business 和 Enterprise 计划中。' },
  Team: { label: 'Team 计划', tooltip: '包含在 Team、Business 和 Enterprise 计划中。' },
  Business: { label: 'Business 计划', tooltip: '包含在 Business 和 Enterprise 计划中。' },
  'Add-on': { label: '付费附加项', tooltip: '需添加到付费计划中。' },
  'Pilot program': {
    label: '试点计划',
    tooltip: '联系我们的团队，申请加入试点计划。',
  },
}

/** Statuses a feature passes on to its pages. */
export const STATUSES = ['Deprecated', 'Alpha', 'Beta'] as const

export type Status = (typeof STATUSES)[number]

/** The plan that frontmatter tag types name, if any. */
export function planFromTags(types: string[]): Plan | undefined {
  if (types.includes('restricted')) return 'Pilot program'
  if (types.includes('addon')) return 'Add-on'
  if (types.includes('business')) return 'Business'
  if (types.includes('team')) return 'Team'
  if (types.some((type) => ['start', 'beginStart', 'starter'].includes(type))) return 'Start'
  if (types.includes('mit') || types.includes('pro')) return 'Open source'
  return undefined
}

/** The status that frontmatter tag types name, if any. */
export function statusFromTags(types: string[]): Status | undefined {
  return STATUSES.find((status) => types.includes(status.toLowerCase()))
}

/** The plan a sidebar tag names, such as `Add-on`, or `Starter` for Start. */
export function planFromLabel(tag: string): Plan | undefined {
  if (tag.toLowerCase() === 'starter') return 'Start'
  return PLANS.find((plan) => plan.toLowerCase() === tag.toLowerCase())
}

/** The status a sidebar tag names, such as `beta` or `Deprecated`. */
export function statusFromLabel(tag: string): Status | undefined {
  return STATUSES.find((status) => status.toLowerCase() === tag.toLowerCase())
}
