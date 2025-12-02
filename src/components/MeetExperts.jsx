import { useEffect } from "react";
import MyContainer from "./MyContainer";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const vets = [
  {
    name: "Dr. David Lee",
    img: "https://img.icons8.com/?size=100&id=23309&format=png&color=000000",
    email: "david.lee@petrescue.com",
    desc: "Emergency care specialist with 15+ years of experience in trauma response and critical surgeries. Known for fast decision-making and compassionate care.",
  },
  {
    name: "Dr. Sophia Nguyen",
    img: "https://img.icons8.com/?size=100&id=20748&format=png&color=000000",
    email: "sophia.nguyen@exoticfriends.com",
    desc: "Exotic pet expert with deep knowledge of reptiles, birds, and small mammals. Provides tailored health plans and advanced diagnostic care.",
  },
  {
    name: "Dr. Michael Thompson",
    img: "https://img.icons8.com/?size=100&id=20749&format=png&color=000000",
    email: "michael.thompson@happytails.com",
    desc: "Veterinary surgeon specializing in orthopedic and soft-tissue procedures. Over a decade of successful surgeries and mobility restoration for pets.",
  },
  {
    name: "Dr. Emily Carter",
    img: "https://img.icons8.com/?size=100&id=23242&format=png&color=000000",
    email: "emily.carter@pawcare.com",
    desc: "Small-animal care specialist focusing on preventive healthcare, wellness exams, and personalized treatment plans.",
  },
];

const MeetExperts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="bg-base-300 pb-20 pt-10">
      <MyContainer>
        <h2
          data-aos="fade-right"
          className="text-2xl font-semibold mb-10 text-center"
        >
          Meet Our Expert Veterinarians
        </h2>

        <Marquee speed={50} pauseOnHover gradient={false}>
          {vets.map((vet, index) => (
            <div
              key={index}
              className="bg-white shadow-xl border border-gray-200 py-6 px-6 w-80 md:w-96 rounded-2xl mx-10 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <figure className="flex justify-center mb-4">
                <img
                  src={vet.img}
                  alt={vet.name}
                  className="w-20 h-20 object-contain"
                />
              </figure>

              <h3 className="text-xl font-bold text-gray-800 text-center">
                {vet.name}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed text-justify">
                {vet.desc}
              </p>

              <p className="mt-4 text-gray-800 font-medium text-center">
                📧 {vet.email}
              </p>
            </div>
          ))}
        </Marquee>
      </MyContainer>
    </div>
  );
};

export default MeetExperts;
