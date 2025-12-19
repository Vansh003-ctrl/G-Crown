import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Home from "../pages/homePage/Home";
import SignIn from "../pages/auth/SignIn.jsx";
import SignUp from "../pages/auth/SignUp.jsx";

import Collections from "../pages/collections/Collections.jsx";
import NewArrivals from "../pages/newArrivals/NewArrival.jsx";
import Occasions from "../pages/occasions/Occasion.jsx";
import Store from "../pages/store/Store.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";


export default function AppRoutes() {
  const location = useLocation();

  // Hide navbar & footer on auth pages
  const hideLayout =
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  return (
    <div className={!hideLayout ? "pt-22 lg:pt-32" : ""}>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/occasions" element={<Occasions />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      {!hideLayout && <Footer />}
    </div>
  );
}