import { Link } from "react-router-dom"
import style from "../styles/footer.module.css"

export default function Footer() {
    return (
        <>
            <section className={style.containerFooter}>

                <Link to="/">voltar</Link>

                <div className={style.listFooters}>

                    <div className={style.itemFooter}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1778591434005.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemFooter}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1778591434005.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemFooter}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1778591434005.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                </div>



            </section>


        </>
    )
}
