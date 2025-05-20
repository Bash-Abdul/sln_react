import React from 'react'
import ContactText from '../../components/ContactPage/ContactText'
import ContactForm from '../../components/ContactPage/ContactForm'
import LocationMap from '../../components/LocationMap'

const Contact = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-[3rem] py-15'>
      <ContactForm/>
      <ContactText/>
    </div>

    <LocationMap/>
    </div>
  )
}

export default Contact