import { House, Search, Library, Plus, ArrowRight, List, Heart, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-zinc-900 text-zinc-300">
      { }
      <header className="bg-zinc-950 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700">
            <ArrowRight className="rotate-180" />
          </button>
          <button className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700">
            <ArrowRight />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-1 text-sm font-bold bg-white text-black rounded-full hover:scale-105 transition">
            Sign Up
          </button>
          <button className="px-4 py-1 text-sm font-bold bg-zinc-900 border border-zinc-700 rounded-full hover:bg-zinc-800 transition">
            Log in
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        { }
        <aside className="w-64 bg-zinc-950 p-4 flex flex-col">
          <div className="mb-6">
            <a href="#" className="flex items-center gap-4 p-2 hover:text-white transition">
              <House />
              <span className="font-bold">Home</span>
            </a>
            <a href="#" className="flex items-center gap-4 p-2 hover:text-white transition">
              <Search />
              <span className="font-bold">Search</span>
            </a>
          </div>

          <nav className="bg-zinc-900 rounded-lg flex-1 flex flex-col p-2">
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <Library />
                <span className="font-bold">Your Library</span>
              </div>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-zinc-800 rounded-full">
                  <Plus size={18} />
                </button>
                <button className="p-1 hover:bg-zinc-800 rounded-full">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="flex gap-2 py-2 px-1 overflow-x-auto scrollbar-hide hover:scrollbar-show">
              <button className="flex-shrink-0 px-3 py-1 bg-zinc-700 rounded-full text-sm hover:bg-zinc-600">
                Playlists
              </button>
              <button className="flex-shrink-0 px-3 py-1 bg-zinc-700 rounded-full text-sm hover:bg-zinc-600">
                Artists
              </button>
              <button className="flex-shrink-0 px-3 py-1 bg-zinc-700 rounded-full text-sm hover:bg-zinc-600">
                Albums
              </button>
              { }
            </div>

            <div className="flex justify-between items-center p-2 mt-2">
              <button className="p-1 hover:bg-zinc-800 rounded-full relative group">
                <Search size={18} />
                <span className="absolute inset-0 bg-zinc-600 opacity-0 group-hover:opacity-30 rounded-full transition"></span>
              </button>
              <button className="flex items-center gap-1 text-sm hover:text-white">
                Recents <List size={16} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto mt-2 space-y-2">
            {[
              {id: 1, img: "/nightmare.jpg", title: "Nightmare", artist: "Avenged Sevenfold"},
              {id: 2, img: "/metallica-classics.jpg", title: "Black Album", artist: "Metallica"},
              {id: 3, img: "/mutter.jpg", title: "Mutter", artist: "Rammstein"}
            ].map((album) => (
              <div key={album.id} className="flex items-center gap-3 p-2 rounded hover:bg-zinc-800 cursor-pointer group">
                <div className="relative">
                  <Image 
                    src={album.img}  
                    width={48} 
                    height={48} 
                    alt={`Capa do ${album.title}`}
                    className="rounded"
                  />
                  { }
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate hover:text-white">{album.title}</h4>
                  <p className="text-xs text-zinc-400 truncate">{album.artist}</p>
                </div>
                { }
              </div>
            ))}
            </div>
          </nav>
        </aside>

        { }
                  <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-zinc-800 to-zinc-900">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {[
            {id: 1, img: "/mutter.jpg", title: "Rammstein Hits", desc: "Melhores do Rammstein"},
            {id: 2, img: "/master-of-puppets.jpg", title: "Metallica Gold", desc: "Clássicos do Metallica"},
            {id: 3, img: "/a7x-mix.png", title: "A7X Collection", desc: "Discografia completa"},
            {id: 4, img: "/german-metal.jpg", title: "Metal Mix", desc: "As melhores do metal"}
          ].map((playlist) => (
            <div key={playlist.id} className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition group cursor-pointer">
              <div className="relative mb-4">
                <Image 
                  src={playlist.img}  
                  width={160} 
                  height={160} 
                  alt="Capa da playlist"
                  className="w-full aspect-square object-cover rounded shadow-lg"
                />
                { }
              </div>
              <h3 className="font-bold text-white truncate">{playlist.title}</h3>
              <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{playlist.desc}</p>
            </div>
          ))}
          </div>
        </main>
      </div>

      { }
      <footer className="h-20 bg-zinc-800 border-t border-zinc-700 flex items-center px-4">
        <div className="w-1/4 flex items-center gap-3">
          <Image 
            src="/avenged-sevenfold-1.png" 
            width={56} 
            height={56} 
            alt="Now playing"
            className="rounded"
          />
          <div>
            <h4 className="text-sm font-medium hover:text-white cursor-pointer">Song Name</h4>
            <p className="text-xs text-zinc-400 hover:text-white cursor-pointer">Artist Name</p>
          </div>
          <button className="ml-2 text-zinc-400 hover:text-white">
            <Heart size={16} />
          </button>
        </div>

        <div className="w-2/4 flex flex-col items-center">
          <div className="flex gap-4 mb-2">
            <button className="text-zinc-400 hover:text-white">Shuffle</button>
            <button className="text-zinc-400 hover:text-white">Previous</button>
            <button className="bg-white text-black rounded-full p-2 hover:scale-105">
              <Play fill="black" size={16} />
            </button>
            <button className="text-zinc-400 hover:text-white">Next</button>
            <button className="text-zinc-400 hover:text-white">Repeat</button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-zinc-400">1:23</span>
            <div className="flex-1 h-1 bg-zinc-600 rounded-full">
              <div className="w-1/3 h-full bg-zinc-300 rounded-full hover:bg-green-500"></div>
            </div>
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>

        <div className="w-1/4 flex justify-end items-center gap-2">
          <button className="text-zinc-400 hover:text-white">
            <List size={16} />
          </button>
          <div className="w-24 h-1 bg-zinc-600 rounded-full">
            <div className="w-1/2 h-full bg-zinc-300 rounded-full"></div>
          </div>
          <button className="text-zinc-400 hover:text-white">
            <VolumeIcon />
          </button>
        </div>
      </footer>
    </div>
  );
}

function VolumeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
    </svg>
  );
}