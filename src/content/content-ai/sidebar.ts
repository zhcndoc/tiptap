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
      ],
    },
    {
      type: 'group',
      href: '',
      title: '能力',
      children: [
        {
          title: '生成内容',
          isActive: false,
          href: '/content-ai/capabilities/generation/overview',
        },
        {
          title: '自动补全',
          isActive: false,
          href: '/content-ai/capabilities/generation/text-generation/autocompletion',
        },
        {
          title: '建议内容',
          isActive: false,
          href: '/content-ai/capabilities/suggestion/overview',
        },
        {
          title: '审查更改',
          isActive: false,
          href: '/content-ai/capabilities/changes/overview',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/custom-llms',
      title: '自定义 AI',
      children: [
        {
          title: '集成自定义 LLM',
          href: '/content-ai/custom-llms',
        },
        {
          title: '集成自定义代理',
          isActive: false,
          href: '/content-ai/capabilities/agent/overview',
          tags: ['New'],
        },
        {
          title: '文本编辑工具',
          href: '/content-ai/tools-for-ai-agents/text-editing-tools',
          tags: ['New'],
        },
      ],
    },
    {
      type: 'group',
      href: '',
      title: 'Capabilities',
      children: [
        {
          title: 'Generate content',
          isActive: false,
          href: '/content-ai/capabilities/generation/overview',
        },
        {
          title: 'Autocomplete',
          isActive: false,
          href: '/content-ai/capabilities/generation/text-generation/autocompletion',
        },
        {
          title: 'Suggest content',
          isActive: false,
          href: '/content-ai/capabilities/suggestion/overview',
        },
        {
          title: 'Review changes',
          isActive: false,
          href: '/content-ai/capabilities/changes/overview',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/custom-llms',
      title: 'Bring your own AI',
      children: [
        {
          title: 'Integrate a custom LLM',
          href: '/content-ai/custom-llms',
        },
        {
          title: 'Integrate a custom agent',
          isActive: false,
          href: '/content-ai/capabilities/agent/overview',
          tags: ['New'],
        },
        {
          title: 'Text editing tools',
          href: '/content-ai/tools-for-ai-agents/text-editing-tools',
          tags: ['New'],
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities',
      title: 'AI Extensions',
      children: [
        {
          title: 'AI 生成',
          tags: ['Start'],
          href: '/content-ai/capabilities/generation/',
          children: [
            {
              title: '总览',
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
        {
          title: 'AI 建议',
          href: '/content-ai/capabilities/suggestion',
          tags: ['Team'],
          beta: true,
          children: [
            {
              title: '总览',
              href: '/content-ai/capabilities/suggestion/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/suggestion/install',
            },
            {
              title: '功能',
              href: '/content-ai/capabilities/suggestion/features',
              children: [
                {
                  title: '定义规则',
                  href: '/content-ai/capabilities/suggestion/features/define-rules',
                },
                {
                  title: '配置建议加载时机',
                  href: '/content-ai/capabilities/suggestion/features/configure-when-to-load-suggestions',
                },
                {
                  title: '展示建议',
                  href: '/content-ai/capabilities/suggestion/features/display-suggestions',
                },
                {
                  title: '应用和拒绝建议',
                  href: '/content-ai/capabilities/suggestion/features/apply-suggestions',
                },
                {
                  title: '锁定内容',
                  href: '/content-ai/capabilities/suggestion/features/lock-content',
                },
                {
                  title: '提供大模型上下文',
                  href: '/content-ai/capabilities/suggestion/features/provide-llm-context',
                },
              ],
            },
            {
              title: '配合 Content AI Cloud 使用',
              href: '/content-ai/capabilities/suggestion/use-with-content-ai-cloud',
            },
            {
              title: '集成你的 LLM',
              href: '/content-ai/capabilities/suggestion/custom-llms',
            },
            {
              title: '配置',
              href: '/content-ai/capabilities/suggestion/configure',
            },
            {
              title: 'API 参考',
              href: '/content-ai/capabilities/suggestion/api-reference',
            },
          ],
        },
        {
          title: 'AI 变更',
          href: '/content-ai/capabilities/changes',
          tags: ['Team'],
          beta: true,
          children: [
            {
              title: '总览',
              href: '/content-ai/capabilities/changes/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/changes/install',
            },
            {
              title: '功能',
              href: '/content-ai/capabilities/changes/features',
              children: [
                {
                  title: '审查变更',
                  href: '/content-ai/capabilities/changes/features/review-changes',
                },
                {
                  title: '展示变更',
                  href: '/content-ai/capabilities/changes/features/display-changes',
                },
              ],
            },
            {
              title: '配置',
              href: '/content-ai/capabilities/changes/configure',
            },
            {
              title: 'API 参考',
              href: '/content-ai/capabilities/changes/api-reference',
            },
          ],
        },
        {
          title: 'AI 智能体',
          href: '/content-ai/capabilities/agent',
          tags: ['Team'],
          beta: true,
          children: [
            {
              title: '总览',
              href: '/content-ai/capabilities/agent/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/agent/install',
            },
            {
              title: '配合 Tiptap Cloud 使用',
              href: '/content-ai/capabilities/agent/use-with-content-ai-cloud',
            },
            {
              title: '配合自定义 AI 代理使用',
              href: '/content-ai/capabilities/agent/custom-llms',
              children: [
                {
                  title: '总览',
                  href: '/content-ai/capabilities/agent/custom-llms/overview',
                },
                {
                  title: '快速开始',
                  href: '/content-ai/capabilities/agent/custom-llms/get-started',
                  children: [
                    {
                      title: 'Vercel AI SDK',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/vercel-ai-sdk',
                    },
                    {
                      title: 'OpenAI 补全',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/openai-chat-completions',
                    },
                    {
                      title: 'OpenAI 响应',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/openai-responses',
                    },
                    {
                      title: 'Anthropic Claude',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/anthropic-messages',
                    },
                  ],
                },
                {
                  title: '工具总览',
                  href: '/content-ai/capabilities/agent/custom-llms/tools',
                },
                {
                  title: '客户端工具',
                  href: '/content-ai/capabilities/agent/custom-llms/client-side-tools',
                },
                {
                  title: '服务端工具',
                  href: '/content-ai/capabilities/agent/custom-llms/server-side-tools',
                  children: [
                    {
                      title: 'Vercel AI SDK',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/vercel-ai-sdk',
                    },
                    {
                      title: 'OpenAI 补全',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/openai-chat-completions',
                    },
                    {
                      title: 'OpenAI 响应',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/openai-responses',
                    },
                    {
                      title: 'Anthropic Claude',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/anthropic-messages',
                    },
                  ],
                },
              ],
            },
            {
              title: '与您的 AI 代理一起使用',
              href: '/content-ai/capabilities/agent/custom-llms',
              children: [
                {
                  title: '概述',
                  href: '/content-ai/capabilities/agent/custom-llms/overview',
                },
                {
                  title: '快速开始',
                  href: '/content-ai/capabilities/agent/custom-llms/get-started',
                  children: [
                    {
                      title: 'Vercel AI SDK',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/vercel-ai-sdk',
                    },
                    {
                      title: 'OpenAI Completions',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/openai-chat-completions',
                    },
                    {
                      title: 'OpenAI Responses',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/openai-responses',
                    },
                    {
                      title: 'Anthropic Claude',
                      href: '/content-ai/capabilities/agent/custom-llms/get-started/anthropic-messages',
                    },
                  ],
                },
                {
                  title: 'Tools overview',
                  href: '/content-ai/capabilities/agent/custom-llms/tools',
                },
                {
                  title: 'Client-side tools',
                  href: '/content-ai/capabilities/agent/custom-llms/client-side-tools',
                },
                {
                  title: 'Server-side tools',
                  href: '/content-ai/capabilities/agent/custom-llms/server-side-tools',
                  children: [
                    {
                      title: 'Vercel AI SDK',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/vercel-ai-sdk',
                    },
                    {
                      title: 'OpenAI Completions',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/openai-chat-completions',
                    },
                    {
                      title: 'OpenAI Responses',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/openai-responses',
                    },
                    {
                      title: 'Anthropic Claude',
                      href: '/content-ai/capabilities/agent/custom-llms/server-side-tools/anthropic-messages',
                    },
                  ],
                },
              ],
            },
            {
              title: 'Features',
              href: '/content-ai/capabilities/agent/features',
              children: [
                {
                  title: 'State',
                  href: '/content-ai/capabilities/agent/features/state',
                },
                {
                  title: 'Events',
                  href: '/content-ai/capabilities/agent/features/events',
                },
                {
                  title: 'Methods',
                  href: '/content-ai/capabilities/agent/features/methods',
                },
                {
                  title: 'Lifecycle',
                  href: '/content-ai/capabilities/agent/features/lifecycle',
                },
                {
                  title: 'Review changes',
                  href: '/content-ai/capabilities/agent/features/review',
                },
                {
                  title: 'Checkpoints',
                  href: '/content-ai/capabilities/agent/features/checkpoints',
                },
                {
                  title: 'Provide context',
                  href: '/content-ai/capabilities/agent/features/context',
                },
                {
                  title: 'Selection awareness',
                  href: '/content-ai/capabilities/agent/features/selection-awareness',
                },
                {
                  title: 'Read large documents',
                  href: '/content-ai/capabilities/agent/features/large-documents',
                },
              ],
            },
            {
              title: 'Configure',
              href: '/content-ai/capabilities/agent/configure',
              children: [
                {
                  title: 'Configuration options',
                  href: '/content-ai/capabilities/agent/configure/options',
                },
                {
                  title: 'System prompt',
                  href: '/content-ai/capabilities/agent/configure/system-prompt',
                },
                {
                  title: 'Custom nodes/marks',
                  href: '/content-ai/capabilities/agent/configure/custom-nodes',
                },
              ],
            },
            {
              title: 'API Reference',
              href: '/content-ai/capabilities/agent/api-reference',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/resources',
      title: '资源',
      children: [
        {
          title: '隐私政策',
          href: '/content-ai/resources/privacy',
        },
        {
          title: '协作指南',
          href: '/content-ai/resources/collaboration',
        },
      ],
    },
  ],
}
