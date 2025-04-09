import React from 'react'
import AppDevelopment from './components/AppDevelopment/AppDevelopment'
import AppOngoing from './components/AppDevelopment/AppOngoing'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NavbarHome from './components/Navbarwithhome/Navbarwithhome'

const WApp = () => {
  return (
    <div>
        <NavbarHome/>
        <AppDevelopment/>
        <AppOngoing/>
        <Footer/>
    </div>
  )
}

export default WApp