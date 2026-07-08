import { Link } from "react-router-dom"
import { categoria, componentes } from "../../data/header"
import PreviewWindow from "../../components/PreviewWindow"
import Menu from "../../components/Menu"
import style from "../../styles/categoria.module.css"

import HeaderContent from "../../components/Header"

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Header() {
    return (
        <>
            <HeaderContent />
            <Menu />
            <section className={style.container}>

                <div className={style.list}>
                    {componentes
                        .filter(c => c.categoria === categoria.id)
                        .map(item => (
                            <div className={style.item} key={item.id}>
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
        </>
    )
}
