import React from 'react'
import Navbar from './components/Navbar/Navbar'
import WebDevelopment from './components/WebDevelopment/WebDevelopment';
import WebOngoing from './components/WebDevelopment/WebOngoing';
import Footer from './components/Footer/Footer';
import NavbarHome from './components/Navbarwithhome/Navbarwithhome';

const Web = () => {
  return (
    <div className='overflow-x-hidden'>
      <div><NavbarHome/></div>
      <div>
        <WebDevelopment/>
        <WebOngoing/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default Web;
