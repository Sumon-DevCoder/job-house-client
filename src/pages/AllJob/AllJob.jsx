import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllJobTable from "./AllJobTable";
import { Helmet } from "react-helmet";

const AllJob = () => {
  const jobs = useLoaderData();
  const [jobsData, setJobsData] = useState(jobs);
  const [jobTitle, setJobTitle] = useState("");

  console.log("search data", jobsData);
  // console.log(category);

  useEffect(() => {
    fetch(`http://localhost:5000/jobByTitle/${jobTitle}`)
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, [jobTitle]);

  const handleSearchBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    setJobTitle(jobTitle);
    console.log("my pppp", jobTitle);
  };

  return (
    <div>
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      <div className="text-center max-h-[50vh]">
        <form onSubmit={handleSearchBtn} className="join text-black mt-10 ">
          <div>
            <div>
              <input
                className="input w-40  input-bordered join-item"
                placeholder="Search Category"
                name="jobTitle"
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn join-item">
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        {jobsData?.map((job) => (
          <AllJobTable key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AllJob;
