import { Link } from "react-router-dom";
import PlaceOnRent from "../assets/PlaceOnRent.jpg";
import PlaceOnSale from "../assets/PlaceOnSale.jpg";
import Slider from "../assets/Slider.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Explore() {
  return (
    <div className="flex flex-col grow justify-between bg-[#FCCE6B]/80 w-full">
      <div className="absolute top-0 w-full h-[500px]">
        <img src={Slider} className="w-full h-full object-cover" />{" "}
      </div>
      {/* <div className="bg-[#FC6B6B] w-full h-"></div> */}
      <main className="absolute top-[350px] w-full">
        {/* <p className="text-2xl font-bold text-black mb-6">Categories</p> */}
        <div className="flex justify-center gap-28">
          <div className="card card-compact bg-white">
            <Link to="/category/rent">
              <img
                src={PlaceOnRent}
                alt="rent"
                className="rounded-xl rounded-b-none w-96 h-[270px]"
              />
              <div className="flex justify-between items-center px-10 py-3 font-sans">
                <p className="card-title text-2xl">Places On Rent</p>
                <FaArrowAltCircleRight className="text-3xl" />
              </div>
            </Link>
          </div>
          <div className="card card-compact bg-white">
            <Link to="/category/rent">
              <img
                src={PlaceOnSale}
                alt="rent"
                className="rounded-xl rounded-b-none w-96 h-[270px]"
              />
              <div className="flex justify-between items-center px-10 py-3 font-sans">
                <p className="card-title text-2xl">Places On Rent</p>
                <FaArrowAltCircleRight className="text-3xl " />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Explore;
