import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/Players/Players'
import Footer from './Components/Footer/Footer'
import './App.css'
import { createContext, Suspense, useState } from 'react'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
export const CoinContext = createContext("");
function App() {
  const [coin, setCoin] = useState(500000000);
  const playersPromise = fetchPlayers();
  return (
    <CoinContext.Provider value={[coin, setCoin]}>
      <div className='container mx-auto sora'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Players playersPromise={playersPromise}></Players>
        </Suspense>
      </div>
      <Footer></Footer>
    </CoinContext.Provider>
  )
}

export default App
