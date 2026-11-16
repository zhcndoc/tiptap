'use client'

import { SearchIcon, XIcon } from 'lucide-react'
import { createElement, useMemo } from 'react'
import { Card } from './ui/Card'
import { Tag } from './ui/Tag'
import Link from '@/components/Link'
import {
  CATALOG_GROUPS,
  CATALOG_PLANS,
  CATALOG_STATUSES,
  PLAN_LABELS,
  catalogGroupUrl,
} from '@/content/catalog'
import { INDUSTRIES } from '@/content/industries'
import { useUrlParam } from '@/hooks/useUrlParam'
import { MultiSelect, useListParam } from '@/components/FilterControls.client'
import type { CatalogEntry } from '@/server/getCatalog'
import { getIcon } from '@/utils/iconKit'

const END_OF_LIFE = ['Deprecated']
const STATUS_LABELS: Record<string, string> = {
  Stable: '稳定版',
  Beta: 'Beta',
  Alpha: 'Alpha',
  Experimental: '实验性',
  Deprecated: '已弃用',
}

function CatalogCard({ entry }: { entry: CatalogEntry }) {
  // Icons come by name from the frontmatter
  const icon = createElement(getIcon(entry.icon), { className: 'w-3.5 h-3.5', 'aria-hidden': true })
  return (
    <Card isClickable asChild>
      <Link href={entry.url} className="flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-5">{icon}</div>
        <div className="font-semibold text-black leading-[140%]">{entry.name}</div>
        <div className="mt-2 text-sm leading-[140%] text-grayAlpha-600">{entry.description}</div>
        {entry.plan || entry.status ? (
          // Plan first, then status, as in the page header
          // The labels sit at the bottom, whatever the length of the description
          <div className="mt-auto pt-5 flex items-center flex-wrap gap-1">
            {entry.plan ? (
              <Tag
                variant={entry.plan === 'Open source' ? 'gray' : 'info'}
                tooltip={PLAN_LABELS[entry.plan].tooltip}
              >
                {PLAN_LABELS[entry.plan].label}
              </Tag>
            ) : null}
            {entry.status ? (
              <Tag variant={END_OF_LIFE.includes(entry.status) ? 'hint' : 'gray'}>
                {STATUS_LABELS[entry.status] ?? entry.status}
              </Tag>
            ) : null}
          </div>
        ) : null}
      </Link>
    </Card>
  )
}

/** The cards of some features, such as one group on its own page. */
export const CatalogCards = ({ entries }: { entries: CatalogEntry[] }) => (
  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 xl:gap-5">
    {entries.map((entry) => (
      <CatalogCard entry={entry} key={entry.url} />
    ))}
  </div>
)

/** Every feature, filterable by plan, status, industry and text, grouped like the sidebar. */
export const FeatureCatalogGrid = ({ entries }: { entries: CatalogEntry[] }) => {
  const [query, setQuery] = useUrlParam('search', '')
  const [plans, setPlans] = useListParam('plan')
  const [industries, setIndustries] = useListParam('industry')
  const [statuses, setStatuses] = useListParam('status')
  const isFiltered = !!query || plans.length + industries.length + statuses.length > 0

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return entries.filter(
      (entry) =>
        (plans.length === 0 || (!!entry.plan && plans.includes(entry.plan))) &&
        (statuses.length === 0 || statuses.includes(entry.status ?? 'Stable')) &&
        (industries.length === 0 ||
          (entry.industries ?? []).some((industry) => industries.includes(industry))) &&
        (!needle ||
          entry.name.toLowerCase().includes(needle) ||
          entry.description.toLowerCase().includes(needle)),
    )
  }, [entries, query, plans, industries, statuses])

  // One list of groups, in the order the sidebar shows them
  const groups = CATALOG_GROUPS.map((group) => ({
    group,
    items: visible.filter((entry) => entry.group === group.id),
  })).filter(({ items }) => items.length > 0)

  const reset = () => {
    setQuery('')
    setPlans([])
    setIndustries([])
    setStatuses([])
  }

  return (
    <div className="grid gap-8">
      {/* Stays in view while scrolling, so the filters can change at any point */}
      <div
        role="search"
        aria-label="筛选功能"
        className="sticky top-[var(--catalog-sticky-top)] z-20 -mx-3 px-3 py-2 sm:py-3 [--catalog-sticky-top:6.6875rem] lg:[--catalog-sticky-top:3.875rem] bg-warmGray/95 backdrop-blur border-b border-grayAlpha-100"
      >
        <div className="flex flex-wrap items-center gap-2">
          <label className="order-1 flex-1 min-w-[10rem] sm:flex-none sm:order-none flex items-center h-9 px-2.5 gap-2 bg-white sm:w-64 rounded-lg border border-neutral-300 focus-within:border-neutral-700">
            <SearchIcon className="w-4 h-4 text-neutral-500" aria-hidden="true" />
            <input
              type="text"
              className="w-full outline-none text-sm"
              placeholder="搜索功能..."
              aria-label="搜索功能"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query ? (
              <button
                type="button"
                className="p-0.5 rounded hover:bg-neutral-100"
                onClick={() => setQuery('')}
                aria-label="清除搜索"
              >
                <XIcon className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            ) : null}
          </label>
          <div className="order-3 sm:order-none flex flex-wrap gap-2">
            <MultiSelect
              label="计划"
              options={CATALOG_PLANS.map((id) => ({ id, label: PLAN_LABELS[id].label }))}
              values={plans}
              onChange={setPlans}
            />
            <MultiSelect
              label="状态"
              options={CATALOG_STATUSES.map((id) => ({ id, label: STATUS_LABELS[id] ?? id }))}
              values={statuses}
              onChange={setStatuses}
            />
            <MultiSelect
              label="行业"
              options={INDUSTRIES.map(({ id, title }) => ({ id, label: title }))}
              values={industries}
              onChange={setIndustries}
            />
          </div>
          <div className="order-2 sm:order-none flex items-center gap-2 ml-auto text-sm text-grayAlpha-600">
            <span aria-live="polite" className="sr-only sm:not-sr-only">
              共 {visible.length} 项功能
            </span>
            {isFiltered ? (
              <button
                type="button"
                onClick={reset}
                className="px-2 py-1 rounded-md text-black hover:bg-grayAlpha-100"
              >
                重置
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {groups.length === 0 ? (
        <div className="text-neutral-700">
          没有符合条件的功能
          {query ? <span className="font-semibold">“{query}”</span> : '，请调整筛选条件'}。
        </div>
      ) : null}

      {groups.map(({ group, items }) => (
        <section key={group.id} aria-label={group.title}>
          <h2
            id={group.id}
            className="text-[1.5rem] font-bold leading-[120%] mb-6 scroll-mt-[calc(var(--catalog-sticky-top,4.25rem)+5rem)]"
          >
            {catalogGroupUrl(group) ? (
              <Link href={catalogGroupUrl(group)!} className="hover:underline">
                {group.title}
              </Link>
            ) : (
              group.title
            )}
          </h2>
          <CatalogCards entries={items} />
        </section>
      ))}
    </div>
  )
}
