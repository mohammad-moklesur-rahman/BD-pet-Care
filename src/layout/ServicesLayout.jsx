
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const ServicesLayout = () => {
  return (
    <div>
      <div className="bg-[#717171]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default ServicesLayout;
