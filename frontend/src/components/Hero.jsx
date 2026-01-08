import microfinancePic from '../assets/microfinance_pic.jpg'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 text-white min-h-screen flex items-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src={microfinancePic} alt="Microfinance" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full py-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Eshet MFI Logo" className="h-40 w-40 object-contain rounded-lg shadow-2xl bg-white/10 backdrop-blur-sm p-2" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome To Eshet Microfinance Institution
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-95">
            Providing efficient and transparent financial services to enhance your living status
          </p>
          <div className="flex justify-center mb-8">
            <button onClick={scrollToContact} className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold text-base hover:bg-gray-100 transition shadow-lg">
              Contact Us
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">145</h3>
              <p className="text-base opacity-90">Total Employees</p>
            </div>
            <div className="stat bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">17</h3>
              <p className="text-base opacity-90">Branches</p>
            </div>
            <div className="stat bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-1">2000</h3>
              <p className="text-base opacity-90">Established</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
