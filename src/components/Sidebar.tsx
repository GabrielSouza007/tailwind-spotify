import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-1.5">
        <div className="h-1 w-1 rounded-full bg-zinc-400"></div>
        <div className="h-1 w-1 rounded-full bg-zinc-400"></div>
        <div className="h-1 w-1 rounded-full bg-zinc-400"></div>
      </div>
      <nav className="mt-8 space-y-5">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 flex flex-col gap-3 border-t border-zinc-800 pt-6">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hot Hits Brasil
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Funk Hits
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Esquenta Sertanejo
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Pagodeira
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Hits da Internet
        </a>
      </nav>
    </aside>
  );
}
