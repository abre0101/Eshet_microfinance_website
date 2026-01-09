import pic3 from '../assets/pic3.webp'
import pic4 from '../assets/pic4.jpg'
import { useTranslation } from 'react-i18next'

function Gallery() {
  const { t } = useTranslation()
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{t('ourImpact')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('impactSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-xl shadow-2xl">
            <img 
              src={pic3} 
              alt="Community Impact" 
              loading="lazy"
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{t('empoweringCommunities')}</h3>
                <p className="text-gray-200">{t('supportingLocal')}</p>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-xl shadow-2xl">
            <img 
              src={pic4} 
              alt="Financial Services" 
              loading="lazy"
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{t('financialInclusion')}</h3>
                <p className="text-gray-200">{t('bringingBanking')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
