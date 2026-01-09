import { useTranslation } from 'react-i18next'

function Team() {
  const { t } = useTranslation()
  
  const teamMembers = [
    {
      name: 'Mr. Furgassa Hirpa Amena',
      position: t('ceo'),
      phone: '+251-9-0248-1762',
      email: 'eshetmfi@gmail.com'
    },
    {
      name: 'Ato Bedesa Umeta',
      position: t('hrManager'),
      phone: '+251-11-3206451',
      email: ''
    },
    {
      name: 'Ato Ayinu Aboma',
      position: t('operationManager'),
      phone: '+251913234811',
      email: ''
    },
    {
      name: 'Ato Belamo Gonfa',
      position: t('financeManager'),
      phone: '+251910717855',
      email: ''
    },
    {
      name: 'Ato Tsegaye Fufa',
      position: t('misManager'),
      phone: '+251922000719',
      email: ''
    },
    {
      name: 'Ato Zebanu Abera',
      position: t('marketingManager'),
      phone: '+251973370087',
      email: ''
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('ourLeadershipTeam')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('leadershipSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-6xl mb-4 text-center">👤</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">{member.name}</h3>
              <p className="text-emerald-600 font-semibold mb-6 text-center text-lg">{member.position}</p>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span className="text-emerald-600">📞</span>
                  <span>{member.phone}</span>
                </p>
                {member.email && (
                  <p className="flex items-center gap-2">
                    <span className="text-emerald-600">✉️</span>
                    <span className="break-all">{member.email}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
