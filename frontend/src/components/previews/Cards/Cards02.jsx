import { Sprout, Leaf, Trees } from 'lucide-react';
import styles from './cards02.module.css';

export default function Cards02() {

    const items = [
        {
            icon: <Sprout size={20} />,
            year: '2020',
            title: 'The First Seed',
            description:
                'Founded with a mission to preserve endangered indigenous plant species in local community gardens.',
        },
        {
            icon: <Leaf size={20} />,
            year: '2022',
            title: 'Community Sprout',
            description:
                'Expanded our reach, partnering with 50 local farms to implement sustainable soil regeneration practices.',
        },
        {
            icon: <Trees size={20} />,
            year: '2024',
            title: 'Global Forest Initiative',
            description:
                'Launched our international seed bank exchange program, connecting conservationists worldwide.',
        },
    ];

    return (
        <section className={styles.journeySection}>
            <div className={styles.journeyHeader}>
                <span className={styles.journeySubtitle}>OUR JOURNEY</span>
                <h2>Impact Timeline</h2>
            </div>

            <div className={styles.journeyTimeline}>
                {items.map(({ icon, year, title, description }) => (
                    <div key={year} className={styles.journeyItem}>
                        <div className={styles.journeyIcon}>{icon}</div>
                        <div className={styles.journeyCard}>
                            <span className={styles.journeyYear}>{year}</span>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}