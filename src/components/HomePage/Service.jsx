import React from 'react'
import facility from '../../assets/facility.png'
import epc from '../../assets/epc.png'
import power from '../../assets/power.png'
import automation from '../../assets/automation.png'
import wrench from '../../assets/wrench.png'
import blueprint from '../../assets/blueprint.png'
import toolbox from '../../assets/toolbox.png'
import solar from '../../assets/solar-energy.png'
import { Link } from 'react-router-dom'

const Service = () => {

    const servicesData = [
        {
        id: 1,
        icon: facility,
        title: "Facility Management",
        description: "We take pride in managing facilities with precision, ensuring operational smoothness and maintaining peak performance standards."
      },
      {
        id: 2,
        icon: epc,
        title: "Engineering Procurement and Construction (EPC)",
        description: "Transform your visions into reality with our end-to-end EPC services. From conceptualization to execution, we seamlessly integrate engineering, procurement, and construction processes to deliver projects that stand the test of time.."
      },
  
      {
        id: 3,
        icon: power,
        title: "Power and Energy Solutions:",
        description: "At the forefront of energy innovation, we engineer sustainable power solutions that empower industries, communities, and businesses. From conventional to renewable energy sources, we ensure reliability and efficiency in every solution."
      },
      {
        id: 4,
        icon: wrench,
        title: "Mechanical Services",
        description: "Precision and durability define our Mechanical Services. Our expert team ensures that mechanical systems operate seamlessly, delivering performance that exceeds industry standards.."
      },
      {
        id: 5,
        icon: automation,
        title: "Automation",
        description: "Embracing cutting-edge technology, we deploy automation solutions that optimize operations and streamline processes, enhancing productivity and performance."
      },
      {
        id: 6,
        icon: blueprint,
        title: "Engineering Designs and Consultancy",
        description: "Our team of experts offers innovative designs and strategic consultancy services, providing tailored solutions to complex engineering challenges."
      },
    ];
  return (
    <div className='py-15'>
      <div className='flex justify-center items-center w-full flex-col gap-4 text-center'>
        <p className='text-xl font-semibold'>Our Services</p>
        <h1 className='text-4xl font-semibold w-[50%] leading-relaxed'>Discover Services Designed to Help You Thrive</h1>
      </div>

      <div className='w-full grid grid-cols-3 gap-[2rem] py-15 pt-20'>
        {servicesData.map((service) => (
          <div key={service.id} className='py-9 px-6 hover:shadow-md '>
            <img src={service.icon} alt={service.title} className='w-[3rem]' />
            <h3 className='text-xl text-blue-700 font-semibold py-6'>{service.title}</h3>
            <p className='text-xs text-gray-400 leading-relaxed'>{service.description}</p>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center'> 
      <Link to={'/services'}>
      <button className='bg-blue-600 text-white text-sm py-4 px-6 cursor-pointer '>
        View More
      </button>
      </Link>
      </div>
    </div>
  )
}

export default Service