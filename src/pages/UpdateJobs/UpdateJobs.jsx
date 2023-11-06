import { useLoaderData } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";

const UpdateJobs = () => {
  const singleJobData = useLoaderData();
  const { user } = useAuthContext();
  const {
    jobTitle,
    category,
    description,
    imgUrl,
    location,
    salaryRange,
    jobPostingDate,
    applicationDeadline,
  } = singleJobData || {};
  console.log(singleJobData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get input field
    const form = e.target;
    const postedBy = form.name.value;
    const email = form.email.value;
    const jobTitle = form.jobTitle.value;
    const category = form.category.value;
    const description = form.description.value;
    const imgUrl = form.imgUrl.value;
    const location = form.location.value;
    const salaryRange = form.salaryRange.value;
    const jobPostingDate = form.jobPostingDate.value;
    const applicationDeadline = form.applicationDeadline.value;

    const updateJobInfo = {
      postedBy,
      email,
      jobTitle,
      category,
      description,
      imgUrl,
      location,
      salaryRange,
      jobPostingDate,
      applicationDeadline,
      applicantsNumber: 0,
    };

    console.log(updateJobInfo);

    fetch(`http://localhost:5000/jobsById/${singleJobData?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJobInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Job Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log("update job success", data);
      });
  };

  return (
    <div>
      <div className="w-full max-w-3xl  mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium text-red-400 mb-6">Update Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="card-number"
                  required
                  placeholder="User Name"
                  defaultValue={user?.displayName}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-holder"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  required
                  name="email"
                  id="card-holder"
                  placeholder="Full Name"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  id="cvv"
                  placeholder="Enter Job Title"
                  defaultValue={jobTitle}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Select Job Type
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="select border-2 w-80 required"
                >
                  <option disabled selected>
                    Job Category
                  </option>
                  <option value="Remote Job">Remote Job</option>
                  <option value="On Site Job">On Site Job</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Part Iime">Part Time</option>
                </select>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="card-number"
                  required
                  placeholder="Enter Job description"
                  defaultValue={description}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Picture URL
                </label>
                <input
                  type="url"
                  name="imgUrl"
                  id="card-number"
                  required
                  placeholder="Enter Picture url"
                  defaultValue={imgUrl}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  id="card-number"
                  placeholder="Enter Location"
                  defaultValue={location}
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Salary Range
                </label>
                <input
                  type="text"
                  name="salaryRange"
                  id="cvv"
                  placeholder="$70,000 - $90,000"
                  defaultValue={salaryRange}
                  required
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Posting Date
                </label>
                <input
                  type="date"
                  name="jobPostingDate"
                  id="expiration-date"
                  required
                  defaultValue={jobPostingDate}
                  placeholder="MM / YY"
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Application Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  id="cvv"
                  placeholder="Enter Deadline"
                  defaultValue={applicationDeadline}
                  required
                  className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-green-500 btn hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateJobs;
