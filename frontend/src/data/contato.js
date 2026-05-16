// 1. IMPORT do componente real (para renderizar preview)
import Contato01 from "../components/previews/Contato/Contato01"


// 2. IMPORT do código fonte como string (via ?raw do Vite)
import Contato01Jsx from "../components/previews/Contato/Contato01.jsx?raw"
import Contato01Css from "../components/previews/Contato/contato01.module.css?raw"

// 3. Array de categorias (para a Home)
export const categoria = {
    id: "contato",
    nome: "Contato",
    imagem: "https://xesque.rocketseat.dev/challenges/thumbnails/1758211162577.png"
};  


// 4. Array de componentes (sem tailwind)
export const componentes = [
    {
        id: "contato-01", nome: "Contato 01", categoria: "contato", Component: Contato01, codigos: { jsx: Contato01Jsx, cssModule: Contato01Css, },
    },
];