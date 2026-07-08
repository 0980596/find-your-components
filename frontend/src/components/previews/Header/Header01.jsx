import { useState, useEffect } from 'react';
import { FaPenNib, FaGithub } from 'react-icons/fa';
import {
    ChevronDown,
    Menu,
    X,
    House,
    BookOpen,
    Newspaper,
    LayoutDashboard,
} from 'lucide-react';
import styles from './Header01.module.css';

export default function Header01() {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = '';
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <>
            <header className={styles.headerMain}>
                {/* Logo */}
                <div className={styles.nameweb}>
                    <FaPenNib size={20} color="#0f172a" />
                    <a href="/" className={styles.namewebLink}>
                        <span>UI Color Lab</span>
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <a href="https://github.com/0980596" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="/docs">Docs</a>

                    <div className={styles.templates}>
                        <button>
                            Templates <ChevronDown size={14} />
                        </button>
                        <div className={styles.dropdown}>
                            <a href="#">Dashboard</a>
                            <a href="/">Blog Post</a>
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
                    <a href="/post" onClick={closeMenu}>
                        <Newspaper size={20} color="#64748b" /> Blog Post
                    </a>
                    <div className={styles.mobileSeparator} />
                    <a href="#" onClick={closeMenu}>
                        <LayoutDashboard size={20} color="#64748b" /> Dashboard
                    </a>
                </div>
            </div>
        </>
    );
}