import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import cleancodeDark from "../data/cleancodeDark"
import PreviewWindow from "../components/PreviewWindow"
import MainHeader from "../components/Header"
import { componentes } from "../data"
import styles from "../styles/componenteDetalhe.module.css"

import { ChevronLeft, Copy, CopyCheck } from 'lucide-react';

export default function ComponenteDetalhe() {
    const { id } = useParams()
    const componente = componentes.find(c => c.id === id)

    const [codigo, setCodigo] = useState("jsx")

    const [copiado, setCopiado] = useState(false)

    const codigoAtual = codigo === "jsx"
        ? componente?.codigos?.jsx || ""
        : componente?.codigos?.cssModule || ""

    if (!componente) {
        return (
            <>
                <MainHeader />
                <section className={styles.container}>
                    <Link to="/" className={styles.voltar}>voltar</Link>
                    <h1>Componente não encontrado</h1>
                </section>
            </>
        )
    }

    function copiarCodigo() {
        navigator.clipboard.writeText(codigoAtual)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 1500)
    }

    return (
        <>
            <MainHeader />
            <section className={styles.container}>

                <div className={styles.voltarbtn}>
                    <ChevronLeft />
                    <Link to={`/${componente.categoria}`}>voltar</Link>
                </div>

                <div className={styles.itemComponente}>

                    <h1 className={styles.titulo}>{componente.nome}</h1>

                    <PreviewWindow>
                        <componente.Component />
                    </PreviewWindow>

                    <div className={styles.codeTabs}>

                        <div className={styles.linguagemBtn}>
                            <button className={`${styles.codeTab} ${codigo === "jsx" ? styles.codeTabAtiva : ""}`} onClick={() => setCodigo("jsx")}>JSX</button>
                            <button className={`${styles.codeTab} ${codigo === "cssModule" ? styles.codeTabAtiva : ""}`} onClick={() => setCodigo("cssModule")}>CSS Module</button>
                        </div>

                    </div>

                    <div className={styles.codeWrapper}>
                        <div className={styles.codeBlock}>
                            <SyntaxHighlighter language={codigo === "jsx" ? "jsx" : "css"} style={cleancodeDark} showLineNumbers customStyle={{ fontSize: "0.85rem" }}>
                                {codigoAtual}
                            </SyntaxHighlighter>
                        </div>

                        <div className={styles.copyBtn}>
                            <button className={styles.copiarBtn} onClick={copiarCodigo}>{copiado ? <CopyCheck /> : <Copy />}</button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
