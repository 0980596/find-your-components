import styles from "./cards04.module.css"
import { TrendingUp, Cpu, Layout, Star } from "lucide-react"

export default function Cards04() {
    return (
        <section className={styles.introSection}>
            <div className={styles.container}>

                <div className={styles.introHeader}>
                    <h2 className={styles.title}>Planeje, organize e acompanhe estudos com mais clareza</h2>
                    <p className={styles.subtitle}>
                        Tudo o que você precisa para montar cronogramas e trilhas de aprendizado consistentes, com métodos práticos que simplificam sua rotina diária inteira.
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Card 1: Esquerda (Grande) */}
                    <div className={`${styles.cardLarge} ${styles.cardLarge1}`}>
                        <div className={styles.cardContent}>
                            <Star className={styles.cardIcon} />
                            <p className={styles.cardText}>
                                Organize a base semanal de metas, tarefas, revisões, blocos e prioridades com clareza
                            </p>
                        </div>
                    </div>

                    {/* Coluna Central: Duas caixas menores empilhadas */}
                    <div className={styles.middleColumn}>

                        {/* Card 2: Central Superior (Destaque Estatística) */}
                        <div className={styles.cardSmallCentered}>
                            <div className={styles.cardContentCentered}>
                                <TrendingUp className={styles.cardIconCentered} />
                                <span className={styles.statNumber}>100x</span>
                                <p className={styles.cardTextCentered}>
                                    mais consistência nos estudos, ao revisar e consolidar conteúdos
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Central Inferior (Padrão) */}
                        <div className={styles.cardSmall}>
                            <div className={styles.cardContent}>
                                <Cpu className={styles.cardIcon} />
                                <p className={styles.cardText}>
                                    1x planejamento contínuo, com acompanhamento diário para progresso real
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Card 4: Direita (Grande) */}
                    <div className={`${styles.cardLarge} ${styles.cardLarge4}`}>
                        <div className={styles.cardContent}>
                            <Layout className={styles.cardIcon} />
                            <p className={styles.cardText}>
                                Rotinas flexíveis e planejamento adaptável ajustados automaticamente
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}