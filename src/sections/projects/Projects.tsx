import React from 'react';

interface Project {
    title: string;
    description: string;
    link: string;
}

const Projects = () => {
    const projectList: Project[] = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'http://example.com/project-one'
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'http://example.com/project-two'
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
