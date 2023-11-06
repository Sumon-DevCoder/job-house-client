const Banner = () => {
  return (
    <div>
      <section className="relative  h-72 md:h-[70vh] flex flex-col  pt-20 text-center text-white mt-8">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* <video
            className="min-w-full min-h-full absolute object-cover"
            // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            src="https://www.youtube.com/embed/U5b0SS5p7Qs?si=hnCVFzWB85Oi49xZ"
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video> */}
          <img className="w-full" src="/images/banner-dreamJob.jpg" alt="" />
        </div>
        <div className="video-content space-y-4 z-10 ">
          <h1 className="font-light text-3xl md:text-6xl">
            Your Dream{" "}
            <span className="text-[#10B981] font-semibold">Job Is Waiting</span>{" "}
          </h1>
          <p className="font-light text-gray-300 text-[1rem] md:text-2xl">
            We offers the largest platform job seekers. You can search for{" "}
            <br />
            relevant jobs type like Part Time, Remote. Reach out to <br />{" "}
            millions of job offers by posting your resume and <br />
            creating alerts for free.
          </p>
          <div className="join text-black hidden md:flex justify-center">
            <div>
              <div>
                <input
                  className="input w-40 input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select btn  select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Remote Job</option>
              <option>OnSite Job</option>
              <option>Part-Time Job</option>
            </select>
            <div>
              <button className="btn join-item">Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
