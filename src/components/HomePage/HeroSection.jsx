import React from 'react'
import home from '../../assets/home.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
    
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${home})` }}>
      <div className="max-w-3xl">
        <p  className='text-blue-600 text-xl'>Empowering Tomorrow</p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6 mt-3">
        Your Gateway to Cutting-Edge Engineering Solutions!
        </h1>
        <Link to={'services'}>
        <button className="cursor-pointer bg-white text-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-100 transition">
          Explore Services
        </button>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection

// import React from 'react'
// import home from '../../assets/home.jpg'
// import { Link } from 'react-router-dom'

// const HeroSection = () => {
//   return (
//     <section
//       className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${home})`,
//       }}
//     >
//       <div className="max-w-3xl px-2 sm:px-4">
//         <p className="text-blue-600 text-base sm:text-xl">Empowering Tomorrow</p>
//         <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mb-6 mt-3">
//           Your Gateway to Cutting-Edge Engineering Solutions!
//         </h1>
//         <Link to={'/services'}>
//           <button className="cursor-pointer bg-white text-blue-600 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold hover:bg-blue-100 transition">
//             Explore Services
//           </button>
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default HeroSection
