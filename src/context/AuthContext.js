import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Text, View } from "react-native";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const value = {
    //  user,
    //  loading,
    //  error,
    //  login,
    //  signup,
    //  logout,
    //  updateUser,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
