
const MarketInfo = () => {
  const marketDays = [
    { day: 'Tuesday', time: '6:00am - 3:30pm', type: 'General Market', isToday: false },
    { day: 'Friday', time: '6:00am - 3:00pm', type: 'Antiques & General Market', isToday: false },
    { day: 'Saturday', time: '6:00am - 4:30pm', type: 'General Market', isToday: true },
    { day: 'Sunday', time: '6:00am - 1:00pm', type: 'Morning Market/Car Boot Sale', isToday: false },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Market Hours Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Market Opening Hours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Visit us throughout the week for the finest selection of fresh produce, antiques, crafts, and general goods. 
            Each market day offers its own unique atmosphere and specialities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketDays.map((market, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:transform hover:scale-105 ${
                  market.isToday 
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`text-2xl font-bold mb-2 ${market.isToday ? 'text-white' : 'text-gray-900'}`}>
                  {market.day}
                </div>
                <div className={`text-lg font-semibold mb-2 ${market.isToday ? 'text-green-100' : 'text-green-600'}`}>
                  {market.time}
                </div>
                <div className={`text-sm ${market.isToday ? 'text-green-100' : 'text-gray-600'}`}>
                  {market.type}
                </div>
                {market.isToday && (
                  <div className="mt-3 text-sm font-semibold text-yellow-200">
                    Open Today!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us Today</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-semibold text-gray-900">1A Churchyard, Hitchin, Hertfordshire</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Phone</div>
                  <div className="font-semibold text-gray-900">01462 456202</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="font-semibold text-gray-900">info@hitchinmarkets.co.uk</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-2">Managed by</div>
              <div className="flex items-center space-x-3">
                <img 
                  src="/assets/images/live_site/nhdc.jpg" 
                  alt="North Hertfordshire District Council" 
                  className="h-8 w-auto"
                />
                <span className="font-semibold text-gray-900">North Hertfordshire District Council</span>
              </div>
            </div>
          </div>

          {/* Market Image */}
          <div className="relative">
            <img 
              src="/assets/images/demo_site/market_image_3.png" 
              alt="Fresh produce at Hitchin Market" 
              className="w-full rounded-xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MarketInfo