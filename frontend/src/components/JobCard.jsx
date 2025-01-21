import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 sm:w-80 md:w-96 lg:w-auto">
      <div className="p-4 bg-gray-50 flex items-center justify-center">
        <img
          src={assets.company_icon || 'fallback-icon-url'}
          alt="Company logo"
          className="w-12 h-12 object-contain"
        />
      </div>

      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{job.title}</h4>
        <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
          <span className="flex items-center justify-center bg-blue-100 border border-blue-100 text-gray-500 font-bold rounded-md px-3 py-1 text-xs">
            {job.location}
          </span>
          <span className="flex items-center justify-center bg-red-100 border border-red-100 text-gray-500 font-bold rounded-md px-3 py-1 text-xs">
            {job.level}
          </span>
        </div>
        <p
          className="text-md text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
        ></p>
        <div className="flex space-x-5">
          <button
            onClick={() => {
              navigate(`/applied-job/${job._id}`);
              window.scrollTo(0, 0);
            }}
            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
            aria-label={`Apply for ${job.title}`}
          >
            Apply now
          </button>
          <button
            onClick={() => {
              navigate(`/applied-job/${job._id}`);
              window.scrollTo(0, 0);
            }}
            className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-sm"
            aria-label={`Learn more about ${job.title}`}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
