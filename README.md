# Lautriv · 个人站

作品集 + 博客（中文，面向招聘 / 合作）。

- 线上：https://Laurtiv27.github.io
- 技术：Astro → GitHub Pages

## 本地预览

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
npm run preview
```

## 发文章

在 `src/content/blog/` 新建 Markdown，frontmatter 示例：

```yaml
---
title: 标题
description: 摘要
pubDate: 2026-11-18
---
```

推送到 `main` 后 Actions 自动部署。

## 改项目列表

编辑 `src/data/projects.ts`（仅放公开仓库）。
