import { useState } from "react"
import { BookOpen, ChevronDown, House, LayoutDashboard, Menu, Newspaper, X } from "lucide-react"
import { FaGithub, FaPenNib } from "react-icons/fa"
import styles from "./styles.module.css"

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    function openMenu() {
        setMenuOpen(true)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <>
            <header className={styles.headerMain}>
                {/* Logo */}
                <div className={styles.nameweb}>

                    <a href="/" className={styles.namewebLink}>
                        <img src={logo} alt="" />
                    </a>
                </div>


                <nav className={styles.desktopNav}>

                    <Link to="/">Início</Link>

                    <a href="https://github.com/0980596" target="_blank" rel="noreferrer">
                        GitHub
                    </a>

                    <Link to="/">Docs</Link>

                    <div className={styles.buttons}>

                        <div className={styles.templates}>
                            <button>
                                Componentes <ChevronDown size={14} />
                            </button>
                            <div className={styles.dropdown}>
                                <Link to="/header">Header</Link>
                                <Link to="/hero">Hero</Link>
                                <Link to="/cards">Cards</Link>
                                <Link to="/contato">Contato</Link>
                                <Link to="/feedback">Feedback</Link>
                                <Link to="/duvidas">Faq</Link>
                                <Link to="/footer">Footer</Link>
                            </div>
                        </div>

                        <div className={styles.linguage}>
                            <button>Pt - BR <ChevronDown size={14} /></button>
                            <div className={styles.dropdowntwo}>
                                <button>En - US</button>
                            </div>
                        </div>

                    </div>
                </nav>

                {/* Mobile hamburger */}
                <button className={styles.mobileMenuBtn} onClick={openMenu} aria-label="Open menu">
                    <Menu size={26} color="#0f172a" />
                </button>
            </header>

            {/* Overlay */}
            <div
                className={`${styles.mobileNavOverlay} ${menuOpen ? styles.open : ''}`}
                onClick={closeMenu}
            />

            {/* Mobile Nav */}
            <div className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}>
                <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close menu">
                    <X size={20} color="#0f172a" />
                </button>

                <div className={styles.mobileNavContent}>
                    <a href="/" onClick={closeMenu}>
                        <House size={20} color="#64748b" /> Home
                    </a>
                    <a href="https://github.com/0980596" target="_blank" rel="noreferrer" onClick={closeMenu}>
                        <FaGithub size={20} color="#64748b" /> GitHub
                    </a>
                    <a href="/docs" onClick={closeMenu}>
                        <BookOpen size={20} color="#64748b" /> Docs
                    </a>
                </div>
            </div>
        </>
    )
}
