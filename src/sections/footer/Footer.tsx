import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav>
                <ul>
                    <li>Sanket Pande</li>
                </ul>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
