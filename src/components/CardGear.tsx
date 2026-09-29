


interface cardProps {
    nameGear: string;
    category: string;
    onClick?: () => void;
    price: number;
    badge: string;
    imageUrl?: string;
}




const CardGames = ({imageUrl, category, onClick, badge, nameGear, price}: cardProps) => {
  
    return(
        <>
        <article className="group">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
          {imageUrl && <img src={imageUrl}  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />}
            
            <span className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-lg text-[11px] font-bold">
              {badge}
            </span>
            <button onClick={onClick} className="absolute bottom-3 left-3 right-3 bg-white text-slate-950 py-3 rounded-xl font-bold text-sm translate-y-16 group-hover:translate-y-0 transition">
              + Añadir al carrito
            </button>
          </div>
          <div className="pt-4">
            <div className="flex justify-between text-xs">
              <span className="text-fuchsia-400">
                {category}
              </span>
            </div>
            <h3 className="font-bold mt-1">
              {nameGear}
            </h3>
            <p className="text-fuchsia-400 font-black mt-2">
             $ {price}
            </p>
          </div>
        </article>
        </>
    )
    
}

export default CardGames