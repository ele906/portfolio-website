import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav>
        <h1>Eleanor Liu</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#swe-experience">SWE</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Beyond Code</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#other-experience">Other Experience</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
