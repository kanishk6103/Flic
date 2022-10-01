import React, { useEffect, useRef } from 'react'
import Contact from './components/Contact'
import HomeHero from './components/HomeHero'
import Navbar from './components/Navbar'
import Teams from './components/Teams'
import Timeline from './components/Timeline'
import locomotiveScroll from 'locomotive-scroll'
import './index.css'

const App = () => {
  const ref = useRef(null);
  useEffect(() => {
    if(ref){
      new locomotiveScroll({
        el : ref.current,
        smooth :true,
        direction : 'horizontal',
        multiplier : 0.5
      })
    }
  }, [])
  return (
    <div>
        {/* <Navbar/> */}
        <div className='flex w-[400vw] h-[100vh] overflow-y-hidden' ref={ref} data-scroll-container>
        <HomeHero/>
        <Timeline/>
        <Teams/>
        <Contact/>
        </div>
    </div>
  )
}

export default App