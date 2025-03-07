import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ContactInfo from './components/Contact/Contactinfo'
import ContactForm from './components/Contact/Contactinfo'
import Footer from './components/Footer/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Contact