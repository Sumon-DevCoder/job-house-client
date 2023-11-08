import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const MyJobsTable = ({ jobs, handleDelete, handleUpdate }) => {
  return (
    <div>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className=" mt-10"
      >
        <div className="col-span-12 ">
          <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-400 border-separate space-y-6 text-sm ">
              <thead className="dark:bg-gray-800 bg-gradient-to-r from-gray-400 via-gray-600 to-blue-800 text-gray-200 text-[1rem]   dark:text-gray-300">
                <tr>
                  <th className="p-3">Job Title</th>
                  <th className="p-3 text-left">Job category</th>
                  <th className="p-3 text-left">Post</th>
                  <th className="p-3 text-left">Deadline</th>
                  <th className="p-3 text-left">salaryRange</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.lengh === 0 ? (
                  <p className="text-4xl text-red-400">No Job Post</p>
                ) : (
                  jobs?.map((job) => (
                    <tr key={job?._id} className="bg-gray-800">
                      <td className="md:p-3 pr-16 ">
                        <div className="flex align-items-center">
                          <img
                            className="rounded-full h-12 w-12  object-cover"
                            src={job?.brand_img}
                            alt="unsplash image"
                          />
                          <div className="ml-3 flex  items-center text-lg">
                            <div>{job?.jobTitle}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-md  font-semibold">
                        <span>{job?.category}</span>
                      </td>
                      <td className="p-3">
                        {job?.jobPostingDate.slice(0, 10)}
                      </td>
                      <td className="p-3 font-bold">
                        {job?.applicationDeadline.slice(0, 10)}
                      </td>
                      <td className="p-3 ">${job?.salaryRange}</td>

                      <td className="p-3 flex items-center space-x-5">
                        <Link to={`/updateJobs/${job?._id}`}>
                          <button
                            onClick={() => handleUpdate(job?._id)}
                            className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
                          >
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(job?._id)}
                          className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

MyJobsTable.propTypes = {
  jobs: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default MyJobsTable;
