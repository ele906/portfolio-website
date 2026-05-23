import React from 'react'

function About() {
  const scrollToGooseGame = (e) => {
    e.preventDefault()
    const el = document.getElementById('goose-game')
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => {
      el.classList.remove('goose-bounce')
      void el.offsetWidth
      el.classList.add('goose-bounce')
      el.addEventListener('animationend', () => el.classList.remove('goose-bounce'), { once: true })
    }, 600)
  }

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
              Hi, I'm Eleanor Liu! I'm a CS student at Princeton with a minor in Stats & ML, currently in my junior year.
            </p>
            <p>
              I like building things with code, including full-stack apps, data pipelines, ML systems. This summer I'm at NimbleRx working on backend infrastructure, and I've done stints at MacDermid Alpha (computer vision for particle detection) and Hydrogen in Motion (database recovery from scratch).
            </p>
            <p>
              Outside of code I'm into astronomy, geography, and most importantly, geese! (Please scroll down to <a href="#goose-game" onClick={scrollToGooseGame}>play my goose game</a> :D)
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
          <a href="mailto:e36@princeton.edu">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default About