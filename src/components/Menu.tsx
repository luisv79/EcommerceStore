import { NavLink } from "react-router-dom"

function Menu() {
    return(

        <>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
  <NavLink to="/games" className="hover:text-white transition">Juegos</NavLink>
  <NavLink to="/gear" className="hover:text-white transition">Fan Gear</NavLink>
  <NavLink to="/deals" className="hover:text-white transition">Ofertas</NavLink>
</nav>

        </>
    )
    
}

export default Menu