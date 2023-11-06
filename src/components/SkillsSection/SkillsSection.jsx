const SkillsSection = () => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg my-20 dark:bg-slate-900 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="p-4 max-w-sm cursor-pointer">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-20  h-20   rounded-full dark:bg-indigo-500 bg-indigo-500 text-white ">
                <div className="flex justify-center items-center">
                  <img className="" src="/public/images/shuttle.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col  flex-grow">
              <h2 className="text-2xl mb-2  text-black dark:text-white  font-medium">
                Boost Your Job Hunt
              </h2>
              <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300">
                Get a CV that highlights your profile and increase view by upto
                50%
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 max-w-sm cursor-pointer">
          <div className="flex bg-[#ECFFEC] rounded-lg h-full dark:bg-gray-800   p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-20 h-20 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <img className="" src="/public/images/cv.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col  flex-grow">
              <h2 className="text-2xl mb-2 text-black dark:text-white  font-medium">
                Free CV Review
              </h2>
              <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300">
                Does your CV pass the 10-second test? Is it good enough to make
                it to the shortlisted pile instead of the rejected pile? Get
                free professional feedback on your CV from Rozee experts.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 max-w-sm cursor-pointer">
          <div className="flex rounded-lg h-full dark:bg-gray-800 bg-[#F2F6FE] p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-20 h-20 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <img className="" src="/public/images/cv2.png" alt="" />
              </div>
            </div>

            <div className="flex flex-col  flex-grow">
              <h2 className="text-2xl mb-2 text-black dark:text-white  font-medium">
                CV Writing Service
              </h2>
              <p className="leading-relaxed text-base text-gray-600 dark:text-gray-300">
                CV Experts know what recruiters are looking for. Our Experts
                optimize your CV with the most search keywords
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
