// 1. IMPORT do componente real (para renderizar preview)
import Hero01 from "../components/previews/Hero/Hero01";
import Hero02 from "../components/previews/Hero/Hero02";

// 2. IMPORT do código fonte como string (via ?raw do Vite)
import Hero01Jsx from "../components/previews/Hero/Hero01.jsx?raw"
import Hero01Css from "../components/previews/Hero/hero01.module.css?raw"

import Hero02Jsx from "../components/previews/Hero/Hero02.jsx?raw"
import Hero02Css from "../components/previews/Hero/hero02.module.css?raw"


// 3. Array de categorias (para a Home)
export const categoria = {
    id: "hero",
    nome: "Hero",
    imagem: "https://designtocodes.com/wp-content/uploads/2024/02/Top-10Hero-Section-Web-UI-Kits-and-Libraries-Collection-2024.jpg"
};

// 4. Array de componentes (sem tailwind)
export const componentes = [
    {
        id: "hero-01",
        nome: "Hero 01",
        categoria: "hero",
        Component: Hero01,
        codigos: { jsx: Hero01Jsx, cssModule: Hero01Css },
    },
    {
        id: "hero-02",
        nome: "Hero 02",
        categoria: "hero",
        Component: Hero02,
        codigos: { jsx: Hero02Jsx, cssModule: Hero02Css },
    }
]