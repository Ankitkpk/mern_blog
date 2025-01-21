import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="container 2xl:px-15 mx-auto text-black py-6 mt-8">
      <div className="container mx-auto  flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:">
        <div className="flex items-center justify-center space-x-4 text-center sm:text-left">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-16 h-16 sm:w-40 sm:h-28 object-contain"
          />
         <p className="text-base font-light text-gray-500 sm:text-lg">
        |   All rights reserved. Copyright &copy;{' '}
        <span className=" text-gray-500">Job-Portal</span>
        </p> 
        </div>
        <div className="flex space-x-6">
          <a href="#" aria-label="Facebook" className="hover:opacity-80 transition">
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-80 transition">
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
