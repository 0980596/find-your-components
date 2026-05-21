import { MoveRight, MousePointer2 } from 'lucide-react';
import styles from './hero03.module.css';

const avatarJoao = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80';
const avatarMaria = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80';
const crescimento = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80';
const frutos = 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&q=80';
const raizes = 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&q=80';

export default function Hero03() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroGallery}>

                {/* Background Dashed Lines */}
                <div className={styles.dashedLines}>
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className={styles.line} />
                    ))}
                </div>

                {/* Col 1 */}
                <div className={`${styles.heroCol} ${styles.col1}`}>
                    <div className={`${styles.placeholder} ${styles.aspectSq}`} />
                    <img src={avatarJoao} alt="User" className={styles.aspectSq} />
                    <img src={avatarMaria} alt="User" className={styles.aspectTall} />
                </div>

                {/* Col 2 */}
                <div className={`${styles.heroCol} ${styles.col2}`}>
                    <img src={crescimento} alt="User" className={styles.aspectPort} />
                    <img src={frutos} alt="User" className={styles.aspectSq} />
                </div>

                {/* Col 3 */}
                <div className={`${styles.heroCol} ${styles.col3}`}>
                    <div className={`${styles.placeholder} ${styles.aspectTall}`} />
                    <img src={raizes} alt="User" className={styles.aspectWide} />
                </div>

                {/* Col 4 */}
                <div className={`${styles.heroCol} ${styles.col4}`}>
                    <div className={`${styles.placeholder} ${styles.aspectSq}`} />
                    <img src={avatarJoao} alt="User" className={styles.aspectTall} />
                </div>

                {/* Col 5 */}
                <div className={`${styles.heroCol} ${styles.col5}`}>
                    <div className={`${styles.placeholder} ${styles.aspectSq}`} />
                    <img src={avatarMaria} alt="User" className={styles.aspectSq} />
                </div>

                {/* Col 6 */}
                <div className={`${styles.heroCol} ${styles.col6}`}>
                    <div className={`${styles.placeholder} ${styles.aspectTall}`} />
                    <img src={crescimento} alt="User" className={styles.aspectPort} />
                </div>

                {/* Col 7 */}
                <div className={`${styles.heroCol} ${styles.col7}`}>
                    <div className={`${styles.placeholder} ${styles.aspectSq}`} />
                    <img src={frutos} alt="User" className={styles.aspectWide} />
                    <div className={styles.fakeCursor}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.5 3.5L19 12L12 13.5L9 21L5.5 3.5Z"
                                fill="#1A1A1A"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Col 8 */}
                <div className={`${styles.heroCol} ${styles.col8}`}>
                    <img src={raizes} alt="User" className={styles.aspectSq} />
                    <img src={avatarJoao} alt="User" className={styles.aspectTall} />
                </div>

                {/* Col 9 */}
                <div className={`${styles.heroCol} ${styles.col9}`}>
                    <div className={`${styles.placeholder} ${styles.aspectSq}`} />
                    <img src={avatarMaria} alt="User" className={styles.aspectPort} />
                    <img src={crescimento} alt="User" className={styles.aspectSq} />
                </div>
            </div>

            <div className={styles.heroGradient} />

            <div className={styles.heroContent}>
                <div className={styles.heroBadge}>Testimonials</div>
                <h1 className={styles.heroTitle}>
                    Trusted by leaders<br />
                    <span className={styles.textGray}>from various industries</span>
                </h1>
                <p className={styles.heroDesc}>
                    Learn why professionals trust our solutions to complete their customer journeys.
                </p>
                <button className={styles.heroBtn}>
                    Read Success Stories
                    <MoveRight size={18} className={styles.btnIcon} />
                </button>
            </div>
        </section>
    );
}