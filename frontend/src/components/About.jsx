
import aboutUsImg from '../assets/about_us.jpg'

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Eshet MFI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities through accessible financial services since 2000
          </p>
        </div>
        
        {/* Company Profile with Image */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-emerald-600">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Eshet Microfinance Institution (EMFI) was established in 2000 with a vision to provide accessible financial services to underserved communities. Licensed by the National Bank of Ethiopia, we've grown from an initial capital of Birr 225,000 to Birr 10 Million.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by ERSHA (Enhanced Rural Self Help Association), we now serve thousands of clients across Ethiopia with 20 shareholders and a dedicated team of 145 employees.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={aboutUsImg} 
              alt="About Eshet MFI" 
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed text-emerald-50">
              Aspiring to be one of the top ten competent and leading MFIs in Ethiopia by the year 2035.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-blue-50">
              To provide efficient and transparent financial services to low and medium income groups, enhancing their living status.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">Our Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Integrity', 'Accountability', 'Transparency', 'Respect', 'Speedy Service', 'Dedication', 'Impartiality', 'Confidentiality', 'Professionalism'].map((value, index) => (
              <div key={index} className="bg-white border-2 border-emerald-200 p-6 rounded-xl text-center hover:shadow-lg hover:border-emerald-400 transition-all">
                <p className="font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
