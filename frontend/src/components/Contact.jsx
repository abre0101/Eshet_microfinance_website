import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/contact', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('error')
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Get In Touch</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-4xl">📍</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Address</h4>
                <p className="text-gray-600">123 Finance Street, Business District</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">📞</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">✉️</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Email</h4>
                <p className="text-gray-600">info@microfinance.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">🕒</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Business Hours</h4>
                <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
              Send Message
            </button>
            {status === 'success' && <p className="text-green-600 font-semibold text-center">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-600 font-semibold text-center">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
