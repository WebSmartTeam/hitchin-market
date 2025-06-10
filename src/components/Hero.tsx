
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/demo_site/market_image_1.png" 
          alt="Hitchin Market" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hitchin Market
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Heart of the Community
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-90">
            Over 150 covered stalls by the river in Hitchin town centre. 
            One of the largest outdoor markets in the region, serving the community since the mid-19th century.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#market-days"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Market Days
            </a>
            <a 
              href="#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Apply for Stall
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">150+</div>
              <div className="text-lg opacity-90">Covered Stalls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">4</div>
              <div className="text-lg opacity-90">Market Days Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">170+</div>
              <div className="text-lg opacity-90">Years of Heritage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero