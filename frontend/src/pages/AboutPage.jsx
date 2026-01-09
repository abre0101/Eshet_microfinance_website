import aboutUsImg from '../assets/about_us.jpg'
import aboutUsImg2 from '../assets/about_us2.jpg'

function AboutPage() {
  const boardMembers = [
    { name: 'Mr. Atnafu W/Gebriel Habtemariam', email: 'Atnafu.woldegebriel@gmail.com', position: 'Chairperson' },
    { name: 'Mr. Desalegn Senbeta Feyesa', email: 'desalegn2011@gmail.com', position: 'Deputy Chairperson' },
    { name: 'Mr. Berhanu Mekonin', email: 'berhanum@fgaeet.org', position: 'Member' },
    { name: 'Mr. Tamiru Sebsibe', email: 'tamiru_sebsibe@yahoo.com', position: 'Member' },
    { name: 'Mr. Berehanu Eidety', email: 'berhanuek@yahoo.com', position: 'Member' },
    { name: 'Mr. Deressa Kenea', email: 'deressak@yahoo.com', position: 'Member' },
    { name: 'Mr. Dejene Biru', email: 'dejenbiru@gmail.com', position: 'Member' }
  ]

  const managementTeam = [
    { name: 'Mr. Furgassa Hirpa Amena', position: 'CEO', phone: '+251-9-0248-1762', email: 'eshetmfi@gmail.com' },
    { name: 'Ato Bedesa Umeta', position: 'HR Manager', phone: '+251-11-3206451', email: '' },
    { name: 'Ato Ayinu Aboma', position: 'Operation Manager', phone: '+251913234811', email: '' },
    { name: 'Ato Belamo Gonfa', position: 'Finance Manager', phone: '+251910717855', email: '' },
    { name: 'Ato Tsegaye Fufa', position: 'MIS Manager', phone: '+251922000719', email: '' },
    { name: 'Ato Zebanu Abera', position: 'Marketing Manager', phone: '+251973370087', email: '' }
  ]

  const coreValues = [
    'Integrity', 'Accountability', 'Transparency', 'Respect', 
    'Speedy Service', 'Dedication', 'Impartiality', 'Confidentiality', 'Professionalism'
  ]

  const activities = [
    'Provision of microcredit to the target clients',
    'Accept and manage saving deposits from client and the public',
    'Development and provision of other financial products & services',
    'Provide organizational and technical supports to clients',
    'Conduct relevant studies and researches',
    'Undertake other activities customarily carried out by micro financing institutions'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Eshet MFI</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            Empowering communities through accessible financial services since 2000
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Company Profile */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-emerald-600">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Eshet Microfinance Institution (EMFI) was established in 2000 in accordance with proclamation number 40/96, and re-registered under proclamation 626/2009 for licensing and supervision of microfinancing institutions in Ethiopia.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Licensed by the National Bank of Ethiopia and registered with both Addis Ababa City Administration and Oromia Region, we started with an initial capital of Birr 225,000.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by ERSHA (Enhanced Rural Self Help Association), we've grown to 20 shareholders with a paid-up capital of Birr 10 Million as of June 2022.
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
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed text-emerald-50">
              Aspiring to be one of the top ten competent and leading MFIs in Ethiopia by the year 2035.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-10 rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed text-blue-50">
              Provide efficient and transparent financial services to low and medium income groups, enhancing their living status.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Our Core Values</h2>
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
          <h2 className="text-4xl font-bold mb-6">Our Target Community</h2>
          <p className="text-lg leading-relaxed mb-6">
            Eshet MFI is committed to bringing positive change to the well-being of the active poor and less privileged members of the community. We primarily focus on providing financial services to low-income groups residing in both rural and urban areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-3">🌾</div>
              <h4 className="text-xl font-bold mb-2">Small Holder Farmers</h4>
              <p className="text-emerald-100">Supporting agricultural development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-3">👩‍💼</div>
              <h4 className="text-xl font-bold mb-2">Women Entrepreneurs</h4>
              <p className="text-emerald-100">Empowering women in business</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-4xl mb-3">🏪</div>
              <h4 className="text-xl font-bold mb-2">Petty Traders</h4>
              <p className="text-emerald-100">Growing small businesses</p>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-20">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">Our Activities</h2>
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
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Board of Directors</h2>
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
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Management Team</h2>
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
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">Head Office</h3>
              <p className="mb-2 text-emerald-100">Addis Ababa, Ethiopia</p>
              <p className="text-lg">📞 Tel: 011-236-6281</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">West Shewa Area</h3>
              <p className="mb-2 text-blue-100">Regional Office</p>
              <p className="text-lg">📞 Tel: 011-236-6281</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-4">South West Shewa</h3>
              <p className="mb-2 text-purple-100">Regional Office</p>
              <p className="text-lg">📞 Tel: 011-3410-734</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
