import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TbTag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <div className="navbar mb-8 shadow-lg mx-auto bg-yellow-600">
        <Link to="/">
          <div className="flex-auto ">
            <FaHome className="inline mx-2 text-blue-800 text-3xl" />
            <h3 className="inline align-middle text-blue-800 font-mono text-2xl">
              ApnaGhar
            </h3>
          </div>
        </Link>
        <div className="md:flex flex-auto justify-end hidden mr-2 gap-8">
          <Link to="/">
            <div
              className={`container  flex items-center group ${
                location.pathname === "/" ? "text-black" : "text-slate-200"
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
                  ? "text-black"
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
                  ? "text-black"
                  : "text-slate-200"
              }`}
            >
              <FaRegUser className="text-2xl group-hover:scale-110" size="20" />
              <div className="text-lg pl-1">Profile</div>
            </div>
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </nav>
  );
}

export default Navbar;
