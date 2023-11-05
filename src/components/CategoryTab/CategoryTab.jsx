import { useEffect, useState } from "react";
import { Tab, TabList, Tabs } from "react-tabs";
import { BiSolidUserAccount, BiSolidLocationPlus } from "react-icons/bi";
import { LiaHandPointRight } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";

const CategoryTab = () => {
  const { user } = useAuthContext();
  const [category, setCategory] = useState("");
  const [jobsData, setJobsData] = useState([]);
  const [allJobsData, setAllJobsData] = useState([]);

  console.log(jobsData, allJobsData);

  const handleAlert = () => {
    return Swal.fire({
      title: "please Login to Show Details ",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/jobs`)
      .then((res) => res.json())
      .then((data) => {
        // setJobsData(data);
        // setCategory(data);
        setAllJobsData(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/jobByCategory/${category}`)
      .then((res) => res.json())
      .then((data) => setJobsData(data));
  }, [category]);

  return (
    <div>
      <Tabs className="text-center mt-16 container m-auto">
        <h2 className="text-2xl font-bold mb-6">
          Find the job that is perfect for You
        </h2>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab onClick={() => setCategory(`On Site Job`)}>On Site Job</Tab>
          <Tab onClick={() => setCategory(`Remote Job`)}>Remote Job</Tab>
          <Tab onClick={() => setCategory(`Hybrid`)}>Hybrid</Tab>
          <Tab onClick={() => setCategory(`Part Time`)}>Part Time</Tab>
        </TabList>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-x-8  md:px-5 justify-items-center container m-auto mb-10">
          {jobsData?.map((job) => (
            <div key={job?._id} className="lg:w-full md:w-96  pt-5 px-2">
              <div className="card bg-[#FFFFFF] ">
                <div className="p-5">
                  <div className="flex justify-between">
                    <h2 className="card-title  text-black">{job?.jobTitle}</h2>
                    <p>Post:{job?.jobPostingDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiSolidUserAccount className="text-lg " /> {job?.postedBy}
                  </div>

                  <div className="text-start flex gap-20  text-gray-400 ">
                    <p className="text-start text-lg flex items-center gap-2">
                      <LiaHandPointRight className="text-lg " /> {job?.category}
                    </p>
                  </div>

                  <div className="text-start flex flex-wrap  gap-10  text-gray-400 ">
                    <div className="flex items-center gap-1">
                      <FaHandHoldingUsd className="text-lg " />{" "}
                      <span className="text-black">Salary :</span>{" "}
                      {job?.salaryRange}
                    </div>

                    <div className="flex items-center gap-1">
                      <BiSolidLocationPlus className="text-lg " />{" "}
                      <span className="text-black"></span> {job?.location}
                    </div>
                  </div>
                  <div className="text-start flex flex-wrap justify-between  text-gray-400 ">
                    <div className="flex items-center gap-2 mr-5">
                      <IoMdPersonAdd className="text-lg " />{" "}
                      <span className="text-black">Applicants :</span>
                      {job?.applicantsNumber}
                    </div>
                    <div className="flex items-center gap-1">
                      <CiCalendarDate className="text-lg " />{" "}
                      <span className="text-black">deadline :</span>{" "}
                      {job?.applicationDeadline}
                    </div>

                    <div>
                      {user ? (
                        <Link to={`/details/${job?._id}`}>
                          <button className="btn btn-sm ">See Details</button>
                        </Link>
                      ) : (
                        <Link to={`/details/${job?._id}`}>
                          <button onClick={handleAlert} className="btn btn-sm ">
                            See Details
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

export default CategoryTab;
