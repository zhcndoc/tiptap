import { forwardRef } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { PageEditStatus } from '../ui/PageEditStatus'
import PageHelpFeedback from '../PageHelpFeedback'
import { TiptapLogo } from '../TiptapLogo'
import { ProductDropdown } from '../ProductDropdown'
import { NavLink } from '../NavLink'
import { SearchButton } from '../SearchButton'
import { ToCButton } from '../ToCButton'
import { MobileTableOfContent } from '../MobileTableOfContent'
import { MobileSidebarNavigation } from '../MobileSidebarNavigation'
import { MobileNavigationButton } from '../MobileNavigationButton'
import { DocsSidebar } from '../SidebarRenderer'
import { MobileNavigationDropdown } from '../MobileNavigationDropdown'
import { SidebarTableOfContent } from '../SidebarTableOfContent'
// import { VersionSwitch } from '../VersionSwitch'
import Link from '@/components/Link'
import { cn } from '@/utils'
import { getAllMetadata } from '@/server/getAllMetadata'
import { SidebarConfig } from '@/types'
import { CTA_BAR } from '@/utils/constants'

const PageEditFooter = async () => {
  const allMeta = await getAllMetadata()

  return (
    <>
      <PageEditStatus allMeta={allMeta} />
    </>
  )
}

export const LayoutCTABar = () => {
  if (!CTA_BAR) {
    return null
  }

  const target = CTA_BAR.url.startsWith('/') ? '' : '_blank'

  return (
    <Link
      href={CTA_BAR.url}
      target={target}
      className="flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-purple-800 group"
    >
      <span className="leading-none">{CTA_BAR.text}</span>
      <ArrowRightIcon className="transition size-4 group-hover:translate-x-1" />
    </Link>
  )
}

export const LayoutHeader = forwardRef<HTMLDivElement, { config?: SidebarConfig }>(
  ({ config, ...rest }, ref) => {
    return (
      <header ref={ref} {...rest} className="container sticky top-0 w-full py-1.5 z-50">
        <div className="bg-white h-14 shadow-slim rounded-tl-pilled rounded-tr-pilled lg:rounded-pilled px-[1.125rem] py-3 flex items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-deco text-lg flex items-center gap-2.5 pr-2.5">
              <TiptapLogo />
              <span>
                <span className="font-semibold">Tiptap 中文文档</span>
              </span>
            </Link>
            {/* <VersionSwitch /> */}
            <span className="hidden select-none lg:block text-black/15">/</span>
            <nav className="hidden lg:flex items-center gap-[0.5px]">
              <ProductDropdown />
              <NavLink href="/guides">指南</NavLink>
              <NavLink href="/examples">示例</NavLink>
              <NavLink href="/ui-components/getting-started/overview">UI 组件</NavLink>
              <NavLink href="https://www.zhcndoc.com" target="_blank">
                简中文档
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <div className="hidden xl:block">
              <SearchButton />
            </div>
            <div className="items-center hidden gap-1 lg:flex xl:hidden">
              <ToCButton />
              <SearchButton />
            </div>
            <div className="block lg:hidden">
              <MobileNavigationDropdown />
            </div>
            {/* <div className="hidden lg:block">
              <NavLink
                variant="invert"
                href="https://cloud.tiptap.dev/register"
                target="_blank"
                hideIcon
              >
                Sign up
              </NavLink>
            </div> */}
          </div>
        </div>
        <div className="block lg:hidden py-1.5 bg-white px-[1.125rem] shadow-slim rounded-bl-pilled rounded-br-pilled border-t border-neutral-200">
          <div className="flex items-center h-8 py-1">
            <div className="flex items-center gap-2 mr-auto">
              <MobileNavigationButton config={config} />
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <ToCButton />
              <SearchButton />
            </div>
          </div>
        </div>
      </header>
    )
  },
)

LayoutHeader.displayName = 'LayoutHeader'

export type LayoutWrapperProps = {} & React.HTMLAttributes<HTMLDivElement>

const LayoutWrapper = forwardRef<HTMLDivElement, LayoutWrapperProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        {...rest}
        className={cn('container relative flex items-start lg:gap-8 gap-[4.5rem]', className)}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)

LayoutWrapper.displayName = 'LayoutWrapper'

