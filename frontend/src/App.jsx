import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import LoanProducts from './pages/LoanProducts'
import SavingProducts from './pages/SavingProducts'
import BranchContacts from './pages/BranchContacts'
import Documents from './pages/Documents'
import News from './pages/News'
import Jobs from './pages/Jobs'
import Report from './pages/Report'
import Footer from './components/Footer'

const API_URL = 'http://localhost:5000/api'

function App() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API_URL}/services`)
      setServices(response.data)
    } catch (error) {
      console.error('Error fetching services:', error)
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/loan-products" element={<LoanProducts />} />
          <Route path="/saving-products" element={<SavingProducts />} />
          <Route path="/branch-contacts" element={<BranchContacts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/news" element={<News />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/report" element={<Report />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
