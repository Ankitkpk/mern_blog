import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
import { JobCategories, JobLocations } from '../assets/assets'

const Addjobs = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Programming');
  const [location, setLocation] = useState('Bangalore');
  const [level, setLevel] = useState('Beginner Level');
  const [salary, setSalary] = useState('');
  
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow'
      })
    }
  }, [])

  return (
    <form className='container p-6 space-y-6'>
      <div>
        <p className='text-xl font-light'>Job Title</p>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder='Enter title' 
          value={title}
          className='w-full p-2 border border-gray-300 rounded-md'
        />
      </div>

      <div>
        <p className='text-xl font-light'>Job Description</p>
        <div ref={editorRef} className='border border-gray-300 rounded-md'></div>
      </div>

      <div className="flex space-x-6">
        {/* Job Category */}
        <div className="w-1/3">
          <p className='text-xl font-light'>Job Category</p>
          <select 
            onChange={(e) => setCategory(e.target.value)}  
            value={category} 
            className='w-full p-2 border border-gray-300 rounded-md'
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="w-1/3">
          <p className='text-xl font-light'>Job Location</p>
          <select 
            onChange={(e) => setLocation(e.target.value)}  
            value={location} 
            className='w-full p-2 border border-gray-300 rounded-md'
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="w-1/3">
          <p className='text-xl font-light'>Job Level</p>
          <select 
            onChange={(e) => setLevel(e.target.value)} 
            value={level} 
            className='w-full p-2 border border-gray-300 rounded-md'
          >
            <option value="Senior Level">Senior Level</option>
            <option value="Beginner Level">Beginner Level</option>
            <option value="Mid Level">Mid Level</option>
          </select>
        </div>
      </div>
      <div>
        <p className='text-xl font-light'>Salary</p>
        <input 
          type="number" 
          onChange={(e) => setSalary(e.target.value)} 
          value={salary} 
          className=' p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div>
        <button type="submit" className='bg-black text-white py-2 px-4 rounded-md'>
          Add Job
        </button>
      </div>
    </form>
  )
}

export default Addjobs;
