import React from "react";
import { View } from "react-native";
import HomeScreen from "../pages/HomeScreen";

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "#4CAF50",
        tabBarStyle: {
          position: "absolute",
          display: "flex",
          height: 50,
          width: FullWindowOverlay,
          borderWidth: 1,
          marginHorizontal: "auto",
          alignItems: "center",
          borderRadius: 20,
          elevation: 0,
        },
        tabBarItemStyle: {
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}
