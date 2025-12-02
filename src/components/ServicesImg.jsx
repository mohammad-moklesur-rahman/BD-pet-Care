import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { use, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MyContainer from "./MyContainer";
import { useNavigate } from "react-router";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = data();

const ServicesImg = () => {
  const servicesData = use(dataPromise);
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <MyContainer>
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-center mb-10 tracking-wide"
      >
        Premium Services Gallery
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Swiper */}
        <div className="relative">
          {/* Custom premium arrows */}
          <button
            ref={prevRef}
            className="absolute top-1/2 -left-4 z-20 -translate-y-1/2
              bg-white/80 backdrop-blur-xl shadow-xl w-14 h-14 rounded-full
              flex items-center justify-center text-black text-xl
              hover:scale-110 hover:bg-white transition-all duration-300"
          >
            ❮
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 -right-4 z-20 -translate-y-1/2
              bg-white/80 backdrop-blur-xl shadow-xl w-14 h-14 rounded-full
              flex items-center justify-center text-black text-xl
              hover:scale-110 hover:bg-white transition-all duration-300"
          >
            ❯
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="rounded-xl overflow-hidden"
          >
            {servicesData.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative group">
                  <img
                    src={service.image}
                    alt={service.serviceName}
                    className="w-full h-80 object-cover rounded-xl shadow-xl group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT: Dynamic Text */}
        <div
          key={activeIndex}
          data-aos="fade-left"
          className="p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl 
          border border-white/40 transition-all duration-500"
        >
          <h3 className="text-3xl font-extrabold mb-4 text-gray-800">
            {servicesData[activeIndex]?.serviceName || "Service Title"}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            {servicesData[activeIndex]?.description ||
              "Beautiful service description comes here..."}
          </p>

          <button
            onClick={() =>
              navigate(`/services/details/${servicesData[activeIndex]?.serviceId}`)
            }
            className="mt-4 bg-[#717171] text-white px-6 py-3 rounded-full text-lg font-semibold
            hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Learn More →
          </button>
        </div>
      </div>
    </MyContainer>
  );
};

export default ServicesImg;
