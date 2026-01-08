import chapter1 from '../assets/chapter 1 -react intro.pdf'
import chapter2 from '../assets/Chapter 2- react component.pdf'

function Documents() {
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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Documents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access important documents, reports, and publications from Eshet MFI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="text-5xl">📄</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{doc.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{doc.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>📅 {doc.date}</span>
                    <span>📎 {doc.type}</span>
                    <span>💾 {doc.size}</span>
                  </div>
                  <button 
                    onClick={() => handleDownload(doc)}
                    className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition font-semibold"
                  >
                    {doc.file ? 'Download' : 'Request Document'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Need a Specific Document?</h3>
          <p className="text-lg mb-6">
            If you can't find the document you're looking for, please contact our customer service team.
          </p>
          <div className="flex gap-4">
            <a href="tel:+251902481762" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call Us
            </a>
            <a href="mailto:eshetmfi@gmail.com" className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documents
