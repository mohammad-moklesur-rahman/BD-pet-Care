import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex justify-center items-center p-20 bg-[#F5F5F5] h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={errorImg}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.figure>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl sm:text-[48px] text-[#001931] font-semibold mt-6"
        >
          Oops, page not found!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-[20px] text-[#627382]"
        >
          The page you are looking for is not available.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4"
        >
          Go Back!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
