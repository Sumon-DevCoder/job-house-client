import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import AllJobTable from "../AllJob/AllJobTable";

const AppliedJob = () => {
  const { user } = useAuthContext();
  const [jobs, setJobs] = useState([]);

  console.log(jobs);

  useEffect(() => {
    fetch(`http://localhost:5000/jobAppliesByEmail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);

  return (
    <div>
      {jobs?.map((job) => (
        <AllJobTable key={job?._id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJob;
