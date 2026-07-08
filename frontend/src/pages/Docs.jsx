import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import styles from '../styles/docs.module.css';
import Header from "../components/Header"
import Footer from "../components/Footer"
import { categorias } from "../data"

export default function Docs() {
    return (
        <>
        <Header />

        <section className={styles.container}>
            <div className={styles.content}>
                <div id="intro" className={styles.section}>
                    <h2 className={styles.subtitle}>Introdução</h2>
                    <p className={styles.text}>
                        Biblioteca de componentes React prontos para copiar e usar.
                        Cada componente vem com JSX e CSS Module.
                    </p>
                </div>

                <div id="como-usar" className={styles.section}>
                    <h2 className={styles.subtitle}>Como usar</h2>
                    <div className={styles.comoUsar}>
                        <div className={styles.comoUsarItem}>
                            <span className={styles.comoUsarNum}>1</span>
                            <div>
                                <h3 className={styles.comoUsarTitulo}>Navegue</h3>
                                <p className={styles.comoUsarDesc}>Escolha uma categoria e encontre o componente que precisa</p>
                            </div>
                        </div>
                        <div className={styles.comoUsarItem}>
                            <span className={styles.comoUsarNum}>2</span>
                            <div>
                                <h3 className={styles.comoUsarTitulo}>Copie</h3>
                                <p className={styles.comoUsarDesc}>Copie o código JSX e o CSS Module</p>
                            </div>
                        </div>
                        <div className={styles.comoUsarItem}>
                            <span className={styles.comoUsarNum}>3</span>
                            <div>
                                <h3 className={styles.comoUsarTitulo}>Use</h3>
                                <p className={styles.comoUsarDesc}>Cole no seu projeto e comece a usar</p>
                            </div>
                        </div>
                        <div className={styles.comoUsarItem}>
                            <span className={styles.comoUsarNum}>4</span>
                            <div>
                                <h3 className={styles.comoUsarTitulo}>Converta</h3>
                                <p className={styles.comoUsarDesc}>Copie o prompt e use com IA para qualquer framework</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="componentes" className={styles.section}>
                    <h2 className={styles.subtitle}>Componentes</h2>
                    <p className={styles.text}>Aqui você encontra todos os componentes disponíveis na biblioteca. Estamos trabalhando para adicionar mais componentes.</p>
                    <div className={styles.grid}>
                        {categorias.map(cat => (
                            <Link key={cat.id} to={`/${cat.id}`} className={styles.gridItem}>{cat.nome}</Link>
                        ))}
                    </div>
                </div>

                <div id="open-source" className={styles.cta}>
                    <FaGithub size={40} className={styles.ctaIcon} />
                    <h2 className={styles.ctaTitle}>Open Source</h2>
                    <p className={styles.ctaText}>Este projeto é aberto e aceita contribuições. Sinta-se à vontade para abrir issues e pull requests.</p>
                    <div className={styles.ctaButtons}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>Contribuir no GitHub</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.ctaBtnOutline}>Ver código fonte</a>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        </>
    )
}
