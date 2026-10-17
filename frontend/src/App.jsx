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
      description: [
        "Designed a tiered recommendation system using neural collaborative filtering (NeuMF) with a genre-based cold-start fallback and epsilon-greedy exploration to personalize song recommendations",
        "Built and trained a decoder-only transformer from scratch for genre-conditioned song title generation",
        "Integrated a pretrained generative transformer (MusicGen) to produce music conditioned on user taste",
        "Built the React frontend for users to explore recommendations and generated tracks end-to-end"
      ],
      technologies: ["Python", "PyTorch", "Flask", "React", "PostgreSQL", "JWT", "Google OAuth"],
      website: "https://hooked-e36.onrender.com",
      github: "https://github.com/ele906/hooked",
      date: "May 2026 - Present"
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
      id: 8,
      title: "Software Engineer",
      company: "Oasia",
      location: "San Francisco, CA",
      date: "June 2026 - Present",
      description: [
        "Owned backend architecture, including Express middleware pipeline and PostgreSQL schema",
        "Designed a narrative-driven AI companion with persona state that progresses alongside user habit growth",
        "Built a crisis detection middleware on every chat request, routing flagged messages to resources"
      ],
      skills: ["Express", "PostgreSQL", "System Design", "AI Product Design"],
      section: "swe"
    },
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
      skills: ["Java", "Flutter", "LLMs", "CI/CD", "Kibana", "Agentic AI Workflows"],
      section: "swe"
    },
    {
      id: 1,
      title: "Engineering Intern",
      company: "MacDermid Alpha Electronic Solutions",
      location: "Piscataway, NJ",
      date: "May 2025 - Aug 2025",
      description: [
        {
          text: "Developed full-stack application with Python backend and frontend dashboard, integrating TensorFlow and OpenCV for particle detection with 95% accuracy; deployed application as standalone executable across three research centers",
          linkText: "Read more →",
          linkHref: "#particle-detection"
        },
        "Created a data analysis pipeline, processing real-time sensor data to detect reaction endpoints and anomalies",
        "Built automated monitoring system on ESP32 microcontroller with real-time dashboard for process tracking",
        "Developed data pipelines to process and clean large datasets from real-time monitoring systems"
      ],
      skills: ["Python", "TensorFlow", "OpenCV", "Full-Stack Development", "Agile", "Code Reviews"],
      section: "swe"
    },
    {
      id: 6,
      title: "Independent Research — Debiasing Diffusion Models with SAEs",
      company: "Princeton University",
      location: "Princeton, NJ",
      date: "Apr. 2026 - Present",
      description: [
        "Advised by Professor Vikram Ramaswamy",
          "Tuning sparse autoencoders (SAEs) to study interpretable features in diffusion models",
        "Investigating SAE-based feature steering to reduce bias in generated images",
        "Developing demo notebooks to explore SAE features and debiasing interventions"
      ],
      website: "https://ele906.github.io/sae-demo-notebooks/",
      github: "https://github.com/ele906/cos398",
      skills: ["Sparse Autoencoders", "Diffusion Models", "Mechanistic Interpretability", "Fairness", "Machine Learning", "Research"],
      section: "research"
    },
    {
      id: 9,
      anchorId: "particle-detection",
      title: "Particle Detection System",
      company: "MacDermid Alpha Electronic Solutions",
      location: "Piscataway, NJ",
      date: "May 2025 - Aug 2025",
      description: [
        "Developed a machine learning model using PyTorch and OpenCV to detect and measure particles",
        "Fine-tuned StarDist model to achieve 95% accuracy, reducing analysis time from hours to 15 seconds",
        "Measured per-particle attributes—size, eccentricity, and inter-particle spacing—to characterize each detected particle",
        "Designed a similarity scoring system using Earth Mover's Distance to compare particles based on these measurements"
      ],
      skills: ["PyTorch", "OpenCV", "StarDist", "Computer Vision", "Data Analysis"],
      section: "research"
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
      skills: ["Consulting", "AI Strategy", "Google AppScript", "Vendor Due Diligence", "Data Analysis"],
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
      skills: ["Teaching", "Computer Science", "Physics", "Electrical Engineering", "Communication"],
      section: "other"
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
      skills: ["Python", "SQL", "Data Pipelines", "Database Management", "Problem Solving"],
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
      skills: ["Python", "NumPy", "Matplotlib", "Data Analysis", "Research"],
      section: "other"
    }
  ]
}

export default App