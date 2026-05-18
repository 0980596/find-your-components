import styles from './footer01.module.css';

export default function Footer01() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* CTA Section */}
                <div className={styles.cta}>
                    <h2>
                        Take action now to stay compliant.<br />
                        Grow business without tension.
                    </h2>
                    <a href="#" className={styles.btnBookCall}>Book A Call</a>
                </div>

                <div className={styles.divider} />

                {/* Links Section */}
                <div className={styles.linksGrid}>
                    <div className={styles.col}>
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </div>
                    <div className={styles.col}>
                        <h4>Help</h4>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms &amp; Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className={styles.col}>
                        <h4>Resources</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                    <div className={styles.col}>
                        <h4>Links</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className={styles.bottom}>
                    <p>© Copyright 2024, All Rights Reserved</p>
                    <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}