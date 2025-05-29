import { SidebarConfig } from '@/types'

export const sidebarConfig: SidebarConfig = {
  id: 'content-ai',
  rootHref: '/content-ai/getting-started/overview',
  title: '内容 AI',
  items: [
    {
      href: '/content-ai/getting-started/overview',
      title: '开始使用',
      type: 'group',
      children: [
        {
          title: '概述',
          href: '/content-ai/getting-started/overview',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/capabilities',
      title: '能力',
      children: [
        {
          title: 'AI 生成',
          tags: ['Pro'],
          href: '/content-ai/capabilities/generation/',
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
                  title: '内置命令',
                  href: '/content-ai/capabilities/generation/text-generation/built-in-commands',
                },
                {
                  title: '自动完成',
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
                  title: '自定义命令',
                  href: '/content-ai/capabilities/generation/text-generation/custom-commands',
                },
                {
                  title: '流媒体内容（高级）',
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
              title: '概述',
              href: '/content-ai/capabilities/suggestion/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/suggestion/install',
            },
            {
              title: '特征',
              href: '/content-ai/capabilities/suggestion/features',
              children: [
                {
                  title: '定义规则',
                  href: '/content-ai/capabilities/suggestion/features/define-rules',
                },
                {
                  title: '配置何时加载建议',
                  href: '/content-ai/capabilities/suggestion/features/configure-when-to-load-suggestions',
                },
                {
                  title: '显示建议',
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
                  title: '提供 LLM 上下文',
                  href: '/content-ai/capabilities/suggestion/features/provide-llm-context',
                },
              ],
            },
            {
              title: '与内容 AI 云一起使用',
              href: '/content-ai/capabilities/suggestion/use-with-content-ai-cloud',
            },
            {
              title: '集成您的 LLM',
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
              title: '概述',
              href: '/content-ai/capabilities/changes/overview',
            },
            {
              title: '安装',
              href: '/content-ai/capabilities/changes/install',
            },
            {
              title: '特征',
              href: '/content-ai/capabilities/changes/features',
              children: [
                {
                  title: '审查更改',
                  href: '/content-ai/capabilities/changes/features/review-changes',
                },
                {
                  title: '显示更改',
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
          title: 'AI Agent',
          href: '/content-ai/capabilities/agent',
          tags: ['Pro', 'Beta'],
          children: [
            {
              title: 'Overview',
              href: '/content-ai/capabilities/agent/overview',
            },
            {
              title: 'Install',
              href: '/content-ai/capabilities/agent/install',
            },
            {
              title: 'Use with Content AI Cloud',
              href: '/content-ai/capabilities/agent/use-with-content-ai-cloud',
            },
            {
              title: 'Features',
              href: '/content-ai/capabilities/agent/features',
              children: [
                {
                  title: 'State Management',
                  href: '/content-ai/capabilities/agent/features/state-management',
                },
                {
                  title: 'Listen to events',
                  href: '/content-ai/capabilities/agent/features/events',
                },
                {
                  title: 'Available Methods',
                  href: '/content-ai/capabilities/agent/features/methods',
                },
                {
                  title: 'Manage Checkpoints',
                  href: '/content-ai/capabilities/agent/features/checkpoints',
                },
                {
                  title: 'AI Agent Lifecycle',
                  href: '/content-ai/capabilities/agent/features/runs',
                },
                {
                  title: 'Reading the document',
                  href: '/content-ai/capabilities/agent/features/reading-the-document',
                },
                {
                  title: 'Review AI-generated changes',
                  href: '/content-ai/capabilities/agent/features/review',
                },
              ],
            },
            {
              title: 'Integrate your LLM',
              href: '/content-ai/capabilities/agent/custom-llms',
            },
            {
              title: 'Configure',
              href: '/content-ai/capabilities/agent/configure',
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
      href: '',
      title: '示例',
      children: [
        {
          title: '文本生成',
          isActive: false,
          href: '/content-ai/capabilities/generation/overview',
        },
        {
          title: '自动完成',
          isActive: false,
          href: '/content-ai/capabilities/generation/text-generation/autocompletion',
        },
        {
          title: 'AI 建议',
          isActive: false,
          href: '/content-ai/capabilities/suggestion/overview',
        },
        {
          title: '跟踪 AI 变化',
          isActive: false,
          href: '/content-ai/capabilities/changes/overview',
        },
        {
          title: 'AI 智能体',
          href: '/examples/experiments/ai-agent',
          tags: ['Experiment'],
        },
        {
          title: '入门模板',
          href: 'https://tiptap.dev/product/templates',
        },
      ],
    },
    {
      type: 'group',
      href: '/content-ai/custom-llms',
      title: '定制 LLM',
      children: [
        {
          title: '集成您的 LLM',
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
          title: '隐私',
          href: '/content-ai/resources/privacy',
        },
        {
          title: '协作',
          href: '/content-ai/resources/collaboration',
        },
      ],
    },
  ],
}
