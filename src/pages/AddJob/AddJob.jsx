import Swal from "sweetalert2";
import useAuthContext from "../../hooks/useAuthContext";
import { Helmet } from "react-helmet";

const AddJob = () => {
  const { user } = useAuthContext();

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

    const addJobInfo = {
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

    console.log(addJobInfo);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addJobInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Job Added Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log("add job success", data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Job</title>
      </Helmet>
      <div className="w-full max-w-3xl  mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium mb-6"></h2>
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
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
                  defaultValue=""
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
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
