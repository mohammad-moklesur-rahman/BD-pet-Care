import { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/Firebase/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const {
    loginWithEmailAndPassword,
    singInWithGoogle,
    user,
    setUser,
    setLoading,
    setBackLocation,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setBackLocation(location.state);
  }, [setBackLocation, location.state]);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // * Login with Email and Password
    loginWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Login successful 🎉");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((error) => {
        const code = error.code;

        if (code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else if (code === "auth/user-disabled") {
          toast.error("This account has been disabled.");
        } else if (code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (code === "auth/missing-password") {
          toast.error("Please enter your password.");
        } else if (code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else if (code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please wait a few minutes.");
        } else {
          toast.error("Login failed. Please try again.");
        }
      });
    setLoading(false);
  };

  // * Login with Google
  const handelGoogleLogin = () => {
    singInWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("Google Sign-In successful 🎉");
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((error) => {
        const code = error.code;

        if (code === "auth/popup-closed-by-user") {
          toast.error("Sign-in cancelled. Popup closed by user.");
        } else if (code === "auth/cancelled-popup-request") {
          toast.error("Multiple popups detected. Please try again.");
        } else if (code === "auth/popup-blocked") {
          toast.error(
            "Popup blocked by your browser. Allow popups and try again."
          );
        } else if (code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (code === "auth/account-exists-with-different-credential") {
          toast.error("Account already exists with another sign-in method.");
        } else if (code === "auth/unauthorized-domain") {
          toast.error("This domain is not authorized for Google Sign-In.");
        } else if (code === "auth/operation-not-allowed") {
          toast.error("Google Sign-In is disabled in Firebase console.");
        } else {
          toast.error("Google Sign-In failed. Please try again.");
        }
      });
    setLoading(false);
  };

  return (
    <div>
      {user ? (
        <Navigate to={location.state || "/"} />
      ) : (
        <div>
          <div className="flex justify-center mt-8">
            <Link to="/" className="text-xl font-semibold text-pink-500">
              BD<span className="text-green-500">pet</span>Care
            </Link>
          </div>
          <div className="flex justify-center items-center h-[85vh]">
            <form onSubmit={handelLogin}>
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                LogIn
              </h2>

              <fieldset className="fieldset rounded-box w-xs p-4 mb-8">
                <label className="label">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <input
                  required
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <div className="mb-3">
                  <Link to="/auth/forget-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>

                <button className="btn text-white px-6 bg-gray-600 hover:bg-gray-800">
                  Login
                </button>
                <div className="divider">OR</div>
                <button
                  onClick={handelGoogleLogin}
                  type="button"
                  className="btn text-green-500 px-6 bg-pink-500 hover:bg-gray-600"
                >
                  <FcGoogle size={25} /> Login with Google
                </button>
                <p className="text-[13px]">
                  Don't have an Account. Please{" "}
                  <Link to="/auth/singup" className="text-pink-500 underline">
                    Sing Up
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
