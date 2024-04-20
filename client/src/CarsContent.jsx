import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

export const CarProvider = ({ children }) => {
  const fetchCars = async () => {
    const url = `${import.meta.env.VITE_API_URL}/products`;
    const response = await axios.get(url);
    return response.data; // Assuming the API returns the array directly
  };

  const {
    data: cars,
    error,
    isLoading,
    isError,
  } = useQuery("cars", fetchCars, {
    onError: (error) => {
      console.error("Failed to fetch cars:", error);
    },
  });

  // Optionally, handle loading and error states globally or provide them via context
  const value = { cars, isLoading, isError, error };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};
