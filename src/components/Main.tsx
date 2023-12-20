import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 pl-1 pr-1">
          <ChevronLeft />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 pl-1 pr-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="mt-10 text-3xl font-semibold">Good Afternoon</h1>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <a
          href="#"
          className="colors group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album.jpg" width={104} height={104} alt={""} />
          <strong>The Slow Rush</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
        <a
          href="#"
          className="colors group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album2.jpeg" width={104} height={104} alt={""} />
          <strong>Inteiro Metade</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
        <a
          href="#"
          className="group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album3.jpg" width={104} height={104} alt={""} />
          <strong>Atlas</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
        <a
          href="#"
          className="colors group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album4.jpeg" width={104} height={104} alt={""} />
          <strong>Stray</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
        <a
          href="#"
          className="colors group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album5.jpg" width={104} height={104} alt={""} />
          <strong>Inner Song</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
        <a
          href="#"
          className="colors group flex items-center gap-4 overflow-hidden rounded bg-white/5 transition-colors hover:bg-white/10"
        >
          <Image src="/album6.jpg" width={104} height={104} alt={""} />
          <strong>Rastilho</strong>
          <button className="invisible ml-auto mr-8 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 pl-1 text-black group-hover:visible">
            <Play fill="bg-black" />
          </button>
        </a>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Made for Gabriel</h2>

      <div className="mt-4 grid grid-cols-7 gap-4">
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album8.png"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Loha, Future, Aoi and more
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album9.jpg"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 2</strong>
          <span className="text-sm text-zinc-400">
            Drake, Teto, Oruam and more
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album10.jpg"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 3</strong>
          <span className="text-sm text-zinc-400">
            $NOT, Cree, Henry and more
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album11.jpg"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 4</strong>
          <span className="text-sm text-zinc-400">
            Waker, Cerme, Rotho and more
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album12.jpg"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 5</strong>
          <span className="text-sm text-zinc-400">
            Frans, Mond, Agnes and more
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album13.jpg"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 6</strong>
          <span className="text-sm text-zinc-400">
            Gorky, Matis, Wel and more
          </span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-2 rounded-md bg-white/5 p-3 transition-colors hover:bg-white/10"
        >
          <Image
            src="/album14.jpg"
            className="w-full"
            width={3600}
            height={3600}
            alt={""}
          />
          <strong className="font-semibold">Daily Mix 7</strong>
          <span className="text-sm text-zinc-400">
            Soet, Lou, Theo and more
          </span>
        </a>
      </div>
    </main>
  );
}
