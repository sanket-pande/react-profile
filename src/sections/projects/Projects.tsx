import { forwardRef } from 'react';
import Section from '../../components/section/Section';
import { SectionProps } from '../../interfaces/SectionProps';

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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                {projects.map((p) => (
                    <article key={p.title} style={{ borderRadius: 16, background: 'rgba(255,255,255,0.05)', padding: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ margin: 0 }}>{p.title}</h3>
                        <p style={{ marginTop: 8, opacity: 0.85 }}>{p.desc}</p>
                        <ul style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12, listStyle: 'none', padding: 0 }}>
                            {p.tags.map((t) => (
                                <li key={t} style={{ fontSize: 12, opacity: 0.9, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 9999, padding: '2px 8px' }}>{t}</li>
                            ))}
                        </ul>
                        <div style={{ marginTop: 12 }}>
                            <a href={p.href} onClick={(e) => e.preventDefault()} style={{ fontWeight: 600 }}>View →</a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
});

export default Projects;
