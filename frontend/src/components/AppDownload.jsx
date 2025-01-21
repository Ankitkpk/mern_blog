import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div className="container 2xl:px-15 mx-auto mt-12 mb-4 bg-gradient-to-r from-violet-200 to-violet-400 rounded-[10px] relative flex flex-col justify-between min-h-[20rem] lg:min-h-[25rem] ">
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6 h-full">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-2xl mt-5 sm:text-4xl font-bold text-gray-900 leading-tight">
            Download Our Mobile App For<br /> a Better Experience
          </h1>
          <div className="flex gap-4 mt-12">
            <a href="" className="block">
              <img
                src={assets.play_store}
                alt="Download on Play Store"
              />
            </a>
            <a href="" className="block">
              <img
                src={assets.app_store}
                alt="Download on App Store"
              />
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-end">
          <img
            src={assets.app_main_img}
            alt="Person using mobile app"
            className="w-64 sm:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
