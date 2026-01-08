import pic3 from '../assets/pic3.webp'
import pic4 from '../assets/pic4.jpg'

function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Eshet MFI is making a difference in communities across Ethiopia
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
                <h3 className="text-2xl font-bold mb-2">Empowering Communities</h3>
                <p className="text-gray-200">Supporting local businesses and entrepreneurs</p>
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
                <h3 className="text-2xl font-bold mb-2">Financial Inclusion</h3>
                <p className="text-gray-200">Bringing banking services to rural areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
