import React from 'react'
import AboutHero from '../sections/about/AboutHero'
import Mission from '../sections/about/Mission'
import Vision from '../sections/about/Vision'
import Story from '../sections/about/Story'
import OurFounder from '../sections/about/OurFounder'
import Team from '../sections/about/Team'
import Testimonials from '../sections/home/Testimonials'
import StackingCards from '../sections/about/StackingCards'

function About() {
  return (
    <div className='overflow-x-hidden'>
      <AboutHero />
      <div className="" id="mission">
      <Mission />
      </div>
      <div className="" id="vision">
        <Vision />
      </div>
      {/* <StackingCards /> */}
      <div className="" id="our-story">
        <Story />
      </div>
      <div className="" id="founder">
        <OurFounder />
      </div>
      <div className="" id="team">
        <Team />
      </div>
      <div className="" id="testimonials">
        <Testimonials />
      </div>
    </div>
  )
}

export default About