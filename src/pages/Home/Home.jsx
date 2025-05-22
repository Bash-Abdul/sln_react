import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Welcome from '../../components/HomePage/Welcome'
import StatsSection from '../../components/HomePage/StatsSection'
import Service from '../../components/HomePage/Service'
import Ready from '../../components/Ready'

const Home = () => {
  return (
    <div>
        {/* <HeroSection /> */}
        <Welcome />
        
        <Service/>
        <StatsSection/>
        <Ready/>
    </div>
  )
}

export default Home