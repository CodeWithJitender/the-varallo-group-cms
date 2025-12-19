import React, { useEffect, useMemo, useState } from "react";// import Hero from "../sections/home/Hero";
import { pageAPI } from "../services/apiService";
import AboutSection from "../sections/home/AboutSection";
import FeaturedHighlights from "../sections/home/FeaturedHighlights";
import Testimonials from "../sections/home/Testimonials";
import BlogSection from "../sections/home/BlogSection";
import SmartSlider from "../sections/home/SmartSlider";
import WhyChoose from "../sections/home/WhyChoose";
import HomeHero from "../sections/home/HomeHero";

function Home() {


  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const res = await pageAPI.getPageBySlug("home");
        setPageData(res.data);   // 👈 yahi tumhara page object hai
      } catch (err) {
        console.error("Failed to load home page", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePage();
  }, []);

  // 🔥 sections ko key-based object me convert kar rahe hain
  const sections = useMemo(() => {
    if (!pageData?.sections) return {};
    return pageData.sections.reduce((acc, section) => {
      acc[section.sectionKey] = section.content;
      return acc;
    }, {});
  }, [pageData]);

  if (loading) return null; // skeleton loader yaha laga sakte ho

  return (
    <div className="home-page overflow-x-hidden">
      <HomeHero data={sections.hero} />
      <div id="our-expertise">
        <AboutSection data={sections.experience} />
      </div>
      <div className="" id="services">
        <SmartSlider data={sections.services} />
      </div>
      <div className="" id="metrics">
        <WhyChoose data={sections.trust} />
      </div>
      <div className="" id="featured">
        <FeaturedHighlights data={sections.capabilities} />
      </div>
      <div className="" id="testimonials">
        <Testimonials data={sections.testimonials} />
      </div>
      {/* <div className="" id="our-blog">
        <BlogSection />
      </div> */}
    </div>
  );
}

export default Home;
