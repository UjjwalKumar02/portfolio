import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif", scrollBehavior: "smooth" }}
      className=" min-h-screen"
    >
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
