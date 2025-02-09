import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Education from "./components/education/Education"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HeroSection from "./components/hero-section/HeroSection"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"

// #f8f9fa

function App() {
  

  return (
    <div className="bg-[#050505]">
    <Header />
    <HeroSection />
    <About />
    <Education />
    <Projects />
    <Skills />
    <Footer />
    <Contact />
    </div>
  )
}

export default App
