import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-100">
        <Navbar />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomeLayout;
