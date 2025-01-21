import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets, jobsData } from '../assets/assets';
import Loading from '../components/Loading';
import kconvert from 'k-convert';
import moment from 'moment';
import JobCard from '../components/JobCard';

const AppliedJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);
  const navigate = useNavigate();

  const fetchJob = () => {
    const data = jobs.filter((j) => j._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    } else {
      console.log('No job data exists for this ID');
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <div className="min-h-screen flex flex-col py-10 container mx-auto sm:px-5 py-3">
      <div className="bg-white text-black rounded-lg w-full">
        <div className="flex items-center justify-center md:justify-between flex-wrap px-14 py-16 bg-sky-50 border border-sky-400 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              className="h-24 bg-white p-5 rounded-xl border"
              src={assets.company_icon}
              alt="logo"
            />
            <div className="text-center md:text-left text-neutral-700">
              <h1 className="text-2xl md:text-4xl font-medium mt-3">
                {jobData.title}
              </h1>
              <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-400">
                <span className="text-black flex items-center gap-1 p-2">
                  <img src={assets.suitcase_icon} alt="" />
                  {jobData.companyId.name}
                </span>
                <span className="text-black flex items-center gap-1 p-2">
                  <img src={assets.location_icon} alt="" />
                  {jobData.location}
                </span>
                <span className="text-black flex items-center gap-1 p-2">
                  <img src={assets.person_icon} alt="" />
                  {jobData.level}
                </span>
                <span className="text-black flex items-center gap-1 p-2">
                  <img src={assets.money_icon} alt="" />
                  CTC: {kconvert.convertTo(jobData.salary)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-2 items-center md:items-end gap-2">
            <button className="bg-blue-600 text-white px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
              Apply Now
            </button>
            <p className="text-xm text-gray-500">
              Posted {moment(jobData.date).fromNow()}
            </p>
          </div>
        </div>
        <div className='flex flex-wrap   mt-12'>
          <div className="flex flex-col gap-y-6 w-full lg:w-1/2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
              <p className="text-gray-500 text-md leading-relaxed">
                We are seeking a highly skilled Full Stack Developer to join our
                dynamic and innovative team. The ideal candidate will have a
                passion for developing scalable web applications and working
                across the entire technology stack, from front-end user interfaces
                to back-end database and server management.
              </p>
              <p className="text-gray-500 text-md leading-relaxed">
                You will collaborate with cross-functional teams to design,
                develop, and implement new features, ensuring high performance,
                responsiveness, and security of the application. If you thrive in
                fast-paced environments, are detail-oriented, and love to solve
                complex technical challenges, we'd love to meet you!
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
              <ol className="list-decimal pl-6 text-gray-700 text-md leading-relaxed">
                <li>
                  Build, test, and deploy highly responsive web applications using
                  modern front-end and back-end technologies.
                </li>
                <li>
                  Design and implement user-friendly interfaces using HTML, CSS,
                  JavaScript (React, Angular, or Vue.js).
                </li>
                <li>
                  Develop and maintain APIs, server-side logic, and databases using
                  technologies such as Node.js, Ruby, or Java.
                </li>
                <li>
                  Design and maintain databases (SQL, NoSQL) for efficiency and
                  reliability.
                </li>
                <li>
                  Write automated tests to ensure the quality of the application
                  (unit, integration, and end-to-end testing).
                </li>
                <li>
                  Work closely with designers, product managers, and engineers to
                  understand requirements and implement features.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills Required</h2>
              <ol className="list-decimal pl-6 text-gray-700 text-md leading-relaxed">
                <li>
                  Knowledge of HTML, CSS, and JavaScript, plus experience with
                  frameworks like React, Angular, or Vue.js.
                </li>
                <li>
                  Experience working with server-side languages such as Node.js,
                  Python, Ruby, or Java.
                </li>
                <li>
                  Familiarity with both relational databases (e.g., MySQL,
                  PostgreSQL) and non-relational databases (e.g., MongoDB).
                </li>
                <li>
                  Experience using Git for tracking changes and collaborating on
                  code.
                </li>
                <li>
                  Good communication and collaboration skills, able to work
                  effectively with others.
                </li>
              </ol>
            </div>
            <div>
              <button className="bg-blue-600 mt-12 text-white px-10 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>
          <div className="w-full sm:w-2/3 mt-5 md:w-2/3 lg:w-1/2 flex flex-col space-y-2 items-center sm:items-end sm:justify-end justify-center">
  <h2 className="text-2xl font-semibold mb-4 mr-20 text-center sm:text-right">
    More jobs from slock
  </h2>
  <div className="w-full sm:w-2/3 space-y-4">
    {jobs
      .filter(
        (job) =>
          job._id !== jobsData._id && job.companyId._id === jobData.companyId._id
      )
      .slice(0, 3)
      .map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
  </div>
</div>

        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default AppliedJob;