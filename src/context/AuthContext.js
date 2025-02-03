import { Text, View } from "react-native";
import React, { createContext, useContext, useState } from "react";
import { users } from "../utils/data";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (name, email, phone, password) => {
    try {
      // Check if user already exists
      const userExists = users.find((user) => user.email === email);
      if (userExists) {
        throw new Error("User with this email already exists");
      }

      // Create new user
      const newUser = {
        id: (users.length + 1).toString(),
        name,
        email,
        phone,
        password,
        profilePicture: "https://randomuser.me/api/portraits/men/1.jpg", // Default profile picture
      };

      // Add to users array
      users.push(newUser);

      // Set current user and auth state
      setCurrentUser(newUser);
      setIsAuthenticated(true);
      setError(null);

      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  const value = {
    //  user,
    //  loading,
    //  error,
    //  login,
    //  signup,
    //  logout,
    //  updateUser,
    currentUser,
    error,
    register,
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
