import Duvidas01 from "../components/previews/Duvidas/Duvidas01"
import Duvidas02 from "../components/previews/Duvidas/Duvidas02"

import Duvidas01Jsx from "../components/previews/Duvidas/Duvidas01.jsx?raw"
import Duvidas01Css from "../components/previews/Duvidas/duvidas01.style.module.css?raw"

import Duvidas02Jsx from "../components/previews/Duvidas/Duvidas02.jsx?raw"
import Duvidas02Css from "../components/previews/Duvidas/duvidas02.style.module.css?raw"

export const categoria = {
    id: "duvidas",
    nome: "FAQ"
};

export const componentes = [
    {
        id: "duvidas-01",
        nome: "Dúvidas 01",
        categoria: "duvidas",
        Component: Duvidas01,
        codigos: { jsx: Duvidas01Jsx, cssModule: Duvidas01Css },
    },
    {
        id: "duvidas-02",
        nome: "Dúvidas 02",
        categoria: "duvidas",
        Component: Duvidas02,
        codigos: { jsx: Duvidas02Jsx, cssModule: Duvidas02Css },
    }
]

