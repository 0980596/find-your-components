import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './duvidas02.style.module.css';

export default function Duvidas02() {

    const faqs = [
        {
            question: 'How to use this component?',
            answer:
                'Simply copy the HTML and CSS into your project. Make sure you have the Phosphor Icons library included in your head tag for the icons to work properly.',
        },
        {
            question: 'Are there any other components available?',
            answer:
                'Yes, we offer a wide variety of UI components including headers, footers, pricing tables, hero sections, and much more to speed up your development process.',
        },
        {
            question: 'Are components responsive?',
            answer:
                'Absolutely. All our components are designed with a mobile-first approach and look great on any screen size, from smartphones to large desktop monitors.',
        },
        {
            question: 'Can I customize the components?',
            answer:
                'Yes, the components are built with clean, standard HTML and CSS, making them extremely easy to modify and customize to fit your brand\'s unique style.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className={styles.faqModernSection}>
            <div className={styles.faqModernHeader}>
                <span className={styles.faqModernSubtitle}>FAQ's</span>
                <h2>Looking for answer?</h2>
                <p>
                    Ship Beautiful Frontends Without the Overhead — Customizable, Scalable
                    and Developer-Friendly UI Components.
                </p>
            </div>

            <div className={styles.faqModernList}>
                {faqs.map(({ question, answer }, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className={`${styles.faqModernItem} ${isActive ? styles.active : ''}`}
                        >
                            <button
                                className={styles.faqModernQuestion}
                                onClick={() => toggle(index)}
                                aria-expanded={isActive}
                            >
                                <h3>{question}</h3>
                                <span className={styles.faqModernIcon} aria-hidden="true">
                                    <ChevronDown size={20} />
                                </span>
                            </button>

                            <div className={styles.faqModernAnswer}>
                                <div>
                                    <p>{answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}