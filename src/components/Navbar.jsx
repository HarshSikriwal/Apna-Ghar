import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TbTag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="z-10">
      <div id="navbar" className="navbar mx-auto  text-[#FC6B6B] ">
        <Link to="/">
          <div className="flex-auto ">
            <FaHome className="inline mx-2  text-3xl" />
            <h3 className="inline align-middle font-mono text-2xl">ApnaGhar</h3>
          </div>
        </Link>
        <div className="md:flex flex-auto justify-end hidden mr-2 gap-6 font-bold ">
          <Link to="/">
            <div
              className={`container  flex items-center group ${
                location.pathname === "/"
                  ? "text-black border-solid pb-2 border-b-4 border-[#FC6B6B]"
                  : "text-slate-500"
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
                  ? "text-black pb-2 border-solid border-b-4 border-[#FC6B6B]"
                  : "text-slate-500"
              }`}
            >
              <TbTag className="text-2xl group-hover:scale-110" />
              <div className="text-lg pl-1">Offers</div>
            </div>
          </Link>
          <Link to="/private-route">
            <div
              className={`container flex items-center group ${
                location.pathname.startsWith("/account")
                  ? "text-black pb-2 border-solid border-b-4 border-[#FC6B6B]"
                  : "text-slate-500"
              }`}
            >
              <FaRegUser className="text-2xl group-hover:scale-110" size="20" />
              <div className="text-lg pl-1">Account</div>
            </div>
          </Link>
        </div>
      </div>
      {/* </Link> */}
    </nav>
  );
}

export default Navbar;
