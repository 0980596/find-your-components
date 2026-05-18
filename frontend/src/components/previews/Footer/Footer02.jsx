import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import styles from './footer02.module.css';

export default function Footer02() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Main Footer Content */}
                <div className={styles.main}>

                    {/* Brand Column */}
                    <div className={styles.brand}>
                        <a href="/" className={styles.logo}>LOGO</a>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
                            aliquet accumsan porta lectus ridiculus in mattis.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Twitter"><FaTwitter size={22} /></a>
                            <a href="#" aria-label="Facebook"><FaFacebook size={22} /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram size={22} /></a>
                            <a href="#" aria-label="GitHub"><FaGithub size={22} /></a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className={styles.linksWrapper}>
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
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className={styles.bottom}>
                    <div className={styles.bottomLinks}>
                        <a href="#">About us</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Sitemap</a>
                        <a href="#">Terms of Use</a>
                    </div>
                    <p className={styles.copyright}>© 2023, All Rights Reserved</p>
                </div>

            </div>
        </footer>
    );
}