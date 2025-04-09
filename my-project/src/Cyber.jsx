import React from 'react'
import Cyberdev from './components/Cyber/Cyberdev'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import NavbarHome from './components/Navbarwithhome/Navbarwithhome'

const Cyber = () => {
  return (
    <div>
        <NavbarHome/>
        <Cyberdev/>
        <Footer/>
    </div>
  )
}

export default Cyber