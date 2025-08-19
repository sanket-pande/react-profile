import { forwardRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SiHtml5, SiReact, SiPython, SiNodedotjs } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

import Button from '../../components/button/Button';
import Section from '../../components/section/Section';
import { SectionProps } from '../../interfaces/SectionProps';
import styles from './Hero.module.scss';

const Hero = forwardRef<HTMLElement, SectionProps>(({ scrollToRef }, ref) => {
    return (
        <Section className={styles.hero} ref={ref} id="hero">
            <div className={styles.title}>
                <h1>
                    Hello, I’m <strong>Sanket Pande</strong>.
                    <br />a full‑stack developer
                    <br />located in Pune, India
                </h1>
            </div>
            <p>
                I build delightful web apps with React, TypeScript, and Node.js — with a focus on performance,
                accessibility, and clean design.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button className={styles.cta} variant='primary' size='xl' onClick={() => scrollToRef?.('projects')}>
                    Explore work
                </Button>
                <Button className={styles.cta} variant='secondary' size='xl' onClick={() => scrollToRef?.('contact')}>
                    Contact me
                </Button>
            </div>

            <div style={{ position: 'relative', width: '100%', minHeight: 280, marginTop: '2rem' }}>
                <Bubbles />
            </div>
        </Section >
    );
});

export default Hero;

function Bubbles() {
    const items = useMemo(
        () => [
            {
                key: 'html',
                size: 88,
                x: '8%',
                y: 10,
                color: 'linear-gradient(135deg, rgba(196,181,253,1) 0%, rgba(221,214,254,1) 100%)',
                label: 'HTML',
                Icon: SiHtml5,
            },
            {
                key: 'react',
                size: 128,
                x: '30%',
                y: 40,
                color: 'linear-gradient(135deg, rgba(221,214,254,1) 0%, rgba(237,233,254,1) 100%)',
                label: 'React',
                Icon: SiReact,
            },
            {
                key: 'python',
                size: 136,
                x: '55%',
                y: 70,
                color: 'linear-gradient(135deg, rgba(167,139,250,1) 0%, rgba(196,181,253,1) 100%)',
                label: 'Python',
                Icon: SiPython,
            },
            {
                key: 'node',
                size: 120,
                x: '75%',
                y: 110,
                color: 'linear-gradient(135deg, rgba(221,214,254,1) 0%, rgba(237,233,254,1) 100%)',
                label: 'Node.js',
                Icon: SiNodedotjs,
            },
            {
                key: 'java',
                size: 160,
                x: '85%',
                y: 150,
                color: 'linear-gradient(135deg, rgba(196,181,253,1) 0%, rgba(221,214,254,1) 100%)',
                label: 'Java',
                Icon: FaJava,
            },
        ],
        []
    );

    return (
        <div style={{ position: 'absolute', inset: 0 }}>
            {items.map((b, idx) => (
                <FloatingBubble {...b} delay={idx * 0.12} key={b.key} />
            ))}
        </div>
    );
}

function FloatingBubble({
    size,
    x,
    y,
    color,
    label,
    Icon,
    delay = 0,
}: {
    size: number;
    x: string;
    y: number;
    color: string;
    label: string;
    Icon: any;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 12, delay }}
            style={{ position: 'absolute', left: x, top: y, width: size, height: size }}
        >
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6 + Math.random() * 2, repeat: Infinity }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    borderRadius: '9999px',
                    background: color,
                    color: '#111827',
                    boxShadow: '0 10px 30px rgba(49,46,129,0.15)',
                    border: '1px solid rgba(255,255,255,0.25)'
                }}
            >
                {Icon ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Icon style={{ fontSize: 20, opacity: 0.9 }} />
                        <span style={{ marginTop: 4, fontSize: 12, fontWeight: 600, opacity: 0.9 }}>{label}</span>
                    </div>
                ) : (
                    <span className="sr-only">decorative bubble</span>
                )}
            </motion.div>
        </motion.div>
    );
}