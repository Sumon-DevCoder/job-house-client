import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs</title>
      </Helmet>

      <section className="bg-[#F2F2F2] dark:bg-gray-900 pt-6 -mb-48">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Interview <span className="text-[#10B981]">Question</span>
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Crack Jobs Preparing By Interview Question here is some important
              interview question and answers
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center  text-gray-500"></div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </a>
              </h2>
              <p className="mb-5 font-medium text-gray-500 dark:text-gray-400">
                <span className="font-bold">Ans:</span> <br /> Access token is a
                token that has proivde every user when user login. This token is
                very important for access user datas access token has expire
                date or time. in summary we can say that by access token we can
                check that is user verified and have to confirm user
                Authorization.
                <br /> <br />
                Refresh token work for regenerate accessToken that means when
                access token will be expired that time refresh token create new
                token for user.
                <br />
                access token and refresh both of make verify user that means
                when user login then from backend give a access token to user.
                and user when access her/she data to show that time will verify
                that user is verified by access token. if user invalid then
                server apis do not give data and if user valid then server give
                me data. <br /> <br />
                we should store token in client of only http cookies because it
                is more than secure in local storage
              </p>
              <div className="flex justify-between items-center"></div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center  text-gray-500"></div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#"> What is express js? What is Nest JS ?</a>
              </h2>
              <p className="mb-5  font-medium text-gray-500 dark:text-gray-400">
                <span className="font-bold">Ans:</span> <br /> express js is a
                frameworks of node Js and it is easy, simple, and quiker to use.
                we can create server easily and it helpful for maintance. <br />{" "}
                <br />
                Next Js is a popular javascript library and it is often used in
                combination with React it has wide range of features. not only
                that it has server side rendering which help improve to seo
                friendly and fast loading page features etc.
              </p>

              <p className=" text-gray-500 dark:text-gray-400">
                <span className="text-blue-400 font-medium underline text-xl">
                  Ans: Explain My Code
                </span>{" "}
                <br />
                Create this website i have facing many Challenges but, I
                accepted challenge and enjoy my coding. <br />
                i added many new features, package like - tanstack query, aos
                animation, framer motion, swipper js etc. besides i have been
                organize my code folderwise, and also use hooks for i don`t use
                DRY. <br /> <br />
                overall this code in my perspective the most important hardship
                & interesting part is state mangement, data filtering, & jwt
                authentication but belive me i enjoy very much. I also seperate
                my code by client and server side folder. so overall jouerney
                was very interting, enjoyable. even i am big fan of PH.
              </p>
              <div className="flex justify-between items-center"></div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
