import newsImg from '../assets/news.jpg'
import aboutUs1 from '../assets/about_us.jpg'
import aboutUs2 from '../assets/about_us2.jpg'

function News() {
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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news and announcements from Eshet MFI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((news, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <img src={news.image} alt={news.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {news.category}
                  </span>
                  <p className="text-gray-500 text-sm">📅 {news.date}</p>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{news.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{news.excerpt}</p>
                <p className="text-gray-500 text-sm mb-4">{news.content}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-lg mb-6">
            Get the latest news and updates delivered directly to your inbox
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
