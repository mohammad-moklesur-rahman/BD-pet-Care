import { useEffect, useRef, useState } from "react";
import MyContainer from "../components/MyContainer";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/slider2.png";

const About = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 min-h-screen">
      <MyContainer>
        {/* HEADER */}
        <div data-aos="fade-down" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About <span className="text-emerald-600">BD Pet Care</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Trusted pet care services in Bangladesh — providing safe, reliable,
            and compassionate support for your beloved pets.
          </p>
        </div>

        {/* MAIN SECTION */}
        <div
          data-aos="fade-up"
          className="bg-white p-10 rounded-2xl shadow-lg grid md:grid-cols-2 gap-12 items-center border border-gray-100"
        >
          <img
            src={aboutImg}
            alt="Pet Care"
            className="rounded-xl w-full object-cover shadow-md"
          />

          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              BD Pet Care offers professional pet services including grooming,
              training, sitting, daycare, and health support for cats, dogs,
              birds, and other pets. Our focus is on comfort, hygiene, and
              trustworthy service so that every pet feels safe and loved.
            </p>
          </div>
        </div>

        {/* WHY US */}
        <div className="mt-20" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
            Why Choose <span className="text-emerald-600">Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Team",
                desc: "Skilled and trained pet handlers who understand animal behavior.",
              },
              {
                title: "Safe Environment",
                desc: "Clean and comfortable facilities designed for stress-free care.",
              },
              {
                title: "Affordable Services",
                desc: "Quality care at fair and transparent pricing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition-all"
                data-aos="zoom-in"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS WITH COUNTUP */}
        <div
          ref={statsRef}
          className="mt-20 bg-white p-10 rounded-2xl shadow-lg text-center border border-gray-100"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                end: 5000,
                title: "Pets Served",
              },
              {
                end: 2000,
                title: "Happy Clients",
              },
              {
                end: 20,
                title: "Pet Specialists",
              },
              {
                end: 4,
                suffix: "+ yrs",
                title: "Experience",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-emerald-600">
                  {startCount ? (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix || "+"}
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{stat.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Need help with your pet?
          </h2>
          <button
            onClick={() => window.open("https://mail.google.com", "_blank")}
            className="btn bg-[#717171] text-white px-10 py-2 rounded-full hover:bg-gray-800 transition-all shadow-md"
          >
            Contact Us
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default About;
