import Button from '../../components/button/Button';
import Section from '../../components/section/Section';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <Section className={styles.hero}>
            <h1 className={styles.title} >Hey, I am Sanket Pande</h1>
            <p>Software Engineer | Web Developer | Full Stack Engineer | Creator</p>
            <Button className={styles.cta} variant='primary' size='lg' > Contact me </Button>
        </Section >
    );
}
export default Hero;