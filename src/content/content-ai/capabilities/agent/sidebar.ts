import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'ai-assistant',
  rootHref: '/content-ai/capabilities/agent/overview',
  title: 'AI 助手（旧版）',
  items: [
    {
      type: 'link',
      title: '← 返回内容 AI',
      href: '/content-ai/getting-started/overview',
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/agent/overview',
      title: '开始使用',
      children: [
        {
          title: '概述',
          href: '/content-ai/capabilities/agent/overview',
        },
        {
          title: '安装',
          href: '/content-ai/capabilities/agent/install',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/agent/use-with-content-ai-cloud',
      title: '集成',
      children: [
        {
          title: '在 Content AI Cloud 中使用',
          href: '/content-ai/capabilities/agent/use-with-content-ai-cloud',
        },
        {
          title: '使用你的 AI 代理',
          href: '/content-ai/capabilities/agent/custom-llms',
          children: [
            {
              title: '概述',
              href: '/content-ai/capabilities/agent/custom-llms/overview',
            },
            {
              title: '开始使用',
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
              title: '工具概览',
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
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/agent/features/state',
      title: '功能',
      children: [
        {
          title: 'AI 代理状态',
          href: '/content-ai/capabilities/agent/features/state',
        },
        {
          title: '监听事件',
          href: '/content-ai/capabilities/agent/features/events',
        },
        {
          title: '可用方法',
          href: '/content-ai/capabilities/agent/features/methods',
        },
        {
          title: 'AI 代理生命周期',
          href: '/content-ai/capabilities/agent/features/lifecycle',
        },
        {
          title: '管理检查点',
          href: '/content-ai/capabilities/agent/features/checkpoints',
        },
        {
          title: '提供上下文',
          href: '/content-ai/capabilities/agent/features/context',
        },
        {
          title: '选区感知',
          href: '/content-ai/capabilities/agent/features/selection-awareness',
        },
        {
          title: '阅读大型文档',
          href: '/content-ai/capabilities/agent/features/large-documents',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/agent/configure/options',
      title: '配置',
      children: [
        {
          title: '配置选项',
          href: '/content-ai/capabilities/agent/configure/options',
        },
        {
          title: '自定义系统提示',
          href: '/content-ai/capabilities/agent/configure/system-prompt',
        },
        {
          title: '自定义节点和标记',
          href: '/content-ai/capabilities/agent/configure/custom-nodes',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/agent/review',
      title: '审核更改',
      children: [
        {
          title: '使用 AI Changes',
          href: '/content-ai/capabilities/agent/review/ai-changes',
        },
        {
          title: '使用 AI Suggestion',
          href: '/content-ai/capabilities/agent/review/ai-suggestion',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities/agent/api-reference',
      title: '参考',
      children: [
        {
          title: 'API 参考',
          href: '/content-ai/capabilities/agent/api-reference',
        },
        {
          title: '更新日志',
          href: '/content-ai/capabilities/agent/changelog',
        },
      ],
    },
  ],
}
