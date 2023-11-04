import { Helmet } from "react-helmet";
import Slider from "../../components/Header/Slider";
import CategoryTab from "../../components/CategoryTab/CategoryTab";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <CategoryTab />
    </div>
  );
};

export default Home;
