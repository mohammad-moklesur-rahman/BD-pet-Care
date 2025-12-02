import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider3.png";
import slide4 from "../assets/slider4.png";
import slide5 from "../assets/slider5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import MyContainer from "./MyContainer";
import AOS from "aos";
import "aos/dist/aos.css";

const ContentSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // for aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <MyContainer>
      <div data-aos="fade-up" className="h-[370px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-full bg-gradient-to-br from-[#A4C8E1] to-[#DCE9F4] rounded-3xl shadow-inner border border-white/50 flex items-center justify-center">
              <div className="w-127 ">
                <img src={slide1} alt="slider1" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-gradient-to-br from-[#A4C8E1] to-[#DCE9F4] rounded-3xl shadow-inner border border-white/50 flex items-center justify-center">
              <div className="w-150 ">
                <img src={slide2} alt="slider2" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-gradient-to-br from-[#A4C8E1] to-[#DCE9F4] rounded-3xl shadow-inner border border-white/50 flex items-center justify-center">
              <div className="w-135 ">
                <img src={slide3} alt="slider3" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-gradient-to-br from-[#A4C8E1] to-[#DCE9F4] rounded-3xl shadow-inner border border-white/50 flex items-center justify-center">
              <div className="w-130 ">
                <img src={slide4} alt="slider4" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-gradient-to-br from-[#A4C8E1] to-[#DCE9F4] rounded-3xl shadow-inner border border-white/50 flex items-center justify-center">
              <div className="w-150 ">
                <img src={slide5} alt="slider5" />
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </MyContainer>
  );
};

export default ContentSwiper;
