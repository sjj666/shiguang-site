import Image from "next/image";
import Link from "next/link";
import type { Tool } from "./data";

const colors = ["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-orange-500", "bg-pink-500", "bg-cyan-500"];

export function ToolIcon({ tool, size = 48 }: { tool: Tool; size?: number }) {
  if (tool.icon) {
    return (
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}${tool.icon}`}
        alt={tool.name}
        width={size}
        height={size}
        className="shrink-0 rounded-xl object-contain"
        style={{ width: size, height: size }}
      />
    );
  }
  // 没有官方图标时，用名称首字代替
  const index = [...tool.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % colors.length;
  return (
    <div
      className={`${colors[index]} flex shrink-0 items-center justify-center rounded-xl font-bold text-white`}
      style={{ width: size, height: size, fontSize: size * 0.42 }}
    >
      {tool.name.slice(0, 1)}
    </div>
  );
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/ai/${tool.slug}`}
      className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] dark:bg-zinc-900"
    >
      <ToolIcon tool={tool} />
      <div className="min-w-0">
        <h3 className="flex items-center gap-1.5 font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white">
          <span className="truncate">{tool.name}</span>
          {tool.overseas && (
            <span className="shrink-0 rounded bg-amber-100 px-1 text-[10px] font-normal text-amber-700">海外</span>
          )}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-5 text-zinc-500 dark:text-zinc-400">{tool.description}</p>
      </div>
    </Link>
  );
}
