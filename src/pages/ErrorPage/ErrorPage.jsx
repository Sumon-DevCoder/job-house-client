import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <body className="flex bg-img flex-col h-screen pt-32 bg-[url('/images/404Page.jpg')] bg-cover bg-no-repeat ">
      <div className="flex flex-col items-center text-center pt-48 lg:pt-64">
        <p className="text-5xl font-medium text-teal-700 mb-6">
          Page Not Found
        </p>

        <Link
          to={"/"}
          className="px-4 py-2 btn border-none font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
        >
          Go Home
        </Link>
      </div>
    </body>
  );
};

export default ErrorPage;
