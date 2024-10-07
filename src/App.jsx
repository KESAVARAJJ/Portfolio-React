import { useState } from 'react'
import './index.css'
import './App.css'
import Hero from './Pages/Hero.jsx'
import About from './Pages/About.jsx'
import Project from './Pages/Project.jsx'
import Resume from './Pages/Resume.jsx'
import Contact from './Pages/Contact.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>

    </>
  )
}

export default App
