import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Web from './Web'
import WApp from './WApp'
import Cloud from './Cloud'
import Cyber from './Cyber'
import Itconsult from './Itconsult'
import Digital from './Digital'
import Contact from './Contact'
import AboutUs from './components/About/About'
import Services from './components/Services/Services'
import Choose from './components/Choose/Choose'
import Leader from './components/Leader/Leader'


// const bgStyle ={
//   backgroundImage: `url({${BgImage}})`,
//   backgroundRepeat : "no-repeat",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   backgroundAttachment: "fixed",
// };


const App = () => {
  return (
  <>
  {/* <Home/> */}
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/choose' element={<Choose/>}/>
      <Route path='/team' element={<Leader/>}/>
      <Route path="/web" element={<Web/>} />
      <Route path="/app" element={<WApp/>} />
      <Route path="/cloud" element={<Cloud/>} />
      <Route path="/cyber" element={<Cyber/>} />
      <Route path="/itconsult" element={<Itconsult/>} />
      <Route path="/digital" element={<Digital/>} />
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
  </>

  )
}

export default App;