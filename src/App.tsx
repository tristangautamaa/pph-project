import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courts from './components/Courts'
import WhyPadel from './components/WhyPadel'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courts />
        <WhyPadel />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
