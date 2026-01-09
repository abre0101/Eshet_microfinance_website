import { Link } from 'react-router-dom'

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to empower your future
          </p>
        </div>

        {/* Quick Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/loan-products" className="group bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Loan Products</h3>
            <p className="text-emerald-100 text-sm">Flexible financing options</p>
          </Link>
          
          <Link to="/saving-products" className="group bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
            <div className="text-5xl mb-4">🏦</div>
            <h3 className="text-xl font-bold mb-2">Saving Products</h3>
            <p className="text-blue-100 text-sm">Secure your financial future</p>
          </Link>
          
          <div className="group bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-xl font-bold mb-2">Digital Banking</h3>
            <p className="text-purple-100 text-sm">Modern banking solutions</p>
          </div>
          
          <div className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Micro-insurance</h3>
            <p className="text-orange-100 text-sm">Protection for your loans</p>
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">🌾</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Agricultural Loan</h4>
              <p className="text-gray-600 text-sm mb-4">Supporting farmers with flexible terms</p>
              <Link to="/loan-products" className="text-emerald-600 font-semibold hover:text-emerald-700">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">🏢</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">SME Financing</h4>
              <p className="text-gray-600 text-sm mb-4">Grow your business with us</p>
              <Link to="/loan-products" className="text-emerald-600 font-semibold hover:text-emerald-700">Learn More →</Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="text-lg font-bold mb-2 text-gray-900">Education Saving</h4>
              <p className="text-gray-600 text-sm mb-4">Invest in your child's future</p>
              <Link to="/saving-products" className="text-emerald-600 font-semibold hover:text-emerald-700">Learn More →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
