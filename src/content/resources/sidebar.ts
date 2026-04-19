import fs from 'fs'
import path from 'path'
import { SidebarConfig } from '@/types'

function isSidebarItem(value: unknown): value is { href: string; title: string } {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  const item = value as Record<string, unknown>

  return (
    typeof item.href === 'string' &&
    typeof item.title === 'string'
  )
}

function loadChangelogSidebarItems(): Array<{ href: string; title: string }> {
  try {
    const filePath = path.join(
      process.cwd(),
      'src/content/resources/changelog/_data/sidebar-items.json',
    )
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    return Array.isArray(data) ? data.filter(isSidebarItem) : []
  } catch {
    return []
  }
}

const changelogChildren = loadChangelogSidebarItems()

export const sidebarConfig: SidebarConfig = {
  id: 'all-docs',
  rootHref: '/',
  title: '首页',
  items: [
    {
      type: 'group',
      title: '入门',
      href: '/getting-started',
      children: [
        {
          href: '/',
          title: '概述',
        },
        {
          href: '/resources/whats-new',
          title: '3.0 有哪些新功能',
        },
      ],
    },
    {
      type: 'group',
      title: '按功能浏览',
      href: '/suite-docs',
      children: [
        {
          href: '/editor/getting-started/overview',
          title: '编辑器',
        },
        {
          href: '/collaboration/getting-started/overview',
          title: '协作',
        },
        {
          href: '/comments/getting-started/overview',
          title: '评论',
        },
        {
          href: '/tracked-changes/getting-started/overview',
          title: '修订记录',
        },
        {
          href: '/content-ai/getting-started/overview',
          title: '内容 AI',
        },
        {
          href: '/collaboration/documents/snapshot',
          title: '快照',
        },
        {
          href: '/conversion/getting-started/overview',
          title: '转换',
        },
        {
          href: '/pages/getting-started/overview',
          title: '页面',
        },
      ],
    },
    {
      type: 'group',
      title: '资源',
      href: '/',
      children: [
        {
          href: '/guides',
          title: '指南',
        },
        {
          href: '/examples',
          title: '示例',
        },
        {
          href: '/resources/agent-skill',
          title: '代理技能',
        },
        {
          href: '/resources/tiptap-trial',
          title: 'Tiptap 试用',
        },
        {
          href: '/resources/contributing',
          title: '贡献',
        },
        {
          href: '/resources/changelog',
          title: '编辑器更新日志',
          children: changelogChildren,
        },
        {
          href: '/resources/incidents',
          title: '事件',
        },
        {
          href: 'https://tiptap.dev/pro-license',
          title: '专业版许可证',
        },
      ],
    },
  ],
}
