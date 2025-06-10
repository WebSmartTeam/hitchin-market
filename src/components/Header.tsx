import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/assets/images/live_site/HITCHIN-MARKET-LOGO-new.jpg" 
              alt="Hitchin Market" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Home
            </a>
            <a href="#market-days" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Market Days
            </a>
            <a href="#traders" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Our Traders
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#events" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Events
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">01462 456202</div>
              <div className="text-xs text-gray-600">info@hitchinmarkets.co.uk</div>
            </div>
            <div className="flex space-x-2">
              <a href="https://twitter.com/hitchinmarkets" className="text-gray-400 hover:text-green-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://facebook.com/hitchinmarkets" className="text-gray-400 hover:text-green-600">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com/hitchinmarkets" className="text-gray-400 hover:text-green-600">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 4.267c.76 0 1.376.616 1.376 1.376s-.616 1.376-1.376 1.376-1.376-.616-1.376-1.376.616-1.376 1.376-1.376zm7.072 0c.76 0 1.376.616 1.376 1.376s-.616 1.376-1.376 1.376-1.376-.616-1.376-1.376.616-1.376 1.376-1.376zm-3.521 2.3c1.798 0 3.253 1.455 3.253 3.253S14.798 13.073 13 13.073s-3.253-1.455-3.253-3.253S11.202 6.567 13 6.567z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Home
              </a>
              <a href="#market-days" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Market Days
              </a>
              <a href="#traders" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Our Traders
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                About Us
              </a>
              <a href="#events" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Events
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors">
                Contact
              </a>
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-900">01462 456202</div>
                <div className="text-sm text-gray-600">info@hitchinmarkets.co.uk</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header