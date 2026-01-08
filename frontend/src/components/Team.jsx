function Team() {
  const teamMembers = [
    {
      name: 'Mr. Furgassa Hirpa Amena',
      position: 'CEO',
      phone: '+251-9-0248-1762',
      email: 'eshetmfi@gmail.com'
    },
    {
      name: 'Ato Bedesa Umeta',
      position: 'HR Manager',
      phone: '+251-11-3206451 / +251911343819',
      email: ''
    },
    {
      name: 'Ato Ayinu Aboma',
      position: 'Operation Manager',
      phone: '+251913234811',
      email: ''
    },
    {
      name: 'Ato Belamo Gonfa',
      position: 'Finance Manager',
      phone: '+251910717855',
      email: ''
    },
    {
      name: 'Ato Tsegaye Fufa',
      position: 'MIS Manager',
      phone: '+251922000719',
      email: ''
    },
    {
      name: 'Ato Zebanu Abera',
      position: 'Marketing Manager',
      phone: '+251973370087',
      email: ''
    },
    {
      name: 'Ato Tadele Mekonnen',
      position: 'Designation',
      phone: '+251911944257',
      email: 'tadele.henok29@gmail.com'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">Management Team</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our experienced leadership team
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4 text-center">👤</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-4 text-center">{member.position}</p>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <span>📞</span>
                  <span>{member.phone}</span>
                </p>
                {member.email && (
                  <p className="flex items-center gap-2">
                    <span>✉️</span>
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
