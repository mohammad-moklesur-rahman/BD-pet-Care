import { useEffect } from "react";
import MyContainer from "./MyContainer";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetExperts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <MyContainer>
      <h2
        data-aos="fade-right"
        className="text-2xl font-semibold text-center mb-6"
      >
        Meet Our Expert Vets
      </h2>
      <Marquee speed={70} pauseOnHover>
        <div className="bg-base-100 py-4 w-96 px-4 rounded-2xl mx-12 cursor-pointer">
          <div>
            <figure className="flex justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=23309&format=png&color=000000"
                alt=""
              />
            </figure>
            <h2 className="my-2 text-2xl font-semibold">Name: Dr. David Lee</h2>
            <p className="text-justify text-gray-700">
              With over 15 years of experience in emergency and critical care,
              Dr. David Lee has saved countless pets in life-threatening
              situations. His expertise in trauma response, urgent surgeries,
              and post-operative care ensures pets get immediate attention and
              the best chance at recovery. Known for his quick decision-making
              and compassionate care, Dr. Lee is a trusted name among pet
              owners.
            </p>
            <p className="py-2 text-gray-800">Email: david.lee@petrescue.com</p>
          </div>
        </div>

        <div className="bg-base-100 py-4 w-96 px-4 rounded-2xl mr-12 cursor-pointer">
          <div>
            <figure className="flex justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=20748&format=png&color=000000"
                alt=""
              />
            </figure>
            <h2 className="my-2 text-2xl font-semibold">
              Name: Dr. Sophia Nguyen
            </h2>
            <p className="text-justify text-gray-700">
              Dr. Sophia Nguyen brings over 8 years of expertise in exotic pet
              medicine, caring for reptiles, birds, rabbits, and other unique
              animals. She provides specialized diagnosis, nutritional advice,
              and customized health plans for each species. Her deep
              understanding of exotic pet behavior and physiology helps owners
              keep their rare companions healthy, comfortable, and thriving
              year-round.
            </p>
            <p className="py-2 text-gray-800">
              Email: sophia.nguyen@exoticfriends.com
            </p>
          </div>
        </div>

        <div className="bg-base-100 py-4 w-96 px-4 rounded-2xl mr-12 cursor-pointer">
          <div>
            <figure className="flex justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=20749&format=png&color=000000"
                alt=""
              />
            </figure>
            <h2 className="my-2 text-2xl font-semibold">
              Name: Michael Thompson
            </h2>
            <p className="text-justify text-gray-700">
              Dr. Michael Thompson is an experienced veterinary surgeon
              specializing in orthopedic and soft tissue surgeries. With 12
              years in the field, he has performed hundreds of successful
              operations, helping pets regain mobility and quality of life. His
              dedication to precision, safety, and compassionate care ensures
              that every pet receives expert treatment in a calm and supportive
              environment.
            </p>
            <p className="py-2 text-gray-800">
              Email: michael.thompson@happytails.com
            </p>
          </div>
        </div>

        <div className="bg-base-100 py-4 w-96 px-4 rounded-2xl cursor-pointer">
          <div>
            <figure className="flex justify-center">
              <img
                src="https://img.icons8.com/?size=100&id=23242&format=png&color=000000"
                alt=""
              />
            </figure>
            <h2 className="my-2 text-2xl font-semibold">
              Name: Dr. Emily Carter
            </h2>
            <p className="text-justify text-gray-700">
              Dr. Emily Carter is a passionate veterinarian specializing in
              small animal medicine and preventive healthcare. With over 10
              years of experience, she is dedicated to ensuring that every pet
              receives the best possible care through regular check-ups,
              vaccinations, and personalized treatment plans. Her gentle
              approach and love for animals make her a favorite among pet
              parents.
            </p>
            <p className="py-2 text-gray-800">
              Email: emily.carter@pawcare.com
            </p>
          </div>
        </div>
      </Marquee>
    </MyContainer>
  );
};

export default MeetExperts;
