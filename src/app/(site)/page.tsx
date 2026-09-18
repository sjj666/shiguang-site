import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { sections, tools } from "../ai/data";
import { ToolIcon } from "../ai/ToolCard";
import NoteGrid from "./NoteGrid";
import { notes, profile } from "./profile";

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.tagline}`,
  description: profile.intro,
};

export default function HomePage() {
  const hotTools = tools.filter((t) => t.hot).slice(0, 6);
  const stats = [
    { value: tools.length, label: "收录 AI 工具" },
    { value: sections.length - 1, label: "工具分类" }, // 减去虚拟的“热门”分类
    { value: notes.length, label: "学习笔记" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 md:px-10">
      {/* 开场 */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-violet-50 px-6 py-14 md:px-12 md:py-20 dark:from-blue-950/40 dark:via-zinc-950 dark:to-violet-950/40">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />

        <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col gap-5">
            <span className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm text-zinc-600 backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300">
              👋 你好，欢迎来到我的小站
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-white">
              我是 <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{profile.name}</span>
              <br />
              {profile.tagline}
            </h1>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ai"
                className="flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                逛逛 AI 工具导航
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-zinc-300 px-5 py-2.5 text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
              >
                关于我
              </Link>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 gap-3 lg:w-80 lg:grid-cols-1">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur lg:flex lg:items-baseline lg:gap-3 dark:border-zinc-800 dark:bg-zinc-900/70"
              >
                <div className="text-3xl font-bold text-zinc-900 dark:text-white">{value}</div>
                <div className="text-sm text-zinc-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目 */}
      <section className="flex flex-col gap-6">
        <SectionTitle title="我的项目" subtitle="学以致用，做点真正能用的东西" />
        <Link
          href="/ai"
          className="group grid gap-8 overflow-hidden rounded-3xl bg-zinc-900 p-8 text-white transition hover:shadow-2xl md:grid-cols-2 md:p-10 dark:bg-zinc-900 dark:ring-1 dark:ring-zinc-800"
        >
          <div className="flex flex-col gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-900">
              <Sparkles size={24} />
            </span>
            <h3 className="text-2xl font-bold">AI 工具导航</h3>
            <p className="leading-relaxed text-zinc-400">
              收录 {tools.length} 款常用 AI 工具，覆盖对话、搜索、写作、编程、绘画、视频。按分类浏览，一键直达官网，每个工具都有独立详情页。
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
              {["Next.js", "App Router", "静态生成", "Tailwind CSS"].map((t) => (
                <span key={t} className="rounded-full border border-zinc-700 px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-2 flex items-center gap-1 text-sm font-medium text-white">
              立即体验
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 self-center">
            {hotTools.map((tool) => (
              <div
                key={tool.slug}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-4 transition group-hover:bg-white/10"
              >
                <ToolIcon tool={tool} size={40} />
                <span className="truncate text-xs text-zinc-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </Link>
      </section>

      {/* 笔记 */}
      <section className="flex flex-col gap-6">
        <SectionTitle title="学习笔记" subtitle="边学边记，把踩过的坑整理成文字" />
        <NoteGrid notes={notes} />
      </section>

      <footer className="border-t border-zinc-200 pt-8 text-sm text-zinc-400 dark:border-zinc-800">
        © {new Date().getFullYear()} {profile.name} · 用 Next.js 构建
      </footer>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl dark:text-white">{title}</h2>
      <p className="text-zinc-500">{subtitle}</p>
    </div>
  );
}
