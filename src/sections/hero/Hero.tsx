import { forwardRef } from 'react';

import Button from '../../components/button/Button';
import Section from '../../components/section/Section';
import { SectionProps } from '../../interfaces/SectionProps';
import styles from './Hero.module.scss';


const Hero = forwardRef<HTMLElement, SectionProps>(({ scrollToRef }, ref) => {
    return (
        <Section className={styles.hero} ref={ref} id="hero">
            <h1 className={styles.title} >
                Hey, I am Sanket Pande
            </h1>
            <p>
                Software Engineer | Web Developer | Full Stack Engineer | Creator
            </p>

            <Button className={styles.cta} variant='primary' size='xl' onClick={() => scrollToRef?.('contact')} >
                Contact me
            </Button>
        </Section >
    );
});
export default Hero;