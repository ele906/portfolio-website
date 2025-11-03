import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import './App.css'

// API base URL - change this when you deploy the backend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

function App() {
  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch data from REST API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Parallel API calls for better performance
        const [projectsRes, experiencesRes] = await Promise.all([
          axios.get(`${API_URL}/projects`),
          axios.get(`${API_URL}/experiences`)
        ])
        
        setProjects(projectsRes.data)
        setExperiences(experiencesRes.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Fallback to local data if API is unavailable
        setProjects(getLocalProjects())
        setExperiences(getLocalExperiences())
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills />
        <Hobbies />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Eleanor Liu. Built with React and Node.js.</p>
      </footer>
    </div>
  )
}

// Fallback local data
function getLocalProjects() {
  return [
    {
      id: 1,
      title: "Honkonomics: Goose Flock Simulation",
      description: "Interactive Android application simulating predator-prey dynamics using Python and Kivy framework",
      technologies: ["Python", "Kivy", "Mobile Development"],
      github: "https://github.com/ele906/honkonomics",
      date: "June 2025 - Aug 2025"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "Full-stack web application with React frontend and Node.js backend, implementing REST API architecture",
      technologies: ["React", "Node.js", "MongoDB", "REST APIs"],
      github: "https://github.com/ele906/portfolio-website",
      date: "Sept 2024 - Dec 2024"
    }
  ]
}

function getLocalExperiences() {
  return [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "MacDermid Alpha Electronic Solutions",
      location: "Piscataway, NJ",
      date: "May 2025 - Aug 2025",
      description: [
        "Developed full-stack application with Python backend and frontend dashboard",
        "Built automated monitoring system with real-time dashboard",
        "Participated in code reviews and Agile/Scrum development"
      ]
    },
    {
      id: 2,
      title: "Engineering Intern",
      company: "Hydrogen in Motion Inc.",
      location: "Burnaby, BC",
      date: "June 2024 - Aug 2024",
      description: [
        "Rebuilt corrupted SQL database with Python",
        "Developed data pipelines for real-time systems",
        "Debugged and resolved data inconsistencies"
      ]
    }
  ]
}

export default App