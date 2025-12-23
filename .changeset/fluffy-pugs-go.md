---
'tiptap-docs': patch
---

更新颜色高亮按钮文档：

- 为 `useColorHighlight()` 添加缺失的导入
- 在 Hook 属性表中添加 `mode` 参数
- 更新 `onApplied` 回调类型，包含 mode 参数
- 更新 `canColorHighlight()` 签名，包含可选的 mode 参数
- 添加 `canColorHighlight()` 参数表
- 更新 `isColorHighlightActive()` 签名：将 `color` 参数重命名为 `highlightColor`，并添加可选的 `mode` 参数
- 添加 `isColorHighlightActive()` 使用示例
- 添加新的 `removeHighlight()` 工具函数
- 添加新的 `pickHighlightColorsByValue()` 工具函数