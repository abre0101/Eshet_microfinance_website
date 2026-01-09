
import aboutUsImg from '../assets/about_us.jpg'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('aboutEshetMFI')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('empoweringCommunities')}
          </p>
        </div>
        
        {/* Company Profile with Image */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-emerald-600">{t('ourStory')}</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('aboutStory1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('aboutStory2')}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={aboutUsImg} 
              alt="About Eshet MFI" 
              loading="lazy"
              className="rounded-2xl shadow-2xl w-full h-auto max-h-96 object-cover" 
            />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">{t('ourVision')}</h3>
            <p className="text-lg leading-relaxed text-emerald-50">
              {t('visionText')}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">{t('ourMission')}</h3>
            <p className="text-lg leading-relaxed text-blue-50">
              {t('missionText')}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">{t('ourCoreValues')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[t('integrity'), t('accountability'), t('transparency'), t('respect'), t('speedyService'), t('dedication'), t('impartiality'), t('confidentiality'), t('professionalism')].map((value, index) => (
              <div key={index} className="bg-white border-2 border-emerald-200 p-6 rounded-xl text-center hover:shadow-lg hover:border-emerald-400 transition-all">
                <p className="font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
