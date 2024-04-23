import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
// react query
import { QueryClient, QueryClientProvider } from "react-query";
import BuyCarUser from "./Admin/buyCarUsers";
import SellCarUser from "./Admin/sellCarUsers";
import Error from "./Pages/Error";
import ContactUser from "./Admin/contactUsers";
import ServiceUsers from "./Admin/serviceUsers";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top effect
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buyCar-users"
            element={
              <ProtectedRoute>
                <BuyCarUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sellCar-users"
            element={
              <ProtectedRoute>
                <SellCarUser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/contact-users"
            element={
              <ProtectedRoute>
                <ContactUser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/service-users"
            element={
              <ProtectedRoute>
                <ServiceUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
