import Header from "../components/Header";

function GamesPage() {
  return (
    <>
      <Header />
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <a
            href="levelup-ecommerce-tailwind.html"
            className="text-sm text-slate-500 hover:text-white"
          >
            ← Volver a inicio
          </a>
          <p className="text-fuchsia-400 text-xs uppercase tracking-[.25em] font-bold mt-7">
            Catálogo
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-black mt-2">
                Todos los videojuegos
              </h1>
              <p className="text-slate-400 mt-4">
                Explora juegos para PC, PlayStation, Xbox y Nintendo.
              </p>
            </div>
            <div className="flex gap-2">
              <select
                id="platform"
                className="bg-slate-900 border border-white/10 rounded-xl px-3 py-3 text-sm"
              >
                <option value="all">Todas las plataformas</option>
                <option>PC</option>
                <option>PlayStation</option>
                <option>Xbox</option>
                <option>Nintendo</option>
              </select>
              <select
                id="sort"
                className="bg-slate-900 border border-white/10 rounded-xl px-3 py-3 text-sm"
              >
                <option value="featured">Destacados</option>
                <option value="low">Precio menor</option>
                <option value="high">Precio mayor</option>
                <option value="az">A-Z</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 overflow-auto mt-8">
            <button
              className="cat bg-fuchsia-600 px-4 py-2 rounded-full text-sm"
              data-cat="all"
            >
              Todos
            </button>
            <button
              className="cat bg-white/5 px-4 py-2 rounded-full text-sm"
              data-cat="Acción"
            >
              Acción
            </button>
            <button
              className="cat bg-white/5 px-4 py-2 rounded-full text-sm"
              data-cat="RPG"
            >
              RPG
            </button>
            <button
              className="cat bg-white/5 px-4 py-2 rounded-full text-sm"
              data-cat="Aventura"
            >
              Aventura
            </button>
            <button
              className="cat bg-white/5 px-4 py-2 rounded-full text-sm"
              data-cat="Deportes"
            >
              Deportes
            </button>
            <button
              className="cat bg-white/5 px-4 py-2 rounded-full text-sm"
              data-cat="Carreras"
            >
              Carreras
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between mb-7">
          <p id="results" className="text-sm text-slate-400" />
          <p className="hidden sm:block text-xs text-slate-600">
            Selecciona un producto para agregarlo al carrito
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10" >

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=85"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              Popular
            </span>
            <button className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                PC
              </span>
              <span className="text-slate-600">
                RPG
              </span>
            </div>
            <h3 className="font-bold mt-1">
              Cyberpunk 2077
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
              $ 1.990
            </p>
          </div>
        </article>

        

        
     </div>
        <div className="hidden text-center py-24">
          <div className="text-5xl">🎮</div>
          <h2 className="text-2xl font-black mt-5">
            No encontramos videojuegos
          </h2>
          <p className="text-slate-500 mt-2">
            Prueba con otra búsqueda o filtro.
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-16">
          <button className="w-10 h-10 rounded-xl bg-fuchsia-600">1</button>
          <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10">
            2
          </button>
          <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10">
            3
          </button>
        </div>
      </main>

      <div>
        <aside
          className="fixed inset-y-0 right-0 z-[70] w-full sm:max-w-md bg-slate-950 border-l border-white/10 translate-x-full transition-transform"
        >
          <div className="h-full flex flex-col">
            <div className="p-5 border-b border-white/10 flex justify-between">
              <div>
                <p className="text-xs text-fuchsia-400 uppercase">Tu compra</p>
                <h2 className="text-xl font-black">Carrito</h2>
              </div>
              <button id="close">✕</button>
            </div>
            <div id="items" className="flex-1 overflow-auto p-5" />
            <div className="p-5 border-t border-white/10">
              <div className="flex justify-between font-black text-lg">
                <span>Total</span>
                <span id="total">$0</span>
              </div>
              <button className="w-full mt-4 bg-fuchsia-600 py-3 rounded-xl font-bold">
                Continuar al checkout
              </button>
            </div>
          </div>
        </aside>
        <div
          className="fixed inset-0 z-[60] bg-black/60 opacity-0 pointer-events-none transition-opacity"
        />
      </div>
    </>
  );
}

export default GamesPage;
