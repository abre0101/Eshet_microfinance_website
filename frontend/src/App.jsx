import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LoanProducts from './pages/LoanProducts'
import SavingProducts from './pages/SavingProducts'
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
          <Route path="/loan-products" element={<LoanProducts />} />
          <Route path="/saving-products" element={<SavingProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
