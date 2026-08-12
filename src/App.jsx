import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Certificates from "./components/Certificates/Certificates";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certificates/>
      <Contact />

      {/* Certificates, Footer added next */}
    </div>
  );
}

export default App;