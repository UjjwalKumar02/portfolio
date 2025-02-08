import About from "./components/about/About"
import Education from "./components/education/Education"
import Header from "./components/header/Header"
import HeroSection from "./components/hero-section/HeroSection"
import Projects from "./components/projects/Projects"



function App() {
  

  return (
    <div className="bg-[#f8f9fa]">
    <Header />
    <HeroSection />
    <About />
    <Education />
    <Projects />
    </div>
  )
}

export default App
