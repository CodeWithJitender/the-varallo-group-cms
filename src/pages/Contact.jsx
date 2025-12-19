import React, { useEffect } from 'react'
import ContactHero from '../sections/contact/ContactHero'
import ContactUs from '../sections/contact/ContactUs'
import { useLocation } from 'react-router-dom';
import useSmoothScroll from '../components/useSmoothScroll';

function Contact() {
  useSmoothScroll(1000); // 2 seconds
  return (
    <div>
      <ContactHero />
      <ContactUs />
    </div>
  )
}

export default Contact