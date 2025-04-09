import { button, div, section } from 'motion/react-client'
import React from 'react'
import Slider from "react-slick";
import { Card, CardContent } from "@mui/material";
import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';
import { Button } from "@mui/material";
import { SlideUp } from '../../utility/animation';
import { delay } from 'motion';
import  Web  from "../../../src/Web.jsx";
import app from "../../../src/WApp.jsx"
import Cloud from '../../Cloud.jsx';
import Cyber from '../../Cyber.jsx';
import Itconsult from '../../Itconsult.jsx'; 
import Digital from '../../Digital.jsx'; 
// import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";







const Services = () => {
  // const navigate = useNavigate();

  const servicesdata = [
    { title: "Mobile App Development", icon: "📱", description: "creative and innovative", delay:0.1, link:'/app'},
    { title: "Web Development", icon: "📱", description: "creative and innovative", delay: 0.3, link:'/web' },
    { title: "Cloud Solutions", icon: "☁️", description: "Implement secure and scalable", delay:0.5, link:"/cloud" },
    { title: "Cybersecurity", icon: "🛡️", description: "Protect your business from threats", delay:0.7, link:"/cyber" },
    { title: "IT Consultation", icon: "🎓", description: "Get Expert advice on technology", delay:0.9, link:"/itconsult" },
    { title: "Digital Marketing", icon: "📈", description: "Boost your online presence", delay:1.1, link:"/digital" },
  ];
  return (
    <div className="bg-gradient-to-r from-gray-950 to-gray-600 text-white py-16 px-8 font-playfair" id="services">
      <div className="max-w-6xl mx-auto text-center">
        {/* <span className="text-blue-400 font-semibold">LATEST PROJECT</span> */}
        <h2 className="text-4xl font-bold mt-2">Our Services to <br /> <span className="text-blue-500">Enhance Your Business</span></h2>
        <Button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 hover:text-white flex items-center gap-2">
          READ MORE <ArrowRight size={18} />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 h-3/5">
        {servicesdata.map((service, index) => (
          <motion.Card 
          variants={SlideUp(service.delay)}
          initial="hidden"
          whileInView="visible"
          key={index} className="bg-white text-gray-900 p-6 shadow-lg rounded-lg relative hover:bg-sky-200 hover:text-green hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]" id="anime">
            <div className="absolute top-3 left-1/2 z-10 transform -translate-x-1/2 bg-yellow-400 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
              <div id='anima'>{service.icon}</div>
            </div>
            <CardContent className="mt-6 text-center hover:text-white" id="back">
              <h3 className="font-semibold text-lg">{service.title}</h3>
              {service.description && <p className="text-gray-600 mt-2 text-sm">{service.description}</p>}
            </CardContent>
            <div className="flex justify-center mt-4">
             <a href={`${service.link}`}> <button className="bg-secondary px-12 py-4 rounded-md text-white" onClick={`${service.link}`}>READ MORE</button> </a>
            </div>
          </motion.Card>
        ))}
      </div>
    </div>

  )
}

export default Services