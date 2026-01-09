import chapter1 from '../assets/chapter 1 -react intro.pdf'
import chapter2 from '../assets/Chapter 2- react component.pdf'
import heroBg from '../assets/microfinance_pic.jpg'
import { useTranslation } from 'react-i18next'

function Documents() {
  const { t } = useTranslation()
  const documents = [
    {
      title: 'Chapter 1 - React Introduction',
      description: 'Introduction to React framework and its core concepts',
      date: 'January 2024',
      type: 'PDF',
      size: '1.2 MB',
      file: chapter1
    },
    {
      title: 'Chapter 2 - React Components',
      description: 'Deep dive into React components and component lifecycle',
      date: 'January 2024',
      type: 'PDF',
      size: '1.5 MB',
      file: chapter2
    },
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive annual report covering financial performance and achievements',
      date: 'December 2023',
      type: 'PDF',
      size: '2.5 MB',
      file: null
    },
    {
      title: 'Loan Application Form',
      description: 'Standard loan application form for all loan products',
      date: 'January 2024',
      type: 'PDF',
      size: '450 KB',
      file: null
    },
    {
      title: 'Savings Account Opening Form',
      description: 'Form required to open a savings account with Eshet MFI',
      date: 'January 2024',
      type: 'PDF',
      size: '320 KB',
      file: null
    },
    {
      title: 'Financial Statements Q4 2023',
      description: 'Quarterly financial statements and performance indicators',
      date: 'October 2023',
      type: 'PDF',
      size: '1.8 MB',
      file: null
    }
  ]

  const handleDownload = (doc) => {
    if (doc.file) {
      window.open(doc.file, '_blank')
    } else {
      alert('This document is not yet available for download. Please contact us for more information.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('documentsHero')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            {t('documentsSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-purple-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-6xl">📄</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{doc.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{doc.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <span>📅</span>
                      <span>{doc.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📎</span>
                      <span>{doc.type}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span>💾</span>
                      <span>{doc.size}</span>
                    </span>
                  </div>
                  <button 
                    onClick={() => handleDownload(doc)}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition ${
                      doc.file 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    {doc.file ? `📥 ${t('download')}` : `📧 ${t('requestDocument')}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-10 rounded-2xl shadow-xl">
          <h3 className="text-4xl font-bold mb-4">{t('needSpecificDoc')}</h3>
          <p className="text-xl mb-8">
            {t('needSpecificDocText')}
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="tel:+251902481762" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center text-lg">
              {t('call')}: +251-9-0248-1762
            </a>
            <a href="mailto:eshetmfi@gmail.com" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition text-center text-lg">
              {t('emailUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents
