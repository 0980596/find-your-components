import { Link } from "react-router-dom"
import { categoria, componentes } from "../../data/feedback"
import PreviewWindow from "../../components/PreviewWindow"
import Menu from "../../components/Menu"
import style from "../../styles/categoria.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from "../../components/Header"

export default function Feedback() {
    return (
        <>
            <Header />
            <Menu />
            <section className={style.container}>

                <div className={style.list}>
                    {componentes
                        .filter(c => c.categoria === categoria.id)
                        .map(item => (
                            <div className={style.item} key={item.id}>
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
        </>
    )
}
