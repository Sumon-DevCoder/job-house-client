import { useLoaderData } from "react-router-dom";

const UpdateJobs = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>hello</div>;
};

export default UpdateJobs;
