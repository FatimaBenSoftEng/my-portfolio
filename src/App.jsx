import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'apropos', 'experiences', 'competences', 'projets', 'formation', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
