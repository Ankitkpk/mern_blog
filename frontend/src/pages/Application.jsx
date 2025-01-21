import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { jobsApplied } from '../assets/assets';
import moment from 'moment';
const Application = () => {
  const [isedit, setIsEdit] = useState(false);
  //set resume data//
  const [resume ,setResume]=useState(null);

  return (
    <div className="min-h-screen mt-10 container mx-auto ">
      <div className="bg-white p-6 mb-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Your Resume</h2>
        <div className="flex gap-4">
          {isedit ? (
            <div className='flex gap-4'>
            <label htmlFor="resumeUpload" className='flex items-center justify-center gap-4'>
              <p className='bg-sky-50 border border-sky-400 rounded-md text-blue-400 px-4 py-1'>Select Resume</p>
              <input id='resumeUpload' onChange={e=>setResume(setResume(e.target.files[0]))} accept="application/pfd" type="file" hidden />
              <img src={assets.profile_upload_icon} alt="upload"  />
            </label>
            <button  onClick={() => setIsEdit(false)} className='bg-green-100 border border-green-400 rounded-md text-green-400 px-4 py-1'>save</button>
            </div>
          ) : (
            <div className='flex gap-2'>
              <button className="bg-sky-50 border border-sky-400 rounded-md text-blue-400 px-4 py-1">
                Resume
              </button>
              
              <button
                className="bg-gray-100 text-gray-700 border-b-slate-800 rounded-md px-4 py-1"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
              <img src={assets.profile_upload_icon} alt="upload"  />
            </div>
          )}
        </div>
      </div>
    <div className="bg-white rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md ">
  <thead className="bg-gray-100 border-b border-gray-300">
    <tr>
      <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">Company</th>
      <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">Job Title</th>
      <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">Location</th>
      <th className="text-left text-sm font-semibold text-gray-700 px-6 py-3">Date</th>
      <th className="text-center text-sm font-semibold text-gray-700 px-6 py-3">Action</th>
    </tr>
  </thead>
  <tbody>
    {jobsApplied.map((job, index) => (
      <tr
        key={index}
        className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        
        <td className="flex items-center gap-4 px-6 py-3 border-b max-sm:hidden">
          <img
            src={job.logo || "default-logo.png"}
            alt={job.company || "Company"}
            className="h-10 w-10 object-cover rounded-full border "
          />
          <span className=" text-md font-medium">{job.company}</span>
        </td>


        <td className="border-b  px-6 py-3 text-md max-sm:hidden">{job.title}</td>

       
        <td className="border-b px-6 py-3 text-md max-sm:hidden">{job.location}</td>

     
        <td className="border-b  px-6 py-3 text-md max-sm:hidden">
          {moment(job.date).format("LL")}
        </td>

     
        <td className=" border-b  text-center px-6 py-3 max-sm:hidden">
         <span className={`${job.status === 'Accepted' ? 'bg-green-200':job.status === 'Rejected'?'bg-red-300':'bg-blue-300'} px-4 py-1 roundec-sm` }>
          {job.status}
         </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default Application;
