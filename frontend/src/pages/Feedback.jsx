import { Link } from "react-router-dom"
import { categoria, componentes } from "../data/feedback"
import PreviewWindow from "../components/PreviewWindow"
import style from "../styles/feedback.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Feedback() {
    return (
        <section className={style.containerFeedback}>

            <div className={style.voltarbtn}>
                <ChevronLeft />
                <Link to="/">voltar</Link>
            </div>

            <div className={style.listFeedback}>
                {componentes
                    .filter(c => c.categoria === categoria.id)
                    .map(item => (
                        <div className={style.itemFeedback} key={item.id}>
                            <h2>{item.nome}</h2>
                            <PreviewWindow small>
                                <item.Component />
                            </PreviewWindow>
                            <div className={style.vercomponente}>
                                <Link to={`/componente/${item.id}`}>Clique aqui para ver o componente</Link>
                                <ChevronRight />
                            </div>

                        </div>
                    ))}
            </div>
        </section>
    )
}
