import React from "react";
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";
import CurvedSlider from "../../components/CurvedSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { a } from "framer-motion/client";

function ContactHero() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: false,
     cssEase: "linear",
  // centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Hero clCustom="none">
      <div className="max-w-[1600px] m-auto pt-[50px] md:pt-[70px] lg:pt-[100px] px-[20px] md:px-[30px] lg:px-[50px]">
        <motion.h1
          className="text-h2 font-parkinsans leading-tight max-w-[900px] m-auto text-center"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
         Start your journey with a conversation. Let’s Connect!
        
        </motion.h1>

        <motion.p
          className="text-gray-300 font-monospace text-xl mt-4 max-w-[800px] text-center mx-auto"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
      Reach out today, we’ll map the way forward with clear strategies and reliable legal assistance.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center flex-col items-center gap-4"
          initial={{ opacity: 0, y: 40 }} // from bottom
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button text="Request a call back for other services" link={"mailto:info@varallogroup.com"} arrowClass="d" />
          <div className="border-b border-white ">
            <a href="#contact-main" className="text-base font-manrope md:text-xl">Schedule a Deposition &nbsp; <i class="fal fa-external-link text-base"></i></a>
          </div>
        </motion.div>
       <div className="mt-5">
         {/* <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween", duration: 1.5 }} // Increased duration
          src="./contact-hero.png" // Replace with your actual image path
          alt="Professional"
          className="w-full  "
        /> */}
         
       </div>
      </div>
      <div className="block md:hidden">
      <div className="container-fluid">
        <Slider {...settings}>
        <div><img src="/contact1.png" alt="" /></div>
        <div><img src="/contact2.png" alt="" /></div>
        <div><img src="/contact3.png" alt="" /></div>
        <div><img src="/contact1.png" alt="" /></div>
        <div><img src="/contact2.png" alt="" /></div>
        <div><img src="/contact3.png" alt="" /></div>
      </Slider>
      </div>
      </div>
      <div className="hidden md:block">
        <CurvedSlider />
      </div>
    </Hero>
  );
}

export default ContactHero;
