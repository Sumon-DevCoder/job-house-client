import { useLoaderData } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";

const UpdateJobs = () => {
  const singleJobData = useLoaderData();
  // react date picker
  const [postingDate, setPostingDate] = useState(new Date());
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const { user } = useAuthContext();
  const {
    jobTitle,
    category,
    experience,
    description,
    location,
    salaryRange,
    jobPostingDate,
    brand_img,
    jobBanner_img,
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
    const location = form.location.value;
    const salaryRange = form.salaryRange.value;
    const jobPostingDate = postingDate;
    const applicationDeadline = deadlineDate;
    const brand_img = form.brand_img.value;
    const experience = form.experience.value;
    const jobBanner_img = form.jobBanner_img.value;

    console.log("exxxx", experience);

    const updateJobInfo = {
      postedBy,
      jobBanner_img,
      experience,
      email,
      brand_img,
      jobTitle,
      category,
      description,
      location,
      salaryRange,
      jobPostingDate,
      applicationDeadline,
      applicantsNumber: 0,
    };

    console.log(updateJobInfo);

    fetch(
      `https://job-house-server.vercel.app/jobsById/${singleJobData?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateJobInfo),
      }
    )
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
      <div className="w-full max-w-3xl md:px-8 mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-3xl underline font-medium mb-6 text-center">
            Update Job Post
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
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
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Experience
                </label>
                <input
                  type="text"
                  name="experience"
                  required
                  id="cvv"
                  placeholder="Enter Job Title"
                  defaultValue={experience}
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
                  <option value="Part Time">Part Time</option>
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
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Banner URL
                </label>
                <input
                  type="url"
                  name="jobBanner_img"
                  id="card-number"
                  required
                  placeholder="Enter banner url"
                  defaultValue={jobBanner_img}
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company logo URL
                </label>
                <input
                  type="url"
                  name="brand_img"
                  id="card-number"
                  required
                  placeholder="Enter logo url"
                  defaultValue={brand_img}
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Posting Date
                </label>
                <ReactDatePicker
                  type="date"
                  name="jobPostingDate"
                  id="expiration-date"
                  selected={postingDate}
                  onChange={(date) => setPostingDate(date)}
                  showTimeSelect={false}
                  defaultValue={jobPostingDate}
                  required
                  placeholder="MM / YY"
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Application Deadline
                </label>
                <ReactDatePicker
                  selected={deadlineDate}
                  onChange={(date) => setDeadlineDate(date)}
                  showTimeSelect={false}
                  type="date"
                  name="applicationDeadline"
                  id="cvv"
                  placeholder="Enter Deadline"
                  defaultValue={applicationDeadline}
                  required
                  className="w-80 py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
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
