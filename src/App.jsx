import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/projects/Project'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  )
}

export default App


