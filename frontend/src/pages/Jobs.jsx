import heroBg from '../assets/microfinance_pic.jpg'
import { useTranslation } from 'react-i18next'

function Jobs() {
  const { t } = useTranslation()
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
        'Bachelor degree in Finance, Economics, or related field',
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
        'Bachelor degree in Business Administration or related field',
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
        'Bachelor degree in Marketing, Business, or related field',
        'Experience in financial services marketing',
        'Strong communication and presentation skills',
        'Ability to work independently in the field'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('jobsHero')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            {t('jobsSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Job Listings */}
        <div className="space-y-8 mb-16">
          {jobOpenings.map((job, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all border-2 border-green-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl">💼</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold flex items-center gap-1">
                          <span>📍</span>
                          <span>{job.location}</span>
                        </span>
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                          {job.type}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">
                          {job.department}
                        </span>
                        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{job.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{t('requirements')}:</h4>
                    <ul className="space-y-3">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <span className="text-emerald-600 font-bold text-xl">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-red-600 font-bold text-lg flex items-center gap-2">
                    <span>⏰</span>
                    <span>{t('applicationDeadline')}: {job.deadline}</span>
                  </p>
                </div>
                
                <div className="lg:w-56">
                  <button className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg hover:bg-emerald-700 transition font-bold mb-3 text-lg">
                    {t('applyNowBtn')}
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 px-6 py-4 rounded-lg hover:bg-gray-200 transition font-bold text-lg">
                    {t('shareJob')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6">{t('howToApply')}</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">1.</span>
                <span>Review the job requirements carefully</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">2.</span>
                <span>Prepare your CV and cover letter</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">3.</span>
                <span>Send your application to: hr@eshetmfi.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-2xl">4.</span>
                <span>Include the job title in the email subject</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-6">{t('whyWorkWithUs')}</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Competitive salary and benefits</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Professional development opportunities</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Positive work environment</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Career growth potential</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
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
