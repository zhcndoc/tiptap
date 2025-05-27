'use client'

import { usePathname } from 'next/navigation'
import { Button } from './Button'
import Link from '@/components/Link'
import { PageMeta } from '@/types'
// import { getRepoBase } from '@/utils'

export const PageEditStatus = ({
  allMeta,
}: {
  allMeta: Record<string, PageMeta & { path: string }>
}) => {
  const pathname = usePathname()
  const meta =
    pathname !== '/'
      ? allMeta[`${pathname}.mdx`] || allMeta[`${pathname}/index.mdx`]
      : allMeta['/index.mdx']

  if (!meta?.path) {
    return null
  }

  return (
    <>
      <Button asChild variant="secondary">
        <Link
          href={`https://github.com/zhcndoc/tiptap/blob/main/src/content/${meta.path}`}
          target="_blank"
          rel="nofollow noreferrer"
        >
          在 GitHub 上编辑此页面
        </Link>
      </Button>
    </>
  )
}
