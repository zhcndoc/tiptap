# 贡献指南

感谢您对贡献 Tiptap 文档的兴趣。我们欢迎所有人的贡献，并感谢您帮助我们使文档变得更好。

## 如何贡献

请按照以下步骤进行贡献：

1. **Fork 仓库**：首先[Fork 仓库](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)并将其克隆到您的本地机器。
2. **创建新分支**：为您的更改创建一个新分支，以保持工作有序并与主分支分离。
   - 命名分支时，请使用以下格式：
     - `fix/<描述>` 用于修复文档中的错误（拼写错误、不正确信息）或网站代码中的 bug。
     - `feature/<描述>` 用于网站的新功能或文档的新内容。
3. **进行更改**：对文档进行修改或添加内容。
4. **测试更改**：确保您的更改正常工作且不会引入任何问题。
   - 使用 `pnpm dev` 命令在本地运行文档，在浏览器中预览更改。
   - 使用 `pnpm lint` 命令运行代码风格检查。
5. **创建 Changeset**：运行 `pnpm changeset` 来创建新的 changeset。选择合适的更改类型（补丁、次版本或主版本），并写一个有意义的消息描述您的更改。
6. **提交更改**：使用清晰且描述性的提交信息提交您的更改。推荐使用 [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 格式。
7. **推送到您的 Fork**：将更改推送到您在 GitHub 上的 Fork 仓库。
8. **创建 Pull Request**：向原仓库的 `main` 分支提交 Pull Request。Pull Request 中请包含：
   - 一个清晰的标题，概述您的更改。
   - 如果您的 PR 记录的是 [Tiptap 仓库](https://github.com/ueberdosis/tiptap) 中的更改，请添加引入该更改的 Tiptap 仓库 PR 链接。
   - 添加任何相关的问题或讨论的链接。
   - 详细描述您所做的更改。
   - 任何有助于维护者理解您更改的相关信息。
9. **审查和合并**：等待维护者审查您的更改。经批准后，您的更改将被合并。

## 创建版本

我们使用 [changesets](https://github.com/changesets/changesets) 来管理版本。要创建新版本，请在终端运行 `npx changeset version`。该命令会处理所有 changesets（如果分支不是预发布版本），创建新版本，并相应更新 `CHANGELOG.md` 文件。

## 许可协议

贡献即表示您同意您的贡献将遵守与项目相同的许可协议。更多细节请参阅 [LICENSE.md](LICENSE) 文件。

感谢您帮助我们改进 Tiptap 的文档！
