import React, { useContext } from 'react';
import Home from './pages/Home';
import Application from './pages/Application';
import AppliedJob from './pages/AppliedJob';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Recriuterlogin from './components/Recriuterlogin';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import Addjobs from './pages/Addjobs';
import ManageJob from './pages/ManageJob';
import ViewApplication from './pages/ViewApplication'; 
import 'quill/dist/quill.snow.css';     
function App() {
  const { showRecruiter } = useContext(AppContext);
  return (
    <div>
      {showRecruiter && <Recriuterlogin />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/applied-job/:id" element={<AppliedJob />} />
        <Route path="/dashboard" element={<Dashboard />} >
        <Route path="add-job" element={<Addjobs />} />
        <Route path="manage-job" element={<ManageJob />} />
        <Route path="ViewApplication" element={<ViewApplication />} />
        </Route>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
