import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  const location = useLocation();

  if (!isAdmin()) {
    // Redirect non-admins to the login page, preserving the attempted destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};


export default ProtectedRoute;
