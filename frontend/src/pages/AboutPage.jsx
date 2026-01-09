import aboutUsImg from '../assets/about_us.jpg'
import aboutUsImg2 from '../assets/about_us2.jpg'
import heroBg from '../assets/microfinance_pic.jpg'
import { useTranslation } from 'react-i18next'

function AboutPage() {
  const { t } = useTranslation()
  
  const boardMembers = [
    { name: 'Mr. Atnafu W/Gebriel Habtemariam', email: 'Atnafu.woldegebriel@gmail.com', position: t('chairperson') },
    { name: 'Mr. Desalegn Senbeta Feyesa', email: 'desalegn2011@gmail.com', position: t('deputyChairperson') },
    { name: 'Mr. Berhanu Mekonin', email: 'berhanum@fgaeet.org', position: t('member') },
    { name: 'Mr. Tamiru Sebsibe', email: 'tamiru_sebsibe@yahoo.com', position: t('member') },
    { name: 'Mr. Berehanu Eidety', email: 'berhanuek@yahoo.com', position: t('member') },
    { name: 'Mr. Deressa Kenea', email: 'deressak@yahoo.com', position: t('member') },
    { name: 'Mr. Dejene Biru', email: 'dejenbiru@gmail.com', position: t('member') }
  ]

  const managementTeam = [
    { name: 'Mr. Furgassa Hirpa Amena', position: t('ceo'), phone: '+251-9-0248-1762', email: 'eshetmfi@gmail.com' },
    { name: 'Ato Bedesa Umeta', position: t('hrManager'), phone: '+251-11-3206451', email: '' },
    { name: 'Ato Ayinu Aboma', position: t('operationManager'), phone: '+251913234811', email: '' },
    { name: 'Ato Belamo Gonfa', position: t('financeManager'), phone: '+251910717855', email: '' },
    { name: 'Ato Tsegaye Fufa', position: t('misManager'), phone: '+251922000719', email: '' },
    { name: 'Ato Zebanu Abera', position: t('marketingManager'), phone: '+251973370087', email: '' }
  ]

  const coreValues = [
    t('integrity'), t('accountability'), t('transparency'), t('respect'), 
    t('speedyService'), t('dedication'), t('impartiality'), t('confidentiality'), t('professionalism')
  ]

  const activities = [
    t('activity1'),
    t('activity2'),
    t('activity3'),
    t('activity4'),
    t('activity5'),
    t('activity6')
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{t('aboutPageHero')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            {t('aboutPageSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Profile */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-emerald-600">{t('ourStory')}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('aboutProfile1')}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('aboutProfile2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutProfile3')}
            </p>
          </div>
          <div>
            <img 
              src={aboutUsImg} 
              alt="About Eshet MFI" 
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold mb-4">{t('ourVision')}</h3>
            <p className="text-lg leading-relaxed text-emerald-50">
              {t('visionText')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4">{t('ourMission')}</h3>
            <p className="text-lg leading-relaxed text-blue-50">
              {t('missionText')}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">{t('ourCoreValues')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl text-center hover:shadow-lg hover:scale-105 transition-all border-2 border-emerald-200">
                <p className="font-bold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Targeting */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-6">{t('ourTargetCommunity')}</h2>
          <p className="text-lg leading-relaxed mb-6">
            {t('targetingText')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-3">🌾</div>
              <h4 className="text-xl font-bold mb-2">{t('smallHolderFarmers')}</h4>
              <p className="text-emerald-100">{t('supportingAgriculture')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-3">👩‍💼</div>
              <h4 className="text-xl font-bold mb-2">{t('womenEntrepreneurs')}</h4>
              <p className="text-emerald-100">{t('empoweringWomen')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-3">🏪</div>
              <h4 className="text-xl font-bold mb-2">{t('pettyTraders')}</h4>
              <p className="text-emerald-100">{t('growingSmallBusiness')}</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">{t('ourActivities')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl hover:shadow-md transition-all">
                <span className="text-emerald-600 font-bold text-2xl flex-shrink-0">✓</span>
                <span className="text-gray-700 text-lg">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">{t('boardOfDirectors')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-xl hover:shadow-xl transition-all border-2 border-emerald-100">
                <div className="text-5xl mb-4 text-center">👤</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3 text-center text-lg">{member.position}</p>
                <p className="text-sm text-gray-600 break-all text-center">{member.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">{t('managementTeam')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-xl transition-all border-2 border-blue-100">
                <div className="text-5xl mb-4 text-center">👨‍💼</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-center text-lg">{member.position}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-600">📞</span>
                    <span>{member.phone}</span>
                  </p>
                  {member.email && (
                    <p className="flex items-center gap-2">
                      <span className="text-blue-600">✉️</span>
                      <span className="break-all">{member.email}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Offices */}
        <div>
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">{t('ourOffices')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">{t('headOffice')}</h3>
              <p className="mb-2 text-emerald-100">{t('location')}</p>
              <p className="text-lg">📞 Tel: 011-236-6281</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">{t('westShewaArea')}</h3>
              <p className="mb-2 text-blue-100">{t('regionalOffice')}</p>
              <p className="text-lg">📞 Tel: 011-236-6281</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">{t('southWestShewa')}</h3>
              <p className="mb-2 text-purple-100">{t('regionalOffice')}</p>
              <p className="text-lg">📞 Tel: 011-3410-734</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
