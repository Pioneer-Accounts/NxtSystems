import React from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarHome from '../Navbarwithhome/Navbarwithhome';

const ProductsSection = () => {
  return (
    <>
    <NavbarHome/>
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase" data-aos="fade-up">Products</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight" data-aos="fade-up" data-aos-delay="100">
            Our Featured Products
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500" data-aos="fade-up" data-aos-delay="200">
            Discover our range of innovative management systems designed to streamline your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://plus.unsplash.com/premium_photo-1705091309202-5838aeedd653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3VtZW50JTIwYXJjaGl2YWwlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDB8fDB8fHww" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Document Archival Management</h3>
              <p className="mt-2 text-gray-500">
              Secure digital storage and management solution for organizing, searching, and retrieving documents.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://plus.unsplash.com/premium_photo-1681995236840-0305713eebdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvc3BpdGFsJTIwbWFuYWdlbWVudCUyMHN5c3RlbSUyMHNvZnR3YXJlfGVufDB8fDB8fHww" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Hospital Management System</h3>
              <p className="mt-2 text-gray-500">
              Comprehensive solution for managing patient records, appointments, billing, and hospital operations.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Hotel Management System</h3>
              <p className="mt-2 text-gray-500">
              All-in-one solution for managing reservations, inventory, staff, and customer service in hospitality.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://media.istockphoto.com/id/1340516763/photo/empty-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=jbYGCEpqm8nTe-qwaydKnKU0zxQ1nYVMBsj2P0Sqez0=" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">School/college Management System</h3>
              <p className="mt-2 text-gray-500">
              Complete solution for educational institutions to manage students, faculty, courses, exams, and administrative tasks.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://images.pexels.com/photos/7688664/pexels-photo-7688664.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Online Community Platform</h3>
              <p className="mt-2 text-gray-500">
              Build and manage vibrant online communities with forums, messaging, and content sharing features.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1640163561346-7778a2edf353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlJTIwbWFuYWdlbWVudCUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Employee Management System</h3>
              <p className="mt-2 text-gray-500">
                Comprehensive solution for managing employee data, attendance, performance, and HR processes.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Expense Management System</h3>
              <p className="mt-2 text-gray-500">
              Track, approve, and analyze business expenses with our powerful expense management platform.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1694253988732-816ab6e60caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxsZWF2ZSUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Leave Management System</h3>
              <p className="mt-2 text-gray-500">
              Streamline leave requests, approvals, and tracking with our intuitive leave management solution.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-duration-500 hover:scale-105" data-aos="fade-up">
            <img src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Employee Management System" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Website Design & Development</h3>
              <p className="mt-2 text-gray-500">
              Custom website design and development services tailored to your brand and business needs.
              </p>
              <div className="mt-4 flex justify-between items-center">
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition duration-300 transform hover:scale-105">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductsSection;