import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Navbar() {
  const [language, setLanguage] = useState('English')
  const [showServiceDropdown, setShowServiceDropdown] = useState(false)
  const [showContactDropdown, setShowContactDropdown] = useState(false)
  const [showPublicationDropdown, setShowPublicationDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Addis Abeba, Ethiopia</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-200 transition-all transform hover:scale-110" title="Facebook">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-emerald-200 transition-all transform hover:scale-110" title="Telegram">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-emerald-200 transition-all transform hover:scale-110" title="LinkedIn">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-emerald-200 transition-all transform hover:scale-110" title="YouTube">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-emerald-200 transition-all transform hover:scale-110" title="Twitter">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo flex items-center gap-3">
              <img src={logo} alt="Eshet MFI Logo" className="h-16 w-16 object-contain" />
              <h2 className="text-xl font-bold text-emerald-600">Eshet MFI S.C</h2>
            </Link>
            
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1">
              <li>
                <Link to="/" className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
                  About Us
                </Link>
              </li>
              
              {/* Service Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => setShowServiceDropdown(true)}
                onMouseLeave={() => setShowServiceDropdown(false)}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition flex items-center gap-1">
                  Service
                  <svg className={`w-4 h-4 transition-transform ${showServiceDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showServiceDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-56 border border-gray-100">
                    <Link to="/loan-products" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <span className="text-xl">💰</span>
                      <span>Loan Products</span>
                    </Link>
                    <Link to="/saving-products" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <span className="text-xl">🏦</span>
                      <span>Saving Products</span>
                    </Link>
                  </div>
                )}
              </li>
              
              {/* Contact Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => setShowContactDropdown(true)}
                onMouseLeave={() => setShowContactDropdown(false)}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition flex items-center gap-1">
                  Contact Us
                  <svg className={`w-4 h-4 transition-transform ${showContactDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showContactDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-56 border border-gray-100">
                    <a href="/#contact" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <span className="text-xl">📧</span>
                      <span>General Contact</span>
                    </a>
                    <Link to="/branch-contacts" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <span className="text-xl">🏢</span>
                      <span>Branch Contacts</span>
                    </Link>
                  </div>
                )}
              </li>
              
              {/* Publication Dropdown */}
              <li 
                className="relative group"
                onMouseEnter={() => setShowPublicationDropdown(true)}
                onMouseLeave={() => setShowPublicationDropdown(false)}
              >
                <button className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition flex items-center gap-1">
                  Publication
                  <svg className={`w-4 h-4 transition-transform ${showPublicationDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showPublicationDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 w-56 border border-gray-100">
                    <Link to="/documents" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <span className="text-xl">📄</span>
                      <span>Documents</span>
                    </Link>
                    <Link to="/news" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition">
                      <span className="text-xl">📰</span>
                      <span>News</span>
                    </Link>
                  </div>
                )}
              </li>
              
              <li>
                <Link to="/jobs" className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/report" className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition">
                  Report
                </Link>
              </li>
            </ul>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-medium cursor-pointer hover:bg-emerald-100 transition appearance-none pr-10 border border-emerald-200"
                >
                  <option value="አማርኛ">አማርኛ</option>
                  <option value="English">English</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-gray-700 hover:text-emerald-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">About Us</Link>
            <Link to="/loan-products" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Loan Products</Link>
            <Link to="/saving-products" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Saving Products</Link>
            <a href="/#contact" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">General Contact</a>
            <Link to="/branch-contacts" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Branch Contacts</Link>
            <Link to="/documents" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Documents</Link>
            <Link to="/news" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">News</Link>
            <Link to="/jobs" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Jobs</Link>
            <Link to="/report" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg">Report</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
