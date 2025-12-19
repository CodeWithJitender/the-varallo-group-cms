import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import VerticalStatsSlider from "../../pages/VerticalStatsSlider";



const WhyChoose = ({data}) => {
  
     if (!data) return null;

  // Destructure all data from backend
  const { heading, description, image, cards = [], stats = [] } = data;


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <section className="why-choose" id="why-choose">
      <div className="container-fluid">
        {/* Left Content */}
        <motion.div
          className="lg:flex justify-between items-end gap-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-h2 font-parkinsans font-medium">
           {heading}
          </h1>
          <motion.p
            className=" mt-6 lg:max-w-[40%] font-manrope text-base"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
          {description}

          </motion.p>
        </motion.div>

        {/* Image & Mid Content */}
        <div className="md:flex gap-20 items-end mt-10">
          <motion.div
            className="relative md:w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src={image?.url || "./why-choose.png"} 
              alt={image?.alt || "hero"} 
              className="w-full" 
            />
          </motion.div>

          <motion.div
            className="md:w-[40%] flex flex-col justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Dynamic Cards */}
            {cards && cards.length > 0 && (
              <motion.div
                className="flex gap-4 mt-10 md:mt-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {cards.map((card, index) => (
                  <div 
                    key={index}
                    className="rounded-xl p-4 text-white text-sm font-medium bg-btn flex flex-col justify-between"
                  >
                    <p className="font-manrope text-xl leading-6 md:leading-8">
                      {card.text}
                    </p>
                    {card.learnMore && (
                      <Link 
                        to={card.learnMore.url} 
                        className="text-base mt-5 font-manrope leading-8"
                      >
                        {card.learnMore.label}
                      </Link>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* Dynamic Vertical Stats Slider */}
            {stats && stats.length > 0 && (
              <motion.div
                className="vertical-slider mt-10 max-h-[165px] md:max-h-auto overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <VerticalStatsSlider stats={stats} />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
