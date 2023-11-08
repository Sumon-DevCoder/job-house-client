import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import JobDetails from "../pages/jobDetails/jobDetails";
import PrivateRoute from "./PrivateRoute";
import AllJob from "../pages/AllJob/AllJob";
import AppliedJob from "../pages/AppliedJob/AppliedJob";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import UpdateJobs from "../pages/UpdateJobs/UpdateJobs";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://job-house-server.vercel.app/jobs"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-house-server.vercel.app/jobsById/${params?.id}`),
      },
      {
        path: "/allJobs",
        element: <AllJob />,
        loader: () => fetch("https://job-house-server.vercel.app/jobs"),
      },
      {
        path: "/appliedJob",
        element: (
          <PrivateRoute>
            <AppliedJob />
          </PrivateRoute>
        ),
        // loader: () =>
        //   fetch(`https://job-house-server.vercel.app/jobAppliesByEmail?email=${user?.email}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateJobs/:id",
        element: <UpdateJobs />,
        loader: ({ params }) =>
          fetch(`https://job-house-server.vercel.app/jobsById/${params?.id}`),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
