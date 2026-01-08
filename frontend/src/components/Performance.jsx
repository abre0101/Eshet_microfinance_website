import clientsImg from '../assets/clients-2.png'
import disbursementImg from '../assets/disb-1.png'
import savingImg from '../assets/saving1-2.png'

function Performance() {
  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Performance Overview</h2>
          <p className="text-lg text-gray-600">Track our growth and impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Client Growth */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-4">
              <h3 className="text-lg font-bold">Client Growth</h3>
            </div>
            <div className="p-4">
              <img 
                src={clientsImg} 
                alt="Client Growth Chart" 
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">15K+</p>
                  <p className="text-xs text-gray-600">Clients</p>
                </div>
                <div className="text-center p-3 bg-emerald-50 rounded-lg">
                  <p className="text-2xl font-bold text-emerald-600">25%</p>
                  <p className="text-xs text-gray-600">Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Loan Disbursement */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
              <h3 className="text-lg font-bold">Loan Disbursement</h3>
            </div>
            <div className="p-4">
              <img 
                src={disbursementImg} 
                alt="Loan Disbursement Chart" 
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">50M+</p>
                  <p className="text-xs text-gray-600">Birr</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">8.5K+</p>
                  <p className="text-xs text-gray-600">Loans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Growth */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4">
              <h3 className="text-lg font-bold">Savings Growth</h3>
            </div>
            <div className="p-4">
              <img 
                src={savingImg} 
                alt="Savings Growth Chart" 
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">30M+</p>
                  <p className="text-xs text-gray-600">Birr</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">12K+</p>
                  <p className="text-xs text-gray-600">Savers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Performance
