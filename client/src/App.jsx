import React, { useState } from "react";
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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/coating" element={<CoatingPage />} />
      <Route path="/ppf" element={<PPFPage />} />
      <Route path="/recent-work" element={<RecentWork />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="*" element={<PPFPage />} />
    </Routes>
  );
}

export default App;
