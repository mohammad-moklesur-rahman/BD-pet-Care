import { use, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import MyContainer from "../components/MyContainer";
import { useNavigate } from "react-router";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = data();

const Services = () => {
  const servicesData = use(dataPromise);
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // CREATE STAR RATING
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars)
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      else if (i === fullStars + 1 && hasHalf)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
    return <div className="flex gap-1">{stars}</div>;
  };

  // FILTER SERVICES BASED ON SEARCH + CATEGORY
  const filteredServices = servicesData.filter((item) => {
    const searchMatch = item.serviceName
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;
    return searchMatch && categoryMatch;
  });

  // GET UNIQUE CATEGORIES
  const categories = [
    "All",
    ...new Set(servicesData.map((item) => item.category)),
  ];

  return (
    <div className="bg-base-200 pb-12 min-h-screen">
      <MyContainer className="px-4 md:px-0">
        {/* PAGE TITLE */}
        <h2
          data-aos="fade-right"
          className="text-3xl font-bold py-8 text-center"
        >
          All Services
        </h2>

        {/* SEARCH BAR */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search Services..."
            className="input input-bordered w-full md:w-1/2 shadow-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* LAYOUT: SIDEBAR + CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LEFT SIDEBAR */}
          <aside className="bg-base-100 rounded-xl shadow-md p-5 h-fit sticky top-24">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>

            <ul className="space-y-3">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer px-4 py-2 rounded-lg transition ${
                    activeCategory === category
                      ? "bg-[#717171] text-white"
                      : "hover:bg-gray-300"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT SIDE: SERVICE GRID */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredServices.map((serviceInfo) => (
                <div
                  data-aos="fade-up"
                  key={serviceInfo.serviceId}
                  className="card h-full bg-base-100 shadow-lg hover:shadow-xl hover:scale-105 transition cursor-pointer"
                >
                  <figure className="px-4 pt-4">
                    <img
                      src={serviceInfo.image}
                      alt={serviceInfo.category}
                      className="rounded-xl h-25 w-full object-cover"
                    />
                  </figure>

                  <div className="card-body">
                    <h2 className="font-semibold">{serviceInfo.serviceName}</h2>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      {renderStars(serviceInfo.rating)}
                      <span className="text-sm text-gray-400">
                        ({serviceInfo.rating})
                      </span>
                    </div>

                    <p className="font-semibold">${serviceInfo.price}</p>

                    <div className="card-actions">
                      <button
                        onClick={() =>
                          navigate(`/services/details/${serviceInfo.serviceId}`)
                        }
                        className="btn text-white w-full bg-[#717171] hover:bg-gray-800"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* IF NO RESULTS */}
            {filteredServices.length === 0 && (
              <p className="text-center text-gray-500 mt-6">
                No services found for your search.
              </p>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Services;
