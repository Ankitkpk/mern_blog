import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Recriuterlogin = () => {
  const [state, setState] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(false);
  const [istextdatasubmitted, setIsTextDataSubmitted] = useState(false);
  const {setShowRecruiter}=useContext(AppContext);
  const submitHandler = async (e) => {
    e.preventDefault();
     if (state === 'SignUp' && !istextdatasubmitted) {
       setIsTextDataSubmitted(true);
      }
    } 
    useEffect(()=>{
        document.body.style.overflow='hidden'

        return()=>{
            document.body.style.overflow='unset'
        }
    },[])
    // return()=>{}
    //    This is the cleanup function that runs when the component is unmounted (removed from the DOM).
  //The empty dependency array ensures the effect is not re-run unless the component is unmounted or remounted.//
  return (
    <div  className="absolute top-0 right-0 left-0 bottom-0 z-10 backdrop-blur flex items-center justify-center p-4 rounded-lg ">
   
      <form onSubmit={submitHandler}  className="relative bg-white p-12 text-slate-500 rounded-md shadow-md  w-full max-w-sm sm:max-w-md">
      <img src={assets.cross_icon} className='absolute top-0 right-0 p-5 h-14 w-14 curser-pointer' onClick={e =>setShowRecruiter(false)} alt="" />
        <h2 className="text-center text-2xl font-semibold mb-4">Recruiter Login</h2>
        <p className="text-center mb-6">Welcome back! Please sign in to continue</p>
       {state === 'SignUp' && istextdatasubmitted 
       ? <> 
         <div className='flex gap-4 items-center justify-center'>
   <label htmlFor="image" className="cursor-pointer">
    <img
      src={image ? URL.createObjectURL(image) : assets.upload_area}
      className='w-20 h-20 rounded-full'
      alt="Company Logo"
    />
    <input
      type="file"
      id="image"
      hidden
      onChange={(e) => setImage(e.target.files[0])}
    />
   </label>
   <p>Upload company <br /> logo</p>
  </div>
  </>:
     
     <div className="space-y-6">
     {state !== 'Login' && (
       <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
         <img src={assets.person_icon} alt="Person Icon" className="h-5 w-5 mr-3" />
         <input
           type="text"
           className="w-full outline-none"
           placeholder="Company name"
           onChange={(e) => setName(e.target.value)}
           value={name}
         />
       </div>
     )}
     <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
       <img src={assets.email_icon} alt="Email Icon" className="h-5 w-5 mr-3" />
       <input
         type="email"
         className="w-full outline-none"
         placeholder="Email"
         onChange={(e) => setEmail(e.target.value)}
         value={email}
       />
     </div>
     <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
       <img src={assets.lock_icon} alt="Lock Icon" className="h-5 w-5 mr-3" />
       <input
         type="password"
         className="w-full outline-none"
         placeholder="Enter password"
         onChange={(e) => setPassword(e.target.value)}
         value={password}
       />
     </div>
     {state === 'Login' && <p className="text-md text-blue-500">Forget password?</p>}
     
   </div>

  }

        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition"
        >
          {state === 'Login' ? 'Login' : istextdatasubmitted ? 'Next': 'Create Account'}
        </button>
        <p className="text-center mt-4">
          {state === 'Login' ? (
            <>
              Don’t have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setState('SignUp')}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setState('Login')}
              >
                Log In
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Recriuterlogin;
