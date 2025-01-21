import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { JobCategories, JobLocations } from '../assets/assets';
import JobCard from './JobCard';

const JobListing = () => {
  const { isSearchActive, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filterjobs, setFilterJobs] = useState(jobs);
  const itemsPerPage = 6;
 

  const handleCheckboxChange = (type, value) => {
    setSearchFilter((prev) => ({
      ...prev,
      [type]: prev[type] === value ? '' : value,
    }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((c) => c !== location) : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategories.length === 0 || selectedCategories.includes(job.category);
    const matchesLocation = (job) =>
      selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const matchesTitle = (job) =>
      searchFilter.title === '' || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job) =>
      searchFilter.location === '' ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilterJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilterJobs(newFilterJobs);
    setCurrentPage(1);
  }, [jobs, searchFilter, selectedCategories, selectedLocations]);

  return (
    <div className="container mx-auto py-8 space-y-4 lg:flex lg:space-x-6 px-2 sm:px-5 py-3">
      <button
        onClick={() => setShowFilter((prev) => !prev)}
        className="block lg:hidden px-4 py-2 bg-gray-100 text-black rounded-md mb-4"
      >
        {showFilter ? 'Close' : 'Filter'}
      </button>

      {isSearchActive && (searchFilter.title || searchFilter.location) && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Search</h3>
          <div className="flex flex-wrap items-center gap-4 text-black">
            {searchFilter.title && (
              <button
                className="flex items-center justify-center bg-blue-100 border border-blue-100 text-gray-500 font-bold rounded-md px-6 py-3"
                onClick={() => handleCheckboxChange('title', '')}
              >
                {searchFilter.title}
                <img
                  src={assets.cross_icon}
                  alt="Clear title"
                  className="w-4 h-4 ml-2 cursor-pointer hover:opacity-70"
                />
              </button>
            )}

            {searchFilter.location && (
              <button
                className="flex items-center justify-center bg-red-100 border border-red-100 text-gray-500 font-bold rounded-md px-6 py-3"
                onClick={() => handleCheckboxChange('location', '')}
              >
                {searchFilter.location}
                <img
                  src={assets.cross_icon}
                  alt="Clear location"
                  className="w-4 h-4 ml-2 cursor-pointer hover:opacity-70"
                />
              </button>
            )}
          </div>
        </div>
      )}

      <div className={`${showFilter ? 'block' : 'hidden'} lg:block lg:w-1/4 p-4 bg-white rounded-md`}>
        <div className="mt-8">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Search By Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex gap-3 items-center p-1">
                <input
                  type="checkbox"
                  className="scale-125"
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex gap-3 items-center p-1">
                <input
                  type="checkbox"
                  className="scale-125"
                  onChange={() => handleLocationChange(location)}
                  checked={selectedLocations.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="w-full mt-3 lg:w-3/4 text-gray-600">
        <h3 className="font-medium text-3xl py-2" id="job-list">Latest Jobs</h3>
        <p className="mb-2 pt-3">Get your desired jobs from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterjobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {filterjobs.length > 0 && (
          <nav className="p-10 flex items-center justify-center space-x-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === 1}
            >
              <img src={assets.left_arrow_icon} alt="Back" className="w-6 h-6" />
            </button>
            {Array.from({ length: Math.ceil(filterjobs.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? 'bg-blue-100 text-blue-500'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filterjobs.length / itemsPerPage)))
              }
              className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              disabled={currentPage === Math.ceil(filterjobs.length / itemsPerPage)}
            >
              <img src={assets.right_arrow_icon} alt="Next" className="w-6 h-6" />
            </button>
          </nav>
        )}
      </section>
    </div>
  );
};

export default JobListing;
