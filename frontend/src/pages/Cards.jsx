import { Link } from "react-router-dom"
import { categoria, componentes } from "../data/cards"
import PreviewWindow from "../components/PreviewWindow"
import Menu from "../components/Menu"
import style from "../styles/cards.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from "../components/Header"

export default function Cards() {
    return (
        <>
            <Header />
            <Menu />
            <section className={style.containerCards}>

                <div className={style.listCards}>
                    {componentes
                        .filter(c => c.categoria === categoria.id)
                        .map(item => (
                            <div className={style.itemCards} key={item.id}>
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
