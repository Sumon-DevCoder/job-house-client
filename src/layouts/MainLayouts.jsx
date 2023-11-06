import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayouts;
