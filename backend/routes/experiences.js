import express from 'express'

const router = express.Router()

// In-memory data store
const experiences = [
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
    type: "startup",
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
    type: "internship",
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
    type: "internship",
    section: "swe"
  },
  {
    id: 6,
    title: "Independent Research — Debiasing Diffusion Models with SAEs",
    company: "Princeton University",
    location: "Princeton, NJ",
    date: "Apr. 2026 - Present",
    description: [
      "Advised by Professor Vikram Ramaswamy (https://www.cs.princeton.edu/~vr23/)",
      "Tuning sparse autoencoders (SAEs) to study interpretable features in diffusion models",
      "Investigating SAE-based feature steering to reduce bias in generated images",
      "Developing demo notebooks to explore SAE features and debiasing interventions"
    ],
    website: "https://ele906.github.io/sae-demo-notebooks/",
    github: "https://github.com/ele906/cos398",
    skills: ["Sparse Autoencoders", "Diffusion Models", "Mechanistic Interpretability", "Fairness", "Machine Learning", "Research"],
    type: "research",
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
    type: "internship",
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
    type: "internship",
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
      "Grade assignments and hold office hours for classes of 200+ students"
    ],
    skills: ["Teaching", "Computer Science", "Physics", "Electrical Engineering", "Communication"],
    type: "teaching",
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
    type: "internship",
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
    type: "research",
    section: "other"
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
