import { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import Hero from './componants/Hero'
import Skills from './componants/Skills'
import About from './componants/About'
import Work from './componants/Work'
import Contact from './componants/Contact'
import Footer from './componants/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Hero />
     <Skills />
     <About />
     <Work />
     <Contact />
     <Footer />
    </>
  )
}

export default App
