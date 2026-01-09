import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
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
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('getInTouch')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
              <div className="text-4xl text-emerald-600">📍</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{t('address')}</h4>
                <p className="text-gray-600">{t('location')}</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
              <div className="text-4xl text-emerald-600">📞</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{t('phone')}</h4>
                <p className="text-gray-600">+251-9-0248-1762</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
              <div className="text-4xl text-emerald-600">✉️</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{t('email')}</h4>
                <p className="text-gray-600">eshetmfi@gmail.com</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
              <div className="text-4xl text-emerald-600">🕒</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">{t('businessHours')}</h4>
                <p className="text-gray-600">{t('businessHoursValue')}</p>
              </div>
            </div>
          </div>
          <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t('yourName')}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <input
              type="email"
              name="email"
              placeholder={t('yourEmail')}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('yourPhone')}
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
            <textarea
              name="message"
              placeholder={t('yourMessage')}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            ></textarea>
            <button type="submit" className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition shadow-lg">
              {t('sendMessage')}
            </button>
            {status === 'success' && <p className="text-green-600 font-semibold text-center">{t('messageSentSuccess')}</p>}
            {status === 'error' && <p className="text-red-600 font-semibold text-center">{t('messageSentError')}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
