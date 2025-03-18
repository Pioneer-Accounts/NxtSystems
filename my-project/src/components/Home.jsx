import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Equipments from './Equipments/Equipments'
import TechBanner from './techbanner/Techbanner'
import AboutUs from './About/About'
import Services from './Services/Services'
import Choose from './Choose/Choose'
import StatsSection from './Stats/StatsSection'
import Process from './Process/Process'
import Leader from './Leader/Leader'
import Consultation from './Consultation/Consultation'
import Footer from './Footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pioneer from './Pioneers/Pioneer'
import ProgressSection from './ProgressCircle/ProgressCircle'
import Header from './Header/Header';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* <Header/> */}
        <Navbar/>
        <Hero/>
      </div>
      <Equipments/>
      <div>
        {/* <TechBanner/> */}
        <AboutUs/>
        <Services/>
        <Choose/>
        <StatsSection/>
        <Process/>
        {/* <TechBanner/> */}
      </div> 
      <div>
        <Leader/>
        {/* <Pioneer/> */}
        <Consultation/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home