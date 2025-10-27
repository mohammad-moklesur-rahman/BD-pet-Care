import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 h-screen">
        <div className="hidden lg:col-span-7 authImg text-2xl lg:flex items-end text-white z-50">
          <Link to="/" className="mb-8 ml-14 font-bold">
            BD<span className="text-green-500">pet</span>Care
          </Link>
        </div>
        <div className="lg:col-span-5 bg-gray-200">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
