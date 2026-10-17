import React from 'react'

function Experience({ experiences, title, id }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} id={exp.anchorId} className="experience-card">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company} | {exp.location}</p>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>
                  {typeof item === 'string' ? item : (
                    <>
                      {item.text}{' '}
                      <a href={item.linkHref} className="project-link inline-link">{item.linkText}</a>
                    </>
                  )}
                </li>
              ))}
            </ul>
            {exp.skills && exp.skills.length > 0 && (
              <div className="tech-stack">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="tech-tag">{skill}</span>
                ))}
              </div>
            )}
            {(exp.website || exp.github) && (
              <div className="project-links">
                {exp.website && <a href={exp.website} target="_blank" rel="noopener noreferrer" className="project-link">
                  View demo →
                </a>}
                {exp.github && (
                  <a href={exp.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    View code →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
