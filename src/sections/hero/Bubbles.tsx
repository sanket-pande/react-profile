import { useMemo } from 'react';
import { SiHtml5, SiReact, SiPython, SiNodedotjs } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import FloatingBubble from './FloatingBubble';
import styles from './Hero.module.scss';

function Bubbles() {
    const items = useMemo(
        () => [
            // Slightly smaller sizes and inset positions to prevent clipping within the visual container.
            { key: 'html',  size: 110, x: '6%',  y: '10%', color: '#6C5CE7', label: 'HTML',   Icon: SiHtml5 },
            { key: 'react', size: 160, x: '26%', y: '30%', color: '#00B894', label: 'React',  Icon: SiReact },
            { key: 'python',size: 180, x: '58%', y: '42%', color: '#A29BFE', label: 'Python', Icon: SiPython },
            { key: 'node',  size: 140, x: '14%', y: '64%', color: '#55EFC4', label: 'Node.js',Icon: SiNodedotjs },
            { key: 'java',  size: 190, x: '72%', y: '78%', color: '#0984E3', label: 'Java',   Icon: FaJava },
        ],
        []
    );

    return (
        <div className={styles.bubblesContainer}>
            {items.map((b, idx) => (
                <FloatingBubble {...b} delay={idx * 0.15} key={b.key} />
            ))}
        </div>
    );
}

export default Bubbles;