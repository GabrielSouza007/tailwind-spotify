import {
  AlignJustify,
  Mic2,
  MonitorSpeaker,
  Play,
  PlaySquare,
  PlusCircle,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 p-6">
      <div className="flex items-center space-x-4">
        <Image
          src="/album5.jpg"
          style={{ borderRadius: 50 / 10 }}
          width={56}
          height={56}
          alt={""}
        />
        <div className="flex flex-col">
          <strong className="font-semibold">Melt!</strong>
          <span className="text-xs text-zinc-400">Kelly Lee Owens</span>
        </div>
        <div className="flex items-center">
          <PlusCircle className="text-zinc-400" size={16} />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <button>
            <Shuffle size={18} className="text-zinc-200" />
          </button>

          <button>
            <SkipBack size={20} className="text-zinc-200" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 text-black">
            <Play fill="bg-black" />
          </button>

          <button>
            <SkipForward size={20} className="text-zinc-200" />
          </button>

          <button>
            <Repeat2 size={20} className="text-zinc-200" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-20 rounded-full bg-zinc-200" />
          </div>
          <span className="text-xs text-zinc-400">3:35</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <PlaySquare size={20} />
        <Mic2 size={18} />
        <AlignJustify size={20} />
        <MonitorSpeaker size={20} />
        <div className="flex items-center">
          <Volume1 />
          <div className="h-1 w-20  rounded-full bg-zinc-600">
            <div className="h-1 w-14 rounded-full bg-zinc-200" />
          </div>
        </div>
      </div>
    </footer>
  );
}
