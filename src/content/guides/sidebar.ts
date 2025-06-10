import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'guides',
  rootHref: '/guides',
  title: '指南',
  items: [
    {
      title: '入门指南',
      href: '',
      type: 'group',
      children: [
        {
          href: '/guides/pro-extensions',
          title: '集成专业扩展',
        },
      ],
    },
    {
      title: '核心概念',
      type: 'group',
      href: '',
      children: [
        {
          href: '/guides/faq',
          title: '常见问题',
        },
        {
          href: '/guides/accessibility',
          title: '可访问性',
        },
        {
          href: '/guides/performance',
          title: '性能优化',
        },
        {
          href: '/guides/invalid-schema',
          title: '无效模式处理',
        },
        {
          href: '/guides/output-json-html',
          title: '导出 JSON 或 HTML',
        },
        {
          href: '/guides/authentication',
          title: '协作认证',
        },
        {
          href: '/guides/naming-documents',
          title: '文档命名规范',
        },
        {
          href: '/guides/offline-support',
          title: '离线协作',
        },
        {
          href: '/guides/legacy-conversion',
          title: '旧版转换',
        },
        {
          href: '/guides/upgrade-tiptap-v1',
          title: '升级到 Tiptap V1',
        },
        {
          href: '/guides/upgrade-tiptap-v2',
          title: '升级到 Tiptap V2',
        },
      ],
    },
    {
      title: '自定义开发',
      type: 'group',
      href: '',
      children: [
        {
          href: '/guides/typescript',
          title: '使用 TypeScript 扩展',
        },
      ],
    },
    {
      title: 'Migration',
      type: 'group',
      href: '',
      children: [
        {
          href: '/guides/migrate-from-tinymce',
          title: 'Migrate from TinyMCE',
        },
        {
          href: '/guides/migrate-from-ckeditor5',
          title: 'Migrate from CKEditor 5',
        },
        {
          href: '/guides/migrate-from-quill',
          title: 'Migrate from Quill',
        },
        {
          href: '/guides/migrate-from-slate',
          title: 'Migrate from Slate',
        },
        {
          href: '/guides/migrate-from-lexical',
          title: 'Migrate from Lexical',
        },
        {
          href: '/guides/migrate-from-editorjs',
          title: 'Migrate from Editor.js',
        },
        {
          href: '/guides/migrate-from-draftjs',
          title: 'Migrate from Draft.js',
        },
      ],
    },
  ],
}
