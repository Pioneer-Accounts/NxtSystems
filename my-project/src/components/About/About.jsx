import React from "react";
import aboutimg from "../../../images/aboutimg.png"
import render1 from "../../../images/renderimg1.jpg"
import Crender from "../Crender/Crender";
import Crender2 from "../Crender/Crender2";
import render from "../Crender/render";

const AboutUs = () => {
  return (
    <section className="relative bg-white py-12 px-4 lg:px-20 flex flex-col lg:flex-row items-center font-playfair">
      {/* Left Side: Image */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative w-full h-auto">
          {/* Curved Image */}
          <svg
            viewBox="0 0 500 500"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="curveClip" clipPathUnits="objectBoundingBox">
                <path
                  d="M 0,0 L 1,0 L 1,0.8 Q 0.5,1 0,0.8 Z"
                  transform="scale(1.02,1.02)"
                />
              </clipPath>
            </defs>
          </svg>
          <img
            src={aboutimg} // Change to your actual image path
            alt="Team"
            className="w-full h-auto object-cover "
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="lg:w-1/2 w-full text-center lg:text-left mt-8 lg:mt-0 lg:pl-10">
        <h4 className="text-blue-600 font-semibold text-lg flex items-center">
          <span className="bg-blue-100 p-2 rounded-full mr-2">📘</span> ABOUT NXTSYSTEMS
        </h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-3">
          Innovation That Powers Your{" "}
          <span className="text-blue-600">Business</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Stay ahead with cutting-edge technology, tailored IT strategies, and
          seamless digital transformation. Our solutions optimize efficiency,
          enhance security, and scale with your growing needs.
        </p>

        {/* Buttons */}
          <div className="mt-6 flex flex-row sm:flex-row justify-center lg:justify-start gap-0">
              <button className="bg-blue-600 text-white font-medium px-14 py-2 shadow-md hover:bg-blue-700 transition">
              AWARD WINNING
              </button>
              {}
              <button className="bg-gray-900 text-white font-medium px-14 py-2 shadow-md hover:bg-gray-800 transition">
              TECHNOLOGY INDEX
              </button>
        </div>
        
        {/* condition render */}
        <Crender/>
      </div>
    </section>
  );
};

export default AboutUs;
