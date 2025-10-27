import { useNavigate } from "react-router";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center p-20 bg-[#F5F5F5] h-screen">
      <div className="text-center">
        <figure>
          <img src={errorImg} alt="" />
        </figure>
        <h2 className="text-2xl sm:text-[48px] text-[#001931] font-semibold mt-6">Oops, page not found!</h2>
        <p className="text-[20px] text-[#627382]">The page you are looking for is not available.</p>
        <button onClick={() => navigate(-1)} className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4">Go Back!</button>
      </div>
    </div>
  );
};

export default ErrorPage;
