import { Helmet } from "react-helmet";
import CategoryTab from "../../components/CategoryTab/CategoryTab";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import Banner from "../../components/Header/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <CategoryTab />
      <CustomerReview />
    </div>
  );
};

export default Home;
