
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Market Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Market Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Hitchin Market</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Market History</a></li>
              <li><a href="#traders" className="hover:text-white transition-colors">Our Traders</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Market Categories</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#contact" className="hover:text-white transition-colors">Apply for a Stall</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Find Us</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">Latest News</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>01462 456202</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@hitchinmarkets.co.uk</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1A Churchyard, Hitchin, Hertfordshire</span>
              </div>
            </div>
          </div>

          {/* Market Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Market Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Tuesday:</span>
                <span className="text-sm">6am - 3:30pm</span>
              </div>
              <div className="flex justify-between">
                <span>Friday:</span>
                <span className="text-sm">6am - 3pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-sm">6am - 4:30pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-sm">6am - 1pm</span>
              </div>
              <div className="mt-3 text-sm text-gray-400">
                *Car Boot Sale on Sundays
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-lg font-semibold">Follow Us:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/hitchinmarkets" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/hitchinmarkets" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/hitchinmarkets" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 4.267c.76 0 1.376.616 1.376 1.376s-.616 1.376-1.376 1.376-1.376-.616-1.376-1.376.616-1.376 1.376-1.376zm7.072 0c.76 0 1.376.616 1.376 1.376s-.616 1.376-1.376 1.376-1.376-.616-1.376-1.376.616-1.376 1.376-1.376zm-3.521 2.3c1.798 0 3.253 1.455 3.253 3.253S14.798 13.073 13 13.073s-3.253-1.455-3.253-3.253S11.202 6.567 13 6.567z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* NHDC Logo */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400">Managed by:</span>
              <img 
                src="/assets/images/live_site/nhdc.jpg" 
                alt="North Hertfordshire District Council" 
                className="h-8 w-auto opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © 2025 Hitchin Market | Managed by North Hertfordshire District Council
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#accessibility" className="hover:text-white transition-colors">Accessibility</a>
              <a href="#sitemap" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer