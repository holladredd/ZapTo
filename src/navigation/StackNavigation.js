import React from "react";
// import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import LoginScreen from "../pages/auth/LoginScreen";
import { useAuth } from "../context/AuthContext";
import RegisterScreen from "../pages/auth/RegisterScreen";
import EditProfile from "../pages/EditProfile";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

// const AuthNavigator = () => {
//   return (
//     <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//       <AuthStack.Screen name="Login" component={LoginScreen} />
//       <AuthStack.Screen name="SignUp" component={RegisterScreen} />
//     </AuthStack.Navigator>
//   );
// };
const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      {/* <AppStack.Screen name="Home" component={TabNavigation} /> */}
      {/* <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Settings" component={SettingsScreen} />
      <AppStack.Screen name="Notifications" component={NotificationsScreen} />
      <AppStack.Screen name="Edit-Profile" component={EditProfile} /> */}
    </AppStack.Navigator>
  );
};
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={RegisterScreen} />
      <AuthStack.Screen
        name="edit-profile"
        component={EditProfile}
        options={{ title: "Edit Profile" }}
      />
      <AuthStack.Screen name="Home" component={TabNavigation} />
    </AuthStack.Navigator>
  );
};

export function StackNavigation() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
