import type { Metadata } from "next";
import { tools } from "./data";
import ToolExplorer from "./ToolExplorer";

export const metadata: Metadata = {
  title: "AI工具导航 - 常用 AI 工具大全",
  description: "收录豆包、DeepSeek、千问、文心一言等常用 AI 工具，按对话、写作、编程、绘画、视频分类查找",
};

export default function AiNavPage() {
  return (
    <div className="px-4 pb-16 md:px-8">
      <ToolExplorer tools={tools} />
    </div>
  );
}
