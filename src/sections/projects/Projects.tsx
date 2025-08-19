import { forwardRef } from 'react';
import Section from '../../components/section/Section';
import { SectionProps } from '../../interfaces/SectionProps';
import styles from './Projects.module.scss';

interface Project {
    title: string;
    desc: string;
    tags: string[];
    href: string;
}

const Projects = forwardRef<HTMLElement, SectionProps>((_, ref) => {
    const projects: Project[] = [
        {
            title: 'Health Tracker Dashboard',
            desc: 'Responsive dashboard with charts, filters, and export — React + TypeScript.',
            tags: ['React', 'TS', 'Charts'],
            href: '#',
        },
        {
            title: 'API Design System',
            desc: 'Reusable API utilities with error handling and caching layers.',
            tags: ['Node.js', 'REST', 'OpenAPI'],
            href: '#',
        },
        {
            title: 'JSONForms Extensions',
            desc: 'Custom AJV validators, UX rules, and schema-driven components.',
            tags: ['JSON Schema', 'AJV', 'UX'],
            href: '#',
        },
    ];

    return (
        <Section id="projects" ref={ref} title="Selected Work">
            <div className={styles.projectsList}>
                {projects.map((p) => (
                    <article key={p.title} className={styles.projectCard}>
                        <h3>{p.title}</h3>
                        <p className={styles.projectDesc}>{p.desc}</p>
                        <ul className={styles.projectTags}>
                            {p.tags.map((t) => (
                                <li key={t} className={styles.projectTag}>{t}</li>
                            ))}
                        </ul>
                        <div className={styles.projectLinkWrap}>
                            <a href={p.href} onClick={(e) => e.preventDefault()} className={styles.projectLink}>View →</a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
});

export default Projects;
