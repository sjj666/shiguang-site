import SiteSidebar from "./SiteSidebar";

// 首页、关于我们等共用这个带侧边栏的布局；/ai 不在这个分组里，所以不会套上它
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row dark:bg-zinc-950">
      <SiteSidebar />
      <main className="min-w-0 flex-1 py-8">{children}</main>
    </div>
  );
}
