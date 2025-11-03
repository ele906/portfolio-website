import express from 'express'

const router = express.Router()

// In-memory storage for contact messages (replace with database in production)
const messages = []

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      })
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }
    
    // Create message object
    const newMessage = {
      id: messages.length + 1,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      read: false
    }
    
    messages.push(newMessage)
    
    // In production, you would:
    // 1. Save to database
    // 2. Send email notification using nodemailer
    // 3. Maybe send confirmation email to user
    
    console.log('New contact message received:', newMessage)
    
    res.status(201).json({ 
      success: true,
      message: 'Message received successfully',
      id: newMessage.id
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Failed to process contact form' })
  }
})

// GET all messages (admin only - in production add authentication)
router.get('/', (req, res) => {
  try {
    res.json(messages)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' })
  }
})

// GET single message by ID (admin only)
router.get('/:id', (req, res) => {
  try {
    const message = messages.find(m => m.id === parseInt(req.params.id))
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }
    
    res.json(message)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch message' })
  }
})

// PATCH mark message as read (admin only)
router.patch('/:id/read', (req, res) => {
  try {
    const message = messages.find(m => m.id === parseInt(req.params.id))
    
    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }
    
    message.read = true
    res.json(message)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update message' })
  }
})

export default router
