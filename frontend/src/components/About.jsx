
import pic1 from '../assets/PIC1.png'
import pic2 from '../assets/PIC2.png'
import nbe from '../assets/NBE.jfif'
import moe from '../assets/MOE.jfif'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">About Us</h2>
        
        {/* Company Profile with Images */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-blue-600">Company Profile</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Eshet Microfinance Institution (EMFI) was established in the year 2000 G.c in accordance with the proclamation number 40/96 and registered again by the amended proclamation number 626/2009 issued for licensing and supervision of micro financing Institutions in Ethiopia. The Institution has been secured a business license from the National Bank of Ethiopia and certificate of registration from both Addis Ababa City Administration and Oromia Region of Trade Industry and Tourism Bureau. The initial capital was birr 225,000.00.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The establishment of Eshet MFI was initiated by a local NGO, named ERSHA (Enhanced Rural Self Help Association) that had been providing an integrated rural development program including saving and credit as one of its core development intervention strategies. Currently, the number of nominal shareholders has increased to 20 through transfer of shares from the founding shareholders. The paid up capital of Eshet has increased to Birr 10 (Ten) Million as of June 30, 2022.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={pic1} alt="Eshet MFI" className="rounded-xl shadow-lg w-full h-64 object-cover" />
            <img src={pic2} alt="Eshet MFI Services" className="rounded-xl shadow-lg w-full h-64 object-cover" />
          </div>
        </div>

        {/* Regulatory Bodies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Licensed & Regulated By</h3>
          <div className="flex justify-center gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img src={nbe} alt="National Bank of Ethiopia" className="h-24 w-auto object-contain" />
              <p className="text-center mt-2 font-semibold text-gray-700">National Bank of Ethiopia</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <img src={moe} alt="Ministry" className="h-24 w-auto object-contain" />
              <p className="text-center mt-2 font-semibold text-gray-700">Regulatory Authority</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aspiring to be one of the top ten competent and leading MFIs in Ethiopia by the year 2035.
            </p>
          </div>
          <div className="bg-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide efficient and transparent financial services to low and medium income group of the society; mainly MSMEs, Women, youth and small-holder farmers operating in rural and urban areas to enhance their living status.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Integrity</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Accountability</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Transparency</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Respect</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Speedy Service</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Dedication</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Impartiality</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Confidentiality</p>
            </div>
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold text-gray-800">Professionalism</p>
            </div>
          </div>
        </div>

        {/* Goal */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Goal</h3>
          <p className="text-lg leading-relaxed">
            Providing quality and appropriate products (Services) that best satisfy the need of clients and ensure improvement of their wellbeing.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
