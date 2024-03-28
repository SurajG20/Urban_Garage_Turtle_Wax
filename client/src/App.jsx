import React,{ useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// pages import 
import Home from "./Pages/Home";
import BuyPage from "./Pages/Buy";
import SellPage from "./Pages/Sell";
import ServicePage from "./Pages/ServicePage";
import CoatingPage from "./Pages/Coating";
import PPFPage from "./Pages/PPF";
import RecentWork from "./Pages/RecentWork";




function App() {
  

  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<BuyPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/service" element={<ServicePage />} />
      <Route path="/coating" element={<CoatingPage />} />
      <Route path="/ppf" element={<PPFPage />} />
      <Route path="*" element={<PPFPage />} />
        <Route path='/recent-work' element={<RecentWork />} />


    </Routes>
  );
}

export default App;
