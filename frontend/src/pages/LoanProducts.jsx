import pic1 from '../assets/PIC1.png'
import heroBg from '../assets/pic4.jpg'
import { Link } from 'react-router-dom'

function LoanProducts() {
  const loanProducts = [
    {
      icon: '🌾',
      title: 'Rural Agricultural Loan',
      description: 'Supporting farmers with agricultural financing to improve productivity and income.',
      features: ['Flexible repayment terms', 'Competitive interest rates', 'Quick approval process', 'Seasonal payment options']
    },
    {
      icon: '👥',
      title: 'Group Business Loan',
      description: 'Financing for group business ventures to support collective entrepreneurship.',
      features: ['Group guarantee system', 'Lower collateral requirements', 'Peer support network', 'Business training included']
    },
    {
      icon: '💼',
      title: 'Individual Business Loan',
      description: 'Personal business financing solutions for entrepreneurs and small business owners.',
      features: ['Tailored loan amounts', 'Flexible terms', 'Business advisory support', 'Fast disbursement']
    },
    {
      icon: '🏢',
      title: 'SME Loan',
      description: 'Comprehensive financing for growing businesses to expand operations.',
      features: ['Higher loan limits', 'Long-term financing', 'Working capital support', 'Equipment financing']
    },
    {
      icon: '☀️',
      title: 'Solar Energy Loan',
      description: 'Group & individual solar energy financing for clean and sustainable energy solutions.',
      features: ['Affordable solar systems', 'Energy cost savings', 'Environmental impact', 'Technical support']
    },
    {
      icon: '👔',
      title: 'Employee Loan',
      description: 'Staff salary and employee loans with convenient repayment through payroll deduction.',
      features: ['Salary-based lending', 'Automatic deduction', 'Quick processing', 'Competitive rates']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Loan Products</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            Flexible financing solutions designed to empower your dreams
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Loan Image */}
        <div className="mb-16">
          <img 
            src={pic1} 
            alt="Loan Services" 
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full max-w-5xl mx-auto h-96 object-cover" 
          />
        </div>

        {/* Loan Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {loanProducts.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-emerald-100">
              <div className="flex items-start gap-4">
                <div className="text-6xl flex-shrink-0">{product.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-emerald-600">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-10 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-xl max-w-2xl mx-auto">
              Contact us today to learn more about our loan products and start your application process.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/#contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center text-lg">
              Contact Us
            </Link>
            <a href="tel:+251902481762" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition text-center text-lg">
              Call: +251-9-0248-1762
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanProducts
