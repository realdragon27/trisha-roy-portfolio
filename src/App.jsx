import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ImpactNumbers from './components/ImpactNumbers'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BeyondWork from './components/BeyondWork'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ImpactNumbers />
        <Experience />
        <Skills />
        <Projects />
        <BeyondWork />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
