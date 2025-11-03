import express from 'express'

const router = express.Router()

// In-memory data store
const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "MacDermid Alpha Electronic Solutions",
    location: "Piscataway, NJ",
    date: "May 2025 - Aug 2025",
    description: [
      "Developed full-stack application with Python backend and frontend dashboard, integrating TensorFlow and OpenCV for particle detection with 95% accuracy",
      "Built automated monitoring system on ESP32 microcontroller with real-time dashboard for process tracking",
      "Participated in code reviews and Agile/Scrum development practices, working effectively with cross-functional teams",
      "Deployed application as standalone executable across three research centers"
    ],
    skills: ["Python", "TensorFlow", "OpenCV", "Full-Stack Development", "Agile", "Code Reviews"],
    type: "internship"
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
    type: "internship"
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
    type: "research"
  },
  {
    id: 4,
    title: "Teaching Assistant",
    company: "Princeton University",
    location: "Princeton, NJ",
    date: "Sept 2024 - Present",
    description: [
      "Teaching Assistant for Intro to Computer Science (COS126) and General Physics II (PHY110)",
      "Help students understand fundamental programming concepts and problem-solving techniques",
      "Hold office hours and grade assignments for classes of 200+ students"
    ],
    skills: ["Teaching", "Computer Science", "Physics", "Communication"],
    type: "teaching"
  }
]

// GET all experiences
router.get('/', (req, res) => {
  try {
    const { type } = req.query
    
    if (type) {
      const filteredExperiences = experiences.filter(e => e.type === type)
      return res.json(filteredExperiences)
    }
    
    res.json(experiences)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experiences' })
  }
})

// GET single experience by ID
router.get('/:id', (req, res) => {
  try {
    const experience = experiences.find(e => e.id === parseInt(req.params.id))
    
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' })
    }
    
    res.json(experience)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch experience' })
  }
})

// POST new experience (for admin use)
router.post('/', (req, res) => {
  try {
    const newExperience = {
      id: experiences.length + 1,
      ...req.body
    }
    
    experiences.push(newExperience)
    res.status(201).json(newExperience)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create experience' })
  }
})

export default router
