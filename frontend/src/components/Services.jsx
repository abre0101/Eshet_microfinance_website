import { useState } from 'react'

function Services() {
  const [openLoan, setOpenLoan] = useState(true)
  const [openSaving, setOpenSaving] = useState(true)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Products and Services</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive financial solutions tailored to meet your needs
        </p>

        {/* Loan Products Dropdown */}
        <div className="mb-8">
          <button
            onClick={() => setOpenLoan(!openLoan)}
            className="w-full bg-emerald-600 text-white p-6 rounded-xl shadow-lg hover:bg-emerald-700 transition-all flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">💰</span>
              <h3 className="text-3xl font-bold">Loan Products</h3>
            </div>
            <span className={`text-3xl transform transition-transform ${openLoan ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {openLoan && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">�</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Rural Agricultural Loan</h4>
                <p className="text-gray-600">Supporting farmers with agricultural financing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">👥</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Group Business Loan</h4>
                <p className="text-gray-600">Financing for group business ventures</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Individual Business Loan</h4>
                <p className="text-gray-600">Personal business financing solutions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">🏢</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">SME Loan</h4>
                <p className="text-gray-600">Small and medium enterprise financing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">☀️</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Solar Energy Loan</h4>
                <p className="text-gray-600">Group & individual solar energy financing</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl mb-3">👔</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Employee Loan</h4>
                <p className="text-gray-600">Staff salary and employee loans</p>
              </div>
            </div>
          )}
        </div>

        {/* Saving Products Dropdown */}
        <div className="mb-8">
          <button
            onClick={() => setOpenSaving(!openSaving)}
            className="w-full bg-purple-600 text-white p-6 rounded-xl shadow-lg hover:bg-purple-700 transition-all flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">🏦</span>
              <h3 className="text-3xl font-bold">Saving Products</h3>
            </div>
            <span className={`text-3xl transform transition-transform ${openSaving ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {openSaving && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Regular Voluntary Saving</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-3">🪙</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Coin Box Saving</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Child Education Saving</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Time Deposit</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Compulsory Saving</h4>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center">
                <div className="text-4xl mb-3">👨‍💼</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">Staff Saving</h4>
              </div>
            </div>
          )}
        </div>

        {/* Digital & Insurance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-xl">
            <div className="text-5xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-4">Digital Channel</h3>
            <p className="text-lg">Core Banking System Service for seamless transactions</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-xl">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Micro-insurance</h3>
            <p className="text-lg">Life insurance credit services with 3% premium for all borrowers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
