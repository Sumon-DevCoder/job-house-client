import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

import MyJobsTable from "./MyJobsTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Aos from "aos";
import { useQuery } from "@tanstack/react-query";

const MyJobs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const [jobs, setJobs] = useState([]);

  // loadData tanstack query
  const getJobsData = async () => {
    const res = await axiosSecure.get(`/jobsByEmail?email=${user?.email}`);
    return res.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["service"],
    queryFn: getJobsData,
  });

  useEffect(() => {
    if (!isError && !isLoading) {
      setJobs(data);
    }
  }, [data, isError, isLoading]);

  if (isError) {
    return (
      <p className="text-center text-red-400 font-bold text-2xl">
        something went wrong
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className="absolute bg-white dark:text-slate-300 dark:bg-slate-950 h-[100vh] bg-opacity-60 z-10  w-full flex justify-center">
        <div className="flex  pt-20">
          <span className="text-3xl dark:text-slate-200 mr-4">Loading</span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    );
  }

  // handle update
  const handleUpdate = (_id) => {
    console.log("handleUpdate", _id);
  };

  // handle delete
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You won't to Delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://job-house-server.vercel.app/jobsByEmail/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // success alert
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Delete Successful",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log("delete data", data);
            const remaining = jobs.filter((item) => item._id !== _id);
            setJobs(remaining);
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="pt-24 text-center container mx-auto ">
      <Helmet>
        <title>MyJobs</title>
      </Helmet>

      <span className="text-lg md:text-xl font-bold dark:bg-slate-500 rounded-lg  bg-green-400 p-3 ">
        My Posted Job
      </span>

      <div className="bg-gray-500 rounded-md dark:bg-slate-900">
        <MyJobsTable
          jobs={jobs}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default MyJobs;
