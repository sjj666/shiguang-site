"use client";

import { useState } from "react";
import { Atom, BookOpen, Layers, Rocket, type LucideIcon } from "lucide-react";
import type { Note } from "./profile";

// 每个标签一套封面配色和图标，没配置的标签用默认样式
const tagStyles: Record<string, { cover: string; icon: LucideIcon }> = {
  "Next.js": { cover: "from-zinc-800 to-zinc-600", icon: Layers },
  React: { cover: "from-sky-500 to-cyan-400", icon: Atom },
  部署: { cover: "from-violet-500 to-fuchsia-400", icon: Rocket },
};
const defaultStyle = { cover: "from-blue-500 to-indigo-400", icon: BookOpen };

export default function NoteGrid({ notes }: { notes: Note[] }) {
  const tags = ["全部", ...new Set(notes.map((n) => n.tag))];
  const [active, setActive] = useState("全部");
  const shown = active === "全部" ? notes : notes.filter((n) => n.tag === active);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              active === tag
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {shown.map((note) => {
          const { cover, icon: Icon } = tagStyles[note.tag] ?? defaultStyle;
          return (
            <article
              key={note.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${cover}`}>
                <Icon size={44} className="text-white/90 transition group-hover:scale-110" strokeWidth={1.5} />
                <span className="absolute top-3 left-3 rounded-full bg-white/20 px-2.5 py-0.5 text-xs text-white backdrop-blur">
                  {note.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <time className="text-xs text-zinc-400">{note.date}</time>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{note.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{note.summary}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
