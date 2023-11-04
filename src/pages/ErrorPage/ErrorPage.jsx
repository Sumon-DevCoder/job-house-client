
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <body className="flex flex-col h-screen justify-center items-center bg-[#FCD5C5]">
      <div className="flex flex-col items-center text-center ">
        <h1 className="text-[120px] font-extrabold text-[#FC692D]">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          Page Not Found
        </p>
        <p className="text-gray-500 text-lg">
          This page doesn’t exist or was removed! <br />
          We suggest you back to home
        </p>
        <Link
          to={"/"}
          className="px-4 mt-3 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </body>
  );
};

export default ErrorPage;
