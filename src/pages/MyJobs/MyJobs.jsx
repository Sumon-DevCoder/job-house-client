import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

import MyJobsTable from "./MyJobsTable";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

import useAxiosSecure from "./../../hooks/useAxiosSecure";
import Aos from "aos";

const MyJobs = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const [jobs, setJobs] = useState([]);

  console.log(user.email);
  // loadData
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/jobsByEmail?email=${user?.email}`)
        .then((res) => setJobs(res.data));
    }
  }, [axiosSecure, user?.email]);

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
    <div className="mt-14 text-center ">
      <Helmet>
        <title>MyJobs</title>
      </Helmet>

      <span className="text-2xl font-bold dark:bg-slate-500 rounded-lg  bg-green-400 p-3 ">
        My Posted Job
      </span>

      <div>
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
