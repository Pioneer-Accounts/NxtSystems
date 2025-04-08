import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import app from "../../../src/WApp.jsx";
import web from "../../../src/Web.jsx";
import Cloud from '../../Cloud.jsx';
import Cyber from '../../Cyber.jsx';
import Itconsult from '../../Itconsult.jsx'; 
import Digital from '../../Digital.jsx';
import contact from "../../../src/Contact";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-10 px-6 font-playfair">
      <div className="max-w-7xl mx-auto">
        {/* News Subscription Section */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6 mb-6">
          <h2 className="text-2xl font-bold text-white">News Subscription</h2>
          <p className="text-gray-400 text-sm">Get Latest Deals from Waker’s Inbox & Subscribe Now</p>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none w-72"
              />
              <IoMailOutline className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div> */}

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Company */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-blue-600 pb-2">ABOUT US</h3>
            <p className="text-gray-400 mt-3">
              Professionally redefine transparent ROI through low-risk high-yield imperatives. Progressively create empowered, cost-effective users via team-driven.
            </p>
            <div className="mt-4">
              <FaLinkedin className="text-white text-2xl border border-white rounded-full p-1" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-blue-600 pb-2">QUICK LINKS</h3>
            <ul className="text-gray-400 mt-3 space-y-2">
              <li 
              onClick={(e)=>{
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({
                  behavior:"smooth",
                })
              }}
              className="hover:text-white cursor-pointer">&gt; About us</li>
              {/* <li className="hover:text-white cursor-pointer">&gt; FAQ</li> */}
              <a href="/contact"><li className="hover:text-white cursor-pointer">&gt; Contact us</li></a>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-bold border-b-2 border-blue-600 pb-2">OUR SERVICES</h3>
            <ul className="text-gray-400 mt-3 space-y-2">
              <a href="/app"><li className="hover:text-white cursor-pointer">&gt; Application Development</li></a>
              <a href="/web"><li className="hover:text-white cursor-pointer">&gt; Mobile App Development</li></a>
              <a href="/cloud"><li className="hover:text-white cursor-pointer">&gt; Cloud Solutions</li></a>
              <a href="/cyber"><li className="hover:text-white cursor-pointer">&gt; Cybersecurity</li></a>
              <a href="/itconsult"><li className="hover:text-white cursor-pointer">&gt; IT Consulting/Skills Training</li></a>
              <a href="/digital"><li className="hover:text-white cursor-pointer">&gt; Digital Marketing</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
