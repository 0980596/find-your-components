import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Home from "./pages/Home.jsx"
import Header from './pages/categories/Header.jsx'
import Hero from './pages/categories/Hero.jsx'
import Cards from './pages/categories/Cards.jsx'
import Contato from './pages/categories/Contato.jsx'
import Footer from './pages/categories/Footer.jsx'
import Duvidas from './pages/categories/Duvidas.jsx'
import Feedback from './pages/categories/Feedback.jsx'
import ComponenteDetalhe from './pages/ComponenteDetalhe.jsx'
import Docs from './pages/Docs.jsx'

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
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/docs" element={<Docs />} />

        <Route path="/componente/:id" element={<ComponenteDetalhe />} />
      </Routes>
    </BrowserRouter>
  )
}
