import React,{ useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// pages import 
import Home from "./Pages/Home";
import BuyPage from "./Pages/Buy";
import SellPage from "./Pages/Sell";
import CarcarePage from "./Pages/Carcare";
import CoatingPage from "./Pages/Coating";
import PPFPage from "./Pages/PPF";



function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/buy" element={<BuyPage/>}/>
      <Route path="/sell" element={<SellPage/>}/>
      <Route path="/coating" element={<CoatingPage/>}/>
      <Route path="/ppf" element={<PPFPage/>}/>
      <Route path="*" element={<CarcarePage/>}/>
    </Routes>
  );
}

export default App;
