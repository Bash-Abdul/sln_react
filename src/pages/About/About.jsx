import React from 'react'
import panels from '../../assets/panelss.webp'
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <div className='py-15'>
      <div className='grid grid-cols-2 gap-10rem py-10'>
        <img src={panels} alt="about image" className='w-[35vw]'/>
        <div>
          <h1 className='font-semibold text-lg'>
            Why Choose Us
          </h1>
          <div className='mt-5'>
            <p>Choosing the right partner for your engineering needs is pivotal. At SLN, we stand as the premier choice for comprehensive engineering solutions. Here's why discerning clients trust us:</p>
            <ul className='mt-5 grid grid-cols-2 gap-8'>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/> Comprehensive Expertise</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>Innovation at the Core</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>Seasoned Professionals</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>Reliability and Timeliness</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>Unparalleled Quality</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>Client-Centric Approach</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>Sustainability Focus</li>
              <li className='flex items-center gap-2'><FaArrowRight className='bg-blue-800 text-white rounded-full p-1 w-5  h-5'/>End-to-End Solutions</li>
            </ul>

            <button className='bg-blue-800 px-4 py-5 text-white text-sm mt-8 cursor-pointer'>SEE OUR SERVICES</button>
          </div>
        </div>
      </div>


      {/* MISSION VISION STATEMENT */}
      {/* <div className='grid grid-cols-2 py-10 gap-10'>
        <div className='bg-blue-900 text-white py-8 px-6'>
          <h1 className='text-2xl mb-5'>MISSION STATEMENT</h1>
          <p>At SLN Engineering Limited, our mission is to lead the way in delivering innovative and sustainable engineering solutions. Committed to excellence, we aim to transcend industry norms and redefine possibilities. Our mission is rooted in the belief that engineering has the power to shape a future where communities thrive, industries flourish, and sustainability is the driving force. Our dedicated team strives to achieve this by consistently pushing boundaries and embracing new challenges with passion and precision.</p>
        </div>
        

        <div className='bg-blue-900 text-white py-8 px-6'>
          <h1 className='text-2xl mb-5'>VISION STATEMENT</h1>
          <p>Our vision at SLN, is to be the catalyst for positive change through engineering ingenuity. We envision a world where our solutions transcend expectations, fostering progress and connectivity. Striving to be a global influencer, we aspire to leave an indelible mark on the engineering landscape, driving towards a future where our contributions not only meet the needs of today but set the stage for a more efficient, sustainable, and interconnected tomorrow. Join us on this journey of vision, innovation, and engineering excellence.</p>
        </div>
      </div> */}

<div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-10'>
  <div className='bg-blue-900 text-white py-8 px-6'>
    <h1 className='text-2xl mb-5 font-semibold'>MISSION STATEMENT</h1>
    <p className='leading-relaxed'>
      At SLN Engineering Limited, our mission is to deliver innovative, sustainable, and high-quality engineering solutions. 
      We are committed to pushing the boundaries of what's possible by blending expertise with creativity. 
      Our goal is to transform industries, empower communities, and build a future where progress is driven by precision, passion, and purpose.
    </p>
  </div>

  <div className='bg-blue-900 text-white py-8 px-6'>
    <h1 className='text-2xl mb-5 font-semibold'>VISION STATEMENT</h1>
    <p className='leading-relaxed'>
      At SLN, our vision is to become a global leader in engineering excellence — a force for positive change. 
      We aspire to shape a connected and sustainable world through groundbreaking solutions that exceed expectations. 
      By fostering innovation and embracing challenges, we aim to leave a lasting impact on the engineering landscape for generations to come.
    </p>
  </div>
</div>



    </div>
  )
}

export default About