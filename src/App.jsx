import About from "./components/about/About"
import Education from "./components/education/Education"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/hero-section/HeroSection"
import Nav from "./components/nav/Nav"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"

// #f8f9fa

function App() {
  

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="">
    <Nav />
    <HeroSection />
    <About />
    <Education />
    <Projects />
    <Skills />
    <Footer />
    
    </div>
  )
}

export default App
// #050505