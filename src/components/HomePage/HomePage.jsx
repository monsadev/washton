'use client';
import React from 'react';
import Banner from './Banner';
import WhyChooseUs from './WhyChooseUs';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
import DownloadApp from './DownloadApp';
import GetInTouch from './GetInTouch';

export default function HomePage() {
  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Why Choose Us */}
      <div id="why-choose-us">
        <WhyChooseUs />
      </div>
      {/* About Us */}
      <div id="about-us">
        <AboutUs />
      </div>
      {/* Our Services */}
      <div id="our-services">
        <OurServices />
      </div>
      {/* Testimonials */}
      <Testimonials />
      {/* Download App */}
      <div id="download-app">
        <DownloadApp />
      </div>
      {/* Get In Touch */}
      <div id="get-in-touch">
        <GetInTouch />
      </div>
    </>
  );
}
