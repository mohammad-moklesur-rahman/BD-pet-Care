import MyContainer from "./MyContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CareTips = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="bg-[#80A1BA] py-12">
      <MyContainer>
        <div
          data-aos="fade-left"
          className="bg-[#CBDCEB] rounded-2xl shadow py-4 px-6 text-justify"
        >
          <h2 className="text-center text-2xl font-semibold mb-2">
            Winter Care Tips for Pets
          </h2>
          <p className="text-[18px] text-[#333446]">
            Winter can be a challenging time for pets, so extra care is
            essential to keep them safe, warm, and healthy. Always provide a
            warm and dry shelter, especially for outdoor pets, to protect them
            from cold winds and frost. Ensure they have soft bedding and keep it
            clean and dry. Pets may need more calories during winter to maintain
            body heat, so offer nutritious, balanced meals and plenty of fresh
            water — not frozen. Limit outdoor time during extremely cold
            weather, and consider using pet sweaters or coats for small or
            short-haired breeds. Regular grooming helps maintain a healthy coat,
            but avoid shaving their fur short. Check paws for ice, salt, or
            cracks after walks, and use pet-safe paw balms if needed. Keep them
            active indoors with toys and gentle exercise to prevent weight gain.
            With proper winter care, your pet will stay cozy, comfortable, and
            happy all season long.
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default CareTips;
