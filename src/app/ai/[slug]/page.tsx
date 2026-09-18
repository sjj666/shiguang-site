import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getSectionName, getTool, tools } from "../data";
import ToolCard, { ToolIcon } from "../ToolCard";

// 静态导出只能生成已知的页面，列表之外的 slug 直接 404
export const dynamicParams = false;

// 打包时为每个工具提前生成详情页
export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

// 每个详情页有自己的标题和描述，方便搜索引擎收录
export async function generateMetadata({ params }: PageProps<"/ai/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} - AI工具导航`,
    description: tool.description,
  };
}

export default async function ToolDetailPage({ params }: PageProps<"/ai/[slug]">) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = tools.filter((t) => t.category === tool.category && t.slug !== tool.slug).slice(0, 6);

  return (
    <div className="flex max-w-5xl flex-col gap-10 px-4 py-8 md:px-8">
      <Link
        href={`/ai#${tool.category}`}
        className="flex items-center gap-1 self-start text-sm text-zinc-500 hover:text-blue-600"
      >
        <ArrowLeft size={16} />
        返回{getSectionName(tool.category)}
      </Link>

      <section className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_1px_6px_rgba(0,0,0,0.06)] md:flex-row md:items-center dark:bg-zinc-900">
        <ToolIcon tool={tool} size={96} />
        <div className="flex flex-1 flex-col gap-3">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{tool.name}</h1>
          <p className="text-sm text-zinc-500">
            {tool.company} · {getSectionName(tool.category)}
            {tool.overseas && " · 海外产品，国内访问可能需要特殊网络环境"}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">{tool.description}</p>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          访问官网
          <ExternalLink size={16} />
        </a>
      </section>

      {related.length > 0 && (
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">同类工具</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
