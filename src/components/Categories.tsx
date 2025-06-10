
const Categories = () => {
  const categories = [
    {
      title: 'Fresh Produce',
      description: 'Locally sourced fruits, vegetables, and seasonal produce',
      image: '/assets/images/demo_site/market_image_3.png',
      icon: '🥕',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Antiques & Vintage',
      description: 'Unique treasures, collectibles, and vintage finds',
      image: '/assets/images/demo_site/market_image_2.png',
      icon: '🏺',
      color: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Crafts & Arts',
      description: 'Handmade crafts, local artwork, and creative goods',
      image: '/assets/images/demo_site/market_image_1.png',
      icon: '🎨',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'General Goods',
      description: 'Household items, clothing, and everyday essentials',
      image: '/assets/images/demo_site/market_image_1.png',
      icon: '🛍️',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Food & Refreshments',
      description: 'Hot food, snacks, and refreshing beverages',
      image: '/assets/images/demo_site/market_image_4.png',
      icon: '🍲',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Special Events',
      description: 'Seasonal markets, craft fairs, and community events',
      image: '/assets/images/demo_site/market_image_2.png',
      icon: '🎪',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Our Market</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse range of stalls and traders that make Hitchin Market a vibrant 
            hub of community life. From fresh local produce to unique antiques, there's something for everyone.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <span className="text-4xl">{category.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  <span className="mr-2">Explore Stalls</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heritage Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                A Market with Heritage
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Established in the mid-19th century, Hitchin Market has been at the heart of our 
                community for over 170 years. What began as corn merchants trading on the High Street 
                has evolved into one of the region's most beloved markets.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we continue this proud tradition, supporting local traders and bringing 
                the community together in the beautiful setting by the river in Hitchin town centre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#about"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Learn Our History
                </a>
                <a 
                  href="#traders"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Meet Our Traders
                </a>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="/assets/images/live_site/picture1.jpg" 
                alt="Historical Hitchin Market" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Market Community?</h3>
            <p className="text-lg mb-6 opacity-90">
              Whether you're looking to shop, trade, or just enjoy the atmosphere, 
              Hitchin Market welcomes you with open arms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Apply for a Stall
              </a>
              <a 
                href="#market-days"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories