import Link from "next/link";
import {
  Brush,
  Clapperboard,
  Code,
  Flame,
  House,
  MessageSquareText,
  PenLine,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { sections, type SectionId } from "./data";

const sectionIcons: Record<SectionId, LucideIcon> = {
  hot: Flame,
  chat: MessageSquareText,
  search: Search,
  text: PenLine,
  code: Code,
  image: Brush,
  video: Clapperboard,
};

function Logo() {
  return (
    <Link href="/ai" className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
        <Sparkles size={20} />
      </span>
      <span className="text-xl font-bold text-zinc-900 dark:text-white">AI工具导航</span>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <>
      {/* 桌面端：固定在左侧 */}
      <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col gap-8 overflow-y-auto bg-slate-100 px-5 py-6 md:flex dark:bg-zinc-900">
        <Logo />
        <nav className="flex flex-col gap-1">
          {sections.map(({ id, name }) => {
            const Icon = sectionIcons[id];
            return (
              <Link
                key={id}
                href={`/ai#${id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-zinc-700 transition hover:bg-white hover:text-blue-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>
        <Link
          href="/"
          className="mt-auto flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-white hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          <House size={18} />
          <span>返回首页</span>
        </Link>
      </aside>

      {/* 手机端：顶部 Logo + 可横向滑动的分类 */}
      <header className="sticky top-0 z-10 flex flex-col gap-3 bg-slate-100 px-4 pt-4 pb-3 md:hidden dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <Logo />
          <Link
            href="/"
            aria-label="返回首页"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
          >
            <House size={18} />
          </Link>
        </div>
        <nav className="-mx-4 flex gap-2 overflow-x-auto px-4">
          {sections.map(({ id, name }) => {
            const Icon = sectionIcons[id];
            return (
              <Link
                key={id}
                href={`/ai#${id}`}
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                <Icon size={16} />
                {name}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
