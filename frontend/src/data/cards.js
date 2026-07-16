// 1. IMPORT do componente real (para renderizar preview)
import Cards01 from "../components/previews/Cards/Cards01";
import Cards02 from "../components/previews/Cards/Cards02";
import Cards03 from "../components/previews/Cards/Cards03";
import Cards04 from "../components/previews/Cards/Cards04";

// 2. IMPORT do código fonte como string (via ?raw do Vite)
import Cards01Jsx from "../components/previews/Cards/Cards01.jsx?raw"
import Cards01Css from "../components/previews/Cards/cards01.module.css?raw"

import Cards02Jsx from "../components/previews/Cards/Cards02.jsx?raw"
import Cards02Css from "../components/previews/Cards/cards02.module.css?raw"

import Cards03Jsx from "../components/previews/Cards/Cards03.jsx?raw"
import Cards03Css from "../components/previews/Cards/cards03.module.css?raw"

import Cards04Jsx from "../components/previews/Cards/Cards04.jsx?raw"
import Cards04Css from "../components/previews/Cards/cards04.module.css?raw"


// 3. Array de categorias (para a Home)
export const categoria = {
    id: "cards",
    nome: "Cards"
};

// 4. Array de componentes (sem tailwind)
export const componentes = [
    {
        id: "cards-01",
        nome: "Cards 01",
        categoria: "cards",
        Component: Cards01,
        codigos: { jsx: Cards01Jsx, cssModule: Cards01Css },
    },
    {
        id: "cards-02",
        nome: "Cards 02",
        categoria: "cards",
        Component: Cards02,
        codigos: { jsx: Cards02Jsx, cssModule: Cards02Css },
    },
    {
        id: "cards-03",
        nome: "Cards 03",
        categoria: "cards",
        Component: Cards03,
        codigos: { jsx: Cards03Jsx, cssModule: Cards03Css },
    },
    {
        id: "cards-04",
        nome: "Cards 04",
        categoria: "cards",
        Component: Cards04,
        codigos: { jsx: Cards04Jsx, cssModule: Cards04Css },
    }
]