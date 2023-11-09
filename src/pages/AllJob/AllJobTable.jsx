import { PropTypes } from "prop-types";

import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Aos from "aos";

const AllJobTable = ({ searchResults }) => {
  // aos animation
  useEffect(() => {
    Aos.init();
  }, []);
  const { user } = useAuthContext();

  // error mesaage alert
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
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      className="bg-gray-500 rounded-lg dark:bg-slate-900"
    >
      <div className=" mt-8">
        <div className="col-span-12 ">
          <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-400 border-separate space-y-6 text-sm ">
              <thead className="dark:bg-gray-800   bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-gray-200 text-[1rem]   dark:text-gray-300">
                <tr>
                  <th className="p-3">Job Title</th>
                  <th className="p-3 text-left">Job category</th>
                  <th className="p-3 text-left">Post</th>
                  <th className="p-3 text-left">Deadline</th>
                  <th className="p-3 text-left">salaryRange</th>
                  <th className="p-3 text-left">Applicants</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResults?.map((job) => (
                  <tr key={job?._id} className="bg-gray-800">
                    <td className="md:p-3 pr-16 ">
                      <div className="flex align-items-center">
                        <img
                          className="rounded-full h-12 w-12  object-cover"
                          src={job?.brand_img}
                          alt="company logo"
                        />
                        <div className="ml-3 flex flex-col">
                          <div className="text-lg">{job?.jobTitle}</div>
                          <div>{job?.postedBy}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-md  font-semibold">
                      <span>{job?.category}</span>
                    </td>
                    <td className="p-3">{job?.jobPostingDate?.slice(0, 10)}</td>
                    <td className="p-3 font-bold">
                      {job?.applicationDeadline?.slice(0, 10)}
                    </td>
                    <td className="p-3 ">${job?.salaryRange}</td>
                    <td className="p-3 text-center">{job?.applicantsNumber}</td>

                    <td className="p-3 flex items-center space-x-5">
                      {user ? (
                        <Link to={`/details/${job?.apply_id || job?._id}`}>
                          <button className="btn btn-sm capitalize">
                            View Details
                          </button>
                        </Link>
                      ) : (
                        <Link
                          onClick={handleAlert}
                          to={`/details/${job?.apply_id || job?._id}`}
                        >
                          <button className="btn btn-sm  capitalize">
                            View Details
                          </button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

AllJobTable.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

export default AllJobTable;
