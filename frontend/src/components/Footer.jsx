function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Eshet MFI S.C</h3>
            <p className="text-gray-400 leading-relaxed">Empowering communities through accessible financial services since 2000.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition">Service</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition">Loan Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition">Saving Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition">Digital Channel</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition">Micro-insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📍 Wolosefer To Urael Road</p>
              <p>📞 +251-9-0248-1762</p>
              <p>✉️ eshetmfi@gmail.com</p>
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
