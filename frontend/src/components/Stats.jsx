import clientsImg from '../assets/clients-2.png'
import disbImg from '../assets/disb-1.png'

function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Employees as of September 2025</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">145</div>
            <p className="text-lg opacity-90">Total Employees</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">17</div>
            <p className="text-lg opacity-90">Branch Managers</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">24</div>
            <p className="text-lg opacity-90">Head Office</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">39</div>
            <p className="text-lg opacity-90">Loan Officers</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">48</div>
            <p className="text-lg opacity-90">Others</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">17</div>
            <p className="text-lg opacity-90">Cashiers</p>
          </div>
        </div>

        {/* Performance Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-4 shadow-xl">
            <img src={clientsImg} alt="Client Statistics" className="w-full h-auto rounded-lg" />
          </div>
          <div className="bg-white rounded-xl p-4 shadow-xl">
            <img src={disbImg} alt="Disbursement Statistics" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
