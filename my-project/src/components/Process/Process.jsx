import React from 'react'
import { motion } from 'motion/react';
import { SlideLeft } from '../../utility/animation';
import { delay } from 'motion';

export default function Process() {
    const steps = [
      {
        id: "01",
        title: "Discover & Strategize",
        description:
          "We start by understanding your business needs, challenges, and goals. Our experts conduct an in-depth analysis to craft a tailored IT strategy that aligns with your vision.",
        icon: "🔍",
        delay:0.3,
      },
      {
        id: "02",
        title: "Design & Develop",
        description:
          "From software architecture to cloud infrastructure, we design, develop, and optimize robust IT solutions. Our team ensures scalability, security, and seamless integration with your existing systems.",
        icon: "💻",
        delay:0.6,
      },
      {
        id: "03",
        title: "Implement & Optimize",
        description:
          "We deploy your solution with minimal disruption to your operations. Performance optimization, security checks, and rigorous testing ensure a smooth and efficient transition.",
        icon: "🚚",
        delay:0.9
      },
      {
        id: "04",
        title: "Support & Scale",
        description:
          "Our work doesn’t stop at deployment. We offer ongoing support, maintenance, and scaling to keep your IT infrastructure running at peak performance as your business grows.",
        icon: "👨‍💻",
        delay:1.2
      },
    ];
  
    return (
      <div className="bg-gray-100 py-16 font-playfair">
        <div className="text-center">
          <h4 className="text-blue-600 font-semibold uppercase tracking-widest">
            Work Process
          </h4>
          <h2 className="text-3xl font-bold mt-2">
            How We <span className="text-blue-600">Work</span>
          </h2>
        </div>
  
        <div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {steps.map((step) => (
            <motion.div 
            variants={SlideLeft(step.delay)}
            initial="hidden"
            whileInView="visible"
            key={step.id} className="relative bg-white shadow-lg rounded-2xl p-6 text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold text-xl w-14 h-14 flex items-center justify-center rounded-full border-4 border-white">
                {step.id}
              </div>
              <div className="mt-8 text-4xl">{step.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }