import React from "react";
import chooseimg from "../../../public/images/chooseimg.png"
import ProgressSection from "../ProgressCircle/ProgressCircle";

const   Choose = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 font-playfair" id="choose">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content Section */}
        <div className="md:w-1/2">
          <div className="flex items-center space-x-2 text-blue-600 font-semibold">
            <div className="bg-blue-100 p-2 rounded-lg">
              <img src="../../../images/chooselogo.png" alt="Icon" className="w-6 h-6" />
            </div>
            <span>WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="text-blue-600"> Excellence</span> in <span className="text-blue-600">IT - Innovating,</span> <br />
            <span className="text-blue-600">Securing <span className="text-black">and</span>  Shaping  the Future! </span>
          </h2>
          
          <p className="text-gray-600 mt-4">
            Collaboratively envision user-friendly supply chains and cross-unit imperative. 
            Authoritatively fabricate competitive resources and holistic solutions. Holistically 
            restore real-time resources where standardized networks apply.
          </p>

          {/* Stats */}
          <ProgressSection/>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative">
          <img 
            src={chooseimg} 
            alt="Office Decorated with Balloons"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-0 right-0 bg-blue-600 text-white p-4 rounded-full text-center transform translate-x-1/2 -translate-y-1/2 w-28 h-28 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold" id="tenk">10k+</span>  
            <span className="text-sm">Active Clients</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Choose;
