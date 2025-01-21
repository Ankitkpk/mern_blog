import React, { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [searchFilter,setSearchFilter]=useState({
    title:'',
    location:''
  });
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [jobs ,setJobs]=useState([]);
  //create a function to fetch jobs data //
  const [showRecruiter ,setShowRecruiter]=useState(false);

  const fetchjobs =()=>{
    setJobs(jobsData);
  }
  //load the jobdata when the app is loading //
  useEffect(() => {
    fetchjobs();
  }, [])
  const value = {
    searchFilter,setSearchFilter,
    isSearchActive,setIsSearchActive,
    jobs,
    showRecruiter,setShowRecruiter
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;