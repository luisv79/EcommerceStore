import { NavLink } from "react-router-dom"

function MenuCategorias() {
    return(


    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <NavLink
            to="/games"
            className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 hover:bg-white/[.07] transition"
          >
            <span className="text-2xl">🎮</span>
            <p className="mt-4 font-bold">Videojuegos</p>
            <span className="text-xs text-slate-500">Nuevos y clásicos</span>
          </NavLink>
          <NavLink
            to="/gear"
            className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 hover:bg-white/[.07] transition"
          >
            <span className="text-2xl">👕</span>
            <p className="mt-4 font-bold">Ropa gamer</p>
            <span className="text-xs text-slate-500">Poleras y hoodies</span>
          </NavLink>
          <NavLink
            to="/gear"
            className="group rounded-2xl border border-white/10 bg-white/[.03] p-5 hover:bg-white/[.07] transition"
          >
            <span className="text-2xl">🧢</span>
            <p className="mt-4 font-bold">Accesorios</p>
            <span className="text-xs text-slate-500">Para tu setup</span>
          </NavLink>
          <NavLink
            to="/deals"
            className="group rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-5 hover:bg-fuchsia-500/10 transition"
          >
            <span className="text-2xl">⚡</span>
            <p className="mt-4 font-bold">Ofertas</p>
            <span className="text-xs text-fuchsia-300">Hasta -40%</span>
          </NavLink>
        </div>
      </section>
    </>
    )
    
};

export default MenuCategorias