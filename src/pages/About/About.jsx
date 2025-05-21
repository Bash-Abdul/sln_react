import React from 'react'
import panels from '../../assets/panelss.webp'

const About = () => {
  return (
    <div className='py-15'>
      <div>
        <img src={panels} alt="about image" />
        <div>
          <h1>
            Why Choose Us
          </h1>
          <div>
            <p>Choosing the right partner for your engineering needs is pivotal. At SLN, we stand as the premier choice for comprehensive engineering solutions. Here's why discerning clients trust us:</p>
            <ul>
              <li>Comprehensive Expertise</li>
              <li>Innovation at the Core</li>
              <li>Seasoned Professionals</li>
              <li>Reliability and Timeliness</li>
              <li>Unparalleled Quality</li>
              <li>Client-Centric Approach</li>
              <li>Sustainability Focus</li>
              <li>End-to-End Solutions</li>
            </ul>

            <button>SEE OUR SERVICES</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About