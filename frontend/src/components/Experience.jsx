import React from 'react'

function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
