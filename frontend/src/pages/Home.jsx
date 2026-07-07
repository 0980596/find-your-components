import { Link } from "react-router-dom"
import { MousePointerClick, Eye, Code, Sparkles } from "lucide-react"
import Footer from "../components/Footer"
import style from "../styles/home.module.css"
import Header from "../components/Header"

export default function Home() {
  return (
    <>

      <Header />

      <section id="home" className={style.hero}>
        <h1 className={style.heroTitle}>Find yours componentes</h1>
        <p className={style.heroSubtitle}>
          Componentes React prontos para copiar e usar no seu projeto.
          Escolha, visualize e copie o código em segundos.
        </p>
        <Link to={`/header`} className={style.ctaButton}>
          Explorar componentes
        </Link>
      </section>

      <section className={style.comoFunciona}>
        <h2 className={style.comoFuncionaTitle}>Como funciona</h2>
        <div className={style.passosContainer}>
          <div className={style.passo}>
            <div className={style.passoIcon}><MousePointerClick size={24} /></div>
            <h3 className={style.passoNome}>Escolha</h3>
            <p className={style.passoDesc}>Navegue pelas categorias e encontre o componente</p>
          </div>
          <div className={style.passo}>
            <div className={style.passoIcon}><Eye size={24} /></div>
            <h3 className={style.passoNome}>Visualize</h3>
            <p className={style.passoDesc}>Veja o componente em ação com preview ao vivo</p>
          </div>
          <div className={style.passo}>
            <div className={style.passoIcon}><Code size={24} /></div>
            <h3 className={style.passoNome}>Copie</h3>
            <p className={style.passoDesc}>Copie o código JSX e CSS e use no seu projeto</p>
          </div>
          <div className={style.passo}>
            <div className={style.passoIcon}><Sparkles size={24} /></div>
            <h3 className={style.passoNome}>Adapte</h3>
            <p className={style.passoDesc}>Converta para qualquer framework com prompts</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
