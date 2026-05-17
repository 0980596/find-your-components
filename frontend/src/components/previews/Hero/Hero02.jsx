import styles from './hero02.module.css';

export default function Hero02() {
    return (
        <section className={styles.rootsSection}>
            <div className={styles.rootsContent}>
                <div className={styles.rootsBadge}>Our Roots</div>
                <h2 className={styles.rootsHeading}>
                    Cultivating a Sustainable Future, Together.
                </h2>
                <p className={styles.rootsText}>
                    At Estação Verde, we believe that the path to a greener planet begins
                    with a single seed and a shared purpose.
                </p>
            </div>

            <div className={styles.rootsImageWrapper}>
                <div className={styles.rootsBlobBg} />
                <img
                    src="https://static.vecteezy.com/ti/fotos-gratis/t2/77684121-fechar-acima-do-sujo-maos-segurando-uma-jovem-verde-plantinha-dentro-fertil-solo-ao-ar-livre-foto.jpeg"
                    alt="Hands holding a plant"
                    className={styles.rootsImage}
                />
            </div>
        </section>
    );
}