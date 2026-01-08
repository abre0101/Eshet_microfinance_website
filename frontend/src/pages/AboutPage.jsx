import aboutUsImg from '../assets/about_us.jpg'

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
    { name: 'Ato Bedesa Umeta', position: 'HR Manager', phone: '+251-11-3206451 / +251911343819', email: '' },
    { name: 'Ato Ayinu Aboma', position: 'Operation Manager', phone: '+251913234811', email: '' },
    { name: 'Ato Belamo Gonfa', position: 'Finance Manager', phone: '+251910717855', email: '' },
    { name: 'Ato Tsegaye Fufa', position: 'MIS Manager', phone: '+251922000719', email: '' },
    { name: 'Ato Zebanu Abera', position: 'Marketing Manager', phone: '+251973370087', email: '' },
    { name: 'Ato Tadele Mekonnen', position: 'Designation', phone: '+251911944257', email: 'tadele.henok29@gmail.com' }
  ]

  const coreValues = [
    'Integrity', 'Accountability', 'Transparency', 'Respect', 
    'Speedy service', 'Dedication', 'Impartiality', 'Confidentiality', 'Professionalism'
  ]

  const activities = [
    'Provision of microcredit to the target clients',
    'Accept and manage saving deposits from client and the public',
    'Development and provision of other financial products & services like insurance and others pertinent to clients needs',
    'Provide the organizational and other technical supports to clients in the form of training, advice, etc',
    'Conduct relevant studies and researches that contribute to improvement of the institutions performance',
    'Undertake other activities customarily carried out by micro financing institutions and applicable to the law'
  ]

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">About Eshet MFI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities through accessible financial services since 2000
          </p>
        </div>

        {/* About Image */}
        <div className="mb-12">
          <img src={aboutUsImg} alt="About Eshet MFI" className="rounded-xl shadow-2xl w-full max-w-4xl mx-auto h-96 object-cover" />
        </div>

        {/* Company Profile with Image */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Company Profile</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Eshet Microfinance Institution (EMFI) was established in the year 2000 G.c in accordance with the proclamation number 40/96 and registered again by the amended proclamation number 626/2009 issued for licensing and supervision of micro financing Institutions in Ethiopia. The Institution has been secured a business license from the National Bank of Ethiopia and certificate of registration from both Addis Ababa City Administration and Oromia Region of Trade Industry and Tourism Bureau. The initial capital was birr 225,000.00.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The establishment of Eshet MFI was initiated by a local NGO, named ERSHA (Enhanced Rural Self Help Association) that had been providing an integrated rural development program including saving and credit as one of its core development intervention strategies. Currently, the number of nominal shareholders has increased to 20 through transfer of shares from the founding shareholders. The paid up capital of Eshet has increased to Birr 10 (Ten) Million as of June 30, 2022.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Vision</h3>
            <p className="text-lg leading-relaxed">
              Aspiring to be one of the top ten competent and leading MFIs in Ethiopia by the year 2035.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Mission</h3>
            <p className="text-lg leading-relaxed">
              Provide efficient and transparent financial services to low and medium income group of the society; mainly MSMEs, Women, youth and small-holder farmers operating in rural and urban areas to enhance their living status.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Core Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition">
                <p className="font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Board of Directors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-3 text-center">👤</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 break-all">{member.email}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Management Team */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Management Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-3 text-center">👨‍💼</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.position}</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>📞 {member.phone}</p>
                  {member.email && <p className="break-all">✉️ {member.email}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Targeting */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Targeting</h2>
          <p className="text-lg leading-relaxed">
            Eshet MFI is committed to bring positive change to the well-being of the active poor and less privileged category of the community. Hence, the institution is primarily focusing on providing financial services to low income group residing both in rural and urban area. It has special focuses to serve small holder farmers, women and petty traders. The set-up of the organization, its culture, policies and procedures have been designed and developed to deliver financial service to its target groups.
          </p>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Activities</h2>
          <ul className="space-y-3">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">✓</span>
                <span className="text-gray-700">{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Offices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Head Office</h3>
            <p className="mb-2">Addis Ababa, Ethiopia</p>
            <p>📞 Tel: 011-236-6281</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">West Shewa Area Office</h3>
            <p>📞 Tel: 011-236-6281</p>
          </div>
          <div className="bg-indigo-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">South West Shewa Area Office</h3>
            <p>📞 Tel: 011-3410-734</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
