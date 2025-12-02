import { useLoaderData, useParams } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const cardId = Number(id);

  const [loading, setLoading] = useState(true);
  const [DetailsInfo, setDetailsInfo] = useState(null);

  useEffect(() => {
    // loading delay
    const timer = setTimeout(() => {
      const info = data.find((dataInfo) => dataInfo.serviceId === cardId);
      setDetailsInfo(info);
      setLoading(false);
    }, 500);

    // for aos
    AOS.init({ duration: 1000, once: false });

    return () => clearTimeout(timer);
  }, [data, cardId]);

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

  const handelBookForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === "" || password === "") {
      return toast.error("Please Provide Email and Password!");
    }
    toast.success("Successfully Book Service");
    e.target.reset();
  };

  if (loading) {
    return <Loading />;
  }

  const {
    serviceName,
    image,
    category,
    price,
    rating,
    providerName,
    providerEmail,
    more_des,
  } = DetailsInfo || {};

  return (
    <div className="px-4 md:px-0">
      <h2 data-aos="fade-right" className="text-2xl font-semibold my-10">
        {serviceName}
      </h2>
      <figure data-aos="fade-up">
        <img className="w-full h-100 rounded-2xl" src={image} alt="" />
      </figure>
      <div data-aos="fade-up">
        <h2 className="text-[18px] font-semibold mt-6 mb-2">{category}</h2>
        <div className="flex gap-4 font-semibold text-gray-900 mb-2">
          <p>${price}</p>
          {/* Show rating icons */}
          <div className="flex items-center gap-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-400">({rating})</span>
          </div>
        </div>
        <h3 className="text-yellow-600 font-medium">{providerName}</h3>
        <h3 className="text-yellow-600 font-medium">{providerEmail}</h3>
        <h2 className="text-[18px] font-semibold mt-3">Description:</h2>
        <p className="text-gray-500 py-3">{more_des}</p>
      </div>

      {/* Book Form */}
      <form onSubmit={handelBookForm}>
        <fieldset className="fieldset rounded-box w-xs p-4 mb-8">
          <label className="label">Email</label>
          <input
            required
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            required
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn text-white px-6 bg-gray-600 hover:bg-gray-800">
            Book Now
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ServiceDetails;
