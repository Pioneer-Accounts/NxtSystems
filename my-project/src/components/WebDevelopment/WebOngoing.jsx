import React from 'react'
import ecom from '../../../public/images/e-com.jpg'
import { motion } from 'motion/react';
import { SlideDown, SlideLeft, SlideUp } from '../../utility/animation';

export default function WebOngoing() {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A web based application developed on React.js and Node.js. The package is under live testing.",
      image: "/images/e-com.jpg",
    },
    {
      title: "Agriculture Management System",
      description:
        "A web based application based on react.js and MongoDB. This package is under live testing.",
      image: "../../../images/agri.jpg",
    },
    {
      title: "Corporate Website",
      description:
        "A fully customized and responsive web based parent application of the Nxtsystems of Pioneer Group. It is developed in React and Node.",
      image: "/images/nonpro.jpg",
    },
    {
      title: "File Correspondence Management System",
      description:
        "A fully customized and responsive web based system. It was developed in Python and Django.",
      image: "/images/fcms.webp",
    },
    {
          title: "HealthCare Management System",
          description:
            "A web based application developed on React.js and Node.js. The package is under live testing.",
          image: "../../../images/hospital.jpg",
        },
        {
          title: "Hotel Management System",
          description:
            "A web based application developed on React.js and Node.js. The package is under live testing.",
          image: "../../../images/hotel.jpg",
        },
        {
          title: "Expense Management System",
          description:
            "A web based application developed on React.js and Node.js. The package is under live testing.",
          image: "/images/e-com.jpg",
        },
        {
          title: "Task Management System",
          description:
            "A web based application developed on React.js and Node.js. The package is under live testing.",
          image: "../../../images/task.png",
        },
  ];

  return (
    <motion.div 
    variants={SlideLeft()}
              initial="hidden"
              whileInView="visible"
    className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 text-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
