import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import styles from './duvidas01.style.module.css';

export default function Duvidas01() {

    const faqs = [
        {
            question: 'O que exatamente a Grande Videira faz?',
            answer:
                'A Grande Videira é uma plataforma e comunidade focada em promover a sustentabilidade, educação ambiental e práticas ecológicas. Nós conectamos indivíduos a iniciativas locais, facilitamos a troca de sementes, oferecemos oficinas e criamos uma rede de apoio mútuo para transformar espaços urbanos em ambientes verdes.',
        },
        {
            question: 'Como posso participar ou iniciar um projeto na minha comunidade?',
            answer:
                'Você pode começar se juntando aos nossos encontros e oficinas presenciais e virtuais. Além disso, oferecemos guias práticos e materiais educativos para que você possa dar os primeiros passos na criação de hortas comunitárias, compostagem ou regeneração de solo no seu bairro.',
        },
        {
            question: 'A rede é apenas para especialistas em jardinagem?',
            answer:
                'De forma alguma! Nossa comunidade foi desenhada para abraçar desde iniciantes que querem começar plantando temperos na cozinha até professores, arquitetos sustentáveis e paisagistas profissionais. O objetivo é compartilhar conhecimento acessível e ecológico para todos.',
        },
        {
            question: 'Como funciona a troca de sementes e recursos?',
            answer:
                'Através da nossa plataforma digital e dos nossos polos locais, facilitamos a conexão direta entre membros da comunidade. Você pode catalogar sementes raras e nativas, enviar mudas excedentes para outras regiões e trocar vivências reais com outras pessoas que estão plantando um futuro mais verde.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqHeader}>
                <span className={styles.faqSubtitle}>Dúvidas frequentes</span>
                <h2>Tudo o que você precisa saber</h2>
            </div>

            <div className={styles.faqList}>
                {faqs.map(({ question, answer }, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggle(index)}
                                aria-expanded={isActive}
                            >
                                <h3>{question}</h3>
                                <span className={styles.faqIcon} aria-hidden="true">
                                    {isActive ? <X size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div className={styles.faqAnswer}>
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