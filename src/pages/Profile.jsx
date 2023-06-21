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

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });
  const { name, email } = formData;

  const onSubmit = () => {};
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <div className="mx-2">
      <header className="flex justify-between mb-6">
        <p className="text-2xl font-bold">Hello, {name}</p>
        {/* <button
          type="button"
          className="btn border-solid border-b-4 border-[#faad09] btn-sm py-0 hover:border-solid hover:border-b-2 hover:border-[#faad09]"
          onClick={onLogout}
        >
          LogOut
        </button> */}
      </header>
      <main>
        <div>
          <div className="flex justify-between">
            <h3>Your Profile</h3>
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
          <div className="card card-compact border-solid w-1/3 p-4 border-2 border-[#24c2cb]">
            <form>
              <input
                type="text"
                id="name"
                value={name}
                onChange={onChange}
                className=""
                disabled={!changeDetails}
              />
              <input
                type="text"
                id="email"
                value={email}
                onChange={onChange}
                className=""
                disabled={!changeDetails}
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
