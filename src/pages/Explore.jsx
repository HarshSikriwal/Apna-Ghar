import Navbar from "../components/Navbar";
import ApnaGhar from "../assets/apnaghar.png";

function Explore() {
  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:block text-red-700 basis-2/5">Search Bar</div>
      <img src={ApnaGhar} alt="hero-image" className="lg:basis-3/5 h-3/5" />
    </div>
  );
}

export default Explore;
