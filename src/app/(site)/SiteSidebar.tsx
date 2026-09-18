"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Home, Sparkles, UserRound, type LucideIcon } from "lucide-react";
import { profile } from "./profile";

type MenuItem = {
  href: string;
  name: string;
  icon: LucideIcon;
  standalone?: boolean; // 独立全屏页面，点进去会离开这套侧边栏
};

const menu: MenuItem[] = [
  { href: "/", name: "首页", icon: Home },
  { href: "/about", name: "关于我", icon: UserRound },
  { href: "/ai", name: "AI工具导航", icon: Sparkles, standalone: true },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function Avatar({ size }: { size: "sm" | "lg" }) {
  const cls = size === "lg" ? "h-16 w-16 text-2xl" : "h-9 w-9 text-base";
  return (
    <span
      className={`${cls} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 font-bold text-white shadow-md shadow-blue-600/20`}
    >
      {profile.name.slice(0, 1)}
    </span>
  );
}

export default function SiteSidebar() {
  // 需要读取当前网址来高亮菜单，所以这是客户端组件
  const pathname = usePathname();

  return (
    <>
      {/* 桌面端：固定在左侧 */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-zinc-200/70 bg-gradient-to-b from-white to-slate-50 px-4 py-6 md:flex dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900">
        {/* 名片 */}
        <Link href="/about" className="group flex flex-col items-center gap-3 rounded-2xl px-3 py-5 text-center transition hover:bg-white hover:shadow-sm dark:hover:bg-zinc-900">
          <div className="relative">
            <Avatar size="lg" />
            <span className="absolute right-0 bottom-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-bold text-zinc-900 dark:text-white">{profile.name}</span>
            <span className="text-sm text-zinc-500">{profile.title}</span>
          </div>
        </Link>

        <div className="mx-3 my-4 h-px bg-zinc-200 dark:bg-zinc-800" />

        <p className="px-3 pb-2 text-xs font-medium tracking-wider text-zinc-400">导航</p>
        <nav className="flex flex-col gap-1">
          {menu.map(({ href, name, icon: Icon, standalone }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-600/25"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition ${
                    active
                      ? "bg-white/20"
                      : "bg-white shadow-sm ring-1 ring-zinc-200/70 group-hover:ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700"
                  }`}
                >
                  <Icon size={17} />
                </span>
                <span className="flex-1">{name}</span>
                {standalone && (
                  <ArrowUpRight
                    size={15}
                    className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-900 dark:group-hover:text-white"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* 底部状态卡 */}
        <div className="mt-auto rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-4 ring-1 ring-blue-100 dark:from-blue-950/40 dark:to-violet-950/40 dark:ring-zinc-800">
          <p className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            正在学习
          </p>
          <p className="mt-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200">{profile.learning}</p>
        </div>
      </aside>

      {/* 手机端：顶部名片 + 横向菜单 */}
      <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-zinc-200/70 bg-white/85 px-4 pt-3 pb-3 backdrop-blur md:hidden dark:border-zinc-800 dark:bg-zinc-950/85">
        <Link href="/" className="flex items-center gap-2.5">
          <Avatar size="sm" />
          <span className="font-bold text-zinc-900 dark:text-white">{profile.name}</span>
          <span className="text-sm text-zinc-400">· {profile.title}</span>
        </Link>
        <nav className="-mx-4 flex gap-2 overflow-x-auto px-4">
          {menu.map(({ href, name, icon: Icon, standalone }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                    : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
              >
                <Icon size={15} />
                {name}
                {standalone && <ArrowUpRight size={13} className="opacity-60" />}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
