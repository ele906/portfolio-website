import React from 'react'

function Skills() {
  const skillCategories = [
    {
      category: "Software",
      skills: ["RESTful APIs", "AWS", "Docker", "Agile/Scrum", "Git", "CI/CD Pipelines", "End-To-End Tests"]
    },
    {
      category: "Backend",
      skills: ["Java", "Python", "Node.js", "Flask", "Spring Boot", "Mockito", "Server-Side", "Database", "SQL", "PostgreSQL"]
    },
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "Next.js", "CSS/HTML", "Tailwind CSS", "Webpack", "UI/UX"]
    },
    {
      category: "Machine Learning",
      skills: ["PyTorch", "Transformer Architecture", "Recommendation Systems", "Hugging Face Transformers", "Embeddings", "Diffusion Models", "Reinforcement Learning", "Computer Vision", "Generative AI"]
    },
    {
      category: "AI Tools",
      skills: ["Claude Code", "Codex", "Large Language Models", "Agentic AI Systems", "RAG Systems"]
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
