# 拾光 · 个人网站

用 Next.js 搭建的个人网站，包含个人主页和一个 AI 工具导航。

- **首页**：个人介绍、项目展示、学习笔记
- **关于我**：简介、技能栈、近期经历
- **AI 工具导航**：收录常用 AI 工具，按对话、搜索、写作、编程、绘画、视频分类浏览，每个工具有独立详情页

## 技术栈

Next.js 16（App Router）· React 19 · TypeScript · Tailwind CSS 4 · lucide-react

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000 查看。

## 目录结构

```
src/app/
├── layout.tsx              # 根布局：<html>、字体
├── (site)/                 # 路由分组：首页和关于我共用左侧边栏，分组名不进网址
│   ├── layout.tsx
│   ├── SiteSidebar.tsx
│   ├── profile.ts          # 个人信息都在这里改
│   ├── page.tsx            # → /
│   └── about/page.tsx      # → /about
└── ai/                     # AI 工具导航，使用自己的布局，全屏展示
    ├── layout.tsx
    ├── data.ts             # 工具数据：增删工具改这里
    ├── page.tsx            # → /ai
    └── [slug]/page.tsx     # → /ai/doubao 等，打包时静态生成
```

## 常见修改

- **改个人信息**：编辑 `src/app/(site)/profile.ts`，包括网名、简介、技能、笔记、时间线
- **增删 AI 工具**：编辑 `src/app/ai/data.ts`，图标放在 `public/ai-icons/`

## 部署

推送到 GitHub 后在 [Vercel](https://vercel.com) 导入仓库即可，无需额外配置。
