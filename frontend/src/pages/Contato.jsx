import { Link } from "react-router-dom"
import { categoria, componentes } from "../data/contato"
import PreviewWindow from "../components/PreviewWindow"
import style from "../styles/contato.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Contato() {
    return (
        <section className={style.containerContato}>

            <div className={style.voltarbtn}>
                <ChevronLeft />
                <Link to="/">voltar</Link>
            </div>

            <div className={style.listContatos}>
                {componentes
                    .filter(c => c.categoria === categoria.id)
                    .map(item => (
                        <div className={style.itemContato} key={item.id}>
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