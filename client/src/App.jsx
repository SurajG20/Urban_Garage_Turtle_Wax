import React, { useState ,useEffect} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// pages import
import Home from "./Pages/HomePage";
import BuyPage from "./Pages/BuyPage";
import SellPage from "./Pages/SellPage";
import ServicePage from "./Pages/ServicePage";
import CoatingPage from "./Pages/CoatingPage";
import PPFPage from "./Pages/PPFPage";
import RecentWork from "./Pages/RecentWorkPage";
import Contactus from "./Pages/ContactPage";
import TurtleWaxPage from "./Pages/TurtlewaxPage";
import CarDetail from "./Pages/CarDetail";
import AboutUs from "./Pages/Aboutus";
import Preloader from "./components/Preloader";
// Admin Routes
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Admin/adminHome";
import AddProduct from "./Admin/addProduct";


function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Set a timer for the preloader to show before the main content is rendered
      const timer = setTimeout(() => setLoading(false), 2000); // Adjust the time as needed

      // Clean up the timer
      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <Preloader />;
    }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/buy/car-detail/:id" element={<CarDetail />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/coating" element={<CoatingPage />} />
      <Route path="/ppf" element={<PPFPage />} />
      <Route path="/turtle-wax-products" element={<TurtleWaxPage />} />
      <Route path="/recent-work" element={<RecentWork />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      <Route path="/add-product/:id" element={<AddProduct/>} />
      <Route path="*" element={<PPFPage />} />
    </Routes>
  );
}

export default App;
