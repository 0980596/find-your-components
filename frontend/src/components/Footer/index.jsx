import style from "./style.module.css";

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style.footer}>
                    <p><a target="_blank" href="https://portf-lio-nu-swart.vercel.app/">Construído por Pedro Amancio</a></p>
                    <p>@ 2026 Pedro Amancio</p>
                </div>
            </footer>
        </>
    )
}