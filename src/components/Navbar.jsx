import { Link, NavLink } from "react-router";
import MyContainer from "./MyContainer";
import { useContext } from "react";
import { AuthContext } from "../context/Firebase/AuthContext";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, singOutUser, setLoading } = useContext(AuthContext);

  const handelLogOut = () => {
    // * Sing Out User
    singOutUser()
      .then(() => {
        toast.success("Signed out successfully👋");
        setLoading(false);
      })
      .catch((error) => {
        const code = error.code;

        if (code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else if (code === "auth/no-current-user") {
          toast.error("No user is currently signed in.");
        } else {
          toast.error("Sign-out failed. Please try again.");
          console.error(error);
        }
      });
  };

  const menu = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
  return (
    <div className="bg-[#717171]">
      <MyContainer>
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
              >
                <li className="text-black">{menu}</li>
              </ul>
            </div>
            <Link to="/" className="text-xl font-semibold cursor-pointer">
              BD<span className="text-green-500">pet</span>Care
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu px-1">
              <li className="menu-horizontal">{menu}</li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="m-1">
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName || "BDpetCare"}
                      className="avatar avatar-online cursor-pointer"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL || "/logo.png"} alt="User" />
                      </div>
                    </div>
                    <Tooltip id="my-tooltip" place="left" />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-gray-600  rounded-box w-27 p-2 shadow-sm z-50"
                  >
                    <li>
                      <Link to='/profile' >Profile</Link>
                    </li>
                    <li>
                      <a onClick={handelLogOut}>Log Out</a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to="/auth/login"
                className="btn text-white px-6 bg-gray-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
