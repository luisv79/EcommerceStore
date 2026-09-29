import { useEffect, useState } from "react";

import Header from "../components/Header"
import MenuCategories from "../components/MenuCategories"
import Footer from "../components/Footer"
import CardGames from "../components/CardGames"
import CardGear from "../components/CardGear"

interface GameItem {
  image: string;
  tag: string;
  platform: string;
  genre: string;
  name: string;
  price: number;
}

interface GearItem {
    name: string;
    category: string;
    price: number;
    badge: string;
    image: string;
}

interface ApiResponse {
  games: GameItem[];
  gear: GearItem[];
}

function HomePage() {
 const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data: ApiResponse) => setData(data))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, []);
    return(
        <>
        <Header/>
        <section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(168,85,247,.22),transparent_30%),radial-gradient(circle_at_20%_60%,rgba(34,211,238,.10),transparent_30%)]" />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative">
    <div>
      <p className="text-fuchsia-400 uppercase tracking-[.3em] text-xs font-bold mb-5">Tu universo gamer</p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[.9]">
        Juega.<br />
        Colecciona.<br />
        <span className="text-fuchsia-500">Vive.</span>
      </h1>
      <p className="mt-7 text-slate-400 text-lg max-w-xl leading-relaxed">
        Encuentra los videojuegos que buscas y el fan gear que demuestra de qué universo vienes.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href="#games" className="bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl hover:bg-fuchsia-100 transition">Explorar juegos</a>
        <a href="#gear" className="border border-white/15 bg-white/5 px-6 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition">Ver fan gear</a>
      </div>
      <div className="mt-10 flex gap-8 text-sm">
        <div><strong className="block text-xl">+500</strong><span className="text-slate-500">productos</span></div>
        <div><strong className="block text-xl">24/7</strong><span className="text-slate-500">compra online</span></div>
        <div><strong className="block text-xl">100%</strong><span className="text-slate-500">gaming</span></div>
      </div>
    </div>
    <div className="relative">
      <div className="absolute -inset-8 bg-fuchsia-600/15 blur-3xl" />
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-glow">
        <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85" alt="Setup gamer" className="w-full h-[420px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-fuchsia-300">Featured</p>
            <h2 className="text-2xl font-black">Gaming Essentials</h2>
          </div>
          <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg text-sm">Desde $19.990</span>
        </div>
      </div>
    </div>
  </div>
</section>
console.log()
<MenuCategories />

{/* Games */}
<section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="flex items-end justify-between mb-7">
    <div>
      <p className="text-fuchsia-400 text-xs uppercase tracking-widest font-bold">Level 01</p>
      <h2 className="text-3xl font-black mt-2">Videojuegos destacados</h2>
    </div>
    <button className="hidden sm:block text-sm text-slate-400 hover:text-white">Ver todos →</button>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {data?.games.slice(0, 4).map((item: GameItem) => (
      <CardGames
        key={item.name}
        imageUrl={item.image}
        tag={item.tag}
        platform={item.platform}
        genre={item.genre}
        nameGame={item.name}
        price={item.price}
      />
    ))}
  </div>
</section>

 {/* Promo */}
<section id="deals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-r from-fuchsia-700/30 via-purple-700/20 to-cyan-500/10 p-8 md:p-12">
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-[.25em] text-fuchsia-300 font-bold">Drop semanal</p>
      <h2 className="text-3xl md:text-5xl font-black mt-3">Hasta 40% OFF en fan gear</h2>
      <p className="text-slate-300 mt-4">Actualiza tu colección con poleras, hoodies, mugs y accesorios seleccionados.</p>
      <a href="#gear" className="inline-block mt-7 bg-white text-slate-950 px-5 py-3 rounded-xl font-bold">Comprar ofertas</a>
    </div>
  </div>
</section>

{/* Fan gear */}
<section id="gear" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="flex items-end justify-between mb-7">
    <div>
      <p className="text-cyan-400 text-xs uppercase tracking-widest font-bold">Level 02</p>
      <h2 className="text-3xl font-black mt-2">Fan gear</h2>
    </div>
    <button className="hidden sm:block text-sm text-slate-400 hover:text-white">Ver colección →</button>
  </div>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {data?.gear.slice(0, 4).map((item: GearItem) => (
      <CardGear
        key={item.name}
        imageUrl={item.image}
        badge={item.badge}
        category={item.category}
        nameGear={item.name}
        price={item.price}
      />
    ))}

    </div>
</section>

{/* UX value props */}
<section className="border-y border-white/10 bg-white/[.02]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-8">
    <div><span className="text-2xl">🔒</span><h3 className="font-bold mt-4">Pago seguro</h3><p className="text-sm text-slate-500 mt-2">Checkout preparado para integrar Stripe, Webpay u otro proveedor.</p></div>
    <div><span className="text-2xl">📦</span><h3 className="font-bold mt-4">Seguimiento</h3><p className="text-sm text-slate-500 mt-2">El cliente podrá consultar el estado de su pedido desde su cuenta.</p></div>
    <div><span className="text-2xl">⚡</span><h3 className="font-bold mt-4">Compra rápida</h3><p className="text-sm text-slate-500 mt-2">Añade productos al carrito y revisa el resumen antes de pagar.</p></div>
  </div>
</section>
<Footer/>

</>
    )
    
}

export default HomePage;