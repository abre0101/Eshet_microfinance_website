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
      title: 'Small and Medium Enterprise (SME) Loan',
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
    },
    {
      icon: '🌱',
      title: 'Individual Agricultural Loan',
      description: 'Financing for individual farmers to invest in agricultural activities.',
      features: ['Crop-specific loans', 'Livestock financing', 'Farm equipment loans', 'Harvest-based repayment']
    },
    {
      icon: '💡',
      title: 'Promic Loan',
      description: 'Specialized loan product designed for productive microfinance clients.',
      features: ['Progressive lending', 'Capacity building', 'Market linkage support', 'Value chain financing']
    }
  ]

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Loan Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eshet MFI offers a wide range of loan products designed to meet the diverse financial needs of our clients. 
            From agricultural financing to business loans, we provide accessible credit to empower individuals and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loanProducts.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-6xl">{product.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-600">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <span className="text-blue-600">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-lg mb-6">
            Contact us today to learn more about our loan products and start your application process.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Us
            </a>
            <a href="tel:+251902481762" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoanProducts
