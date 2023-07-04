import { FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { TbTag } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  return (
    <nav>
      <div className="navbar mb-8 mx-auto border-solid border-b-4 border-[#24c2cb]  text-[#13bec7] bg-[#24c2cb]/20">
        <Link to="/">
          <div className="flex-auto ">
            <FaHome className="inline mx-2  text-3xl" />
            <h3 className="inline align-middle font-mono text-2xl">ApnaGhar</h3>
          </div>
        </Link>
        <div className="md:flex flex-auto justify-end hidden mr-2 gap-6 ">
          <Link to="/">
            <div
              className={`container  flex items-center group ${
                location.pathname === "/"
                  ? "text-black border-solid pb-2 border-b-4 border-[#faad09]"
                  : "text-slate-400"
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
                  : "text-slate-400"
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
                  ? "text-black pb-2 border-solid border-b-4 border-[#faad09]"
                  : "text-slate-400"
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
