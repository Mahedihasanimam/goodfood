"use client";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7]  py-6">
      <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 items-center justify-around">
        <div className="flex items-center mb-6 md:mb-0">
          <Image 
            src="/asets/logo.png" 
            alt="Simply Good Foods Logo" 
            width={100} 
            height={100} 
            className="mr-3" 
          />
          
        </div>
        <div className="flex flex-col  items-center mb-6 md:mb-0">
          <ul className="flex flex-col space-y-4   mb-4 md:mb-0">
            <li><a href="#" className="hover:text-gray-600">Home</a></li>
            <li><a href="#" className="hover:text-gray-600">Our menus</a></li>
            <li><a href="#" className="hover:text-gray-600">Catering</a></li>
            
          </ul>
        </div>
        <div className="flex flex-col  items-center mb-6 md:mb-0">
          <ul className="flex flex-col space-y-4  mb-4 md:mb-0">
          <li><a href="#" className="hover:text-gray-600">Meal plans</a></li>
            <li><a href="#" className="hover:text-gray-600">How it works</a></li>
            <li><a href="#" className="hover:text-gray-600">Testimonials</a></li>
            <li><a href="#" className="hover:text-gray-600">FAQ</a></li>
            
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-center space-y-4">
          <h3 className="font-semibold text-start mb-2">Subscribe To Our Email Alerts</h3>
          <div className="flex mb-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 border  border-gray-300 rounded-l-md focus:outline-none" 
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700">Subscribe</button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black text-white text-center py-4 mt-6">
        © All rights reserved by Simply Good Foods
      </div>
    </footer>
  );
};

export default Footer;
