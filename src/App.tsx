import { Route, Routes } from 'react-router-dom';
import './App.css'

// @ts-ignore - these page imports are JavaScript files without type declarations
import HomePage from "./pages/homePage"
import GearPage from "./pages/gearPage"
import DealsPage from "./pages/dealsPage"
import GamesPage from "./pages/gamesPage"

function App() {
 

  return (
    <>
    <div className="bg-slate-950 text-white font-display selection:bg-fuchsia-500 selection:text-white">

      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/deals" element={<DealsPage/>}/>
      <Route path="/gear" element={<GearPage/>}/>
      <Route path="/games" element={<GamesPage/>}/>
      </Routes>

    </div>
      
    </>
  )
}

export default App
