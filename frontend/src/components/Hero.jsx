import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {
  const { setSearchFilter, setIsSearchActive } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearchActive(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  return (
    <div className="container 2xl:px-15 mx-auto py-8 space-y-4 px-2 sm:px-5 py-3">
      <div className="bg-gradient-to-r from-purple-800 bg-purple-950 rounded-md py-12 text-white text-center space-y-6 mb-10">
      
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
          Over 10,000+ jobs to apply
        </h2>
        <p className="max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities <br />
          and Take the First Step Toward Your Future!
        </p>
        <div className="flex items-center justify-between bg-white rounded  text-gray-500 max-w-xl pl-4 mx-auto ">
          <div className="flex items-center space-x-1">
            <img src={assets.search_icon} alt="search" className="h-4 sm:h-5" />
            <input
              type="text"
              placeholder="Search for jobs"
              ref={titleRef}
              className="max-sm:text-sm p-2 sm:rounded outline-none w-full"
            />
          </div>
          <div className="flex items-center space-x-1">
            <img src={assets.location_icon} alt="location" className="h-4 sm:h-5" />
            <input
              type="text"
              placeholder="location"
              ref={locationRef}
              className="max-sm:text-sm p-2 sm:rounded outline-none w-full"
            />
          </div>
          <button onClick={onSearch} className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
  <div className="p-6  bg-white shadow-lg rounded-md ">
        <div className="flex items-center gap-10 lg:gap-16 flex-wrap">
          <p className="text-lg font-medium">Trusted By</p>
          <img src={assets.microsoft_logo} className="h-6" alt="Microsoft Logo" />
          <img src={assets.accenture_logo} className="h-6" alt="Accenture Logo" />
          <img src={assets.samsung_logo} className="h-6" alt="Samsung Logo" />
          <img src={assets.adobe_logo} className="h-6" alt="Adobe Logo" />
          <img src={assets.amazon_logo} className="h-6" alt="Amazon Logo" />
          <img src={assets.walmart_logo} className="h-6" alt="Walmart Logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
