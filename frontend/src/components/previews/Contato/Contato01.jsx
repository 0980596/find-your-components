import { useState } from "react"
import emailjs from "@emailjs/browser"
import styles from "./contato01.module.css"

export default function Contato01() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        requirement: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [message, setMessage] = useState(null)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setMessage(null)

        emailjs.send("service_pedroenviar", "template_sfzcc1p", {
            name: formData.name,
            email: formData.email,
            message: `Website: ${formData.website}\n\nRequirement: ${formData.requirement}`,
        }, {
            publicKey: "w-8DdyzcR8J10Ccw2",
        })
            .then(() => {
                setMessage({ type: 'success', text: "Mensagem enviada com sucesso!" })
                setFormData({ name: "", email: "", website: "", requirement: "" })
                setIsSubmitting(false)
            })
            .catch((error) => {
                setMessage({ type: 'error', text: `Erro ao enviar mensagem: ${error}` })
                setIsSubmitting(false)
            })
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerInner}>
                        <h2 className={styles.title}>Let's get started today</h2>
                        <p className={styles.description}>
                            Fill up the form & we will get back to you in next 24 hours or less
                        </p>
                    </div>
                </div>

                <div className={styles.formWrapper}>
                    {message && (
                        <div className={message.type === 'success' ? styles.successMessage : styles.errorMessage}>
                            {message.text}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="website" className={styles.label}>Current Website (Optional)</label>
                            <input
                                id="website"
                                name="website"
                                type="url"
                                value={formData.website}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="requirement" className={styles.label}>Your Requirement *</label>
                            <textarea
                                id="requirement"
                                name="requirement"
                                value={formData.requirement}
                                onChange={handleInputChange}
                                placeholder="Write in details. Or, record a screen recorded video sharing what you want from us"
                                className={styles.textarea}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Requirement'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
