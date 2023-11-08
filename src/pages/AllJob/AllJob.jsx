import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllJobTable from "./AllJobTable";
import { Helmet } from "react-helmet";

const AllJob = () => {
  const jobs = useLoaderData();
  const [jobsData, setJobsData] = useState(jobs);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch(`https://job-house-server.vercel.app/allJobs`)
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, []);

  useEffect(() => {
    const filteredData = jobsData.filter((item) =>
      item.jobTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [jobsData, searchValue]);

  return (
    <div>
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      <div className="text-center max-h-[50vh]">
        <div className="join text-black mt-10 ">
          <div>
            <div>
              <input
                className="input  input-bordered join-item"
                placeholder="Search Job Title..."
                name="jobTitle"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button type="submit" className="btn join-item">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <AllJobTable searchResults={searchResults} />
      </div>
    </div>
  );
};

export default AllJob;
