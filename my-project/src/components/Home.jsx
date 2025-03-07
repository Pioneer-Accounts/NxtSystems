import React from 'react'
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

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div>
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
        <Consultation/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home