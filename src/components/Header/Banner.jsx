import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <section className="relative lg:h-[80vh] flex flex-col  pt-20 text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <img className="w-full" src="/images/banner-dreamJob.jpg" alt="" />
        </div>
        <div
          className="video-content space-y-4 z-10 "
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <h1 className="font-light text-2xl md:text-6xl">
            Your Dream{" "}
            <span className="text-[#10B981] font-semibold">Job Is Waiting</span>{" "}
          </h1>
          <p className="font-light text-gray-300 text-md md:text-2xl">
            We offers the largest platform job seekers. You can search for{" "}
            <br />
            relevant jobs type like Part Time, Remote. Reach out to <br />{" "}
            millions of job offers by posting your resume and <br />
            creating alerts for free.
          </p>
          <div className="join text-black rounded-full  md:flex justify-center pb-4">
            <div>
              <div>
                <input
                  type="text"
                  className="input h-8 lg:h-12 input-bordered join-item"
                  placeholder="Search for Job..."
                  required
                />
              </div>
            </div>
            <div>
              <Link to={"/allJobs"}>
                <button className="btn btn-sm lg:btn-md join-item">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
