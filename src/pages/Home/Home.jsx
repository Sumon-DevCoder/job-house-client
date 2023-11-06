import { Helmet } from "react-helmet";
import CategoryTab from "../../components/CategoryTab/CategoryTab";
import Banner from "../../components/Header/Banner";
import FeatuesCompany from "../../components/FeatuesCompany/FeatuesCompany";
import { useLoaderData } from "react-router-dom";
import SkillsSection from "../../components/SkillsSection/SkillsSection";

const Home = () => {
  const allJobsData = useLoaderData();
  // console.log("all myyy", allJobsData);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <CategoryTab allJobsData={allJobsData} />
      <FeatuesCompany />
      <SkillsSection />
    </div>
  );
};

export default Home;
