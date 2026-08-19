import express from 'express'

const router = express.Router()

// In-memory data store (replace with MongoDB in production)
const projects = [
  {
    id: 1,
    title: "Goose Flock Simulation",
    description: "Interactive web application simulating predator-prey dynamics using Python and Node.js framework. Implemented stochastic simulations using probabilistic methods to model environmental effects on flock behavior.",
    technologies: ["Python", "Web Development", "Stochastic Simulation"],
    website: "https://ele906.github.io/GooseGame/",
    github: "https://github.com/ele906/GooseGame",
    date: "June 2025 - Aug 2025",
    featured: true
  },
  {
    id: 3,
    title: "Hooked — Music Discovery App",
    description: "RESTful API built with React and Flask/Python backend with 15+ endpoints covering song recommendations, search, user profiles, and a friend system. Features a personalized recommendation algorithm (4.7/5 user satisfaction), Google OAuth + JWT authentication, and a PostgreSQL schema across 10 tables.",
    technologies: ["Python", "Flask", "React", "PostgreSQL", "JWT", "Google OAuth"],
    website: "https://hooked-e36.onrender.com",
    github: "https://github.com/ele906/hooked",
    date: "Jan 2026 - May 2026",
    featured: true
  }
]

// GET all projects
router.get('/', (req, res) => {
  try {
    const { featured } = req.query
    
    if (featured === 'true') {
      const featuredProjects = projects.filter(p => p.featured)
      return res.json(featuredProjects)
    }
    
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' })
  }
})

// GET single project by ID
router.get('/:id', (req, res) => {
  try {
    const project = projects.find(p => p.id === parseInt(req.params.id))
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    
    res.json(project)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch project' })
  }
})

// POST new project (for admin use)
router.post('/', (req, res) => {
  try {
    const newProject = {
      id: projects.length + 1,
      ...req.body,
      featured: req.body.featured || false
    }
    
    projects.push(newProject)
    res.status(201).json(newProject)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' })
  }
})

export default router
