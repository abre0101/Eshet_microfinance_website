import clientsImg from '../assets/clients-2.png'
import disbImg from '../assets/disb-1.png'
import report1 from '../assets/chapter 1 -react intro.pdf'
import report2 from '../assets/Chapter 2- react component.pdf'

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
      title: 'Q3 2023 Financial Report',
      period: 'July - September 2023',
      type: 'Quarterly Report',
      date: 'October 2023',
      description: 'Financial performance report for the third quarter showing steady growth across all regions.',
      highlights: [
        'Loan Disbursement: ETB 32 Million',
        'New Clients: 2,200',
        'Portfolio at Risk: 2.3%',
        'Return on Assets: 3.5%'
      ],
      file: report1
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
      file: report2
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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Reports & Performance</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our financial reports, performance metrics, and impact assessments demonstrating transparency and accountability.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Key Performance Indicators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-4xl">{metric.icon}</span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    metric.change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Charts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Performance Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Client Growth</h3>
              <img src={clientsImg} alt="Client Statistics" className="w-full h-auto rounded-lg" />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Loan Disbursement</h3>
              <img src={disbImg} alt="Disbursement Statistics" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Reports</h2>
          <div className="space-y-6">
            {reports.map((report, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">📊</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{report.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm mb-3">
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                            {report.type}
                          </span>
                          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
                            {report.period}
                          </span>
                          <span className="text-gray-500">📅 {report.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{report.description}</p>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Key Highlights:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {report.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-600">
                            <span className="text-blue-600 font-bold">✓</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-48">
                    <a 
                      href={report.file} 
                      download 
                      className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3 text-center"
                    >
                      Download PDF
                    </a>
                    <a 
                      href={report.file} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold text-center"
                    >
                      View Online
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Reports */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-4">Need More Information?</h3>
          <p className="text-lg mb-6">
            For detailed reports or specific information, please contact our finance department.
          </p>
          <div className="flex gap-4">
            <a href="mailto:finance@eshetmfi.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Email Finance Team
            </a>
            <a href="tel:+251902481762" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
