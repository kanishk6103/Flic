import React from 'react'
import Contact from './components/Contact'
import HomeHero from './components/HomeHero'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'
import './index.css'

const App = () => {
  return (
    <div>
        <Navbar/>
        <HomeHero/>
        <Timeline/>
        <Contact/>
    </div>
  )
}

export default App