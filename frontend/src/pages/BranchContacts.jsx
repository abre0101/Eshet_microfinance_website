import { useState, useEffect } from 'react'
import axios from 'axios'
import heroBg from '../assets/pic4.jpg'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover object-center" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Branch Contacts</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 drop-shadow-md">
            Find your nearest Eshet MFI branch across Ethiopia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Region Filter */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedRegion === region
                  ? 'bg-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 shadow-md'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Display by Region */}
        {selectedRegion === 'All' ? (
          Object.entries(groupedBranches).map(([region, regionBranches]) => (
            <div key={region} className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-emerald-600">{region} Area</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
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
                      <tr key={index} className="border-b hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4 font-semibold text-gray-900">{branch.branchName}</td>
                        <td className="px-6 py-4 text-gray-700">{branch.region}</td>
                        <td className="px-6 py-4 text-gray-700">{branch.zone}</td>
                        <td className="px-6 py-4 text-gray-700">{branch.city}</td>
                        <td className="px-6 py-4 text-gray-700">{branch.location}</td>
                        <td className="px-6 py-4 text-emerald-600 font-semibold">{branch.tel}</td>
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

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-10 rounded-2xl shadow-xl">
          <h3 className="text-4xl font-bold mb-4">Need Help Finding a Branch?</h3>
          <p className="text-xl mb-8">
            Contact our customer service team and we'll help you find the nearest Eshet MFI branch to your location.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="tel:+251902481762" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-center text-lg">
              Call: +251-9-0248-1762
            </a>
            <a href="mailto:eshetmfi@gmail.com" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition text-center text-lg">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BranchContacts
