import React from 'react';
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Logo from "../assets/logo.png";
import Call from "../assets/call.png";
import Cctv from "../assets/cctv.png";
import { CgNotes } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contactus = () => {
    return (
        <div className="mx-auto">
            <header className="bg-blue-900 text-white text-center flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 p-2">
                <div className="flex flex-col md:flex-row items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <CiMail />
                        <p className="text-lg font-bold">firstalarmllc@gmail.com</p>
                    </div>
                    <p className="text-lg hidden md:block">|</p>
                    <div className="flex items-center space-x-2">
                        <FaPhone />
                        <p className="text-lg font-bold">800-339-6468</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4 md:space-x-36">
                    <button className="btn btn-danger">Schedule An Appointment</button>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="form-control"
                    />
                </div>
            </header>
            <nav className="bg-white p-2 text-blue-500 font-bold">
                <ul className="flex flex-col md:flex-row justify-around items-center space-y-2 md:space-y-0">
                    <img src={Logo} alt="First Alarm LLC Logo" className="w-24" />
                    <li><a href="/" className="text-blue-900 hover:text-red-800">Home</a></li>
                    <li><a href="/about" className="text-blue-900 hover:text-red-800">About us</a></li>
                    <li><a href="/products" className="text-blue-900 hover:text-red-800">Products</a></li>
                    <li><a href="/services" className="text-blue-900 hover:text-red-800">Services</a></li>
                    <li><a href="/gallery" className="text-blue-900 hover:text-red-800">Gallery</a></li>
                    <li><a href="/builders" className="text-blue-900 hover:text-red-800">Builders</a></li>
                    <li><a href="/instructions" className="text-blue-900 hover:text-red-800">User instructions</a></li>
                    <li><a href="/locations" className="text-blue-900 hover:text-red-800">Locations We Serve</a></li>
                    <li><a href="/testimonials" className="text-blue-900 hover:text-red-800">Testimonials</a></li>
                    <li><a href="/contact" className="text-blue-900 hover:text-red-800">Contact us</a></li>
                </ul>
            </nav>

            <h2 className="bg-black text-white text-6xl font-semibold p-24 text-left">Contact us</h2>

            <div className="flex flex-col md:flex-row justify-around items-center bg-blue-200 p-8">
                <img src={Call} alt="Contact Us" className="w-full md:w-1/2" />
                <div className='bg-white p-7'>
                    <div className="mt-8 md:mt-0 md:ml-8 text-left md:text-left">
                        <h3 className="text-3xl font-bold mb-4">Need Answers? Give Us a Call!</h3>
                        <p className="mb-4 text-xl">We welcome your inquiries and are ready to assist you in enhancing your security. Reach out to us for any questions, concerns, or to explore our top-notch Security Alarm Camera solutions tailored to meet your specific needs.</p>
                        <p className="mb-4 text-xl">Feel free to use the provided contact details or fill out the form below, and one of our security specialists will get in touch with you promptly. Thank you for considering First Alarm LLC as your trusted partner in security solutions.</p>
                        <button className="btn btn-dark hover:bg-blue-800 px-9 py-2 font-bold text-xl">Schedule An Appointment</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center bg-gray-200 p-8">
                <div className="w-full md:w-1/2 p-4">
                    <img src={Cctv} alt="Contact Us Image" className="w-full h-auto" />
                    <div className="mt-4">
                        <h4 className="text-2xl font-bold">Contact Us</h4>
                        <p className="mb-2 text-2xl"><strong>Phone:</strong> 800-339-6468</p>
                        <p className="mb-2 text-xl"><strong>Email:</strong> firstalarmllc@gmail.com</p>
                        <p className="mb-2 mt-4 text-xl"><strong>Locations We Serve:</strong></p>
                        <p className="text-xl">100 Sylvan Rd Suite G-700</p>
                        <p className="mb-4 text-xl">Woburn, MA 01801</p>
                        <p className="text-xl">301 Newbury St. Suite 243</p>
                        <p className="mb-2 text-xl">Danvers, MA 01923</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <form className="bg-blue-200 p-6 shadow-md">
                        <h1 className='font-bold text-3xl text-black'>Have Question? We Can Help</h1>
                        <p className='font-bold text-xl mt-4 mb-6 text-black'>Share details about your security requirements or inquiries, and we’ll respond within one business day.</p>
                        <div className="mb-4">
                            <label className="block text-black text-xl font-medium mb-2" htmlFor="name">
                                Your name
                            </label>
                            <input
                                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-xl font-medium mb-2" htmlFor="email">
                                Your email
                            </label>
                            <input
                                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-xl font-medium mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="subject"
                                type="text"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-black text-xl font-medium mb-2" htmlFor="message">
                                Your message (optional)
                            </label>
                            <textarea
                                className="shadow appearance-none border w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows="4"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-gray-800 hover:bg-blue-500 text-white font-semibold py-2 px-20 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* New section with the uploaded image */}
            <div className="relative bg-cyan-600 p-8">
                <div className="absolute inset-0">
                    
                </div>
                <div className="relative flex flex-col md:flex-row justify-around items-center text-white">
                    <div className="text-center md:text-left font-bold text-4xl">
                        <p className="mb-4">We are very proud to be serving</p>
                        <p className="mb-4">our local area for over 40 years!</p>
                    </div>
                    <button className="bg-red-800 hover:bg-cyan-600 border border-gray-400 text-white text-2xl font-bold py-3 px-10 rounded">CALL 800-339-6468</button>
                </div>
            </div>
            <div className='bg-white'>
      <div className='bg-black p-24'>
      <h2 className=" text-white text-5xl font-bold ">We're Always on Guard</h2>
      <p className='font-bold text-white text-xl'>24/7 Monitoring</p>
      <p className='font-bold text-white text-xl mt-6'>Our dedicated monitoring centers operate around the clock,
        <br/>
         providing constant surveillance to promptly respond to any alarm,
         <br/>
          offering you and your loved ones continuous protection.</p>
      <button className="btn btn-primary font-bold bg-blue-800 hover:bg-black p-3 rounded text-xl mt-4">Book A Free Demo</button>
    </div>
    </div>
    <footer className="bg-white p-16 mt-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
          <div className="flex flex-col mb-4 md:mb-0">
            <img src={Logo} alt="First Alarm Logo" className="mb-2" />
            <p>
              <a href="mailto:firstalarmllc@gmail.com" className="flex items-center font-bold">
                <CiMail className="mr-2" /> firstalarmllc@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:800-339-6468" className="flex items-center font-bold">
                <FaPhone className="mr-2" /> 800-339-6468
              </a>
            </p>
            <p className='text-blue-700 font-bold text-xl mt-4'>Locate us</p>
            <p className='font-bold'>100 Trade Center, Suite G-700</p>
            <p className='font-bold'>Woburn, MA 01801 &</p>
            <p className='font-bold'>Danvers, MA 01923</p>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <h4 className="font-bold mb-2 text-2xl text-blue-500">Quick Links</h4>
            <a href="/services" className="text-black font-bold text-xl mb-1">Services</a>
            <a href="/products" className="text-black font-bold text-xl mb-1">Products</a>
            <a href="/testimonials" className="text-black font-bold text-xl mb-1">Testimonials</a>
            <a href="/blog" className="text-black font-bold text-xl mb-1">Blog</a>
            <a href="/contact" className="text-black font-bold text-xl mb-1">Contact Us</a>
            <a href="/sitemap" className="text-black font-bold text-xl mb-1">Sitemap</a>
            <a href="/faqs" className="text-black font-bold text-xl mb-1">FAQs</a>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <a href="/quote" className="text-black  mb-4 flex items-center">
              <CgNotes className="mr-2 w-[70%] h-[70%]" /> Get a Free Quote
            </a>
            <div className="flex space-x-2 text-3xl  ">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer " className='text-blue-700 hover:text-blue-950'>
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:text-blue-950'>
                <FaTwitterSquare />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-950'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        </footer>
        <div className="text-center">
          <p className='bg-blue-700 text-white p-2 font-semibold '>Copyright © 2024 | Website Developed by CROSS Digital</p>
        </div>
        </div>
    );
};

export default Contactus;