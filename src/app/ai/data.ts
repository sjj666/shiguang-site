export type CategoryId = "chat" | "search" | "text" | "code" | "image" | "video";

export type Tool = {
  slug: string; // 用于网址：/ai/<slug>
  name: string;
  company: string;
  description: string;
  url: string;
  category: CategoryId;
  icon?: string; // public/ai-icons 下的图标，没有时显示名称首字
  hot?: boolean; // 是否出现在“AI热门工具”
  overseas?: boolean; // 海外产品，国内访问可能需要特殊网络环境
};

// 侧边栏和首页分区的顺序；hot 是虚拟分类，由 tool.hot 决定
export const sections = [
  { id: "hot", name: "AI热门工具" },
  { id: "chat", name: "AI对话聊天" },
  { id: "search", name: "AI搜索引擎" },
  { id: "text", name: "AI文本工具" },
  { id: "code", name: "AI编程工具" },
  { id: "image", name: "AI绘画" },
  { id: "video", name: "AI视频" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const tools: Tool[] = [
  // AI对话聊天
  {
    slug: "doubao",
    name: "豆包",
    company: "字节跳动",
    description: "字节跳动旗下 AI 助手，支持聊天问答、写作、翻译、图片理解等。",
    url: "https://www.doubao.com",
    category: "chat",
    icon: "/ai-icons/doubao.png",
    hot: true,
  },
  {
    slug: "deepseek",
    name: "DeepSeek",
    company: "深度求索",
    description: "深度求索推出的开源大模型，擅长推理、数学和代码。",
    url: "https://chat.deepseek.com",
    category: "chat",
    icon: "/ai-icons/deepseek.png",
    hot: true,
  },
  {
    slug: "qianwen",
    name: "千问",
    company: "阿里巴巴",
    description: "阿里巴巴推出的 AI 助手（原通义千问），支持对话、长文档阅读、写作。",
    url: "https://www.qianwen.com",
    category: "chat",
    icon: "/ai-icons/qianwen.png",
    hot: true,
  },
  {
    slug: "wenxin",
    name: "文心一言",
    company: "百度",
    description: "百度推出的基于文心大模型的 AI 助手，官网现显示为“文心助手”。",
    url: "https://wenxin.baidu.com",
    category: "chat",
    icon: "/ai-icons/wenxin.png",
  },
  {
    slug: "kimi",
    name: "Kimi",
    company: "月之暗面",
    description: "月之暗面推出的 AI 助手，擅长长文本阅读、总结和联网搜索。",
    url: "https://www.kimi.com",
    category: "chat",
    icon: "/ai-icons/kimi.png",
    hot: true,
  },
  {
    slug: "yuanbao",
    name: "腾讯元宝",
    company: "腾讯",
    description: "腾讯推出的 AI 助手，支持对话、搜索、公众号文章解读等。",
    url: "https://yuanbao.tencent.com",
    category: "chat",
    icon: "/ai-icons/yuanbao.png",
  },
  {
    slug: "chatglm",
    name: "智谱清言",
    company: "智谱",
    description: "基于智谱 GLM 大模型的 AI 助手，支持对话、写作和智能体。",
    url: "https://chatglm.cn",
    category: "chat",
    icon: "/ai-icons/chatglm.png",
  },
  {
    slug: "xinghuo",
    name: "讯飞星火",
    company: "科大讯飞",
    description: "科大讯飞推出的 AI 助手，语音能力突出，支持对话、写作、办公。",
    url: "https://xinghuo.xfyun.cn",
    category: "chat",
    icon: "/ai-icons/xinghuo.png",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    company: "OpenAI",
    description: "OpenAI 推出的 AI 助手，支持对话、写作、编程、图片生成等。",
    url: "https://chatgpt.com",
    category: "chat",
    overseas: true,
  },
  {
    slug: "claude",
    name: "Claude",
    company: "Anthropic",
    description: "Anthropic 推出的 AI 助手，擅长写作、分析和编程。",
    url: "https://claude.ai",
    category: "chat",
    icon: "/ai-icons/claude.png",
    overseas: true,
  },
  {
    slug: "gemini",
    name: "Gemini",
    company: "Google",
    description: "Google 推出的 AI 助手，与 Google 搜索、文档等服务深度集成。",
    url: "https://gemini.google.com",
    category: "chat",
    icon: "/ai-icons/gemini.png",
    overseas: true,
  },

  // AI搜索引擎
  {
    slug: "metaso",
    name: "秘塔AI搜索",
    company: "秘塔科技",
    description: "没有广告的 AI 搜索引擎，直接给出整理好的答案和参考来源。",
    url: "https://metaso.cn",
    category: "search",
    icon: "/ai-icons/metaso.png",
  },
  {
    slug: "tiangong",
    name: "天工AI",
    company: "昆仑万维",
    description: "昆仑万维推出的 AI 助手，支持 AI 搜索、写作和文档分析。",
    url: "https://www.tiangong.cn",
    category: "search",
    icon: "/ai-icons/tiangong.png",
  },

  // AI文本工具
  {
    slug: "xiezuocat",
    name: "秘塔写作猫",
    company: "秘塔科技",
    description: "AI 写作助手，支持文章生成、改写、校对和润色。",
    url: "https://xiezuocat.com",
    category: "text",
    icon: "/ai-icons/xiezuocat.png",
  },
  {
    slug: "zhiwen",
    name: "讯飞智文",
    company: "科大讯飞",
    description: "输入主题即可一键生成 PPT 和文档，支持在线编辑。",
    url: "https://zhiwen.xfyun.cn",
    category: "text",
  },
  {
    slug: "aippt",
    name: "AiPPT",
    company: "AiPPT",
    description: "AI 生成 PPT 工具，输入标题或上传文档即可生成演示文稿。",
    url: "https://www.aippt.cn",
    category: "text",
    icon: "/ai-icons/aippt.png",
  },

  // AI编程工具
  {
    slug: "trae",
    name: "Trae",
    company: "字节跳动",
    description: "内置 AI 助手的代码编辑器，可以对话式写代码、改代码。",
    url: "https://www.trae.cn",
    category: "code",
    icon: "/ai-icons/trae.png",
    hot: true,
  },
  {
    slug: "lingma",
    name: "通义灵码",
    company: "阿里云",
    description: "阿里云的 AI 编程助手，可集成到 VS Code、JetBrains 等编辑器。",
    url: "https://lingma.aliyun.com",
    category: "code",
    icon: "/ai-icons/lingma.png",
  },
  {
    slug: "codegeex",
    name: "CodeGeeX",
    company: "智谱",
    description: "智谱推出的 AI 编程助手，支持代码生成、补全、注释和翻译。",
    url: "https://www.codegeex.cn",
    category: "code",
    icon: "/ai-icons/codegeex.png",
  },
  {
    slug: "cursor",
    name: "Cursor",
    company: "Anysphere",
    description: "以 AI 为核心的代码编辑器，可以用自然语言修改整个项目。",
    url: "https://cursor.com",
    category: "code",
    icon: "/ai-icons/cursor.png",
    overseas: true,
  },

  // AI绘画
  {
    slug: "jimeng",
    name: "即梦",
    company: "字节跳动",
    description: "字节跳动的 AI 创作平台，输入文字即可生成图片和视频。",
    url: "https://jimeng.jianying.com",
    category: "image",
    icon: "/ai-icons/jimeng.png",
    hot: true,
  },
  {
    slug: "liblib",
    name: "LiblibAI",
    company: "哩布哩布",
    description: "AI 绘画模型分享社区，可以在线使用各类模型生成图片。",
    url: "https://www.liblib.art",
    category: "image",
    icon: "/ai-icons/liblib.png",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    company: "Midjourney",
    description: "知名 AI 绘画工具，以出图的艺术感和质感著称。",
    url: "https://www.midjourney.com",
    category: "image",
    overseas: true,
  },

  // AI视频
  {
    slug: "kling",
    name: "可灵",
    company: "快手",
    description: "快手推出的 AI 视频生成工具，支持文字、图片生成视频。",
    url: "https://klingai.com",
    category: "video",
    icon: "/ai-icons/kling.png",
    hot: true,
  },
  {
    slug: "hailuo",
    name: "海螺AI",
    company: "MiniMax",
    description: "MiniMax 推出的 AI 创作平台，以视频生成能力著称。",
    url: "https://hailuoai.com",
    category: "video",
    icon: "/ai-icons/hailuo.png",
  },
  {
    slug: "vidu",
    name: "Vidu",
    company: "生数科技",
    description: "生数科技推出的 AI 视频生成工具，支持文生视频、图生视频。",
    url: "https://www.vidu.cn",
    category: "video",
    icon: "/ai-icons/vidu.png",
  },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getSectionTools(id: SectionId, list: Tool[] = tools) {
  return id === "hot" ? list.filter((tool) => tool.hot) : list.filter((tool) => tool.category === id);
}

export function getSectionName(id: SectionId) {
  return sections.find((section) => section.id === id)?.name ?? "";
}
