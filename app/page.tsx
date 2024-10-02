
import { House, Search, Library, Plus, ArrowRight, List } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-zinc-950 p-6 flex flex-row">header</header>
      <div className="flex flex-1">
        <aside className=" w-96 bg-zinc-950 p-6"> 
          <nav className="bg-zinc-800 rounded-sm flex flex-col pb-2 pt-2 space-y-4">
            <div className="flex flex-row justify-between">
              <a href="" className="hover:text-zinc-100 flex items-center gap-2 
                text-xl font-semibold text-zinc-300 p-4">
                <Library />
                Sua Biblioteca
              </a>
              <div className="flex flex-row pr-4">
                <a href="" className="flex items-center font-semibold text-zinc-300">
                  <Plus/>
                </a>
                <a href="" className="flex items-center font-semibold text-zinc-300">
                  <ArrowRight/>
                </a>
              </div>
            </div>
            <div className="flex-row flex px-2 space-x-3 overflow-hidden">
              <a href='' className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Playlists</a>
              <a href='' className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Artistas</a>
              <a href='' className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Albuns</a>
              <a href='' className="p-3 bg-zinc-700 rounded-full hover:bg-zinc-600">Podcasts</a>
            </div>
            <div className="flex flex-row justify-between p-4">
              <a href="" className="group flex items-center justify-center text-zinc-300">
                <Search/>
                  <button className="absolute rounded-full bg-zinc-500 w-8 h-8 opacity-40 p-5 invisible z-0 group-hover:visible"></button>
              </a>
              <a href="" className="flex items-center gap-4 font-semibold text-zinc-300 hover:text-zinc-100">
                Recentes <List/>
              </a>
            </div>
              <div>
              <div className="flex-1 p-6"> 
              <Image src="/avenged-sevenfold-1.png" className="rounded-lg" width={60} height={60}               alt="capa-LIBAD"/>
              </div>
              <div className="flex-1 p-6"> 
              <Image src="/avenged-sevenfold-1.png" className="rounded-lg" width={60} height={60}               alt="capa-LIBAD"/>
              </div>

            </div>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer>
    </div>
  );
}
