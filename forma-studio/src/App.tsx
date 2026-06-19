import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Services from './components/Services'
import About from './components/About'
import StatsStrip from './components/StatsStrip'
import Process from './components/Process'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Services />
        <About />
        <StatsStrip />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
