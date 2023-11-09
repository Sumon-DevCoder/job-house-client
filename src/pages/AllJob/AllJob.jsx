import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllJobTable from "./AllJobTable";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllJob = () => {
  const axiosSecure = useAxiosSecure();
  const jobs = useLoaderData();
  const [jobsData, setJobsData] = useState(jobs);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // loadData tanstack query
  const getJobsData = async () => {
    const res = await axiosSecure.get(`/allJobs`);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service"],
    queryFn: getJobsData,
  });

  useEffect(() => {
    if (!isError && !isLoading) {
      setJobsData(data);
    }
  }, [data, isError, isLoading]);

  useEffect(() => {
    const filteredData = jobsData.filter((item) =>
      item.jobTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredData);
  }, [jobsData, searchValue]);

  if (isError) {
    return (
      <p className="text-center text-red-400 font-bold text-2xl">
        something went wrong
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="absolute bg-white dark:text-slate-300 dark:bg-slate-950 h-[100vh] bg-opacity-60 z-10  w-full flex justify-center">
        <div className="flex  pt-20">
          <span className="text-3xl dark:text-slate-200 mr-4">Loading</span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      <div className="text-center pt-14 max-h-[50vh]">
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
      <div className="container -mt-4 mx-auto">
        <AllJobTable searchResults={searchResults} />
      </div>
    </div>
  );
};

export default AllJob;
