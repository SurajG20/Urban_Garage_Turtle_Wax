import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const fetchProducts = async () => {
    const url = `${import.meta.env.VITE_API_URL}/product`;
    const response = await axios.get(url);
    
    return response.data;
  };

  const {
    data: products,
    error,
    isLoading,
    isError,
  } = useQuery("products", fetchProducts, {
    onError: (error) => {
      console.error("Failed to fetch Products:", error);
    },
  });

  // Optionally, handle loading and error states globally or provide them via context
  const value = { products, isLoading, isError, error };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
