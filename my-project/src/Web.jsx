import React from 'react'
import Navbar from './components/Navbar/Navbar'
import WebDevelopment from './components/WebDevelopment/WebDevelopment';
import WebOngoing from './components/WebDevelopment/WebOngoing';
import Footer from './components/Footer/Footer';

const Web = () => {
  return (
    <div className='overflow-x-hidden'>
      <div><Navbar/></div>
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
