import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryTab = () => {
  const [category, setCategory] = useState("");
  const [jobsData, setJobsData] = useState([]);

  console.log(jobsData);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${category}`)
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, [category]);

  return (
    <div>
      <Tabs className="text-center mt-16 container m-auto">
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab onClick={() => setCategory(`On Site Job`)}>On Site Job</Tab>
          <Tab onClick={() => setCategory(`Remote Job`)}>Remote Job</Tab>
          <Tab onClick={() => setCategory(`Hybrid`)}>Hybrid</Tab>
          <Tab onClick={() => setCategory(`Part Time`)}>Part Time</Tab>
        </TabList>
        <div className="grid grid-cols-2  gap-5">
          {jobsData?.map((job) => (
            // <div key={job?._id} className="border-2 bg-green-400 h-20">
            //   <h2>{job?.category}</h2>
            // </div>
            <div key={job?._id} className="w-full pt-5 px-2">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden ">
                <div>
                  <div className="p-4 md:p-5">
                    <p className="font-bold text-start text-lg">
                      {job?.jobTitle}
                    </p>
                    <p className="text-gray-700 text-start md:text-lg">
                      {job?.category}
                    </p>
                  </div>
                  <div className="p-4 md:p-5 w-full  bg-gray-100">
                    <div className="sm:flex sm:justify-between sm:items-center">
                      <div>
                        <div className="text-lg text-start text-gray-700">
                          <span>{job?.postedBy}</span>
                        </div>
                        <div className="text-sm md:text-base text-start text-gray-700">
                          <span>{job?.applicationDeadline}</span>
                        </div>
                        <div className="text-gray-600 text-start  text-sm md:text-base">
                          {job?.jobPostingDate}
                        </div>
                      </div>
                      <button className=" sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-indigo-700 hover:bg-indigo-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                        Book now
                      </button>
                    </div>
                    <div className="mt-3 text-start text-gray-600 text-sm md:text-base">
                      Applicants: {job?.applicantsNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryTab;
