import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

import { assets } from '../assets/assets';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar section for recruiter panel */}
      <div className="shadow py-4">
        <div className="px-5 flex items-center justify-between">
          <img
            onClick={() => navigate('/')}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt=""
          />
          <div className="flex gap-3 items-center">
            <p className="max-sm:hidden">Welcome, Gretorstack</p>
            <div className="relative group">
              <img className="w-8 rounded-full" src={assets.company_icon} alt="" />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="px-3 py-1 cursor-pointer pr-10">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* Left sidebar for options */}
        <div className="inline-block border-r-2">
        <ul className="flex flex-col items-start px-5 mt-4 py-2 space-y-2 min-h-screen text-gray-800">
  <NavLink
    className={({ isActive }) =>
      `flex items-center p-3 sm:p-6 gap-2 w-full hover:bg-gray-100 ${
        isActive ? 'bg-blue-100 border-l-4 border-blue-400' : ''
      }`
    }
    to="/dashboard/manage-job"
  >
    <img src={assets.suitcase_icon} alt="" className="w-6 h-6" />
    <p className="max-sm:hidden">Manage Jobs</p>
  </NavLink>
  <NavLink
    className={({ isActive }) =>
      `flex items-center p-3 sm:p-6 gap-2 w-full hover:bg-gray-100 ${
        isActive ? 'bg-blue-100 border-l-4 border-blue-400' : ''
      }`
    }
    to="/dashboard/add-job"
  >
    <img src={assets.add_icon} alt="" className="w-6 h-6" />
    <p className="max-sm:hidden">Add Jobs</p>
  </NavLink>
  <NavLink
    className={({ isActive }) =>
      `flex items-center p-3 sm:p-6 gap-2 w-full hover:bg-gray-100 ${
        isActive ? 'bg-blue-100 border-l-4 border-blue-400' : ''
      }`
    }
    to="/dashboard/ViewApplication"
  >
    <img src={assets.person_tick_icon} alt="" className="w-6 h-6" />
    <p className="max-sm:hidden">View Application</p>
   </NavLink>
    </ul>
        </div>
        <div>
       <Outlet/>
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
