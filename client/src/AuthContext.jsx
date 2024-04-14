import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User should include role info, e.g., { username: 'admin', role: 'admin' }

  const login = (userData) => {
    setUser({ ...userData, role: "admin" });
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = () => {
    console.log("Checking admin status for user:", user);
    return user && user.role === "admin";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
