import newsImg from '../assets/news.jpg'
import aboutUs1 from '../assets/about_us.jpg'
import aboutUs2 from '../assets/about_us2.jpg'
import heroBg from '../assets/pic4.jpg'
import { useTranslation } from 'react-i18next'

function News() {
  const { t } = useTranslation()
  const newsItems = [
    {
      title: 'Eshet MFI Expands to New Regions',
      date: 'January 15, 2024',
      category: 'Expansion',
      image: newsImg,
      excerpt: 'We are excited to announce the opening of three new branches in the Jimma area, bringing our total branch count to 19 across Ethiopia.',
      content: 'This expansion demonstrates our commitment to providing accessible financial services to more communities.'
    },
    {
      title: 'New Digital Banking Services Launched',
      date: 'December 20, 2023',
      category: 'Technology',
      image: aboutUs1,
      excerpt: 'Eshet MFI introduces mobile banking and online account management to enhance customer convenience.',
      content: 'Customers can now access their accounts, check balances, and make transactions from anywhere.'
    },
    {
      title: 'Record Year for Loan Disbursements',
      date: 'December 10, 2023',
      category: 'Achievement',
      image: aboutUs2,
      excerpt: 'Eshet MFI achieved record loan disbursements in 2023, supporting over 10,000 clients across all regions.',
      content: 'This milestone reflects our dedication to empowering small businesses and individuals.'
    },
    {
      title: 'Special Women Empowerment Program',
      date: 'November 25, 2023',
      category: 'Programs',
      image: newsImg,
      excerpt: 'New initiative launched to provide specialized financial services and training for women entrepreneurs.',
      content: 'The program includes preferential loan rates and business development training.'
    },
    {
      title: 'Partnership with Agricultural Cooperatives',
      date: 'November 5, 2023',
      category: 'Partnership',
      image: aboutUs1,
      excerpt: 'Eshet MFI partners with local agricultural cooperatives to provide better financing options for farmers.',
      content: 'This partnership will help improve agricultural productivity and farmer income.'
    },
    {
      title: 'Customer Appreciation Month',
      date: 'October 15, 2023',
      category: 'Events',
      image: aboutUs2,
      excerpt: 'Join us in celebrating our valued customers with special offers and reduced interest rates throughout October.',
      content: 'Thank you for your continued trust and partnership with Eshet MFI.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('newsHero')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            {t('newsSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all">
              <img 
                src={news.image} 
                alt={news.title} 
                loading="lazy"
                className="w-full h-64 object-cover" 
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold">
                    {news.category}
                  </span>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <span>📅</span>
                    <span>{news.date}</span>
                  </p>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{news.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{news.excerpt}</p>
                <p className="text-gray-500 text-sm mb-4">{news.content}</p>
                <button className="text-blue-600 font-bold hover:text-blue-700 transition flex items-center gap-2">
                  {t('readMore')} <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-10 rounded-2xl shadow-xl text-center">
          <h3 className="text-4xl font-bold mb-4">{t('subscribeNewsletter')}</h3>
          <p className="text-xl mb-8">
            {t('subscribeText')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder={t('enterEmail')}
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              {t('subscribe')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
