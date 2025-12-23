import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'content-ai',
  rootHref: '/content-ai/getting-started/overview',
  title: '内容 AI',
  items: [
    {
      href: '/content-ai/getting-started/overview',
      title: '入门指南',
      type: 'group',
      children: [
        {
          title: '总览',
          href: '/content-ai/getting-started/overview',
        },
        {
          title: 'Use cases',
          href: '/content-ai/capabilities/use-cases',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities',
      title: 'AI 扩展',
      children: [
        {
          title: 'AI 工具包',
          href: '/content-ai/capabilities/ai-toolkit',
          tags: ['Add-on'],
          beta: true,
          children: [
            {
              title: '概述',
              href: '/content-ai/capabilities/ai-toolkit/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/ai-toolkit/install',
            },
            {
              title: '实时演示',
              href: '/content-ai/capabilities/ai-toolkit/live-demo',
            },
            {
              title: '快速入门指南',
              href: '/content-ai/capabilities/ai-toolkit/guides',
              children: [
                {
                  title: 'AI 代理聊天机器人',
                  href: '/content-ai/capabilities/ai-toolkit/guides/ai-agent-chatbot',
                },
                {
                  title: '审查更改',
                  href: '/content-ai/capabilities/ai-toolkit/guides/review-changes',
                },
                {
                  title: '作为摘要审查',
                  href: '/content-ai/capabilities/ai-toolkit/guides/review-changes-as-summary',
                },
                {
                  title: '工具流',
                  href: '/content-ai/capabilities/ai-toolkit/guides/tool-streaming',
                },
                {
                  title: '内联编辑',
                  href: '/content-ai/capabilities/ai-toolkit/guides/inline-edits',
                },
              ],
            },
            {
              title: '高级指南',
              href: '/content-ai/capabilities/ai-toolkit/advanced-guides',
              children: [
                {
                  title: 'AI 工程指南',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/ai-engineering',
                },
                {
                  title: '添加评论',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/comments',
                },
                {
                  title: '多文档 AI 代理',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/multi-document',
                },
                {
                  title: '校对员',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/proofreader',
                },
                {
                  title: '选择感知',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/selection-awareness',
                },
                {
                  title: '风格建议',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/style-suggestions',
                },
              ],
            },
            {
              title: '原语',
              href: '/content-ai/capabilities/ai-toolkit/primitives',
              children: [
                {
                  title: '执行工具（AI 代理）',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/execute-tool',
                },
                {
                  title: '阅读文档',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/read-the-document',
                },
                {
                  title: '编辑文档',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/edit-the-document',
                },
                {
                  title: '模式感知',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/schema-awareness',
                },
                {
                  title: '显示建议',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/display-suggestions',
                },
                {
                  title: '比较文档',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/compare-documents',
                },
                {
                  title: 'Diff 工具',
                  href: '/content-ai/capabilities/ai-toolkit/primitives/diff-utility',
                },
              ],
            },
            {
              title: 'AI 代理工具',
              href: '/content-ai/capabilities/ai-toolkit/tools',
              children: [
                {
                  title: '可用工具',
                  href: '/content-ai/capabilities/ai-toolkit/tools/available-tools',
                },
                {
                  title: 'Vercel AI SDK',
                  href: '/content-ai/capabilities/ai-toolkit/tools/ai-sdk',
                },
                {
                  title: 'LangChain.js',
                  href: '/content-ai/capabilities/ai-toolkit/tools/langchain-js',
                },
                {
                  title: 'OpenAI',
                  href: '/content-ai/capabilities/ai-toolkit/tools/openai',
                },
                {
                  title: 'Anthropic',
                  href: '/content-ai/capabilities/ai-toolkit/tools/anthropic',
                },
                {
                  title: 'Mastra',
                  href: '/content-ai/capabilities/ai-toolkit/tools/mastra',
                },
                {
                  title: 'Other providers',
                  href: '/content-ai/capabilities/ai-toolkit/tools/other-providers',
                },
              ],
            },
            {
              title: '更新日志',
              href: '/content-ai/capabilities/ai-toolkit/changelog',
              children: [
                {
                  title: 'AI Toolkit',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit',
                },
                {
                  title: 'AI SDK tools',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-ai-sdk',
                },
                {
                  title: 'LangChain.js tools',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-langchain',
                },
                {
                  title: 'OpenAI tools',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-openai',
                },
                {
                  title: 'Anthropic tools',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-anthropic',
                },
                {
                  title: 'Tool definitions',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-tool-definitions',
                },
              ],
            },
            {
              title: '迁移指南',
              href: '/content-ai/capabilities/ai-toolkit/migration-guides',
              children: [
                {
                  title: 'AI Generation',
                  href: '/content-ai/capabilities/ai-toolkit/migration-guides/ai-generation',
                },
                {
                  title: 'AI Suggestion',
                  href: '/content-ai/capabilities/ai-toolkit/migration-guides/ai-suggestion',
                },
                {
                  title: 'AI Changes',
                  href: '/content-ai/capabilities/ai-toolkit/migration-guides/ai-changes',
                },
                {
                  title: 'AI Assistant',
                  href: '/content-ai/capabilities/ai-toolkit/migration-guides/ai-assistant',
                },
              ],
            },
          ],
        },
        {
          title: 'Server AI Toolkit',
          href: '/content-ai/capabilities/server-ai-toolkit/overview',
          tags: ['Alpha'],
        },
        {
          title: 'AI 生成',
          tags: ['Start'],
          href: '/content-ai/capabilities/generation',
          children: [
            {
              title: '概述',
              href: '/content-ai/capabilities/generation/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/generation/install',
            },
            {
              title: '文本生成',
              href: '/content-ai/capabilities/generation/text-generation',
              children: [
                {
                  title: '内置指令',
                  href: '/content-ai/capabilities/generation/text-generation/built-in-commands',
                },
                {
                  title: '自动补全',
                  href: '/content-ai/capabilities/generation/text-generation/autocompletion',
                },
                {
                  title: '提供上下文',
                  href: '/content-ai/capabilities/generation/text-generation/provide-context',
                },
                {
                  title: '格式化响应',
                  href: '/content-ai/capabilities/generation/text-generation/format',
                },
                {
                  title: '管理响应',
                  href: '/content-ai/capabilities/generation/text-generation/manage-responses',
                },
                {
                  title: '自定义指令',
                  href: '/content-ai/capabilities/generation/text-generation/custom-commands',
                },
                {
                  title: '流式内容（高级）',
                  href: '/content-ai/capabilities/generation/text-generation/stream',
                },
              ],
            },
            {
              title: '图像生成',
              href: '/content-ai/capabilities/generation/image-generation',
            },
            {
              title: '集成你的 LLM',
              href: '/content-ai/capabilities/generation/custom-llms',
            },
            {
              title: '配置',
              href: '/content-ai/capabilities/generation/configure',
            },
          ],
        },
      ],
    },
  ],
}
