import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { use, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromice = data();

const ServicesImg = () => {
  const servicesData = use(dataPromice);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <h2
        data-aos="fade-left"
        className="text-2xl font-semibold text-center mb-6"
      >
        Services Image Gallery
      </h2>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        <div>
          {servicesData.map((serviceInfo) => (
            <SwiperSlide>
              <img src={serviceInfo.image} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default ServicesImg;
