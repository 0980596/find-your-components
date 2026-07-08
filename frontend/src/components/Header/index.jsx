import styles from "./styles.module.css"
import { NavLink, Link } from "react-router-dom"
import { Sun } from "lucide-react"
import { FaGithub } from "react-icons/fa"

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link to="/" className={styles.logo}>Find yours components</Link>
            </div>

            <nav className={styles.center}>
                <NavLink to="/docs" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Docs</NavLink>
                <NavLink to="/header" className={({ isActive }) => `${styles.link} ${isActive ? styles.activeLink : ""}`}>Componentes</NavLink>
                <button className={styles.badge}>In beta</button>
            </nav>

            <div className={styles.right}>
                <a href="https://github.com/0980596/find-your-components" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FaGithub size={18} />
                </a>
                <span className={styles.separator}></span>
                <button type="button" className={styles.iconButton}>
                    <Sun size={18} />
                </button>
            </div>
        </header>
    )
}
