import pic2 from '../assets/PIC2.png'

function SavingProducts() {
  const savingProducts = [
    {
      icon: '💰',
      title: 'Regular Voluntary Saving',
      description: 'Flexible savings account that allows you to save at your own pace with no minimum balance requirement.',
      features: ['No minimum balance', 'Flexible deposits', 'Competitive interest rates', 'Easy withdrawals']
    },
    {
      icon: '🪙',
      title: 'Coin Box Saving',
      description: 'Traditional coin box savings program that encourages daily saving habits.',
      features: ['Daily saving culture', 'Coin collection service', 'Builds saving discipline', 'Community-based']
    },
    {
      icon: '🎓',
      title: 'Special Child Education Saving',
      description: 'Dedicated savings account to help parents plan and save for their children\'s education.',
      features: ['Education-focused', 'Higher interest rates', 'Long-term planning', 'Goal-based saving']
    },
    {
      icon: '⏰',
      title: 'Time Deposit',
      description: 'Fixed-term deposit account offering attractive interest rates for committed savers.',
      features: ['Fixed term options', 'Higher interest rates', 'Guaranteed returns', 'Certificate of deposit']
    },
    {
      icon: '📊',
      title: 'Compulsory Saving',
      description: 'Mandatory savings for loan clients to build financial resilience and security.',
      features: ['Loan requirement', 'Builds savings habit', 'Emergency fund', 'Collateral support']
    },
    {
      icon: '👨‍💼',
      title: 'Staff Saving',
      description: 'Exclusive savings program for employees with special benefits and competitive rates.',
      features: ['Payroll deduction', 'Preferential rates', 'Loan eligibility', 'Retirement planning']
    }
  ]

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Saving Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your financial future with Eshet MFI's diverse savings products. We offer secure and flexible 
            savings options with competitive interest rates to help you achieve your financial goals.
          </p>
        </div>

        {/* Savings Image */}
        <div className="mb-12">
          <img src={pic2} alt="Savings Services" className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto h-96 object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savingProducts.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-center">{product.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-600 text-center">Benefits:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-purple-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Why Save With Us?</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Licensed and regulated by NBE</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Competitive interest rates</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Secure and confidential</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Convenient branch locations</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Professional customer service</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">Start Saving Today!</h3>
            <p className="text-lg mb-6">
              Visit any of our branches or contact us to open your savings account and start building your financial future.
            </p>
            <div className="space-y-3">
              <a href="#contact" className="block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center">
                Find a Branch
              </a>
              <a href="tel:+251902481762" className="block bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center">
                Call: +251-9-0248-1762
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavingProducts
