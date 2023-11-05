import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import AllJobTable from "./AllJobTable";

const AllJob = () => {
  const jobs = useLoaderData();
  const [jobsData, setJobsData] = useState(jobs);
  const [category, setCategory] = useState("");

  console.log("search data", jobsData);

  useEffect(() => {
    fetch(`http://localhost:5000/jobByCategory/${category}`)
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, [category]);

  const handleSearchBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    setCategory(category);
  };

  return (
    <div>
      <div className="text-center">
        <form onSubmit={handleSearchBtn} className="join text-black mt-10 ">
          <div>
            <div>
              <input
                className="input w-40  input-bordered join-item"
                placeholder="Search"
                name="category"
              />
            </div>
          </div>
          {/* <select className="select btn  select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Remote Job</option>
            <option>OnSite Job</option>
            <option>Part-Time Job</option>
          </select> */}
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
