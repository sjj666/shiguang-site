import Sidebar from "./Sidebar";

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row dark:bg-zinc-950">
      <Sidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
