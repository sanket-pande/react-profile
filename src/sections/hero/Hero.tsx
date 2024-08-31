import Button from '../../components/button/Button';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.mainContent}>
                <h1>Hey, I am Sanket Pande</h1>
                <p>Software Engineer | Web Developer | Full Stack Engineer | Creator</p>
                <Button className={styles.cta} variant='primary' size='large' > Contact me </Button>
            </div>
        </section>
    );
}
export default Hero;