import React from 'react'

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-with-photo">
          <div className="about-photo">
            <img 
              src="/portfolio-website/images/headshot.jpg" 
              alt="Eleanor Liu"
              className="headshot"
            />
          </div>
          <div className="about-text">
            <p>
              Hi! I'm Eleanor Liu, a Computer Science student at Princeton University 
              with a minor in Statistics & Machine Learning. I'm passionate about 
              building full-stack applications and exploring the intersection of 
              software engineering and artificial intelligence.
            </p>
            <p>
              Currently maintaining a 3.97 GPA and recognized with the Shapiro Prize 
              for Academic Excellence (Top 3% of Class). I have hands-on experience 
              with full-stack development, machine learning, and data engineering from 
              internships at MacDermid Alpha and Hydrogen in Motion.
            </p>
            <p>
              When I'm not coding, you'll find me spending time with geese (yes, really!), 
              exploring geography, or working on projects that blend my love for 
              astronomy and indigenous advocacy.
            </p>
          </div>
        </div>
        <div className="links">
          <a href="https://github.com/ele906" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ele906" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:el8403@princeton.edu">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default About