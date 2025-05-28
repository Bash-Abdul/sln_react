import React from 'react'
import ContactText from '../../components/ContactPage/ContactText'
import ContactForm from '../../components/ContactPage/ContactForm'
import LocationMap from '../../components/LocationMap'
import SEO from '../../components/Seo';

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact - S.L.N Engineering Limited"
        canonical="https://slneng.com/contact"
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[3rem] py-15'>
      <ContactForm/>
      <ContactText/>
    </div>

    <LocationMap/>
    </div>
  )
}

export default Contact