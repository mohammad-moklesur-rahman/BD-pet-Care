import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#717171] text-primary-content p-10">
        <aside>
          <Link to="/" className="text-2xl font-semibold cursor-pointer">
            BD<span className="text-green-500">pet</span>Care
          </Link>
          <p className="font-semibold">
            Phone: 01754XX5454
            <br />
            Email: bd.pet.care@pet.com
            <br />
            Address: 45 Pet Street, Bangladesh.
          </p>
          <div className="flex flex-col md:flex-row my-2 font-bold text-green-300 ">
            <Link to="/" className="hover:text-base-100">
              Home
            </Link>
            <Link to="/about" className="mx-4 hover:text-base-100">
              About
            </Link>
            <Link to="/privacy" className="hover:text-base-100">
              privacy policy
            </Link>
          </div>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="/">
              <FaTwitter size={25} />
            </Link>
            <Link to="/">
              <FaYoutube size={25} />
            </Link>
            <Link to="/">
              <FaFacebook size={25} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
