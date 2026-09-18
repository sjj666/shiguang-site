import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile, skills, timeline } from "../profile";

export const metadata: Metadata = {
  title: `关于我 - ${profile.name}`,
  description: profile.intro,
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-16 px-4 pb-16 md:px-10">
      {/* 名片 */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="h-28 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 md:h-36" />
        <div className="flex flex-col gap-4 px-6 pb-8 md:px-10">
          <div className="-mt-12 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-violet-600 text-4xl font-bold text-white shadow-lg dark:border-zinc-900">
            {profile.name.slice(0, 1)}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{profile.name}</h1>
            <p className="text-zinc-500">{profile.title}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              {profile.location}
            </span>
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-blue-600">
                <Mail size={16} />
                {profile.email}
              </a>
            )}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* 简介 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">你好 👋</h2>
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>{profile.intro}</p>
          <p>
            我相信最好的学习方式是动手做东西。这个网站本身就是练习场：从路由、布局到部署，每学一个知识点，就在这里落地一次。
          </p>
        </div>
      </section>

      {/* 技能 */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">技能栈</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map(({ group, items }) => (
            <div
              key={group}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-white">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 经历 */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">最近在做</h2>
        <ol className="relative flex flex-col gap-8 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
          {timeline.map(({ date, title, text }) => (
            <li key={title} className="relative">
              <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-zinc-950" />
              <time className="text-sm text-zinc-400">{date}</time>
              <h3 className="mt-1 font-semibold text-zinc-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 结尾 */}
      <section className="flex flex-col items-start gap-4 rounded-3xl bg-zinc-900 p-8 text-white md:flex-row md:items-center md:justify-between md:p-10 dark:ring-1 dark:ring-zinc-800">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">看看我做的 AI 工具导航？</h2>
          <p className="text-zinc-400">常用 AI 工具一站直达，按分类找起来很方便。</p>
        </div>
        <Link
          href="/ai"
          className="flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-zinc-900 transition hover:bg-zinc-200"
        >
          去看看
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
