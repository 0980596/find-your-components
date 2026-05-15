import { Link } from "react-router-dom"
import style from "../styles/contato.module.css"

export default function Contato() {
    return (
        <>
            <section className={style.containerContato}>

                <Link to="/">voltar</Link>

                <div className={style.listContatos}>

                    <div className={style.itemContato}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758211162577.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemContato}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758211162577.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                    <div className={style.itemContato}>
                        <img src="https://xesque.rocketseat.dev/challenges/thumbnails/1758211162577.png" alt="" />
                        <Link to="/">ver</Link>
                    </div>

                </div>



            </section>


        </>
    )
}
