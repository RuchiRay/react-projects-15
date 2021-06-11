import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  function handleJob(index) {
    setValue(index);
  }
  if (loading) {
    return <div className="loading">Loading....</div>;
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <main className="main-box">
      <h1 className="experience">Experience</h1>
      <div className="line"></div>
      <div className="job-centre">
        <div className="job-btn-box">
          {jobs.map((job, index) => {
            return (
              <button
                key={index}
                onClick={() => handleJob(index)}
                className={index === value ? `job-btn active` : `job-btn false`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          <h3 className="job">{title}</h3>
          <h4 className="company">{company}</h4>
          <p className="date">{dates}</p>
          <div className="duties">
            {duties.map((duty, index) => {
              return (
                <div className="duty" key={index}>
                  <FaAngleDoubleRight className="job-icon"/>
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button className="more-info">MORE INFO</button>
    </main>
  );
}

export default App;
