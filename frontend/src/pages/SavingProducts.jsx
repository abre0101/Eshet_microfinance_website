import pic2 from '../assets/PIC2.png'
import heroBg from '../assets/microfinance_pic.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SavingProducts() {
  const { t } = useTranslation()
  
  const savingProducts = [
    {
      icon: '💰',
      title: t('regularVoluntarySaving'),
      description: t('regularSavingDesc'),
      features: [t('noMinimumBalance'), t('flexibleDeposits'), t('competitiveRates'), t('easyWithdrawals')]
    },
    {
      icon: '🪙',
      title: t('coinBoxSaving'),
      description: t('coinBoxDesc'),
      features: [t('dailySavingCulture'), t('coinCollection'), t('buildsDiscipline'), t('communityBased')]
    },
    {
      icon: '🎓',
      title: t('childEducationSaving'),
      description: t('childSavingDesc'),
      features: [t('educationFocused'), t('higherInterest'), t('longTermPlanning'), t('goalBasedSaving')]
    },
    {
      icon: '⏰',
      title: t('timeDeposit'),
      description: t('timeDepositDesc'),
      features: [t('fixedTermOptions'), t('higherInterest'), t('guaranteedReturns'), t('certificateOfDeposit')]
    },
    {
      icon: '📊',
      title: t('compulsorySaving'),
      description: t('compulsorySavingDesc'),
      features: [t('loanRequirement'), t('buildsSavingsHabit'), t('emergencyFund'), t('collateralSupport')]
    },
    {
      icon: '👨‍💼',
      title: t('staffSaving'),
      description: t('staffSavingDesc'),
      features: [t('payrollDeduction'), t('preferentialRates'), t('loanEligibility'), t('retirementPlanning')]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('savingProductsHero')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            {t('savingProductsSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Savings Image */}
        <div className="mb-16">
          <img 
            src={pic2} 
            alt="Savings Services" 
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full max-w-5xl mx-auto h-96 object-cover" 
          />
        </div>

        {/* Savings Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {savingProducts.map((product, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-blue-100">
              <div className="text-center mb-4">
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{product.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-center leading-relaxed">{product.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-600 text-center">{t('benefits')}</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Save & CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6">{t('whySaveWithUs')}</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>{t('licensedByNBE')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>{t('competitiveInterest')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>{t('secureConfidential')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>{t('convenientBranches')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>{t('professionalService')}</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6">{t('startSavingToday')}</h3>
            <p className="text-lg mb-8">
              {t('startSavingText')}
            </p>
            <div className="space-y-4">
              <Link to="/branch-contacts" className="block bg-white text-emerald-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center text-lg">
                {t('findBranch')}
              </Link>
              <a href="tel:+251902481762" className="block bg-transparent border-2 border-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition text-center text-lg">
                {t('call')}: +251-9-0248-1762
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavingProducts
