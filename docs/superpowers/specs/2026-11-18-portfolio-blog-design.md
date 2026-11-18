# Lautriv 个人站设计规格：作品集 + 博客

**日期**：2026-11-18  
**仓库**：`Laurtiv27/Laurtiv27.github.io`  
**线上地址**：`https://Laurtiv27.github.io`  
**受众**：招聘 / 合作（中文为主）  
**方案**：Astro 静态站 + GitHub Actions → GitHub Pages

---

## 1. 目标与非目标

### 目标

- 一打开就能看懂：你是谁、擅长什么、有哪些可点开的作品
- 项目卡片链到真实 **公开** GitHub 仓库
- 支持用 Markdown 持续写博客（加分项，不是首页主角）
- 免费托管、推送 `main` 后自动发布

### 非目标

- 不接后端、不接评论系统（首期）
- 不做中英切换（首期仅中文）
- 不展示私有仓库、不展示 fork 灌水项目
- 不使用已停服的第三方「评分卡」（如带 Rank/C- 的 stats）

---

## 2. 信息架构

| 路径 | 作用 |
|------|------|
| `/` | 招聘向首页：定位 → 精选项目 → 技能 → 近文 → 联系 |
| `/projects` | 全部精选项目列表 |
| `/blog` | 文章列表 |
| `/blog/[slug]` | 文章正文 |
| `/about` | 简短关于（方向 / 所在地 / 联系）；内容少时可与首页底部合并，但保留路由方便外链 |

主导航：`作品` · `博客` · `关于` · GitHub 外链。

---

## 3. 首页内容块（顺序固定）

1. **Hero（首屏一构图）**  
   - 品牌名：`Lautriv`（英雄级）  
   - 一句定位：端侧 AI / Flutter · Android，深圳  
   - 一句支撑：模型在端上跑，隐私与时延优先  
   - CTA：`查看作品`（锚到项目区）、`联系我`（mailto 或 about）  
   - 背景：深绿大气氛围（非纯色平板），**不要**紫渐变 / 奶油衬线陶土风 / 报纸排版风  

2. **精选项目**（仅公开仓）  
   - `ondevice-inpaint-app-flutter`  
   - `ondevice-inpaint-app`  
   - `desktop-pet`  

3. **技能**  
   - 标签式：Flutter / Dart / Java / Android / iOS / ONNX / Electron / TypeScript 等  

4. **博客精选**  
   - 展示最近 2～3 篇；无文时显示「即将更新」占位  

5. **页脚**  
   - 地点、GitHub、可选邮箱  

---

## 4. 视觉与动效

- **色板**：以 Inpaint 产品色为品牌锚点  
  - 背景深林绿 `#0E3B2D` 系  
  - 强调薄荷绿 `#3DAE7A` / `#A8D5BA`  
  - 正文高对比浅色  
- **字体**：展示用有性格的衬线或几何无衬线 + 正文清晰无衬线（Google Fonts，需可离线回退系统字体）  
- **布局**：首屏非仪表盘；项目区可用简洁列表/大图块，避免无意义卡片堆砌  
- **动效**：至少 2～3 处克制动效（如首屏文字入场、滚动显现），不为动而动  

---

## 5. 技术选型

| 项 | 选择 |
|----|------|
| 框架 | Astro（content collections 管博客） |
| 样式 | 全局 CSS（变量 + 少量组件样式），不强制引入重型 UI 库 |
| 内容 | `src/content/blog/*.md`；项目数据 `src/data/projects.ts` |
| 部署 | GitHub Actions：`astro build` → `actions/deploy-pages` |
| Node | 20+ |

---

## 6. 内容起步包

- 项目数据：上述 3 个公开仓（标题、一句话、技术栈、GitHub URL）  
- 博客：1～2 篇中文示例（如「为什么做端侧 Inpaint」「本站技术栈」），可日后替换  
- `README.md`：如何本地预览、如何发文、Pages 地址  

---

## 7. 与现有 GitHub 资产的关系

- Profile README（`Laurtiv27/Laurtiv27`）侧栏 Website 建议改为：`https://Laurtiv27.github.io`（需用户在 Edit profile 填写或授权后改）  
- 不自动改私有仓；精选列表以公开 API/手工维护的 `projects.ts` 为准  

---

## 8. 验收标准

- [ ] `https://Laurtiv27.github.io` 可打开，移动端可读  
- [ ] 首页 3 个项目链接有效  
- [ ] `/blog` 至少 1 篇可打开  
- [ ] `main` 推送后 Actions 成功部署  
- [ ] 无第三方 Rank/评分卡、无私有项目链接  

---

## 9. 已确认决策

- 用途：招聘 / 合作（A）  
- 语言：中文为主（A）  
- 形态：作品集 + 博客一体  
- 方案：Astro + GitHub Pages  
