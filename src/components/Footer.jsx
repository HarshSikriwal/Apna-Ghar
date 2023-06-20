import { Link, useLocation } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TbTag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

function Footer() {
  const location = useLocation();
  return (
    <div className="navbar pb-1 px-4 bg-[#24c2cb] flex justify-between md:hidden">
      <Link to="/">
        <div
          className={`container  flex items-center group ${
            location.pathname === "/"
              ? "text-black pb-2 border-solid border-b-4 border-[#faad09]"
              : "text-slate-200"
          }`}
        >
          <MdOutlineExplore className="text-2xl group-hover:scale-110" />
          <div className="text-lg pl-1">Explore</div>
        </div>
      </Link>
      <Link to="/offers">
        <div
          className={`container flex items-center group ${
            location.pathname === "/offers"
              ? "text-black pb-2 border-solid border-b-4 border-[#faad09]"
              : "text-slate-200"
          }`}
        >
          <TbTag className="text-2xl group-hover:scale-110" />
          <div className="text-lg pl-1">Offers</div>
        </div>
      </Link>
      <Link to="/profile">
        <div
          className={`container flex items-center group ${
            location.pathname === "/profile"
              ? "text-black pb-2 border-solid border-b-4 border-[#faad09]"
              : "text-slate-200"
          }`}
        >
          <FaRegUser className="text-2xl group-hover:scale-110" size="20" />
          <div className="text-lg pl-1">Profile</div>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
