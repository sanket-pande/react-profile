import Section from '../../components/section/Section';
import styles from './About.module.scss';

const About = () => {
    return (
        <Section className={styles.about} title="About" id="about">
            <p>
                I am a passionate Full Stack Engineer who is driven by a desire to solve complex problems through innovative engineering solutions.
            </p>
            <p>I specialize in creating scalable, high-performance web applications.</p>
        </Section>
    );
}

export default About;
