import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllJobTable from "../AllJob/AllJobTable";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Margin, usePDF } from "react-to-pdf";
import { useQuery } from "@tanstack/react-query";

const AppliedJob = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const [selectedCategory, setSelectedCategory] = useState(); // set category
  const [jobs, setJobs] = useState(); // initial data load
  const [filteredJobs, setFilteredJobs] = useState([]); // store in data

  // save pdf file
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM },
  });

  // loadData
  // useEffect(() => {
  //   if (user?.email) {
  //     axiosSecure.get(`/jobAppliesByEmail?email=${user?.email}`).then((res) => {
  //       setJobs(res.data);
  //       setFilteredJobs(res.data);
  //     });
  //   }
  // }, [axiosSecure, user?.email]);

  // loadData tanstack query
  const getJobsData = async () => {
    const res = await axiosSecure.get(
      `/jobAppliesByEmail?email=${user?.email}`
    );
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service"],
    queryFn: getJobsData,
  });

  useEffect(() => {
    if (!isError && !isLoading) {
      setJobs(data);
      setFilteredJobs(data);
    }
  }, [data, isError, isLoading]);

  if (isError) {
    return (
      <p className="text-center text-red-400 font-bold text-2xl">
        something went wrong
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="absolute  bg-white dark:text-slate-300 dark:bg-slate-950 h-[100vh] bg-opacity-60 z-10   w-full flex justify-center">
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

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    setSelectedCategory(selectedCategory);

    const categoryData = jobs.filter(
      (job) => job.category === selectedCategory
    );

    setFilteredJobs(categoryData);
  };

  return (
    <div className="mb-20">
      <Helmet>
        <title>Applied Job</title>
      </Helmet>
      <div className=" container m-auto pt-20  space-x-3  flex  md:flex-row justify-start items-center space-y-2 md:space-y-0 ">
        <div className=" pt-2.5 md:pt-0">
          <button
            onClick={() => setFilteredJobs(jobs)}
            className="btn  bg-slate-600 border-none   text-white"
          >
            All Category
          </button>
        </div>
        <div>
          <select
            name="category"
            className="select text-white bg-slate-600 border-2  required"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled selected>
              Job Category
            </option>
            <option value="Remote Job">Remote Job</option>
            <option value="On Site Job">On Site Job</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>
        <div>
          <button className="btn  " onClick={toPDF}>
            Download PDF
          </button>
        </div>
      </div>
      <div ref={targetRef} className="container m-auto">
        <AllJobTable searchResults={filteredJobs} />
      </div>
    </div>
  );
};

export default AppliedJob;
