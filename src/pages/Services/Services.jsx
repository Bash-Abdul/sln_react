import React from 'react'
import facility from '../../assets/facility.png'
import epc from '../../assets/epc.png'
import power from '../../assets/power.png'
import automation from '../../assets/automation.png'
import wrench from '../../assets/wrench.png'
import blueprint from '../../assets/blueprint.png'
import toolbox from '../../assets/toolbox.png'
import solar from '../../assets/solar-energy.png'

const Services = () => {
  // Services data array
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
    {
      id: 7,
      icon: toolbox,
      title: "Sales and Supplies of Engineering Spares and Materials",
      description: "Your trusted source for top-quality engineering spares and materials. We offer a comprehensive range of products, ensuring that your projects have access to the finest components."
    },
    {
      id: 8,
      icon: solar,
      title: "Solar Lights and Panels Solutions",
      description: "Championing sustainability, our solar solutions harness the power of renewable energy. Illuminate the future with state-of-the-art solar lights and panels that redefine eco-friendly lighting solutions."
    }
  ];

  return (
    <div className='py-15'>
      <div className='flex justify-center items-center w-full flex-col gap-4 text-center'>
        <h1 className='text-3xl font-semibold'>Discover Services Designed to Help You Thrive</h1>
        <p className='text-xs w-[50%] leading-relaxed'>Your trusted partner in delivering a comprehensive suite of engineering solutions tailored to meet your diverse needs. With a commitment to excellence, innovation, and client satisfaction, we offer a wide range of services that cater to various facets of the engineering landscape.</p>
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
    </div>
  )
}

export default Services