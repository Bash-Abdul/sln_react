import React from 'react'
import HeroSection from '../../components/HomePage/HeroSection'
import Welcome from '../../components/HomePage/Welcome'
import StatsSection from '../../components/HomePage/StatsSection'
import Service from '../../components/HomePage/Service'
import Ready from '../../components/Ready'
import SEO from '../../components/Seo'

const Home = () => {
  return (
    <div>
        {/* <HeroSection /> */}
        <SEO
        title="S.L.N Engineering Limited"
        description="Discover unparalleled engineering solutions with S.L.N Engineering Limited. From Engineering Procurement and Construction (EPC) to Power and Energy Solutions, Mechanical Services, Automation, Facility Management, and more. Our expertise encompasses innovative engineering designs and consultancy, sales of top-quality engineering spares and materials, and cutting-edge Solar Lights and Panels Solutions. Partner with us for excellence in every facet of your project."
        keywords="S.L.N, S.L.N ENG, S.L.N ENGINEERING LIMITED, s.l.n, s.l.neng, s.l.n engineering limited, s.l.nenglimited,sln, slneng, eng, engineering, engineering limited, Engineering Procurement and Construction,Power and Energy Solutions, Mechanical Services, Automation, Facility Management, Engineering Designs and Consultancy, Sales and Supplies of Engineering Spares and Materials, Solar Lights and Panels Solutions"
        canonical="https://slneng.com"
      />
        <Welcome />
        
        <Service/>
        <StatsSection/>
        <Ready/>
    </div>
  )
}

export default Home