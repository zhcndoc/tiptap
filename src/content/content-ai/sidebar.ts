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
          title: '使用场景',
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
              title: '智能代理',
              href: '/content-ai/capabilities/ai-toolkit/agents',
              children: [
                {
                  title: 'AI 代理聊天机器人',
                  href: '/content-ai/capabilities/ai-toolkit/agents/ai-agent-chatbot',
                },
                {
                  title: '审核变更',
                  href: '/content-ai/capabilities/ai-toolkit/agents/review-changes',
                },
                {
                  title: '变更摘要审核',
                  href: '/content-ai/capabilities/ai-toolkit/agents/review-changes-as-summary',
                },
                {
                  title: '工具流式处理',
                  href: '/content-ai/capabilities/ai-toolkit/agents/tool-streaming',
                },
                {
                  title: '添加评论',
                  href: '/content-ai/capabilities/ai-toolkit/agents/comments',
                },
                {
                  title: '多文档处理',
                  href: '/content-ai/capabilities/ai-toolkit/agents/multi-document',
                },
                {
                  title: '选区感知',
                  href: '/content-ai/capabilities/ai-toolkit/agents/selection-awareness',
                },
                {
                  title: '模式感知',
                  href: '/content-ai/capabilities/ai-toolkit/agents/schema-awareness',
                },
                {
                  title: '工具定义',
                  href: '/content-ai/capabilities/ai-toolkit/agents/tools',
                  children: [
                    {
                      title: 'Vercel AI 开发工具包',
                      href: '/content-ai/capabilities/ai-toolkit/agents/tools/ai-sdk',
                    },
                    {
                      title: 'LangChain.js 框架',
                      href: '/content-ai/capabilities/ai-toolkit/agents/tools/langchain-js',
                    },
                    {
                      title: 'OpenAI 服务',
                      href: '/content-ai/capabilities/ai-toolkit/agents/tools/openai',
                    },
                    {
                      title: 'Anthropic 服务',
                      href: '/content-ai/capabilities/ai-toolkit/agents/tools/anthropic',
                    },
                    {
                      title: 'Mastra 服务',
                      href: '/content-ai/capabilities/ai-toolkit/agents/tools/mastra',
                    },
                    {
                      title: '其他服务商',
                      href: '/content-ai/capabilities/ai-toolkit/agents/tools/other-providers',
                    },
                  ],
                },
              ],
            },
            {
              title: '工作流',
              href: '/content-ai/capabilities/ai-toolkit/workflows',
              children: [
                {
                  title: '插入内容',
                  href: '/content-ai/capabilities/ai-toolkit/workflows/insert-content',
                },
                {
                  title: '校对工具',
                  href: '/content-ai/capabilities/ai-toolkit/workflows/proofreader',
                },
                {
                  title: 'Tiptap 编辑',
                  href: '/content-ai/capabilities/ai-toolkit/workflows/tiptap-edit',
                },
                {
                  title: '评论功能',
                  href: '/content-ai/capabilities/ai-toolkit/workflows/comments',
                },
              ],
            },
            {
              title: '高级指南',
              href: '/content-ai/capabilities/ai-toolkit/advanced-guides',
              children: [
                {
                  title: '在线演示',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/live-demo',
                },
                {
                  title: '概念',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/concepts',
                },
                {
                  title: '建议',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/suggestions',
                },
                {
                  title: '样式建议',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/style-suggestions',
                },
                {
                  title: 'AI engineering',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/ai-engineering',
                },
                {
                  title: 'Compare documents',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/compare-documents',
                },
                {
                  title: 'Tiptap 编辑钩子',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/tiptap-edit-hooks',
                },
                {
                  title: '迁移指南',
                  href: '/content-ai/capabilities/ai-toolkit/advanced-guides/migration-guides',
                  children: [
                    {
                      title: 'AI 生成功能',
                      href: '/content-ai/capabilities/ai-toolkit/advanced-guides/migration-guides/ai-generation',
                    },
                    {
                      title: 'AI 建议功能',
                      href: '/content-ai/capabilities/ai-toolkit/advanced-guides/migration-guides/ai-suggestion',
                    },
                    {
                      title: 'AI 变更功能',
                      href: '/content-ai/capabilities/ai-toolkit/advanced-guides/migration-guides/ai-changes',
                    },
                    {
                      title: 'AI 助手功能',
                      href: '/content-ai/capabilities/ai-toolkit/advanced-guides/migration-guides/ai-assistant',
                    },
                  ],
                },
              ],
            },
            {
              title: 'API 参考文档',
              href: '/content-ai/capabilities/ai-toolkit/api-reference',
              children: [
                {
                  title: '读取文档',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/read-the-document',
                },
                {
                  title: '编辑文档',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/edit-the-document',
                },
                {
                  title: '工具执行',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/execute-tool',
                },
                {
                  title: '工作流',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/workflows',
                },
                {
                  title: '模式感知',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/schema-awareness',
                },
                {
                  title: '显示建议',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/display-suggestions',
                },
                {
                  title: '文档对比',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/compare-documents',
                },
                {
                  title: '差异对比工具',
                  href: '/content-ai/capabilities/ai-toolkit/api-reference/diff-utility',
                },
              ],
            },
            {
              title: '更新日志',
              href: '/content-ai/capabilities/ai-toolkit/changelog',
              children: [
                {
                  title: 'AI 工具包',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit',
                },
                {
                  title: 'AI SDK 工具',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-ai-sdk',
                },
                {
                  title: 'LangChain.js 工具',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-langchain',
                },
                {
                  title: 'OpenAI 工具',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-openai',
                },
                {
                  title: 'Anthropic 工具',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-anthropic',
                },
                {
                  title: '工具定义',
                  href: '/content-ai/capabilities/ai-toolkit/changelog/ai-toolkit-tool-definitions',
                },
              ],
            },
          ],
        },
        {
          title: '服务端 AI 工具包',
          href: '/content-ai/capabilities/server-ai-toolkit',
          tags: ['Add-on'],
          beta: true,
          children: [
            {
              title: '概述',
              href: '/content-ai/capabilities/server-ai-toolkit/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/server-ai-toolkit/install',
            },
            {
              title: '智能体',
              href: '/content-ai/capabilities/server-ai-toolkit/agents',
              children: [
                {
                  title: 'AI 智能体聊天机器人',
                  href: '/content-ai/capabilities/server-ai-toolkit/agents/ai-agent-chatbot',
                },
                {
                  title: '模式感知',
                  href: '/content-ai/capabilities/server-ai-toolkit/agents/schema-awareness',
                },
                {
                  title: '评论',
                  href: '/content-ai/capabilities/server-ai-toolkit/agents/comments',
                },
                {
                  title: '工具定义',
                  href: '/content-ai/capabilities/server-ai-toolkit/agents/tools',
                },
              ],
            },
            {
              title: '工作流',
              href: '/content-ai/capabilities/server-ai-toolkit/workflows',
            },
            {
              title: 'API 参考',
              href: '/content-ai/capabilities/server-ai-toolkit/api-reference',
              children: [
                {
                  title: '模式感知',
                  href: '/content-ai/capabilities/server-ai-toolkit/api-reference/schema-awareness',
                },
                {
                  title: 'REST API',
                  href: '/content-ai/capabilities/server-ai-toolkit/api-reference/rest-api',
                },
              ],
            },
            {
              title: '高级指南',
              href: '/content-ai/capabilities/server-ai-toolkit/advanced-guides',
              children: [
                {
                  title: 'Tiptap 速记',
                  href: '/content-ai/capabilities/server-ai-toolkit/advanced-guides/tiptap-shorthand',
                },
              ],
            },
            {
              title: '更新日志',
              href: '/content-ai/capabilities/server-ai-toolkit/changelog',
              children: [
                {
                  title: '服务器 AI 工具包',
                  href: '/content-ai/capabilities/server-ai-toolkit/changelog/server-ai-toolkit',
                },
              ],
            },
          ],
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
              title: '集成你的大语言模型',
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
