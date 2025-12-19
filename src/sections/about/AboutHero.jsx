import React from 'react'
import Button from "../../components/Button";
import { motion } from "motion/react";
import Hero from "../../components/Hero";

function AboutHero() {
  return (
    <Hero>
      <div className="mx-auto md:px-4  grid lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div className="">
          <motion.h1
            className="text-h2 font-parkinsans leading-tight"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
          Your Business is Safe <br className='hidden md:block' /> in Our Hands 
          </motion.h1>

          <motion.p
            className="text-white font-monospace text-xl mt-4 max-w-[500px]"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          Rooted in a legacy of court reporting since 1937,
The Varallo Group blends time-honored values with modern
innovation to protect, preserve, and elevate the legal record.
          </motion.p>

          <motion.div
            className="mt-4 md:mt-10"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button text="Learn More" arrowClass="d" />
          </motion.div>

          {/* <motion.div
            className="relative z-10 mt-20 max-w-[500px]"
            initial={{ opacity: 0, y: 40 }} // from bottom
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="font-manrope bg-[#FFFFFF0A] rounded-xl px-6 py-4 text-white text-sm flex flex-col justify-between gap-2">
              <span className="text-xl">
                Specialized Expertise in Legal, Non-profit and Professional
                Services
              </span>
              <a href="#" className="text-[16px] whitespace-nowrap text-end">
                Learn More
              </a>
            </div>
          </motion.div> */}
        </div>

        {/* Image and Info Cards */}
        <div className="mt-12 lg:mt-0 relative flex justify-center">
          <div className="relative">
            {/* Main Image */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "tween", duration: 1.5 }} // Increased duration
              src="./about-hero.png" // Replace with your actual image path
              alt="Professional"
              className="w-full  "
            />

            {/* /* Top Floating Card
            <div className="absolute top-4 left-[-80px] w-44 bg-gradient-to-b from-[#1a1a1a] to-[#333] rounded-xl px-4 py-3 text-sm text-white shadow-md hidden md:block">
              <div className="font-bold text-lg">200+<br />Law Firms</div>
              <p className="text-gray-400 text-xs mt-1">And Legal Clients Served</p>
            </div>

            Bottom Floating Card
            <div className="absolute bottom-[-40px] right-[-60px] w-40 bg-gradient-to-b from-[#1a1a1a] to-[#333] rounded-xl px-4 py-3 text-sm text-white shadow-md hidden md:block">
              <div className="font-bold text-lg">50+ Years</div>
              <p className="text-gray-400 text-xs mt-1">Supporting the Legal Industry</p>
            </div>  */}
          </div>
        </div>
      </div>
    </Hero>
  )
}

export default AboutHero