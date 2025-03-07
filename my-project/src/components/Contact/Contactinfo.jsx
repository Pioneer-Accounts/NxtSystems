import React from 'react'
import { useState } from "react";
import axios from "axios";
import { motion } from 'motion/react';  
import { SlideDown, SlideLeft, SlideUp } from '../../utility/animation';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "IT Consult",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/send-email", formData);
            alert(response.data.message);
        } catch (error) {
            alert("Error sending email!");
        }
    };
    return (
      <div className="bg-gray-100 py-16 px-6 md:px-12">
        <motion.div 
        variants={SlideDown()}
        initial="hidden"
        whileInView="visible"
        className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Have Any Questions?</h2>
          <p className="text-gray-600 mt-2">
            Enthusiastically disintermediate one-to-one leadership via business e-commerce.
            Dramatically reintermediate compelling process improvements rather than empowered
            relationships.
          </p>
        </motion.div>
  
        <motion.div
        variants={SlideLeft()}
        initial="hidden"
        whileInView="visible"
        className="max-w-4xl mx-auto mt-8  p-6 shadow-md rounded-lg">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            {/* Name and Email */}
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:ring focus:ring-indigo-200 w-full"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:ring focus:ring-indigo-200 w-full"
            />
  
            {/* Subject and Phone Number */}
            <select className="border border-gray-300 p-3 rounded-md focus:ring focus:ring-indigo-200 w-full">
              <option>IT Consult</option>
              <option>UI/UX Design</option>
              <option>Branding Solution</option>
              <option>Product Marketing</option>
            </select>
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:ring focus:ring-indigo-200 w-full"
            />
  
            {/* Message */}
            <textarea
              placeholder="Write Your Message"
              name="message"
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md focus:ring focus:ring-indigo-200 w-full md:col-span-2 h-32"
            ></textarea>
  
            {/* Submit Button */}
            <button
              type="submit"
              onChange={handleChange}
              className="bg-primary text-white text-lg font-semibold py-3 rounded-md hover:bg-indigo-700 transition md:col-span-2"
            >
              CONTACT US
            </button>
          </form>
        </motion.div>
      </div>
    );
  }
  
  