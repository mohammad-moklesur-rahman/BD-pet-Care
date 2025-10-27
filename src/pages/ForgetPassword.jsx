import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../context/Firebase/AuthContext";

const ForgetPassword = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handelReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        e.target.reset();
        navigate("/auth/login");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        const code = error.code;

        if (code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else {
          toast.error("Failed to send reset email. Please try again.");
        }
      });
  };

  return (
    <div>
      {user ? (
        <Navigate to="/" />
      ) : (
        <form
          onSubmit={handelReset}
          className="flex justify-center items-center h-screen"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 text-center">
              Reset password
            </h2>

            <fieldset className="fieldset rounded-box w-xs p-4 mb-8">
              <label className="label">Email</label>
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
              />

              <button className="btn text-white px-6 my-2 bg-gray-600 hover:bg-gray-800">
                Reset
              </button>

              <p className="text-[13px]">
                Back to{" "}
                <Link to="/auth/login" className="text-pink-500 underline">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
