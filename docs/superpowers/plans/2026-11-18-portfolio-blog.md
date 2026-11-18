# Portfolio + Blog Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans or implement task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 上线 `https://Laurtiv27.github.io`：中文招聘向作品集首页 + Markdown 博客，Astro 静态部署到 GitHub Pages。

**Architecture:** Astro content collections 管博客；项目数据手写 `projects.ts`（仅公开仓）；GitHub Actions `astro build` → `deploy-pages`。

**Tech Stack:** Astro 5、TypeScript、全局 CSS、GitHub Actions Pages

## Global Constraints

- 中文为主、招聘向；仅公开项目；无 Rank/评分卡
- 视觉：深绿 `#0E3B2D` + 薄荷绿强调；避免紫渐变/奶油陶土/报纸风
- 规格见 `docs/superpowers/specs/2026-11-18-portfolio-blog-design.md`

---

### Task 1: Scaffold Astro + 基础布局

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/layouts/BaseLayout.astro`, `src/styles/global.css`, `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`, `.gitignore`, `README.md`

- [ ] `npm create astro@latest` 或手写最小 Astro 配置（`output: 'static'`，`site: 'https://Laurtiv27.github.io'`）
- [ ] 全局 CSS 变量 + 字体；Header/Footer；本地 `npm run build` 通过
- [ ] Commit: `chore: scaffold Astro site`

### Task 2: 项目数据 + 首页/作品页

**Files:**
- Create: `src/data/projects.ts`, `src/pages/index.astro`, `src/pages/projects.astro`, `src/components/ProjectCard.astro`, `src/components/Hero.astro`

- [ ] 写入 3 个公开项目
- [ ] 首页 Hero → 项目 → 技能 → 博客占位 → 联系
- [ ] `/projects` 列表
- [ ] Commit: `feat: 首页与作品集`

### Task 3: 博客 Content Collection

**Files:**
- Create: `src/content.config.ts`, `src/content/blog/*.md`, `src/pages/blog/index.astro`, `src/pages/blog/[...slug].astro`

- [ ] 配置 blog collection（title, date, description）
- [ ] 2 篇中文示例文
- [ ] 列表与详情页；首页展示最近文章
- [ ] Commit: `feat: 博客列表与正文`

### Task 4: GitHub 仓库 + Pages 部署

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] `gh repo create Laurtiv27/Laurtiv27.github.io --public`
- [ ] Actions：checkout → setup-node → build → upload artifact → deploy-pages
- [ ] 开启 Pages（GitHub Actions 源）
- [ ] Push `main`，确认 Actions 绿、站点可访问
- [ ] Commit/push: `ci: GitHub Pages 部署`

### Task 5: 收尾

- [ ] README 写明本地预览与发文方式
- [ ] 提醒用户把 Profile Website 设为 `https://Laurtiv27.github.io`
