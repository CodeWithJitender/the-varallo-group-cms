import React from 'react'
import ServiceHero from '../sections/service/ServiceHero'
import ServicesGrid from '../sections/service/ServicesGrid'
import Testimonials from '../sections/home/Testimonials'

function Service() {
  return (
    <div id='service-page' className=''>
        <ServiceHero/>
        <ServicesGrid/>
        <Testimonials/>
    </div>
  )
}

export default Service