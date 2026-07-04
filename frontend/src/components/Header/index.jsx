import { useState } from "react"
import styles from "./styles.module.css"
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";


export default function Header() {



    return (
        <>

            <header className={styles.header}>

                <nav className={styles.nav}>


                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Sessões</h2>
                        <div className={styles.linksContainer}>
                            <NavLink to="/header" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Headers</NavLink>
                            <NavLink to="/hero" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Hero</NavLink>
                            <NavLink to="/cards" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Cards</NavLink>
                            <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Carrossel</NavLink>
                            <NavLink to="/feedback" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Feedbacks</NavLink>
                            <NavLink to="/duvidas" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Duvidas</NavLink>
                            <NavLink to="/contato" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Contato</NavLink>
                            <NavLink to="/footer" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Footer</NavLink>
                        </div>
                    </div>


                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Componentes</h2>
                        <div className={styles.linksContainer}>
                            <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Buttons</NavLink>
                            <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Input</NavLink>
                            <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Textarea</NavLink>
                        </div>
                    </div>


                </nav>

            </header>

        </>
    )
}
