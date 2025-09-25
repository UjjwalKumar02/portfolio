import { useState } from "react"
import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Project from "./components/project/Project"
import Home from "./components/home/Home"



function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'about':
        return (
          <About />
        );
      case 'projects':
        return <Project />;
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


  return (

    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="bg-pink- lg:w-[50%] mx-auto shadow-xs min-h-screen justify-center">
      <Hero onHomeClick={onHomeClick} onProjectClick={onProjectClick} onAboutClick={onAboutClick} />
      {renderComponent()}
    </div>

  )
}

export default App