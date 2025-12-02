import { use, useEffect } from "react";
import MyContainer from "./MyContainer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromice = data();

const ServicesCard = () => {
  const servicesData = use(dataPromice);
  const navigate = useNavigate();
  const sliceData = servicesData.slice(0, 8);

  // for aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // function for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  return (
    <MyContainer className="px-4 md:px-0">
      <h2
        data-aos="fade-right"
        className="text-2xl font-semibold mb-8 text-center"
      >
        Popular Winter Care Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sliceData.map((serviceInfo) => (
          <div
            data-aos="fade-up"
            key={serviceInfo.serviceId}
            className="hover:scale-105 cursor-pointer transition-all"
          >
            <div className="card bg-base-100 shadow-sm h-full">
              <figure className="px-4 pt-4">
                <img
                  src={serviceInfo.image}
                  alt={serviceInfo.category}
                  className="rounded-xl h-30 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{serviceInfo.serviceName}</h2>

                {/* Show rating icons */}
                <div className="flex items-center gap-2">
                  {renderStars(serviceInfo.rating)}
                  <span className="text-sm text-gray-400">
                    ({serviceInfo.rating})
                  </span>
                </div>

                <p>${serviceInfo.price}</p>
                <div className="card-actions">
                  <button
                    onClick={() =>
                      navigate(`/services/details/${serviceInfo.serviceId}`)
                    }
                    className="btn text-white px-6 bg-[#717171] hover:bg-gray-800"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div data-aos="fade-right" className="flex justify-center">
        <button
          onClick={() => navigate("/services")}
          className="btn text-white px-6 bg-yellow-700 hover:bg-yellow-900 my-6"
        >
          Show more Services
        </button>
      </div>
    </MyContainer>
  );
};

export default ServicesCard;
