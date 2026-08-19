import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
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

  const sweExperiences = experiences.filter(e => e.section === 'swe')
  const researchExperiences = experiences.filter(e => e.section === 'research')
  const otherExperiences = experiences.filter(e => e.section === 'other')

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience experiences={sweExperiences} title="Software Engineering" id="swe-experience" />
        <Experience experiences={researchExperiences} title="ML Research" id="research" />
        <Projects projects={projects} />
        <Hobbies />
        <Skills />
        <Experience experiences={otherExperiences} title="Other Experience" id="other-experience" />
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
      id: 3,
      title: "Hooked — Music Discovery App",
      description: "RESTful API built with React and Flask/Python backend with 15+ endpoints covering song recommendations, search, user profiles, and a friend system. Features a personalized recommendation algorithm (4.7/5 user satisfaction), Google OAuth + JWT authentication, and a PostgreSQL schema across 10 tables.",
      technologies: ["Python", "Flask", "React", "PostgreSQL", "JWT", "Google OAuth"],
      website: "https://hooked-e36.onrender.com",
      github: "https://github.com/ele906/hooked",
      date: "Jan 2026 - May 2026"
    },
    {
      id: 1,
      title: "Goose Flock Simulation Game",
      description: "Interactive web application simulating predator-prey dynamics with a Python backend and Node.js frontend. Implemented stochastic simulations using probabilistic methods to model environmental effects on flock behavior.",
      technologies: ["Python", 'Node.js', "Web Development", "Stochastic Simulation"],
      website: "https://ele906.github.io/GooseGame/",
      github: "https://github.com/ele906/GooseGame",
      date: "June 2025 - Aug 2025"
    }
  ]
}

function getLocalExperiences() {
  return [
    {
      id: 5,
      title: "Backend Engineering Intern",
      company: "NimbleRx (Y Combinator 2015)",
      location: "Redwood City, CA",
      date: "May 2026 - June 2026",
      description: [
        "Led projects from engineering designs to end-to-end testing, delivering features to 16M users",
        "Deployed an end-to-end medication reminder system with scheduling backend and push notifications",
        "Built a LLM-based prescription parser achieving 99% accuracy, 80% cost reduction, and 10x lower latency",
        "Leveraged Claude Code to accelerate development, using agentic AI workflows to iterate across the stack",
        "Deployed features to production through CI/CD pipelines and monitored performance through Kibana"
      ],
      section: "swe"
    },
    {
      id: 8,
      title: "Founding Software Engineer",
      company: "Oasia",
      location: "San Francisco, CA",
      date: "June 2026 - Present",
      description: [
        "Owned backend architecture, including Express middleware pipeline and PostgreSQL schema",
        "Designed a narrative-driven AI companion with persona state that progresses alongside user habit growth",
        "Built a crisis detection middleware on every chat request, routing flagged messages to resources"
      ],
      section: "swe"
    },
    {
      id: 7,
      title: "Consulting Intern",
      company: "Qvest",
      location: "New York, NY",
      date: "June 2026 - Aug 2026",
      description: [
        "Created an AI use case catalog with 12 tutorials; designed Gemini Skills for the company",
        "Developed an AppScript Documentation Catalog to ensure scripts are up-to-date and maintained regularly",
        "Conducted fit-gap analysis and vendor due diligence across 35 Accounts Payable platforms; built a weighted decision matrix to score vendors on fit and cost estimation"
      ],
      section: "other"
    },
    {
      id: 6,
      title: "Independent Research",
      company: "Princeton University",
      location: "Princeton, NJ",
      date: "Apr. 2026 - Present",
      description: [
        "Advised by Professor Vikram Ramaswamy",
        "Investigated fairness and interpretability of transformer-based diffusion models",
        "Designing a reward model based reinforcement learning pipeline that penalizes biased image generations",
        "Built ReNO, an interactive demo steering a one-step diffusion model (SDXL-Turbo) via reward-based noise optimization, with a fairness-regularized objective and measurement pipeline to track demographic drift in occupation prompts"
      ],
      website: "https://ele906.github.io/debiasing/ReNO/demo/reno_demo.html",
      section: "research"
    },
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "MacDermid Alpha Electronic Solutions",
      location: "Piscataway, NJ",
      date: "May 2025 - Aug 2025",
      description: [
        "Developed full-stack application with Python backend and frontend dashboard, integrating TensorFlow and OpenCV for particle detection with 95% accuracy",
        "Built automated monitoring system on ESP32 microcontroller with real-time dashboard for process tracking",
        "Developed data pipelines to process and clean large datasets from real-time monitoring systems",
        "Participated in code reviews and Agile/Scrum development practices, working effectively with cross-functional teams",
        "Deployed application as standalone executable across three research centers"
      ],
      section: "swe"
    },
    {
      id: 2,
      title: "Engineering Intern",
      company: "Hydrogen in Motion Inc.",
      location: "Burnaby, BC",
      date: "June 2024 - Aug 2024",
      description: [
        "Rebuilt corrupted SQL database with Python, implementing automated recovery scripts using regex and data pipelines",
        "Developed data pipelines to process and clean large datasets from real-time monitoring systems",
        "Debugged and resolved data inconsistencies in production database, collaborating with senior engineers"
      ],
      section: "other"
    },
    {
      id: 3,
      title: "Research Assistant",
      company: "University of Victoria",
      location: "Victoria, BC",
      date: "Jan 2023 - Dec 2023",
      description: [
        "Processed 200 GB of simulation data in Python using NumPy and Matplotlib, generating 13,000 plots and 250 animations",
        "Performed time-series analysis on simulation snapshots, contributing to peer-reviewed research paper",
        "Collaborated with research team to understand project requirements and deliver analysis solutions"
      ],
      section: "other"
    },
    {
      id: 4,
      title: "Teaching Assistant",
      company: "Princeton University",
      location: "Princeton, NJ",
      date: "Sept 2024 - Present",
      description: [
        "Teaching Assistant for Intro to Computer Science (COS126), General Physics II (PHY110), Circuits (ECE203)",
        "Help students understand fundamental programming concepts and problem-solving techniques",
        "Hold office hours and grade assignments for classes of 200+ students"
      ],
      section: "other"
    }
  ]
}

export default App