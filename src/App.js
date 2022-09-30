import React from 'react'
import Contact from './components/Contact'
import HomeHero from './components/HomeHero'
import Navbar from './components/Navbar'
import Teams from './components/Teams'
import Timeline from './components/Timeline'
import './index.css'

const App = () => {
  return (
    <div>
        <Navbar/>
        <HomeHero/>
        <Timeline/>
        <Teams/>
        <Contact/>
    </div>
  )
}

export default App