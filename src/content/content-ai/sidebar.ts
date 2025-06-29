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
      href: '/content-ai/capabilities',
      title: '功能',
      children: [
        {
          title: 'AI 生成',
          tags: ['Pro'],
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
          tags: ['Pro', 'Beta'],
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
          tags: ['Pro', 'Beta'],
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
          tags: ['Pro', 'Beta'],
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
              title: '配合 Content AI Cloud 使用',
              href: '/content-ai/capabilities/agent/use-with-content-ai-cloud',
            },
            {
              title: '功能',
              href: '/content-ai/capabilities/agent/features',
              children: [
                {
                  title: '状态管理',
                  href: '/content-ai/capabilities/agent/features/state',
                },
                {
                  title: '事件机制',
                  href: '/content-ai/capabilities/agent/features/events',
                },
                {
                  title: '方法',
                  href: '/content-ai/capabilities/agent/features/methods',
                },
                {
                  title: '生命周期',
                  href: '/content-ai/capabilities/agent/features/lifecycle',
                },
                {
                  title: '审查变更',
                  href: '/content-ai/capabilities/agent/features/review',
                },
                {
                  title: '检查点',
                  href: '/content-ai/capabilities/agent/features/checkpoints',
                },
                {
                  title: '提供上下文',
                  href: '/content-ai/capabilities/agent/features/context',
                },
                {
                  title: '选择感知',
                  href: '/content-ai/capabilities/agent/features/selection-awareness',
                },
                {
                  title: '读取大型文档',
                  href: '/content-ai/capabilities/agent/features/large-documents',
                },
              ],
            },
            {
              title: '配置',
              href: '/content-ai/capabilities/agent/configure',
              children: [
                {
                  title: '配置选项',
                  href: '/content-ai/capabilities/agent/configure/options',
                },
                {
                  title: '系统提示词',
                  href: '/content-ai/capabilities/agent/configure/system-prompt',
                },
              ],
            },
            {
              title: '集成你的 LLM',
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
              title: 'API 参考',
              href: '/content-ai/capabilities/agent/api-reference',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      href: '',
      title: '示例',
      children: [
        {
          title: '文本生成',
          isActive: false,
          href: '/content-ai/capabilities/generation/overview',
        },
        {
          title: '自动补全',
          isActive: false,
          href: '/content-ai/capabilities/generation/text-generation/autocompletion',
        },
        {
          title: '智能建议',
          isActive: false,
          href: '/content-ai/capabilities/suggestion/overview',
        },
        {
          title: '追踪变更',
          isActive: false,
          href: '/content-ai/capabilities/changes/overview',
        },
        {
          title: '起始模板',
          href: 'https://tiptap.dev/product/templates',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/custom-llms',
      title: '自定义 LLM',
      children: [
        {
          title: '集成你的 LLM',
          href: '/content-ai/custom-llms',
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
