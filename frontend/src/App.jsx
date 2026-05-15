import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from "./pages/Home.jsx"
import Header from './pages/Header.jsx'
import Hero from './pages/Hero.jsx'
import Cards from './pages/Cards.jsx'
import Contato from './pages/Contato.jsx'
import Footer from './pages/Footer.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}
