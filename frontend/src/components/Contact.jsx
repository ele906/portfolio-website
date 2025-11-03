import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
      await axios.post(`${API_URL}/contact`, formData)
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>
          I'm always open to new opportunities and collaborations! 
          Feel free to reach out if you'd like to connect.
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="status-message success">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="status-message error">Failed to send message. Please try again.</p>
          )}
        </form>

        <div className="contact-info">
          <p><strong>Email:</strong> el8403@princeton.edu</p>
          <p><strong>Location:</strong> Princeton, NJ</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
