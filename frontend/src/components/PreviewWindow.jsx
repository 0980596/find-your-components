import styles from "./PreviewWindow.module.css"

export default function PreviewWindow({ children, small }) {
    return (
        <div className={`${styles.window} ${small ? styles.small : ""}`}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}