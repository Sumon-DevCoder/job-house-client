import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllJobTable from "../AllJob/AllJobTable";
import useAuthContext from "../../hooks/useAuthContext";

const AppliedJob = () => {
  const { user } = useAuthContext();
  const [jobs, setJobs] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log("jobs", jobs);

  useEffect(() => {
    fetch(`http://localhost:5000/jobAppliesByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/jobAppliesByEmail/${selectedCategory}`)
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="pt-10 h-[50vh] text-center mb-20">
      <Helmet>
        <title>Applied Job</title>
      </Helmet>
      <select
        name="category"
        className="select btn text-white bg-slate-600 border-2 w-80 required"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option disabled selected>
          Job Category
        </option>
        <option value="Remote Job">Remote Job</option>
        <option value="On Site Job">On Site Job</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Part Iime">Part Time</option>
      </select>
      <div>
        {jobs?.map((job) => (
          <AllJobTable key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
