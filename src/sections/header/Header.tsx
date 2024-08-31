import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>Sanket Pande</li>
                </ul>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
