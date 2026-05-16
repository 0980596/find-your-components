import { Link } from "react-router-dom"
import { categoria, componentes } from "../data/contato"
import PreviewWindow from "../components/PreviewWindow"
import style from "../styles/contato.module.css"

export default function Contato() {
    return (
        <section className={style.containerContato}>
            <Link to="/">voltar</Link>
            <div className={style.listContatos}>
                {componentes
                    .filter(c => c.categoria === categoria.id)
                    .map(item => (
                        <div className={style.itemContato} key={item.id}>
                            <h2>{item.nome}</h2>
                            <PreviewWindow small>
                                <item.Component />
                            </PreviewWindow>
                            <Link to={`/componente/${item.id}`}>ver</Link>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}