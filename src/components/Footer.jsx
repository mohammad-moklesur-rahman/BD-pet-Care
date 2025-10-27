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
          <Link>privacy policy</Link>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaTwitter size={25} />
            </Link>
            <Link>
              <FaYoutube size={25} />
            </Link>
            <Link>
              <FaFacebook size={25} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
