import clientsImg from '../assets/clients-2.png'
import disbImg from '../assets/disb-1.png'
import savingImg from '../assets/saving1-2.png'
import report1 from '../assets/chapter 1 -react intro.pdf'
import report2 from '../assets/Chapter 2- react component.pdf'
import heroBg from '../assets/pic4.jpg'

function Report() {
  const reports = [
    {
      title: 'Annual Report 2023',
      period: 'Fiscal Year 2023',
      type: 'Annual Report',
      date: 'December 2023',
      description: 'Comprehensive annual report covering financial performance, achievements, and strategic initiatives for the year 2023.',
      highlights: [
        'Total Assets: ETB 150 Million',
        'Loan Portfolio: ETB 120 Million',
        'Total Clients: 10,000+',
        'Branches: 19 locations'
      ],
      file: report1
    },
    {
      title: 'Q4 2023 Financial Report',
      period: 'October - December 2023',
      type: 'Quarterly Report',
      date: 'January 2024',
      description: 'Detailed financial statements and performance indicators for the fourth quarter of 2023.',
      highlights: [
        'Loan Disbursement: ETB 35 Million',
        'New Clients: 2,500',
        'Portfolio at Risk: 2.1%',
        'Return on Assets: 3.8%'
      ],
      file: report2
    },
    {
      title: 'Social Performance Report 2023',
      period: 'Fiscal Year 2023',
      type: 'Impact Report',
      date: 'November 2023',
      description: 'Assessment of social impact and outreach to target communities including women, youth, and small-holder farmers.',
      highlights: [
        'Women Clients: 65%',
        'Rural Outreach: 70%',
        'Youth Clients: 25%',
        'Jobs Created: 5,000+'
      ],
      file: report1
    }
  ]

  const performanceMetrics = [
    { label: 'Total Active Clients', value: '10,245', change: '+15%', icon: '👥' },
    { label: 'Outstanding Loan Portfolio', value: 'ETB 120M', change: '+22%', icon: '💰' },
    { label: 'Total Savings', value: 'ETB 45M', change: '+18%', icon: '🏦' },
    { label: 'Portfolio at Risk (PAR)', value: '2.1%', change: '-0.5%', icon: '📊' },
    { label: 'Return on Assets', value: '3.8%', change: '+0.3%', icon: '📈' },
    { label: 'Operational Self-Sufficiency', value: '125%', change: '+5%', icon: '✓' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Reports & Performance</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            Transparency and accountability through comprehensive financial reporting
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-indigo-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{metric.icon}</span>
                  <span className={`text-sm font-bold px-4 py-2 rounded-full ${
                    metric.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                <p className="text-gray-600 text-lg">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Charts */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Client Growth</h3>
              <img 
                src={clientsImg} 
                alt="Client Statistics" 
                loading="lazy"
                className="w-full h-auto rounded-lg" 
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Loan Disbursement</h3>
              <img 
                src={disbImg} 
                alt="Disbursement Statistics" 
                loading="lazy"
                className="w-full h-auto rounded-lg" 
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Savings Growth</h3>
              <img 
                src={savingImg} 
                alt="Savings Statistics" 
                loading="lazy"
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Available Reports</h2>
          <div className="space-y-8">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border-2 border-indigo-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-6xl">📊</div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{report.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm mb-3">
                          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold">
                            {report.type}
                          </span>
                          <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-bold">
                            {report.period}
                          </span>
                          <span className="text-gray-500 flex items-center gap-1">
                            <span>📅</span>
                            <span>{report.date}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{report.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3 text-lg">Key Highlights:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {report.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-gray-600">
                            <span className="text-indigo-600 font-bold text-xl">✓</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-56">
                    <a 
                      href={report.file} 
                      download 
                      className="block w-full bg-indigo-600 text-white px-6 py-4 rounded-lg hover:bg-indigo-700 transition font-bold mb-3 text-center text-lg"
                    >
                      📥 Download PDF
                    </a>
                    <a 
                      href={report.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gray-100 text-gray-700 px-6 py-4 rounded-lg hover:bg-gray-200 transition font-bold text-center text-lg"
                    >
                      👁️ View Online
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Reports */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-2xl shadow-xl">
          <h3 className="text-4xl font-bold mb-4">Need More Information?</h3>
          <p className="text-xl mb-8">
            For detailed reports or specific information, please contact our finance department.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="mailto:finance@eshetmfi.com" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-center text-lg">
              📧 Email Finance Team
            </a>
            <a href="tel:+251902481762" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition text-center text-lg">
              📞 Call: +251-9-0248-1762
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
