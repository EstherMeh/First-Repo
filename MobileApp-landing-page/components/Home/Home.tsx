"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero';
import WhyChoose from './WhyChoose/WhyChoose';
import AnalyticFeature from './AnalyticFeature/AnalyticFeature';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home =() => {

  useEffect(()=>{  
  AOS.init({
    duration:1000,
    easing:'ease',
    once:true,
  });
  
  },[]);

  return( 
    <div className="overflow-hidden">
    <Hero data-aos="fade-up" />
    <WhyChoose data-aos="fade-right" />
    <AnalyticFeature data-aos="fade-left" />
    <Feature data-aos="zoom-in" />
    <Review data-aos="slide-up" />
  </div>
  );
};

export default Home;