import { getAuth } from "firebase/auth";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
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
