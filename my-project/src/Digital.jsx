import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Digitalmarketing from './components/Digital/Digitalmarketing'
import Footer from './components/Footer/Footer'
import NavbarHome from './components/Navbarwithhome/Navbarwithhome'

const Digital = () => {
  return (
    <div>
        <NavbarHome/>
        <Digitalmarketing/>
        <Footer/>
    </div>
  )
}

export default Digital