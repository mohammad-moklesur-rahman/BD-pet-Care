import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/Firebase/AuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const handelProfileSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;

    // * Update user Profile
    updateProfile(user, {
      displayName,
      photoURL,
    })
      .then(() => {
        toast.success("Profile updated successfully 🎉");
        form.reset();
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
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="bg-[#717171]">
        <Navbar />
      </div>
      <div className="flex justify-center items-center h-[85vh]">
        <div>
          <div className="bg-base-100 py-4 px-4 rounded-2xl mr-12 cursor-pointer">
            <div>
              <figure className="flex justify-center">
                <img src={user.photoURL} alt="Profile" />
              </figure>
              <h2 className="my-2 text-xl font-semibold">
                Name: {user.displayName}
              </h2>
              <p className="py-2 text-gray-800">Email: {user.email}</p>
              <div className="flex justify-center">
                <button
                  className="btn text-white px-6 bg-gray-600 hover:bg-gray-800 mt-2"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Update Profile
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <form onSubmit={handelProfileSave}>
                      <fieldset className="fieldset rounded-box w-xs p-4 mb-8">
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

                        <button className="btn text-white px-6 bg-gray-600 hover:bg-gray-800 mt-3">
                          Save Profile
                        </button>
                      </fieldset>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
