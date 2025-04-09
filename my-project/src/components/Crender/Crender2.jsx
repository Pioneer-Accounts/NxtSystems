import React from 'react'
import render1 from "../../../public/images/renderimg1.jpg"

const Crender2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="md:w-4/5">
            <img
              src={render1}
              alt="Company Team"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-bold text-gray-900">
              An Award-Winning Company.
            </h2>
            <p className="text-gray-600 mt-3">
              Monotonically matrix extensible applications and go forward
              communities. Synergistically extend client-based manufactured.
            </p>
            <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              ABOUT MORE
            </button>
          </div>
        </div>
  )
}

export default Crender2