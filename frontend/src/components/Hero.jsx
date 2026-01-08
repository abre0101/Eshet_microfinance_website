import microfinancePic from '../assets/microfinance_pic.jpg'

function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-24 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src={microfinancePic} alt="Microfinance" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome To Eshet Microfinance Institution
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Providing efficient and transparent financial services to enhance your living status
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Apply for Loan
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="stat">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">145</h3>
              <p className="text-lg opacity-90">Total Employees</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">17</h3>
              <p className="text-lg opacity-90">Branch Managers</p>
            </div>
            <div className="stat">
              <h3 className="text-4xl md:text-5xl font-bold mb-2">2000</h3>
              <p className="text-lg opacity-90">Established</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
