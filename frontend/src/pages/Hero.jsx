import { Link } from "react-router-dom"
import { categoria, componentes } from "../data/hero"
import PreviewWindow from "../components/PreviewWindow"
import MainHeader from "../components/Header"
import style from "../styles/hero.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <>
            <MainHeader />
            <section className={style.containerHero}>

                <div className={style.listHeros}>
                    {componentes
                        .filter(c => c.categoria === categoria.id)
                        .map(item => (
                            <div className={style.itemHero} key={item.id}>
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
