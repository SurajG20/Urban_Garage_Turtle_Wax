import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
// context 
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
// react query
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
import ProductDetail from "./Pages/ProductDetail";
import AboutUs from "./Pages/Aboutus";
import Preloader from "./components/Preloader";

// Admin Routes
import AdminLogin from "./Pages/AdminLogin";
import UpdatePassword from "./Pages/UpdatePassword";
import AdminDashboard from "./Admin/adminHome";
import BuyCarUser from "./Admin/buyCarUsers";
import SellCarUser from "./Admin/sellCarUsers";
import ServiceUsers from "./Admin/serviceUsers";
import Product from "./Admin/products";
import ProductCustomer from "./Admin/productCustomer";
import ContactUser from "./Admin/contactUsers";
import AddProduct from "./Admin/addProduct";
import AddCar from "./Admin/addCar";



import Error from "./Pages/Error";


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
          <Route
            path="/turtle-wax-product/product-detail/:id"
            element={<ProductDetail />}
          />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/coating" element={<CoatingPage />} />
          <Route path="/ppf" element={<PPFPage />} />
          <Route path="/turtle-wax-product" element={<TurtleWaxPage />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/change-password" element={<UpdatePassword />} />

          {/* Admin Routes Protected */}

          <Route
            path="/admin/cars"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/buyCar"
            element={
              <ProtectedRoute>
                <BuyCarUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/sellCar"
            element={
              <ProtectedRoute>
                <SellCarUser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/service"
            element={
              <ProtectedRoute>
                <ServiceUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/buyProduct"
            element={
              <ProtectedRoute>
                <ProductCustomer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/customers"
            element={
              <ProtectedRoute>
                <ContactUser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-car"
            element={
              <ProtectedRoute>
                <AddCar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-product"
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
