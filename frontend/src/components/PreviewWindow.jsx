import { useRef, useEffect, useState } from "react"
import styles from "./PreviewWindow.module.css"

export default function PreviewWindow({ children, small }) {
    const contentRef = useRef(null)
    const [windowHeight, setWindowHeight] = useState(0)

    useEffect(() => {
        if (!small || !contentRef.current) return

        const observer = new ResizeObserver(() => {
            const realHeight = contentRef.current.scrollHeight
            setWindowHeight(`${realHeight * 0.6}px`)
        })

        observer.observe(contentRef.current)
        return () => observer.disconnect()
    }, [small])

    return (
        <div
            className={`${styles.window} ${small ? styles.small : ""}`}
            style={small && windowHeight ? { height: windowHeight } : {}}
        >
            <div className={styles.content} ref={contentRef}>
                {children}
            </div>
        </div>
    )
}