import { useLoaderData } from "react-router-dom";
import { LiaHandPointRight } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { BiSolidUserAccount, BiSolidLocationPlus } from "react-icons/bi";
import useAuthContext from "../../hooks/useAuthContext";
import toast, { Toaster } from "react-hot-toast";

const JobDetails = () => {
  const job = useLoaderData();
  const { user } = useAuthContext();

  const handleApplyBtn = (e) => {
    e.preventDefault();
    // get input field
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const resumeLink = form.resumeLink.value;
    const jobType = form.jobType.value;

    const jobAppliesInfo = {
      userName,
      resumeLink,
      email,
      jobType,
      apply_id: job?._id,
    };

    console.log(jobAppliesInfo);

    fetch("http://localhost:5000/jobApplies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobAppliesInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Apply Successful");
        }

        console.log("appliedInfo", data);
      });
  };

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
              <Toaster className="z-20" />
              {/* modal */}
              <div>
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Apply
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box ">
                    <div className="w-full max-w-3xl  mx-auto mt-10">
                      <div className=" rounded-lg  p-6">
                        <form onSubmit={handleApplyBtn}>
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
                                htmlFor="card-number"
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Resume Link
                              </label>
                              <input
                                type="url"
                                name="resumeLink"
                                id="card-number"
                                placeholder="Resume Link"
                                required
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label
                                htmlFor="card-number"
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Job Type
                              </label>
                              <input
                                type="text"
                                name="jobType"
                                id="card-number"
                                placeholder="category"
                                defaultValue={job?.category}
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <div className="mt-8">
                            <button
                              type="submit"
                              className="w-full btn bg-green-500  hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
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
