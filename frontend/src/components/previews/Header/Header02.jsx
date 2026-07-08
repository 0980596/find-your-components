import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import styles from './Header02.module.css';

export default function Header02() {

    const navItems = [
        { label: 'How it works', hasDropdown: true },
        { label: 'Pricing', hasDot: true },
        { label: 'Resources', hasDropdown: true },
        { label: 'Company', hasDropdown: true },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <header className={styles.roxxHeader}>
            <div className={styles.roxxContainer}>
                {/* Logo */}
                <a href="/" className={styles.roxxLogo}>Roxx</a>

                {/* Desktop Nav */}
                <nav className={styles.roxxNavDesktop}>
                    {navItems.map(({ label, hasDropdown, hasDot }) => (
                        <div key={label} className={styles.roxxNavItem}>
                            <a href="#">{label}</a>
                            {hasDropdown && <ChevronDown size={12} />}
                            {hasDot && <span className={styles.roxxBadgeDot} />}
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className={styles.roxxActions}>
                    <a href="#" className={styles.roxxLogin}>Log in</a>
                    <a href="#" className={styles.roxxBtnPrimary}>Let's Talk</a>

                    <button className={styles.roxxMobileBtn} onClick={toggleMenu} aria-label="Toggle menu">
                        {menuOpen ? <X size={26} color="#111827" /> : <Menu size={26} color="#111827" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div className={`${styles.roxxMobileDropdown} ${menuOpen ? styles.open : ''}`}>
                <nav className={styles.roxxMobileNav}>
                    <a href="#">How it works</a>
                    <a href="#">
                        Pricing <span className={styles.roxxBadgeDot} />
                    </a>
                    <a href="#">Resources</a>
                    <a href="#">Company</a>
                    <div className={styles.roxxMobileSeparator} />
                    <a href="#" className={styles.roxxMobileLogin}>Log in</a>
                    <a href="#" className={`${styles.roxxBtnPrimary} ${styles.roxxBtnMobileFix}`}>
                        Let's Talk
                    </a>
                </nav>
            </div>
        </header>
    );
}