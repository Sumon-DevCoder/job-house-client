import { PropTypes } from "prop-types";

import { BiSolidUserAccount, BiSolidLocationPlus } from "react-icons/bi";
import { LiaHandPointRight } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";

const AllJobTable = ({ job }) => {
  const { user } = useAuthContext();

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

  return (
    <div>
      <div key={job?._id} className="lg:w-full md:w-96  pt-10 px-2 ">
        <div className="card bg-[#FFFFFF] border-2 border-gray-400">
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
                {user ? (
                  <Link to={`/details/${job?._id}`}>
                    <button className="btn btn-sm capitalize">
                      View Details
                    </button>
                  </Link>
                ) : (
                  <Link onClick={handleAlert} to={`/details/${job?._id}`}>
                    <button className="btn btn-sm  capitalize">
                      View Details
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AllJobTable.propTypes = {
  job: PropTypes.array.isRequired,
};

export default AllJobTable;