export type LayoutSidebarProps = {
  config: SidebarConfig
} & React.HTMLAttributes<HTMLDivElement>

const LayoutSidebar = forwardRef<HTMLDivElement, LayoutSidebarProps>(
  ({ config, children, className, ...rest }, ref) => {
    return (
      <>
        <MobileSidebarNavigation config={config} />
        <div
          {...rest}
          className={cn(
            'hidden lg:block flex-none sticky top-[4.25rem] px-2 pt-6 pb-12 self-start w-[16.25rem] h-[calc(100vh-4.75rem)] overflow-auto overscroll-contain',
            className,
          )}
          ref={ref}
        >
          <DocsSidebar config={config} />
          {children}
        </div>
      </>
    )
  },
)

LayoutSidebar.displayName = 'LayoutSidebar'

export type LayoutSecondarySidebarProps = {} & React.HTMLAttributes<HTMLDivElement>

const LayoutSecondarySidebar = forwardRef<HTMLDivElement, LayoutSecondarySidebarProps>(
  ({ className, ...rest }, ref) => {
    return (
      <>
        <MobileTableOfContent />
        <div
          {...rest}
          className={cn(
            'hidden xl:block flex-none self-start sticky px-3 py-6 top-[4.25rem] w-[16.25rem] h-[calc(100vh-4.75rem)] overflow-auto overscroll-contain',
            className,
          )}
          ref={ref}
        >
          <SidebarTableOfContent />
          <div id="requirements-slot" className="flex flex-col gap-8 mt-8" />
        </div>
      </>
    )
  },
)

LayoutSecondarySidebar.displayName = 'LayoutSecondarySidebar'

export type LayoutContentProps = {} & React.HTMLAttributes<HTMLDivElement>

export const LayoutContent = forwardRef<HTMLDivElement, LayoutContentProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <main
        {...rest}
        className={cn(
          'px-2 sm:px-6 lg:pr-12 lg:pl-0 flex-1 self-start sticky top-14 min-w-0 lg:max-w-[66rem]',
          className,
        )}
        ref={ref}
      >
        <div className="pt-6 pb-16 sm:pb-24 sm:pt-8 lg:pb-32 lg:pt-10">{children}</div>

        <footer className="border-t border-grayAlpha-300 pt-8 pb-[3.125rem]">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:relative lg:min-h-[200px]">
            <div className="z-10 flex flex-col items-start flex-none">
              <PageEditFooter />
            </div>
            <div className="z-20 flex flex-col items-end flex-none w-full lg:absolute lg:right-0 lg:top-0 lg:w-auto lg:static">
              <PageHelpFeedback />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 text-sm mt-14">
            {/* <div className="flex flex-wrap items-center flex-none gap-3">
              <Link
                className="hover:underline"
                target="_blank"
                href="https://tiptap.dev/docs/hocuspocus/introduction"
              >
                Hocuspocus
              </Link>
              <Link
                className="hover:underline"
                target="_blank"
                href="https://tiptap.dev/legal-notice"
              >
                Legal notice
              </Link>
              <Link
                className="hover:underline"
                target="_blank"
                href="https://tiptap.dev/privacy-policy"
              >
                Privacy Policy
              </Link>
              <Link
                className="hover:underline"
                target="_blank"
                href="https://tiptap.dev/terms-of-service"
              >
                Terms of Service
              </Link>
              <Link className="hover:underline" href="/resources/contributing">
                Contributing
              </Link>
              <Link className="hover:underline" href="/resources/changelog">
                Changelog
              </Link>
            </div>
            <div className="flex-none">Copyright © 2025 Tiptap</div> */}
            <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              <a href="https://www.zhcndoc.com/" target="_blank">
                简中文档
              </a>
              ｜
              <a href="https://beian.miit.gov.cn/" target="_blank">
                沪ICP备2024070610号-3
              </a>
            </div>
          </div>
        </footer>
      </main>
    )
  },
)

LayoutContent.displayName = 'LayoutContent'

export const Layout = {
  Header: LayoutHeader,
  Wrapper: LayoutWrapper,
  Sidebar: LayoutSidebar,
  SecondarySidebar: LayoutSecondarySidebar,
  Content: LayoutContent,
  CTA: LayoutCTABar,
}
