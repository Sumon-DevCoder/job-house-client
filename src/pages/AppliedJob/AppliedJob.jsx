import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import AllJobTable from "../AllJob/AllJobTable";
import { Helmet } from "react-helmet";

const AppliedJob = () => {
  const { user } = useAuthContext();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobAppliesByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  //   fetch(`http://localhost:5000/jobAppliesByEmail/Hybrid}`)
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);

  return (
    <div className="pt-10 text-center ">
      <Helmet>
        <title>Applied Job</title>
      </Helmet>
      <select
        name="category"
        className="select btn text-white bg-slate-600 border-2 w-80 required"
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
