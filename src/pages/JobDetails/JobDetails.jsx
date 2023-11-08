import { useLoaderData } from "react-router-dom";
import { LiaHandPointRight } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { GiHypersonicMelon } from "react-icons/gi";
import { BiSolidUserAccount, BiSolidLocationPlus } from "react-icons/bi";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { useState } from "react";

const JobDetails = () => {
  const job = useLoaderData();
  const { user } = useAuthContext();
  const [successMessage, setSuccessMessage] = useState(null);

  const {
    postedBy,
    jobTitle,
    category,
    description,

    location,
    salaryRange,
    jobPostingDate,
    applicationDeadline,
    applicantsNumber,
    _id,
    brand_img,
    jobBanner_img,
  } = job;

  // date calculation
  const currentDate = new Date(Date.now());
  const dedlineDate = new Date(applicationDeadline);

  // check post email
  const postEmail = job.email;
  const userEmail = user?.email;

  // handle Apply validtion
  const handleValidation = () => {
    if (dedlineDate < currentDate) {
      return Swal.fire({
        title: "Sorry, Deadline is over",
        text: "Sorry, Can't Apply because deadline is expired",
        icon: "error",
      });
    }

    if (postEmail === userEmail) {
      return Swal.fire({
        title: "You Can't Apply This Post",
        text: "Sorry, Can't Apply because You create This Job Post",
        icon: "error",
      });
    }
  };

  const handleApplyBtn = (e) => {
    e.preventDefault();
    // get input field

    const form = e.target;
    const userName = form.user_name.value;
    const email = form.user_email.value;
    const resumeLink = form.message.value;

    const jobAppliesInfo = {
      userName,
      resumeLink,
      brand_img,
      jobBanner_img,
      email,
      apply_id: job?._id,
      postedBy,
      jobTitle,
      category,
      description,
      location,
      salaryRange,
      jobPostingDate,
      applicationDeadline,
      applicantsNumber,
    };

    fetch("https://job-house-server.vercel.app/jobApplies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobAppliesInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // success message
          setSuccessMessage("Apply Successful");

          // updated applicant number
          fetch(`https://job-house-server.vercel.app/jobApplicant/${_id}`, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ applicantsNumber }),
          })
            .then((res) => res.json())
            .then((data) => console.log("applicant increment", data));
        }

        console.log("appliedInfo", data);
      });
  };

  return (
    <div className="flex justify-center pt-10 mb-20">
      <div key={job?._id} className=" lg:w-6/12 md:px-10 pt-5 px-2">
        <div className="card  dark:bg-slate-900 bg-[#FFFFFF] dark:border-none rounded-lg border-2 ">
          <div className="p-5 dark:text-gray-400">
            <img
              className="w-full h-80 rounded-lg"
              src={job?.jobBanner_img}
              alt=""
            />
            <div className="flex justify-between gap-3 flex-wrap mt-4">
              <h2 className="card-title text-3xl font-bold dark:text-gray-400 text-gray-700">
                {job?.jobTitle}
              </h2>

              <div className="flex  flex-col items-center">
                <div className="flex items-center text-[1.1rem] md:ml-2 gap-1">
                  <CiCalendarDate className="text-lg " />{" "}
                  <p>Posting : {job?.jobPostingDate.slice(0, 10)}</p>
                </div>
                <div className="flex items-center text-[1.1rem] gap-1">
                  <CiCalendarDate className="text-lg " />{" "}
                  <span className="text-black dark:text-gray-400">
                    deadline :
                  </span>{" "}
                  {job?.applicationDeadline.slice(0, 10)}
                </div>
              </div>
            </div>
            <div>
              <img className="w-28" src={job?.brand_img} alt="" />
            </div>
            <div className="flex items-center gap-2">
              <BiSolidUserAccount className="text-lg " /> {job?.postedBy}
            </div>

            <div className="text-start flex gap-20  text-gray-400 ">
              <p className="text-start text-lg flex items-center gap-2">
                <LiaHandPointRight className="text-lg " /> {job?.category}
              </p>
            </div>

            <div className="text-start flex flex-wrap  gap-8  text-gray-400 ">
              <div className="flex items-center gap-1">
                <FaHandHoldingUsd className="text-lg " />{" "}
                <span className="text-black dark:text-gray-400">Salary :</span>{" "}
                {job?.salaryRange}
              </div>

              <div className="flex items-center gap-1">
                <BiSolidLocationPlus className="text-lg " />{" "}
                <span className="text-black"></span> {job?.location}
              </div>
            </div>
            <div className="text-start flex flex-wrap  md:gap-16 text-gray-400 ">
              <div className="flex items-center gap-2 mr-5">
                <IoMdPersonAdd className="text-lg " />{" "}
                <span className="text-black dark:text-gray-400">
                  Applicants :
                </span>
                {job?.applicantsNumber}
              </div>

              <div className="flex items-center gap-2 mr-5">
                <GiHypersonicMelon className="text-lg " />{" "}
                <span className="text-black dark:text-gray-400">
                  Experience :
                </span>
                {job?.experience}
              </div>

              {/* modal */}
            </div>

            <div className="pt-4">
              <p className="dark:text-gray-400">
                <span className="font-bold text-lg">Job Description</span>:{" "}
                <br /> {job?.description}
              </p>
            </div>
            <div>
              <button
                className="btn w-full mt-8 bg-orange-500 border-none text-white text-[1rem]"
                onClick={
                  dedlineDate > currentDate && postEmail !== userEmail
                    ? () => document.getElementById("my_modal_1").showModal()
                    : handleValidation
                }
              >
                Apply
              </button>

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-gradient-to-r  from-gray-200 via-gray-400 to-gray-600 ">
                  <h2 className="text-3xl text-center font-semibold">
                    Apply Form
                  </h2>
                  <div className="w-full max-w-3xl  mx-auto mt-5">
                    <div className=" rounded-lg  ">
                      <form className="" onSubmit={handleApplyBtn}>
                        <div
                          className={
                            successMessage ? "hidden" : '"grid grid-cols-2 "'
                          }
                        >
                          <div className="col-span-2 sm:col-span-1">
                            <label
                              htmlFor="card-number"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              name="user_name"
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
                              type="email"
                              name="user_email"
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
                              name="message"
                              id="card-number"
                              placeholder="Resume Link"
                              required
                              className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        {successMessage && (
                          <p className="text-4xl text-center text-green-800 my-2 font-bold">
                            {successMessage}
                          </p>
                        )}

                        <div className="mt-4">
                          <button
                            type="submit"
                            className={
                              successMessage
                                ? "hidden"
                                : "w-full btn mb-2 border-none  bg-green-500  hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none"
                            }
                          >
                            Submit
                          </button>
                          <div>
                            <form method="dialog">
                              <button className="btn w-full">Close</button>
                            </form>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
