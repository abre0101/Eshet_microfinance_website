import { useState, useEffect } from 'react'
import axios from 'axios'

function BranchContacts() {
  const [branches, setBranches] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRegion, setSelectedRegion] = useState('All')

  useEffect(() => {
    fetchBranches()
  }, [])

  const fetchBranches = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/branches')
      setBranches(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching branches:', error)
      setLoading(false)
    }
  }

  const regions = ['All', 'Addis Ababa', 'West Shewa', 'South West Shewa', 'Jimma']
  
  const filteredBranches = selectedRegion === 'All' 
    ? branches 
    : branches.filter(branch => branch.region === selectedRegion)

  const groupedBranches = regions.slice(1).reduce((acc, region) => {
    acc[region] = branches.filter(branch => branch.region === region)
    return acc
  }, {})

  if (loading) {
    return (
      <div className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading branches...</div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Branch Contacts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find contact information for all Eshet MFI branches across Ethiopia. 
            Visit us or get in touch with your nearest branch.
          </p>

          {/* Region Filter */}
          <div className="flex justify-center gap-4 flex-wrap">
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedRegion === region
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Display by Region */}
        {selectedRegion === 'All' ? (
          Object.entries(groupedBranches).map(([region, regionBranches]) => (
            <div key={region} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">{region} Area</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">L/No</th>
                      <th className="px-6 py-4 text-left">Branch Name</th>
                      <th className="px-6 py-4 text-left">Region</th>
                      <th className="px-6 py-4 text-left">Zone/Sub City</th>
                      <th className="px-6 py-4 text-left">City/Town</th>
                      <th className="px-6 py-4 text-left">Location/Woreda</th>
                      <th className="px-6 py-4 text-left">Tel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionBranches.map((branch, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4 font-semibold">{branch.branchName}</td>
                        <td className="px-6 py-4">{branch.region}</td>
                        <td className="px-6 py-4">{branch.zone}</td>
                        <td className="px-6 py-4">{branch.city}</td>
                        <td className="px-6 py-4">{branch.location}</td>
                        <td className="px-6 py-4 text-blue-600">{branch.tel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">{selectedRegion} Area</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">L/No</th>
                    <th className="px-6 py-4 text-left">Branch Name</th>
                    <th className="px-6 py-4 text-left">Region</th>
                    <th className="px-6 py-4 text-left">Zone/Sub City</th>
                    <th className="px-6 py-4 text-left">City/Town</th>
                    <th className="px-6 py-4 text-left">Location/Woreda</th>
                    <th className="px-6 py-4 text-left">Tel</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBranches.map((branch, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4 font-semibold">{branch.branchName}</td>
                      <td className="px-6 py-4">{branch.region}</td>
                      <td className="px-6 py-4">{branch.zone}</td>
                      <td className="px-6 py-4">{branch.city}</td>
                      <td className="px-6 py-4">{branch.location}</td>
                      <td className="px-6 py-4 text-blue-600">{branch.tel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <h3 className="text-3xl font-bold mb-4">Need Help Finding a Branch?</h3>
          <p className="text-lg mb-6">
            Contact our customer service team and we'll help you find the nearest Eshet MFI branch to your location.
          </p>
          <div className="flex gap-4">
            <a href="tel:+251902481762" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call: +251-9-0248-1762
            </a>
            <a href="mailto:eshetmfi@gmail.com" className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BranchContacts
