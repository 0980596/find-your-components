import { MessageSquare, ChevronRight } from 'lucide-react';
import styles from './feedback01.module.css';

const row1 = [
    {
        text: 'Switching to Credenza was a game-changer for us. Their platform streamlined our financial processes, saving us countless hours each month.',
        name: 'William Ashford',
        role: 'Product Manager, Google',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
        badge: 'G', badgeClass: styles.bgGoogle,
    },
    {
        text: 'The security features offered give us peace of mind knowing that our customer data is protected.',
        name: 'Scarlett Palmer',
        role: 'Marketing Director, Adobe',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
        badge: 'A', badgeClass: styles.bgAdobe,
    },
    {
        text: 'The integration process was seamless and we were up and running in no time.',
        name: 'Ruby Hayes',
        role: 'IT Director, Mailchimp',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
        badge: 'M', badgeClass: styles.bgMailchimp,
    },
    {
        text: 'The customer support has been outstanding. Whenever we have questions or need assistance, their team is quick to respond and incredibly helpful.',
        name: 'Laila Smith',
        role: 'Account Executive, Notion',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
        badge: 'N', badgeClass: styles.bgNotion,
    },
    {
        text: "We've seen a significant improvement in our compliance management since the switch.",
        name: 'Marlon Wright',
        role: 'Product Manager, Slack',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
        badge: 'S', badgeClass: styles.bgSlack,
    },
    {
        text: "I can't recommend Credenza enough! Their lending solutions have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times.",
        name: 'Samuel Kingsley',
        role: 'Financial Analyst, Squarespace',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
        badge: 'S', badgeClass: styles.bgSquarespace,
    },
];

const row2 = [...row1].reverse();

export default function feedback01() {
    return (
        <section className={styles.section}>

            <div className={styles.header}>
                <div className={styles.badge}>
                    <MessageSquare size={14} color="#666" />
                    Testimonials
                </div>
                <h2 className={styles.title}>What Our Clients Are Saying</h2>
                <p className={styles.subtitle}>
                    We take pride in delivering exceptional solutions that deliver great<br />
                    results. But don't just take our word for it.
                </p>
            </div>

            <div className={styles.carousel}>

                {/* Row 1 — direita para esquerda */}
                <div className={`${styles.marqueeWrapper} ${styles.marqueeRight}`}>
                    {[0, 1].map((clone) => (
                        <div key={clone} className={styles.marqueeTrack}>
                            {row1.map((item, i) => (
                                <div key={i} className={styles.card}>
                                    <p className={styles.cardText}>"{item.text}"</p>
                                    <div className={styles.author}>
                                        <div className={styles.authorInfo}>
                                            <h4>{item.name}</h4>
                                            <p>{item.role}</p>
                                        </div>
                                        <div className={styles.authorImage}>
                                            <img src={item.avatar} alt={item.name} className={styles.avatar} />
                                            <div className={`${styles.companyBadge} ${item.badgeClass}`}>{item.badge}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Row 2 — esquerda para direita */}
                <div className={`${styles.marqueeWrapper} ${styles.marqueeLeft}`}>
                    {[0, 1].map((clone) => (
                        <div key={clone} className={styles.marqueeTrack}>
                            {row2.map((item, i) => (
                                <div key={i} className={styles.card}>
                                    <p className={styles.cardText}>"{item.text}"</p>
                                    <div className={styles.author}>
                                        <div className={styles.authorInfo}>
                                            <h4>{item.name}</h4>
                                            <p>{item.role}</p>
                                        </div>
                                        <div className={styles.authorImage}>
                                            <img src={item.avatar} alt={item.name} className={styles.avatar} />
                                            <div className={`${styles.companyBadge} ${item.badgeClass}`}>{item.badge}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className={styles.footer}>
                <button className={styles.btnOutline}>
                    See all Reviews
                    <ChevronRight size={16} />
                </button>
            </div>

        </section>
    );
}