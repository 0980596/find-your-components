import { Link } from "react-router-dom"
import style from "../styles/cards.module.css"

export default function Cards() {
    return (
        <>
            <section className={style.containerCards}>

                <Link to="/">voltar</Link>

                <div className={style.listCards}>

                    <div className={style.itemCards}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758043925009.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemCards}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758043925009.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemCards}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758043925009.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                </div>



            </section>


        </>
    )
}
