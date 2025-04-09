import React from 'react'
import Navbar from './components/Navbar/Navbar'
// import ContactInfo from './components/Contact/Contactinfo'
import ContactForm from './components/Contact/Contactinfo'
import Footer from './components/Footer/Footer'
import NavbarHome from './components/Navbarwithhome/Navbarwithhome'

const Contact = () => {
  return (
    <div>
        <NavbarHome/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact