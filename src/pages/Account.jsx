import { getAuth, updateProfile } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { db } from "../firebase.config";
import { updateDoc } from "firebase/firestore";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDownloadDone } from "react-icons/md";

function Account() {
  const navigate = useNavigate();
  const location = useLocation();
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
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="flex mx-10 grow">
      <div className="flex flex-col basis-1/6 justify-between mt-12">
        <ul className="flex flex-col hover:[&>*]:font-bold [&>*]:rounded-sm [&>*]:p-2 justify-between gap-3 ">
          <Link
            to="/account/profile"
            className={
              location.pathname === "/account/profile"
                ? "bg-[#faad09]/60 font-bold"
                : ""
            }
          >
            Profile
          </Link>

          <Link
            to="/account/listing"
            className={
              location.pathname === "/account/listing"
                ? "bg-[#faad09]/60 font-bold"
                : ""
            }
          >
            Your Listings
          </Link>
        </ul>
        <button
          onClick={onLogout}
          className="font-semibold hover:font-bold text-left p-2"
        >
          LogOut
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Account;
