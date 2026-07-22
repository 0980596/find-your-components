import { categoria, componentes } from "../../data/contato"
import ComponentActions from "../../components/ComponentActions"
import Menu from "../../components/Menu"
import style from "../../styles/categoria.module.css"
import Header from "../../components/Header"

export default function Contato() {
    return (
        <>
            <Header  />
            <Menu />
            <section className={style.container}>

                <div className={style.list}>
                    {componentes
                        .filter(c => c.categoria === categoria.id)
                        .map(item => (
                            <div className={style.item} key={item.id}>
                                <h2>{item.nome}</h2>
                                <ComponentActions item={item} previewSmall />

                            </div>
                        ))}
                </div>
            </section>
        </>
    )
}
