import React,{ useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// pages import 
import Home from "./Pages/Home";
import BuyPage from "./Pages/Buy";
import SellPage from "./Pages/Sell";
import CarcarePage from "./Pages/Carcare";



function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/buy" element={<BuyPage/>}/>
      <Route path="/sell" element={<SellPage/>}/>
      <Route path="/car-care" element={<CarcarePage/>}/>
      <Route path="*" element={<CarcarePage/>}/>
    </Routes>
  );
}

export default App;
