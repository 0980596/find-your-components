import { useState, useRef, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import cleancodeDark from "../data/cleancodeDark"
import PreviewWindow from "../components/PreviewWindow"
import { componentes } from "../data"
import styles from "../styles/componenteDetalhe.module.css"

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ComponenteDetalhe() {
    const { id } = useParams()
    const componente = componentes.find(c => c.id === id)

    const [codigo, setCodigo] = useState("jsx")
    const [expandido, setExpandido] = useState(false)
    const codeRef = useRef(null)
    const [temMais, setTemMais] = useState(false)

    const [copiado, setCopiado] = useState(false)

    const codigoAtual = codigo === "jsx"
        ? componente?.codigos?.jsx || ""
        : componente?.codigos?.cssModule || ""

    useEffect(() => {
        setExpandido(false)
    }, [codigo])

    useEffect(() => {
        if (codeRef.current) {
            setTemMais(codeRef.current.scrollHeight > codeRef.current.clientHeight)
        }
    }, [codigoAtual])

    if (!componente) {
        return (
            <section className={styles.container}>
                <Link to="/" className={styles.voltar}>voltar</Link>
                <h1>Componente não encontrado</h1>
            </section>
        )
    }

    function copiarCodigo() {
        navigator.clipboard.writeText(codigoAtual)
        setCopiado(true)
        setTimeout(() => setCopiado(false), 1500)
    }

    return (
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
                    <button
                        className={`${styles.codeTab} ${codigo === "jsx" ? styles.codeTabAtiva : ""}`}
                        onClick={() => setCodigo("jsx")}
                    >
                        JSX
                    </button>
                    <button
                        className={`${styles.codeTab} ${codigo === "cssModule" ? styles.codeTabAtiva : ""}`}
                        onClick={() => setCodigo("cssModule")}
                    >
                        CSS Module
                    </button>
                    <button className={styles.copiarBtn} onClick={copiarCodigo}>
                        {copiado ? "Copiado!" : "Copiar"}
                    </button>
                </div>

                <div
                    ref={codeRef}
                    className={`${styles.codeBlock} ${expandido ? styles.codeBlockExpandido : styles.codeBlockRecolhido}`}
                >
                    <SyntaxHighlighter
                        language={codigo === "jsx" ? "jsx" : "css"}
                        style={cleancodeDark}
                        showLineNumbers
                        customStyle={{ fontSize: "0.85rem" }}
                    >
                        {codigoAtual}
                    </SyntaxHighlighter>
                </div>

                {temMais && (
                    <button className={styles.mostrarMais} onClick={() => setExpandido(!expandido)}>
                        {expandido ? "Mostrar menos" : "Mostrar mais"}
                    </button>
                )}

            </div>


        </section>
    )
}