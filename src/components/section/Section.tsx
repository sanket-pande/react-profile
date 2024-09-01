import React, { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    title?: string;
}

const Section: React.FC<SectionProps> = ({
    id,
    children,
    className = '',
    title,
}) => {
    return (
        <section className={`${styles.section} ${className}`} id={id}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}

export default Section;
