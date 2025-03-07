import React from "react";
import {motion} from 'motion/react';
import { SlideDown, SlideLeft, SlideRight } from "../../utility/animation";


export default function WebDevelopment() {
    return (
    <div>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
          variants={SlideRight()}
          initial="hidden"
          whileInView="visible"
          >
            <h2
            className="text-3xl font-bold text-gray-900">Web Development</h2>
            <p
            className="mt-4 text-gray-600">
              Globally optimize highly efficient solutions whereas open-source application. Completely strategize quality internal or "organic" sources for virtual e-business. Phosfluorescently re-engineer enterprise markets via value-added networks.
            </p>
          </motion.div>
          <div className="relative">
            <motion.img
                variants={SlideLeft()}
                initial="hidden"
                whileInView="visible"
              src="/images/imageweb.jpg"
              alt="Web Development"
              className="rounded-lg shadow-lg"
            />
            {/* <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button> */}
          </div>
        </div>
        <div className="mt-12 max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900">We Serve The Best Work</h3>
          <ul className="mt-4 space-y-3">
            {[
              "Up am intention on dependent questions",
              "Surrounded affronting favourable",
              "Sed ut perspiciatis unde omnis iste natus",
              "Special Careness Risk Free",
              "Bibend auctor nisi elit volume are beuild",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.086l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits With Our Service</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "Flexible Solutions", 
              icon: "/icons/flexible-solutions.svg", 
              description: "Completely grow multimedia based content before global scenarios." 
            },
            { 
              title: "24/7 Unlimited Support", 
              icon: "/icons/unlimited-support.svg", 
              description: "Completely grow multimedia based content before global scenarios." 
            }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center bg-white shadow-md p-6 rounded-lg border">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-lg shadow-lg">
                <img src={benefit.icon} alt={benefit.title} className="w-10 h-10" />
              </div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                <p className="text-gray-600 mt-1">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
      
    );
  }
  