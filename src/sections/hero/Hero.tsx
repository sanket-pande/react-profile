import { forwardRef } from 'react';
import Bubbles from './Bubbles';
import Section from '../../components/section/Section';
import styles from './Hero.module.scss';

interface SectionProps {
    scrollToRef?: (id: string) => void;
}

const Hero = forwardRef<HTMLElement, SectionProps>(({ scrollToRef }, ref) => {
    return (
        <Section ref={ref} id="hero" className={styles.heroSection}>
            <div className={styles.grid}>
                <div className={styles.lead}>
                    <h1 className={styles.title}>
                        Hello, I am <strong>Sanket</strong>
                        <br />a full-stack developer
                        <br />located in Pune, India
                    </h1>

                    <p className={styles.subtitle}>
                        EXPLORE • EXPERIENCE • LEARN
                    </p>
                </div>

                <div aria-hidden className={styles.visual}>
                    <div className={styles.bubbleWrap}>
                        <Bubbles />
                    </div>
                </div>
            </div>
    </Section>
    );
});

export default Hero;