// import { Button } from "@/components/ui/button";
import { FaPhoneAlt } from "react-icons/fa";
import consultimg from "../../../images/consultimg.jpg"
import { motion } from 'motion/react';
import { SlideDown, SlideRight, SlideUp } from "../../utility/animation";

export default function Consultation() {
  return (
    <motion.div
    variants={SlideRight()}
              initial="hidden"
              whileInView="visible"
     className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg drop-shadow-lg m-16 gap-10 font-playfair">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 ml-20">
        <img
          src={consultimg}
          alt="Business Consultation"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 p-6 bg-blue-100 rounded-lg">
        <p className="text-blue-600 font-medium flex items-center gap-2">
          <span className="bg-blue-100 p-2 rounded-md">📌</span> LET'S CONSULTATION
        </p>
        <h2 className="text-3xl font-bold mt-2">
          Let’s Talk About 
          <span className="text-blue-600"> Business Solutions</span>
        </h2>
        <a href="/contact"><button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md">
          Contact Us ➜
        </button>
        </a>
        <div className="mt-6 flex items-center text-blue-600 text-4xl">
          <FaPhoneAlt />
        </div>
      </div>
    </motion.div>
  );
}
