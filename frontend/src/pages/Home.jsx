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
      src: "https://designtocodes.com/wp-content/uploads/2024/02/Top-10Hero-Section-Web-UI-Kits-and-Libraries-Collection-2024.jpg",
      alt: "tipo componente",
      linkto: "/hero",
      link: "ver"
    },
    {
      type: "Cards",
      src: "https://s3-alpha.figma.com/hub/file/3717074969/8f8c4a6d-c474-476d-8e5f-f0c1292715e9-cover.png",
      alt: "tipo componente",
      linkto: "/cards",
      link: "ver"
    },
    {
      type: "Contato",
      src: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/67040f6fbefa003eaf51aa74ddf3e66e44979607",
      alt: "tipo componente",
      linkto: "/contato",
      link: "ver"
    },
    {
      type: "Footer",
      src: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/9c63663b7fea0e2555e9bb461aa7ff880ac71f89/2ea084161754c66e825a6697db2fc27c736cdfd1",
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
