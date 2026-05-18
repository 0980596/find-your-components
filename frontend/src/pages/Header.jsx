import { Link } from "react-router-dom"
import { categoria, componentes } from "../data/header"
import PreviewWindow from "../components/PreviewWindow"
import style from "../styles/header.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Header() {
    return (
        <section className={style.containerHeader}>

            <div className={style.voltarbtn}>
                <ChevronLeft />
                <Link to="/">voltar</Link>
            </div>

            <div className={style.listHeader}>
                {componentes
                    .filter(c => c.categoria === categoria.id)
                    .map(item => (
                        <div className={style.itemHeader} key={item.id}>
                            <h2>{item.nome}</h2>
                            <PreviewWindow small={item.id === "header-02"}>
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
