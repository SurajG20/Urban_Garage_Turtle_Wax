import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const url = `${import.meta.env.VITE_API_URL}/products`;
      try {
        const response = await axios.get(url);
        setCars(response.data); // Assuming the API returns the array directly
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      }
    };

    fetchCars();
  }, []);

  return <CarContext.Provider value={{ cars }}>{children}</CarContext.Provider>;
};
