function Jobs() {
  const jobOpenings = [
    {
      title: 'Loan Officer',
      location: 'Addis Ababa',
      type: 'Full-time',
      department: 'Operations',
      experience: '2-3 years',
      deadline: 'February 28, 2024',
      description: 'We are seeking an experienced Loan Officer to join our team in Addis Ababa. The ideal candidate will be responsible for evaluating loan applications and managing client relationships.',
      requirements: [
        'Bachelor\'s degree in Finance, Economics, or related field',
        'Minimum 2 years experience in microfinance or banking',
        'Strong analytical and communication skills',
        'Fluency in Amharic and English'
      ]
    },
    {
      title: 'Branch Manager',
      location: 'Jimma',
      type: 'Full-time',
      department: 'Management',
      experience: '5+ years',
      deadline: 'March 15, 2024',
      description: 'Seeking a dynamic Branch Manager to oversee operations at our Jimma branch. The role involves managing staff, ensuring customer satisfaction, and achieving branch targets.',
      requirements: [
        'Bachelor\'s degree in Business Administration or related field',
        'Minimum 5 years experience in branch management',
        'Proven leadership and team management skills',
        'Knowledge of microfinance operations'
      ]
    },
    {
      title: 'IT Support Specialist',
      location: 'Addis Ababa - Head Office',
      type: 'Full-time',
      department: 'IT',
      experience: '1-2 years',
      deadline: 'February 20, 2024',
      description: 'Looking for an IT Support Specialist to provide technical support for our core banking system and maintain IT infrastructure across all branches.',
      requirements: [
        'Diploma or Degree in Computer Science or IT',
        'Experience with banking software systems',
        'Strong troubleshooting and problem-solving skills',
        'Excellent customer service orientation'
      ]
    },
    {
      title: 'Marketing Officer',
      location: 'West Shewa Area',
      type: 'Full-time',
      department: 'Marketing',
      experience: '2-4 years',
      deadline: 'March 5, 2024',
      description: 'We need a creative Marketing Officer to develop and implement marketing strategies to promote our financial products and services in the West Shewa area.',
      requirements: [
        'Bachelor\'s degree in Marketing, Business, or related field',
        'Experience in financial services marketing',
        'Strong communication and presentation skills',
        'Ability to work independently in the field'
      ]
    },
    {
      title: 'Internal Auditor',
      location: 'Addis Ababa',
      type: 'Full-time',
      department: 'Finance',
      experience: '3-5 years',
      deadline: 'February 25, 2024',
      description: 'Seeking an Internal Auditor to conduct regular audits of branch operations and ensure compliance with policies and regulations.',
      requirements: [
        'Bachelor\'s degree in Accounting or Finance',
        'Professional certification (CIA, ACCA) preferred',
        'Strong knowledge of auditing standards',
        'Attention to detail and analytical skills'
      ]
    },
    {
      title: 'Customer Service Representative',
      location: 'Multiple Locations',
      type: 'Full-time',
      department: 'Customer Service',
      experience: '0-1 year',
      deadline: 'March 10, 2024',
      description: 'Entry-level positions available for Customer Service Representatives at various branches. Ideal for fresh graduates looking to start a career in microfinance.',
      requirements: [
        'Diploma or Degree in any field',
        'Excellent interpersonal and communication skills',
        'Customer-focused attitude',
        'Basic computer skills'
      ]
    }
  ]

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Career Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team and be part of Ethiopia's leading microfinance institution. We offer competitive salaries, professional development, and a positive work environment.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">💼</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                          📍 {job.location}
                        </span>
                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
                          {job.type}
                        </span>
                        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
                          {job.department}
                        </span>
                        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600">
                          <span className="text-blue-600 font-bold">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-red-600 font-semibold">
                    ⏰ Application Deadline: {job.deadline}
                  </p>
                </div>
                
                <div className="lg:w-48">
                  <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3">
                    Apply Now
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold">
                    Share Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">How to Apply</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span>1.</span>
                <span>Review the job requirements carefully</span>
              </li>
              <li className="flex items-start gap-2">
                <span>2.</span>
                <span>Prepare your CV and cover letter</span>
              </li>
              <li className="flex items-start gap-2">
                <span>3.</span>
                <span>Send your application to: hr@eshetmfi.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>4.</span>
                <span>Include the job title in the email subject</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Competitive salary and benefits</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Professional development opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Positive work environment</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Career growth potential</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✓</span>
                <span>Make a difference in communities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
