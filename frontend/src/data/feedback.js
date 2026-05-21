import Feedback01 from "../components/previews/Feedbacks/Feedback01"
import Feedback02 from "../components/previews/Feedbacks/Feedback02"

import Feedback01Jsx from "../components/previews/Feedbacks/Feedback01.jsx?raw"
import Feedback01Css from "../components/previews/Feedbacks/feedback01.module.css?raw"

import Feedback02Jsx from "../components/previews/Feedbacks/Feedback02.jsx?raw"
import Feedback02Css from "../components/previews/Feedbacks/feedback02.module.css?raw"

export const categoria = {
    id: "feedback",
    nome: "Feedback"
};

export const componentes = [
    {
        id: "feedback-01",
        nome: "Feedback 01",
        categoria: "feedback",
        Component: Feedback01,
        codigos: { jsx: Feedback01Jsx, cssModule: Feedback01Css },
    },
    {
        id: "feedback-02",
        nome: "Feedback 02",
        categoria: "feedback",
        Component: Feedback02,
        codigos: { jsx: Feedback02Jsx, cssModule: Feedback02Css },
    }
]
