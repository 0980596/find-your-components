import { useState } from "react"
import styles from "./styles.module.css"
import { NavLink } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";


export default function Menu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <>
            <header className={styles.header}>
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X /> : <MenuIcon />}
                </button>

                <div
                    className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
                    onClick={closeMenu}
                />

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sessões</h2>
                        <div className={styles.linksContainer}>
                            <NavLink onClick={closeMenu} to="/header" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Headers</NavLink>
                            <NavLink onClick={closeMenu} to="/hero" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Hero</NavLink>
                            <NavLink onClick={closeMenu} to="/cards" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Cards</NavLink>
                            <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Carrossel</NavLink>
                            <NavLink onClick={closeMenu} to="/feedback" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Feedbacks</NavLink>
                            <NavLink onClick={closeMenu} to="/duvidas" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Duvidas</NavLink>
                            <NavLink onClick={closeMenu} to="/contato" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Contato</NavLink>
                            <NavLink onClick={closeMenu} to="/footer" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Footer</NavLink>
                        </div>
                    </div>


                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Componentes</h2>
                        <div className={styles.linksContainer}>
                            <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Buttons</NavLink>
                            <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Input</NavLink>
                            <NavLink onClick={closeMenu} to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Textarea</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
