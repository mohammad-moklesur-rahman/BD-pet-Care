import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../context/Firebase/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { updateProfile } from "firebase/auth";

const Singup = () => {
  const {
    singUpWithEmailAndPassword,
    singInWithGoogle,
    user,
    setUser,
    setLoading,
    backLocation,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handelSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    // * Sing Up with Email and Password
    singUpWithEmailAndPassword(email, password)
      .then((res) => {
        // * Update user Profile
        updateProfile(res.user, {
          displayName,
          photoURL,
        })
          .then(() => {
            toast.success("Signup successful 🎉");
            setLoading(false);
          })
          .catch((error) => {
            const code = error.code;

            if (code === "auth/no-current-user") {
              toast.error("No user is signed in.");
            } else if (code === "auth/invalid-display-name") {
              toast.error("Invalid display name provided.");
            } else if (code === "auth/invalid-photo-url") {
              toast.error("Invalid photo URL provided.");
            } else if (code === "auth/requires-recent-login") {
              toast.error("Please re-login and try again to update profile.");
            } else if (code === "auth/network-request-failed") {
              toast.error(
                "Network error. Please check your connection and try again."
              );
            } else {
              toast.error("Failed to update profile. Please try again.");
            }
          });
        setLoading(false);
        navigate(backLocation || "/");
      })
      .catch((error) => {
        const code = error.code;
        if (code === "auth/email-already-in-use") {
          toast.error("This email is already in use.");
        } else if (code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else if (code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (code === "auth/missing-password") {
          toast.error("Please enter a password.");
        } else if (code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else {
          toast.error("Signup failed. Please try again later.");
        }
      });
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
        <Navigate to={backLocation || "/"} />
      ) : (
        <div>
          <div className="flex justify-center pt-4">
            <Link to="/" className="text-xl font-semibold text-pink-500">
              BD<span className="text-green-500">pet</span>Care
            </Link>
          </div>
          <div className="flex justify-center items-center h-[92vh]">
            <form onSubmit={handelSingUp}>
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Sing Up
              </h2>

              <fieldset className="fieldset rounded-box w-xs px-4 py-2 mb-4">
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter Full Name"
                />

                <label className="label">Photo-URL</label>
                <input
                  required
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Enter Photo-URL"
                />

                <label className="label">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    required
                    type={show ? "password" : "text"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div
                    onClick={() => setShow(!show)}
                    className="absolute top-[13px] right-2 z-20 cursor-pointer"
                  >
                    {show ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>

                <button className="btn text-white px-6 bg-gray-600 hover:bg-gray-800 mt-2">
                  Sing Up
                </button>
                <div className="divider">OR</div>
                <button
                  type="button"
                  onClick={handelGoogleLogin}
                  className="btn text-green-500 px-6 bg-pink-500 hover:bg-gray-600"
                >
                  <FcGoogle size={25} /> Login with Google
                </button>
                <p className="text-[13px]">
                  Already have an Account. Please{" "}
                  <Link to="/auth/login" className="text-pink-500 underline">
                    Login
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

export default Singup;
