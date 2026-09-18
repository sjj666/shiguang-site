// 个人信息集中放在这里，改这一个文件，首页、关于我、侧边栏都会跟着变
// 标了「占位」的内容请换成你自己的

export const profile = {
  name: "拾光", // 网名，想换直接改这里
  title: "前端开发者",
  tagline: "写代码，也记录成长",
  intro: "正在系统学习 Next.js 和全栈开发，喜欢把学到的东西做成能用的小产品。这里放我的项目、笔记和一些想法。", // 占位
  location: "中国", // 占位
  email: "", // 占位：填了才会显示邮箱入口
  github: "", // 占位：例如 https://github.com/yourname
  learning: "Next.js 全栈开发", // 侧边栏底部“正在学习”
};

export const skills = [
  { group: "前端", items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "工程化", items: ["Git", "Vite", "ESLint", "Vercel 部署"] },
  { group: "正在学", items: ["Server Actions", "数据库", "AI 应用开发"] },
];

export type Note = {
  title: string;
  summary: string;
  tag: string;
  date: string;
};

// 学习笔记：先列主题，文章写好后可以给每条加上链接
export const notes: Note[] = [
  {
    title: "App Router 的路由就是文件夹",
    summary: "page.tsx 决定网址，layout.tsx 决定外壳，理解这两个文件就理解了一半 Next.js。",
    tag: "Next.js",
    date: "2026-09",
  },
  {
    title: "路由分组：带括号的文件夹",
    summary: "(site) 不进网址，却能让首页和关于页共用一套侧边栏，而 /ai 保持独立全屏。",
    tag: "Next.js",
    date: "2026-09",
  },
  {
    title: "[slug] 动态路由与静态生成",
    summary: "一个 page.tsx 负责 26 个详情页，generateStaticParams 让它们在打包时就生成好。",
    tag: "Next.js",
    date: "2026-09",
  },
  {
    title: "Suspense 与流式渲染",
    summary: "慢接口不再拖住整页，先把能显示的发给浏览器，数据到了再补上。",
    tag: "React",
    date: "2026-09",
  },
  {
    title: "Server Actions 做表单",
    summary: "不写 API 也能提交表单，函数只在服务端运行，浏览器里看不到它的代码。",
    tag: "React",
    date: "2026-09",
  },
  {
    title: "把网站部署到 Vercel",
    summary: "推到 GitHub、导入项目、自动构建，外加国内访问要注意的域名问题。",
    tag: "部署",
    date: "2026-09",
  },
];

export const timeline = [
  { date: "2026-09", title: "上线个人网站", text: "用 Next.js 搭建本站，部署到 Vercel。" },
  { date: "2026-09", title: "做了 AI 工具导航", text: "收录常用 AI 工具，按分类浏览，每个工具有独立详情页。" },
  { date: "2026-09", title: "开始学习 Next.js", text: "从路由、布局到服务端渲染，边学边做。" },
];
