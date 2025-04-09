import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Clouddev from './components/Cloud/Clouddev'
import Footer from './components/Footer/Footer'
import NavbarHome from './components/Navbarwithhome/Navbarwithhome'

const Cloud = () => {
  return (
    <div>
        <NavbarHome/>
        <Clouddev/>
        <Footer/>
    </div>
  )
}

export default Cloud