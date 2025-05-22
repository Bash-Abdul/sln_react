import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Welcome from '../../components/HomePage/Welcome'
import StatsSection from '../../components/HomePage/StatsSection'
import Service from '../../components/HomePage/Service'

const Home = () => {
  return (
    <div>
        {/* <HeroSection /> */}
        <Welcome />
        {/* <StatsSection/> */}
        <Service/>
    </div>
  )
}

export default Home