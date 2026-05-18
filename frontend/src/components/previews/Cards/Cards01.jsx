import { Flower2, Users, Globe } from 'lucide-react';
import styles from './cards01.module.css';

export default function ImpactSection() {

    const cards = [
        {
            wrapperClass: styles.offsetLightGreen,
            cardClass: styles.cardWhite,
            circleClass: `${styles.circleDecoration} ${styles.topRight} ${styles.greenCircle}`,
            iconWrapperClass: styles.impactIconBox,
            icon: <Flower2 size={20} color="#fff" />,
            number: '10k+',
            label: 'Sementes Plantadas',
        },
        {
            wrapperClass: styles.offsetBrown,
            cardClass: styles.cardDarkGreen,
            circleClass: `${styles.circleDecoration} ${styles.bottomLeft} ${styles.darkGreenCircle}`,
            iconWrapperClass: styles.impactIconClean,
            icon: <Users size={32} color="#fff" />,
            number: '500+',
            label: 'Comunidades',
        },
        {
            wrapperClass: styles.offsetPeach,
            cardClass: styles.cardBeige,
            circleClass: `${styles.circleDecoration} ${styles.middleLeft} ${styles.peachCircle}`,
            iconWrapperClass: styles.impactIconClean,
            icon: <Globe size={32} color="#9c6c49" />,
            number: '50ha',
            label: 'Área Restaurada',
        },
    ];

    return (
        <section className={styles.impactSection}>
            <div className={styles.impactHeader}>
                <h2>Nosso Impacto</h2>
                <p>Números que representam vidas e ecossistemas transformados.</p>
            </div>

            <div className={styles.impactGrid}>
                {cards.map(({ wrapperClass, cardClass, circleClass, iconWrapperClass, icon, number, label }) => (
                    <div key={label} className={`${styles.impactCardWrapper} ${wrapperClass}`}>
                        <div className={`${styles.impactCard} ${cardClass}`}>
                            <div className={circleClass} />
                            <div className={iconWrapperClass}>{icon}</div>
                            <h3>{number}</h3>
                            <span>{label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}