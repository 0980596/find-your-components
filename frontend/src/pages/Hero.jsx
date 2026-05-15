import { Link } from "react-router-dom"
import style from "../styles/hero.module.css"

export default function Hero() {
    return (
        <>
            <section className={style.containerHero}>

                <Link to="/">voltar</Link>

                <div className={style.listHeros}>

                    <div className={style.itemHero}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758211965188.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemHero}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758211965188.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemHero}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758211965188.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                </div>



            </section>


        </>
    )
}
