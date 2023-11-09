import { Tab, TabList, Tabs } from "react-tabs";
import { BiSolidUserAccount } from "react-icons/bi";
import { LiaHandPointRight } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

import useAuthContext from "../../hooks/useAuthContext";

const CategoryTab = ({ allJobsData }) => {
  // authConext
  const { user } = useAuthContext();
  // state
  const [category, setCategory] = useState("");
  const [jobsData, setJobsData] = useState(allJobsData);

  // loadData
  useEffect(() => {
    fetch(`https://job-house-server.vercel.app/jobByCategory/${category}`)
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, [category]);

  const handleAlert = () => {
    return Swal.fire({
      title: "<strong> Please Login to Show Details </strong>",
      icon: "info",

      showCloseButton: false,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Ok
      `,
    });
  };

  return (
    <div className="my-10 md:my-16  ">
      <Tabs className="text-center container m-auto px-10 ">
        <h1 className="text-4xl font-bold mb-2 dark:text-gray-400">
          Browse by category
        </h1>
        <h2 className="text-lg text-[#10B981] font-bold font-serif  mb-6 ">
          Find the job that is perfect for You
        </h2>
        <TabList className="bg-[#10B981] dark:bg-gray-500  rounded-lg p-2 ">
          <Tab onClick={() => setJobsData(allJobsData)}>All Jobs</Tab>
          <Tab onClick={() => setCategory(`On Site Job`)}>On Site Job</Tab>
          <Tab onClick={() => setCategory(`Remote Job`)}>Remote Job</Tab>
          <Tab onClick={() => setCategory(`Hybrid`)}>Hybrid</Tab>
          <Tab onClick={() => setCategory(`Part Time`)}>Part Time</Tab>
        </TabList>
        <div className="grid grid-cols-1 mt-5 lg:grid-cols-2    md:px-5 justify-items-center container m-auto  gap-x-5">
          {jobsData?.map((job) => (
            <div key={job?._id} className="lg:w-full    pt-5">
              <div className="card card-body p-2 bg-gradient-to-r from-cyan-500 to-cyan-200  transform transition duration-500 hover:scale-105">
                <div className="p-5 space-y-1">
                  <div className="flex  justify-between">
                    <h2 className="card-title  text-black">{job?.jobTitle}</h2>
                  </div>
                  <div className="text-start flex gap-20  font-semibold ">
                    <p className="text-start text-lg flex items-center gap-2">
                      <LiaHandPointRight className="text-lg " /> {job?.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiSolidUserAccount className="text-lg " /> {job?.postedBy}
                  </div>

                  <div className="text-start flex flex-wrap  gap-10    ">
                    <div className="flex items-center gap-1">
                      <FaHandHoldingUsd className="text-lg " />{" "}
                      <span className="text-black">Salary :</span> $
                      {job?.salaryRange}
                    </div>

                    <div className="flex items-center gap-1">
                      <CiCalendarDate className="text-lg " />{" "}
                      <p>Post : {job?.jobPostingDate?.slice(0, 10)}</p>
                    </div>
                  </div>
                  <div className="text-start flex flex-wrap justify-between  gap-2  ">
                    <div className="flex items-center gap-2 mr-5">
                      <IoMdPersonAdd className="text-lg " />{" "}
                      <span className="text-black">Applicants :</span>
                      {job?.applicantsNumber}
                    </div>
                    <div className="flex items-center gap-1">
                      <CiCalendarDate className="text-lg " />{" "}
                      <span className="text-black">deadline :</span>{" "}
                      {job?.applicationDeadline?.slice(0, 10)}
                    </div>

                    <div>
                      {user ? (
                        <Link to={`/details/${job?._id}`}>
                          <button className="btn btn-sm capitalize">
                            View Details
                          </button>
                        </Link>
                      ) : (
                        <Link to={`/details/${job?._id}`}>
                          <button
                            onClick={handleAlert}
                            className="btn btn-sm capitalize btn-ghost "
                          >
                            View Details
                          </button>
                        </Link>
                      )}
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

CategoryTab.propTypes = {
  allJobsData: PropTypes.array.isRequired,
};

export default CategoryTab;
