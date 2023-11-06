const Banner = () => {
  return (
    <div>
      <section className="relative h-[70vh] flex flex-col  pt-20 text-center text-white mt-8">
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
        <div className="video-content space-y-2 z-10">
          <h1 className="font-light text-6xl">Your Dream Job Is Waiting</h1>
          <h3 className="font-light text-3xl">
            Find the job that is perfect for You
          </h3>
          <div className="join text-black">
            <div>
              <div>
                <input
                  className="input w-40 h-8 input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>
            <select className="select btn btn-sm  select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Remote Job</option>
              <option>OnSite Job</option>
              <option>Part-Time Job</option>
            </select>
            <div>
              <button className="btn btn-sm join-item">Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
