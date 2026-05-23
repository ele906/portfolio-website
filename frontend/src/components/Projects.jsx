import React from 'react'

function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="date">{project.date}</p>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.id === 1 ? 'Play the game →' : 'Visit site →'}
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
