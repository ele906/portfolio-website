import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import projectsRouter from './routes/projects.js'
import experiencesRouter from './routes/experiences.js'
import contactRouter from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// REST API Routes
app.use('/api/projects', projectsRouter)
app.use('/api/experiences', experiencesRouter)
app.use('/api/contact', contactRouter)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    message: 'Eleanor Liu Portfolio API is running'
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📝 API documentation available at http://localhost:${PORT}/api/health`)
})

export default app
