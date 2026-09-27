import { NavLink } from "react-router-dom"

import Menu from "./Menu"


function Header() {
    return(
        <>
       <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-6">
    <NavLink to="/" className="text-2xl font-black tracking-tighter shrink-0">
      LEVEL<span className="text-fuchsia-500">UP</span>
    </NavLink>
    <Menu/>
    <div className="flex-1 max-w-xl mx-auto hidden md:block">
      <label className="relative block">
        <span className="sr-only">Buscar productos</span>
        <input type="search" placeholder="Busca juegos, consolas, poleras..." className="w-full rounded-xl bg-white/5 border border-white/10 px-11 py-3 text-sm outline-none focus:border-fuchsia-500 placeholder:text-slate-500" />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
      </label>
    </div>
    <div className="ml-auto flex items-center gap-2">
      <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl hover:bg-white/5">♡</button>
      <button id="cartButton" className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5">
        🛒
        <span id="cartCount" className="absolute -right-1 -top-1 bg-fuchsia-500 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
      </button>
    </div>
  </div>
</header>

        
        </>
    )
    
}

export default Header