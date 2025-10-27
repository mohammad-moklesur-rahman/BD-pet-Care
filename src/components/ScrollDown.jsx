import { FaArrowDown } from "react-icons/fa";
import "animate.css";

const ScrollDown = ({ scrollToRef }) => {
  const handleScrollDown = () => {
    scrollToRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="animate__animated animate__backInUp">
      <div className="text-center mt-17 md:mt-3">
        <h2 className="text-3xl text-white">
          Check out our popular <br /> winter care services
        </h2>
      </div>
      <div
        onClick={handleScrollDown}
        className="flex justify-center mt-12 md:mt-8 text-yellow-500 cursor-pointer animate__animated animate__bounce animate__infinite animate__slower"
      >
        <FaArrowDown size={50} />
      </div>
    </div>
  );
};

export default ScrollDown;
