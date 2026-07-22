import { useState } from "react"
import { ChevronDown } from "lucide-react"
import styles from "./duvidas03.style.module.css"

export default function Duvidas03() {
    const [openId, setOpenId] = useState(null)

    const faqData = [
        {
            id: 1,
            question: "O que é essa solução?",
            answer: "Essa solução é uma ferramenta criada para acelerar processos de criação, ajudando você a economizar tempo em etapas técnicas."
        },
        {
            id: 2,
            question: "Para quem essa solução é indicada?",
            answer: "Para desenvolvedores, designers, freelancers, agências e criadores que querem ganhar velocidade para criar projetos e entregar com mais eficiência."
        },
        {
            id: 3,
            question: "Preciso saber programar para usar?",
            answer: "Não, o Zynic foi pensado para facilitar etapas técnicas, mas quem já tem noções de desenvolvimento consegue aproveitar ainda mais os resultados."
        },
        {
            id: 4,
            question: "Preciso instalar algo?",
            answer: "Sim. A ferramenta exige instalação, então você recebe as instruções necessárias para configuração e uso após a compra."
        }
    ]

    const toggleItem = (id) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.leftColumn}>
                    <h2 className={styles.title}>
                        {/* Frequently<br />asked questions */}
                         Dúvidas <br />frequentes
                    </h2>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.accordionList}>
                        {faqData.map((item) => {
                            const isOpen = openId === item.id
                            return (
                                <div key={item.id} className={styles.accordionItem}>
                                    <button
                                        className={styles.accordionHeader}
                                        onClick={() => toggleItem(item.id)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className={styles.question}>{item.question}</span>
                                        <ChevronDown className={`${styles.chevronIcon} ${isOpen ? styles.rotate : ""}`} />
                                    </button>
                                    {isOpen && (
                                        <div className={styles.answerContainer}>
                                            <p className={styles.answerText}>{item.answer}</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <p className={styles.footerText}>
                       Não encontrou a sua resposta <a href="#" className={styles.link}>entre em contato conosco</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}