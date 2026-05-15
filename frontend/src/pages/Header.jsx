import { Link } from "react-router-dom"
import style from "../styles/header.module.css"

export default function Header() {
    return (
        <>
            <section className={style.containerHeader}>

                <Link to="/">voltar</Link>

                <div className={style.listHeaders}>

                    <div className={style.itemHeader}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1759338602096.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemHeader}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1759338602096.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemHeader}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1759338602096.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                </div>



            </section>


        </>
    )
}