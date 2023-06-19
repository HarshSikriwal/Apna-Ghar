import { getAuth, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../firebase.config";
import { updateDoc } from "firebase/firestore";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDownloadDone } from "react-icons/md";

function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser === null) {
      navigate("/sign-in");
    }
  }, []);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });
  const { name, email } = formData;
  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  const onSubmit = () => {};

  return (
    <>
      <div className="mx-2">
        <header className="flex justify-between mb-6">
          <p className="text-2xl font-bold">My Profile</p>
          <button
            type="button"
            className="btn btn-success btn-sm py-0"
            onClick={onLogout}
          >
            LogOut
          </button>
        </header>
        <main>
          <div className="card">
            <div className="card-title justify-between">
              <h3>User Details</h3>
              <button
                onClick={() => {
                  changeDetails && onSubmit();
                  setChangeDetails((prevState) => !prevState);
                }}
              >
                {changeDetails ? (
                  <MdOutlineDownloadDone className="text-blue-600" />
                ) : (
                  <FiEdit className="text-blue-600" />
                )}
              </button>
            </div>
            <div className="card-body"></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
