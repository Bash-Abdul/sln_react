import React from 'react'
import home from '../../assets/home.jpg'

const HeroSection = () => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
    
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${home})` }}>
      <div className="max-w-3xl">
        <p  className='text-blue-600 text-xl'>Empowering Tomorrow</p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 mt-3">
        Your Gateway to Cutting-Edge Engineering Solutions!
        </h1>
        <button className="cursor-pointer bg-white text-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-100 transition">
          Explore Services
        </button>
      </div>
    </section>
  )
}

export default HeroSection