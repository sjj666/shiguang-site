"use client";

import { useState } from "react";
import { getSectionTools, sections, type Tool } from "./data";
import ToolCard from "./ToolCard";

function ToolGrid({ list }: { list: Tool[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {list.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}

export default function ToolExplorer({ tools }: { tools: Tool[] }) {
  const [input, setInput] = useState("");
  const [keyword, setKeyword] = useState("");

  const q = keyword.trim().toLowerCase();
  const results = q
    ? tools.filter((tool) =>
        [tool.name, tool.company, tool.description].some((text) => text.toLowerCase().includes(q)),
      )
    : [];

  return (
    <div className="flex flex-col gap-12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setKeyword(input);
        }}
        className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 pt-10 pb-4"
      >
        <label htmlFor="ai-search" className="text-lg text-zinc-700 dark:text-zinc-300">
          搜索本站内容
        </label>
        <div className="flex w-full gap-3">
          <input
            id="ai-search"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (!e.target.value) setKeyword(""); // 清空输入时恢复全部分类
            }}
            placeholder="搜索工具名称或用途，如：视频"
            className="h-12 min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-4 text-zinc-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />
          <button type="submit" className="h-12 shrink-0 rounded-lg bg-blue-600 px-6 text-white hover:bg-blue-700">
            搜索
          </button>
        </div>
      </form>

      {q ? (
        <section className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            “{keyword.trim()}”的搜索结果
            <span className="ml-2 text-base font-normal text-zinc-500">{results.length} 个</span>
          </h2>
          {results.length > 0 ? (
            <ToolGrid list={results} />
          ) : (
            <p className="py-12 text-center text-zinc-500">没有找到相关工具，换个关键词试试</p>
          )}
        </section>
      ) : (
        sections.map(({ id, name }) => (
          <section key={id} id={id} className="flex scroll-mt-32 flex-col gap-5 md:scroll-mt-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{name}</h2>
            <ToolGrid list={getSectionTools(id, tools)} />
          </section>
        ))
      )}
    </div>
  );
}
