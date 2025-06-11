
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 market-pattern" />
      
      {/* Decorative Elements from assets */}
      <div className="absolute top-20 left-10 w-64 h-32 opacity-20">
        <img 
          src="/assets/Elements/Rainbow-2048x320.png" 
          alt="Market Rainbow"
          className="w-full h-full object-contain animate-float"
        />
      </div>
      
      <div className="absolute bottom-32 right-16 w-32 h-32 opacity-30">
        <img 
          src="/assets/Elements/5.png" 
          alt="Market Element"
          className="w-full h-full object-contain animate-float delay-1000"
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-88 h-88 bg-gradient-to-tl from-primary-emerald/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 section-container flex items-center min-h-screen py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Content */}
          <div className="text-white space-y-8 animate-in">
            {/* Heritage Badge */}
            <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-accent-gold rounded-full mr-3 animate-pulse" />
              <span className="text-sm font-medium">Est. 1853 • Heritage Market</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-none text-shadow">
                <span className="block">Hitchin</span>
                <span className="block bg-gradient-to-r from-accent-gold via-heritage-gold to-accent-copper bg-clip-text text-transparent animate-glow">
                  Market
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl font-display font-medium text-neutral-cream/90">
                Heart of the Community
              </p>
              
              <p className="text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
                Over 150 covered stalls by the river in Hitchin town centre. 
                Fresh produce, artisan crafts, antiques and local treasures await you 
                in this historic market that has served the community for over 170 years.
              </p>
            </div>

            {/* Live Status Card */}
            <div className="card-modern p-6 max-w-md">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-semibold text-text-dark">Market Open Today</span>
                </div>
                <div className="text-text-medium">6:00 AM - 4:30 PM</div>
              </div>
              <div className="mt-3 text-sm text-text-light">
                🚗 Free parking available • 🚌 Bus routes 11, 12, 14
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="btn-primary group">
                <span className="flex items-center">
                  Explore Market Days
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button className="btn-secondary group">
                <span className="flex items-center">
                  Apply for Stall
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative animate-in delay-300">
            {/* Main Stats Card */}
            <div className="card-modern p-8 space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-semibold text-text-dark mb-2">
                  Market at a Glance
                </h3>
                <p className="text-text-light">
                  Serving the community since the mid-19th century
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2 group hover:scale-105 transition-transform">
                  <div className="text-4xl font-display font-bold text-accent-gold">150+</div>
                  <div className="text-sm text-text-medium font-medium">Market Stalls</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-accent-copper mx-auto rounded-full" />
                </div>
                
                <div className="text-center space-y-2 group hover:scale-105 transition-transform">
                  <div className="text-4xl font-display font-bold text-primary-emerald">170+</div>
                  <div className="text-sm text-text-medium font-medium">Years Heritage</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary-emerald to-primary-medium mx-auto rounded-full" />
                </div>
                
                <div className="text-center space-y-2 group hover:scale-105 transition-transform">
                  <div className="text-4xl font-display font-bold text-heritage-navy">4</div>
                  <div className="text-sm text-text-medium font-medium">Days Weekly</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-heritage-navy to-primary-dark mx-auto rounded-full" />
                </div>
                
                <div className="text-center space-y-2 group hover:scale-105 transition-transform">
                  <div className="text-4xl font-display font-bold text-accent-copper">River</div>
                  <div className="text-sm text-text-medium font-medium">Location</div>
                  <div className="w-12 h-1 bg-gradient-to-r from-accent-copper to-accent-sage mx-auto rounded-full" />
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative mt-8 aspect-card rounded-xl overflow-hidden">
                <img 
                  src="/assets/images/demo_site/market_image_2.png" 
                  alt="Hitchin Market Scene"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Historic Market Square</div>
                  <div className="text-xs opacity-80">By the River Hiz • Town Centre</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 glass-effect px-4 py-2 rounded-full text-white text-sm animate-float">
              🏆 Award Winner
            </div>
            <div className="absolute -bottom-4 -right-4 glass-effect px-4 py-2 rounded-full text-white text-sm animate-float delay-1000">
              🌟 Local Favourite
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce z-10">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Discover More</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero