import MyContainer from "./MyContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CareTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#89AFCF] to-[#C4D9E9] pb-20 pt-10">
      <h2
        data-aos="fade-right"
        className="text-2xl font-semibold mb-8 text-center"
      >
        Winter Care Tips for Pets
      </h2>
      <MyContainer>
        <div
          data-aos="fade-up"
          className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/40 p-10 md:p-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT SECTION */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Keep your pets warm, comfortable, and healthy during the colder
                months.
              </h3>

              <p className="text-[18px] leading-8 text-[#364852]">
                Winter can be tough for pets, so providing extra care is
                essential. Make sure they have warm, dry shelter with soft
                bedding. Pets may need additional calories to maintain body
                heat, so provide nutritious meals and fresh, unfrozen water.
                Limit outdoor exposure during extreme cold and consider sweaters
                for small or short-haired breeds.
                <br />
                <br />
                Check paws after walks for ice, salt, or cracks, and apply paw
                balm if needed. Keep them active indoors with toys and gentle
                exercise. With proper care, your pet will remain safe, cozy, and
                happy all winter long.
              </p>
            </div>

            {/* RIGHT ILLUSTRATION SECTION */}
            <div
              data-aos="fade-left"
              className="relative flex justify-center items-center"
            >
              <div className="w-full h-64 md:h-80 bg-gradient-to-br from-[#A4C8E1] to-[#DCE9F4] rounded-3xl shadow-inner border border-white/50 flex items-center justify-center">
                {/* Placeholder for image/illustration */}

                <img
                  className="w-[70%]"
                  src="https://i.postimg.cc/zX8zp8WR/cat-dog-being-affectionate-showing-love-towards-each-other.png"
                  alt="image"
                />
              </div>

              {/* Decorative floating circles */}
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-8 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default CareTips;
