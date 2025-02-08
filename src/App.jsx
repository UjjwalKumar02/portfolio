import About from "./components/about/About"
import Education from "./components/education/Education"
import Header from "./components/header/Header"
import HeroSection from "./components/hero-section/HeroSection"



function App() {
  

  return (
    <div className="bg-[#f8f9fa]">
    <Header />
    <HeroSection />
    <About />
    <Education />
    </div>
  )
}

export default App
