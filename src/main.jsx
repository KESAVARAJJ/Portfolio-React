import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Header from './Components/Header.jsx'
import Hero from './Pages/Hero.jsx'
import About from './Pages/About.jsx'
import Project from './Pages/Project.jsx'
import Resume from './Pages/Resume.jsx'
import Contact from './Pages/Contact.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>
  
    <App />
  </StrictMode>,
)
