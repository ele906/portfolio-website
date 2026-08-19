import React from 'react'

function Experience({ experiences, title, id }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company} | {exp.location}</p>
            <p className="date">{exp.date}</p>
            <ul>
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            {exp.website && (
              <div className="project-links">
                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="project-link">
                  View demo →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
