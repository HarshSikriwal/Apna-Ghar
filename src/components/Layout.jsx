import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";

import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ToastContainer />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
