import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Itconsuldev from './components/Itconsult/Itconsultdev'
import Footer from './components/Footer/Footer'
import NavbarHome from './components/Navbarwithhome/Navbarwithhome'

const Itconsult = () => {
  return (
    <div>
        <NavbarHome/>
        <Itconsuldev/>
        <Footer/>
    </div>
  )
}

export default Itconsult