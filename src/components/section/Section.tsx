import { forwardRef, ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    title?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
    id,
    children,
    className = '',
    title,
}, ref) => {
    return (
        <section className={`${styles.section} ${className}`} id={id} ref={ref}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
});
export default Section;
