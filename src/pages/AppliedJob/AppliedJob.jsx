import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllJobTable from "../AllJob/AllJobTable";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Margin, usePDF } from "react-to-pdf";

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
  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/jobAppliesByEmail?email=${user?.email}`).then((res) => {
        setJobs(res.data);
        setFilteredJobs(res.data);
      });
    }
  }, [axiosSecure, user?.email]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    setSelectedCategory(selectedCategory);

    const categoryData = jobs.filter(
      (job) => job.category === selectedCategory
    );

    setFilteredJobs(categoryData);
  };

  return (
    <div className="pt-10  mb-20">
      <Helmet>
        <title>Applied Job</title>
      </Helmet>
      <div className=" container m-auto space-x-3  flex flex-col md:flex-row justify-start items-center space-y-2 md:space-y-0 md:px-0 px-20">
        <div>
          <button
            onClick={() => setFilteredJobs(jobs)}
            className="btn w-72 bg-slate-600    text-white"
          >
            All Job Category
          </button>
        </div>
        <div>
          <select
            name="category"
            className="select ml-2 w-64 text-white bg-slate-600 border-2  required"
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
          {" "}
          <button className="btn w-44" onClick={toPDF}>
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
