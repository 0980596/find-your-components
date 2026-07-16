import { useEffect, useRef } from "react";
import styles from './footer03.module.css';

export default function Footer03() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const particleCount = 100;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < particleCount; i++) {
            const span = document.createElement("span");
            span.classList.add(styles.particle);

            const size = 3 + Math.random() * 6;
            const distance = 10 + Math.random() * 15;
            const position = Math.random() * 100;
            const time = 3 + Math.random() * 3;
            const delay = -1 * (Math.random() * 10);

            span.style.setProperty("--dim", `${size}rem`);
            span.style.setProperty("--uplift", `${distance}rem`);
            span.style.setProperty("--pos-x", `${position}%`);
            span.style.setProperty("--dur", `${time}s`);
            span.style.setProperty("--delay", `${delay}s`);

            fragment.appendChild(span);
        }

        container.appendChild(fragment);
    }, []);

    return (
        <footer className={styles.footerSection}>
            <div className={styles.gooeyAnimations} ref={containerRef} id="particle-container"></div>

            <div className={styles.footerContent}>
                <div className={styles.column}>
                    <h4>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Careers</a>
                    <a href="#">Brand</a>
                </div>
                <div className={styles.column}>
                    <h4>Resources</h4>
                    <a href="#">Help Center</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
                <div className={styles.column}>
                    <h4>Social</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>

            <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="liquid-effect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="
                            1 0 0 0 0  
                            0 1 0 0 0  
                            0 0 1 0 0  
                            0 0 0 19 -9" result="liquid" />
                    </filter>
                </defs>
            </svg>
        </footer>
    );
}