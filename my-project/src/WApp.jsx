import React from 'react'
import AppDevelopment from './components/AppDevelopment/AppDevelopment'
import AppOngoing from './components/AppDevelopment/AppOngoing'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const WApp = () => {
  return (
    <div>
        <Navbar/>
        <AppDevelopment/>
        <AppOngoing/>
        <Footer/>
    </div>
  )
}

export default WApp