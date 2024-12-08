import React, { useState } from 'react';
import pic1 from '../assets/un1.jpg';
import pic2 from '../assets/un2.jpg';
import pic3 from '../assets/un3.jpg';
import pic4 from '../assets/un4.jpg';
import John from '../assets/john.jpg';
import Mike from '../assets/mark.jpg';

function Interior() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="border-gray-200 bg-emerald-500 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          {/* Logo and Company Name */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            
            <span className="self-center md:text-3xl text-3xl font-semibold whitespace-nowrap dark:text-white">COMPANY NAME</span>
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Menu Links (Hamburger) */}
          <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <li><a href="#" className="block py-2 px-0  dark:text-gray-400 hover:bg-white text-2xl">Home</a></li>
              <li><a href="#" className="block py-2 px-0 text-gray-900 rounded hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-2xl ">Showcase</a></li>
              <li><a href="#" className="block py-2 px-0 text-gray-900 rounded hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-2xl">Services</a></li>
              <li><a href="#" className="block py-2 px-0 text-gray-900 rounded hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-2xl">Designers</a></li>
              <li><a href="#" className="block py-2 px-0 text-gray-900 rounded hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-2xl">Packages</a></li>
              <li><a href="#" className="block py-2 px-0 text-gray-900 rounded hover:bg-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white text-2xl">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full pt-16 px-4 sm:px-16">
        <h2 className=" md:text-6xl font-bold text-3xl -mt-9 text-nowrap ">Interior Design</h2>
        <h3 className=" md:text-5xl font-bold text-3xl mt-3">Showcase.</h3>

        {/* Showcase Images */}
        <section className="flex justify-center items-center">
          <div className="flex flex-wrap gap-7 mt-7 md:ml-20 ml-5">
            <img src={pic1} alt="Interior Design" className="w-[500px] h-[350px] object-cover hover:animate-pulse" />
            <img src={pic2} alt="Interior Design" className="w-[500px] h-[350px] object-cover hover:animate-pulse" />
            <img src={pic3} alt="Interior Design" className="w-[500px] h-[350px] object-cover hover:animate-pulse" />
            <img src={pic4} alt="Interior Design" className="w-[500px] h-[350px] object-cover hover:animate-pulse" />
          </div>
        </section>

        {/* Designers */}
        <section className="mt-10">
          <h2 className="text-4xl font-bold">Meet Our Designers</h2>
          <div className="flex justify-center items-center gap-10 mt-7">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <img src={John} alt="John" className="w-full h-full object-cover" />
            </div>
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
              <img src={Mike} alt="Mike" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mt-10">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10 mt-7">
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-xl font-semibold">Consultation</h3>
              <p className="mt-2 text-gray-700">We offer expert advice to make your home or office more beautiful.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-xl font-semibold">Interior Design</h3>
              <p className="mt-2 text-gray-700">Our professional designers create unique interior spaces tailored to you.</p>
            </div>
            <div className="bg-gray-100 p-5 rounded-lg">
              <h3 className="text-xl font-semibold">Furniture</h3>
              <p className="mt-2 text-gray-700">We provide stylish, modern, and functional furniture solutions.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-10 ">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-2 text-gray-700">Get in touch for a free consultation or to discuss your project ideas.</p>
          <form className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-2 rounded-lg border border-gray-300 w-full" />
              <input type="email" placeholder="Your Email" className="p-2 rounded-lg border border-gray-300 w-full" />
            </div>
            <textarea placeholder="Your Message" className="p-2 mt-5 mb-11 rounded-lg border grid md:grid-cols-2 gap-4 border-gray-300 w-full h-32"></textarea>
            <button type="submit" className="mb-3 w-full bg-emerald-500 text-white p-3 rounded-lg hover:bg-emerald-600">Submit</button>
          </form>
        </section>
      </main>
    
    </div>
  );
}

export default Interior;
