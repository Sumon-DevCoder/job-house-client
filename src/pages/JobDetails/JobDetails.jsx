import { Link, useLoaderData } from "react-router-dom";
import { LiaHandPointRight } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { BiSolidUserAccount, BiSolidLocationPlus } from "react-icons/bi";

const JobDetails = () => {
  const job = useLoaderData();
  //   const {} = jobDetilsData || {}
  // console.log(jobDetilsData);

  return (
    <div className="flex justify-center pt-10">
      <div key={job?._id} className=" w-6/12  pt-5 px-2">
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
                <span className="text-black">Salary :</span> {job?.salaryRange}
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
                <Link to={`/details/${job?._id}`}>
                  <button className="btn btn-sm ">See Details</button>
                </Link>
              </div>
            </div>

            <div className="pt-4">
              <p>
                <span className="font-bold text-lg">Job Description</span>:{" "}
                <br /> {job?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
