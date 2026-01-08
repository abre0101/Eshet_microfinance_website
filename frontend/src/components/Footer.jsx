import logo from '../assets/logo.jpg'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Eshet MFI Logo" className="h-16 w-16 object-contain rounded-lg" />
              <h3 className="text-2xl font-bold text-emerald-400">Eshet MFI S.C</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">Empowering communities through accessible financial services since 2000.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full transition-all transform hover:scale-110" title="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full transition-all transform hover:scale-110" title="Telegram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full transition-all transform hover:scale-110" title="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full transition-all transform hover:scale-110" title="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full transition-all transform hover:scale-110" title="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-emerald-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition">Service</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition">Loan Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition">Saving Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition">Digital Channel</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-emerald-400 transition">Micro-insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">📍</span>
                Addis Abeba,Ethiopia
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">📞</span>
                +251-9-0248-1762
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">✉️</span>
                eshetmfi@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 Eshet Microfinance Institution S.C. All rights reserved.</p>
          <p className="text-gray-500 mt-2 text-sm">Thank you for being with us.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
