import Header01 from "../components/previews/Header/Header01"
import Header02 from "../components/previews/Header/Header02"

import Header01Jsx from "../components/previews/Header/Header01.jsx?raw"
import Header01Css from "../components/previews/Header/Header01.module.css?raw"

import Header02Jsx from "../components/previews/Header/Header02.jsx?raw"
import Header02Css from "../components/previews/Header/Header02.module.css?raw"

export const categoria = {
    id: "header",
    nome: "Header"
};

export const componentes = [
    {
        id: "header-01",
        nome: "Header 01",
        categoria: "header",
        Component: Header01,
        codigos: { jsx: Header01Jsx, cssModule: Header01Css },
    },
    {
        id: "header-02",
        nome: "Header 02",
        categoria: "header",
        Component: Header02,
        codigos: { jsx: Header02Jsx, cssModule: Header02Css },
    }
]