import { useState } from "react"
import About from "./components/about/About"
import Education from "./components/education/Education"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/hero-section/HeroSection"
import Nav from "./components/nav/Nav"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"



function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch(activeComponent){
      case 'home':
        return <HeroSection/>;
      case 'about':
        return (
        <>
          <About/>
          <Education/>
          <Skills/>
        </>
      );
      case 'projects':
        return <Projects/>;
      case 'contact':
        return <br/>;
    }
  }

  const onHomeClick = () => {
    setActiveComponent('home');
  }
  const onAboutClick = () => {
    setActiveComponent('about');
  }
  const onProjectClick = () => {
    setActiveComponent('projects');
  }
  const onContactClick = () => {
    setActiveComponent('contact');
  }

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="bg-white dark:bg-[#171717]">
    {/* <Nav 
      home={onHomeClick}
      project={onProjectClick} 
      about={onAboutClick} 
      contact={onContactClick}
    /> */}
    {renderComponent()}
    {/* <Footer /> */}
    </div>
  )
}

export default App