import Swal from "sweetalert2";

const GetJobAlert = () => {
  const handleSubmit = (e) => {
    // stop auto reload submit
    e.preventDefault();

    // get input field
    const form = e.target;
    const email = form.email.value;

    const emailInfo = { email };

    // send info to database
    fetch("https://job-house-server.vercel.app/userSubscribes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(emailInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Email Send Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        console.log("userInfo send successfully", data);
      });

    //reset
    form.reset();
  };

  return (
    <div className="container px-3 m-auto">
      <div className="container px-2  md:w-9/12 mx-auto bg-[#32728A] dark:bg-slate-900 rounded-lg p-14 mt-20 -mb-20">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-white text-3xl md:text-4xl">
            Get job alerts delivered to your inbox
          </h1>
          <p className="mx-auto  text-slate-300 my-3 text-center font-semibold max-w-lg">
            Enter your active email where we can send mail as alert about your
            dream jobs.
          </p>
          <div className="sm:flex m-auto py-3  rounded-full   md:w-6/12 xl items-center  bg-white  overflow-hidden px-2 justify-between">
            <input
              className="text-base text-gray-400 dark: flex-grow outline-none px-2 "
              type="email"
              required
              name="email"
              placeholder="Enter your email here"
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button className="bg-indigo-500 btn hidden lowercase rounded-full lg:block  text-white text-base px-4 py-2 font-thin">
                Sign me Up
              </button>
            </div>
          </div>
          <div className="flex items-center px-2 justify-center mt-2 lg:hidden  rounded-lg space-x-4 mx-auto ">
            <button className="bg-indigo-500 btn border-none w-full   rounded-full  text-white text-base px-4 py-2 font-thin">
              Sign me Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetJobAlert;
