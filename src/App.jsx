import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "./assets/components/Navbar"
import Section from './assets/components/Section'


function App() {
  
  const [isDark, setIsDark] = useState(false)

  function toggleDarkMode(){
    setIsDark(prevState=>!prevState)
  }

  return (
    <div className="container">
            <Navbar darkMode={isDark} toggleDarkMode={toggleDarkMode} />
            <Section darkMode={isDark} />
        </div>
  )
}

export default App
