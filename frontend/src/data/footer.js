import Footer01 from "../components/previews/Footer/Footer01"
import Footer02 from "../components/previews/Footer/Footer02"
import Footer03 from "../components/previews/Footer/Footer03"

import Footer01Jsx from "../components/previews/Footer/Footer01.jsx?raw"
import Footer01Css from "../components/previews/Footer/footer01.module.css?raw"

import Footer02Jsx from "../components/previews/Footer/Footer02.jsx?raw"
import Footer02Css from "../components/previews/Footer/footer02.module.css?raw"

import Footer03Jsx from "../components/previews/Footer/Footer03.jsx?raw"
import Footer03Css from "../components/previews/Footer/footer03.module.css?raw"

export const categoria = {
    id: "footer",
    nome: "Footer"
};

export const componentes = [
    {
        id: "footer-01",
        nome: "Footer 01",
        categoria: "footer",
        Component: Footer01,
        codigos: { jsx: Footer01Jsx, cssModule: Footer01Css },
    },
    {
        id: "footer-02",
        nome: "Footer 02",
        categoria: "footer",
        Component: Footer02,
        codigos: { jsx: Footer02Jsx, cssModule: Footer02Css },
    },
    {
        id: "footer-03",
        nome: "Footer 03",
        categoria: "footer",
        Component: Footer03,
        codigos: { jsx: Footer03Jsx, cssModule: Footer03Css },
    }
]
