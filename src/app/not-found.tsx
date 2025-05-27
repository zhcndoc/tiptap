import { ArrowRightIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from '@/components/Link'
import { Layout } from '@/components/layouts/Layout'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '未找到 | Tiptap 文档',
}

export default async function NotFoundPage() {
  return (
    <>
      <Layout.CTA />
      <Layout.Header />
      <Layout.Wrapper>
        <Layout.Content className="mx-auto">
          <div className="h-[50vh] flex flex-col justify-center max-w-[46rem]">
            <div className="text-purple-500 leading-[110%] text-sm font-semibold mb-3">404</div>
            <h1 className="text-3xl lg:text-5xl leading-none font-bold">Phew, you found it.</h1>
            <p className="mt-8 text-sm lg:text-[1.125rem] leading-[1.6]">
              你来到这里，寻找某样东西，结果只得到了我们的404页面。你要找的页面不再这里。也许它根本就不在这里。无论如何，我们对你被送上这场无意义的追逐感到抱歉。
            </p>
            <div className="flex items-center mt-8">
              <Button asChild>
                <Link href="/">
                  返回概览
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Layout.Content>
      </Layout.Wrapper>
    </>
  )
}
