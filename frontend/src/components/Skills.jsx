import React from 'react'

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "REST APIs", "Data Pipelines"]
    },
    {
      category: "Databases",
      skills: ["SQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Methodologies",
      skills: ["Git", "Docker", "AWS", "Agile/Scrum", "CI/CD", "Code Reviews"]
    },
    {
      category: "AI/ML",
      skills: ["TensorFlow", "OpenCV", "NumPy", "Matplotlib", "scikit-learn"]
    }
  ]

  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <span key={skillIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
