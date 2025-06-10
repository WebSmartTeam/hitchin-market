import Header from './components/Header'
import Hero from './components/Hero'
import MarketInfo from './components/MarketInfo'
import Categories from './components/Categories'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <MarketInfo />
        <Categories />
      </main>
      <Footer />
    </div>
  )
}

export default App