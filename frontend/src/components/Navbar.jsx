import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const {setShowRecruiter}=useContext(AppContext)

  return (
    <div className='container 2xl:px-15 mx-auto'>
    <div className="flex flex-wrap items-center justify-between p-4">
      <img src={assets.logo} alt="logo" className="w-24 sm:w-32 mr-4" />
      {
        user ?
        <div className='flex items-center gap-2'>
          <Link to='/application'>Applied jobs</Link>
          <p>Hi | {user.firstName + " "+ user.lastName}</p>
          <UserButton />
        </div>
        :
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 pr-2">
          <button  onClick={e => setShowRecruiter(true)} className="text-gray-700 hover:text-gray-900">Recruiter Login</button>
          <button onClick={e => openSignIn()} className="bg-blue-500 text-white px-8 py-1.5 rounded-full hover:bg-blue-600">
            Login
          </button>
        </div>
      }
    </div>
    </div>
  );
};

export default Navbar;
