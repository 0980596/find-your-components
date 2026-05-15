import { Link } from "react-router-dom"
import style from "../styles/home.module.css"

export default function Home() {

  const itensCpmponente = [
    {
      type: "Header",
      src: "https://xesque.rocketseat.dev/challenges/thumbnails/1759338602096.png",
      alt: "tipo componente",
      linkto: "/header",
      link: "ver"
    },
    {
      type: "Hero",
      src: "https://xesque.rocketseat.dev/challenges/thumbnails/1758211965188.png",
      alt: "tipo componente",
      linkto: "/hero",
      link: "ver"
    },
    {
      type: "Cards",
      src: "https://xesque.rocketseat.dev/challenges/thumbnails/1758043925009.png",
      alt: "tipo componente",
      linkto: "/cards",
      link: "ver"
    },
    {
      type: "Contato",
      src: "https://xesque.rocketseat.dev/challenges/thumbnails/1758211162577.png",
      alt: "tipo componente",
      linkto: "/contato",
      link: "ver"
    },
    {
      type: "Footer",
      src: "https://xesque.rocketseat.dev/challenges/thumbnails/1778591434005.png",
      alt: "tipo componente",
      linkto: "/footer",
      link: "ver"
    }
  ]

  return (
    <>
      <main className={style.listaFiltroComponentes}>

        {itensCpmponente.map((itens, index) => (
          <div className={style.itemComponente} key={index}>
            <h1>{itens.type}</h1>
            <img src={itens.src} alt={itens.alt} />
            <Link to={itens.linkto}>{itens.link}</Link>
          </div>
        ))}

      </main>
    </>
  )
}
