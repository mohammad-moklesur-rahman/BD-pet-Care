import { useContext, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/Firebase/AuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null); // ref for dialog

  const handleProfileSave = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value.trim();
    const photoURL = form.photo.value.trim();

    if (!displayName || !photoURL) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!user) {
      toast.error("No user signed in.");
      return;
    }

    setLoading(true);

    try {
      await updateProfile(user, { displayName, photoURL });
      await user.reload(); // refresh user object
      setUser({ ...user }); // update AuthContext to refresh UI

      toast.success("Profile updated successfully 🎉");
      form.reset();
      modalRef.current.close(); // close modal using ref
    } catch (error) {
      const code = error.code;
      if (code === "auth/no-current-user") toast.error("No user signed in.");
      else if (code === "auth/invalid-display-name")
        toast.error("Invalid display name.");
      else if (code === "auth/invalid-photo-url")
        toast.error("Invalid photo URL.");
      else if (code === "auth/requires-recent-login")
        toast.error("Please re-login to update profile.");
      else if (code === "auth/network-request-failed")
        toast.error("Network error. Try again.");
      else toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-[#2C2C2C]">
        <Navbar />
      </div>

      <div className="flex justify-center items-center py-12 px-4">
        <div className="bg-white shadow-lg rounded-3xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-gray-300"
            />
            <h2 className="text-2xl font-bold mb-1">{user?.displayName}</h2>
            <p className="text-gray-600 mb-4">{user?.email}</p>

            <button
              onClick={() => modalRef.current.showModal()} // open modal
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box p-6 relative rounded-xl w-full max-w-md">
          <button
            onClick={() => modalRef.current.close()} // close modal
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          <h3 className="text-xl font-semibold mb-4 text-center">
            Update Profile
          </h3>

          <form onSubmit={handleProfileSave} className="space-y-4">
            <div className="flex flex-col">
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full rounded-md"
                placeholder="Enter Full Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="label font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                className="input input-bordered w-full rounded-md"
                placeholder="Enter Photo URL"
                required
              />
            </div>

            <button
              type="submit"
              className={`btn w-full ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white py-2 rounded-full mt-2 transition duration-300`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
