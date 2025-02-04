import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../pages/HomeScreen";
import ProfileScreen from "../pages/ProfileScreen";
import BillScreen from "../pages/BillScreen";
import HistoryScreen from "../pages/HistoryScreen";
import TasksScreen from "../pages/TasksScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const { width } = useWindowDimensions();

  // Enhanced responsive width calculation
  const getTabBarWidth = () => {
    if (width >= 1366) return 1366; // iPad Pro 12.9-inch (all generations)

    if (width >= 1194) return 1194; // iPad Pro 11-inch (all generations)

    if (width >= 1180) return 1180; // iPad Air (4th & 5th generation)

    if (width >= 1112) return 1112; // iPad Pro 10.5-inch

    if (width >= 1080) return 1080; // iPad Air (3rd generation)

    if (width >= 1024) return 1024; // iPad 10th generation

    if (width >= 834) return 834; // iPad mini (6th generation)

    if (width >= 768) return 668; // iPad mini (5th generation and earlier)

    return width - 32; // All other devices (phones etc)
  };

  const tabBarWidth = getTabBarWidth();

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarInactiveTintColor: "#94A3B8",
        tabBarActiveTintColor: "#3730A3",
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
          marginBottom: Platform.OS === "ios" ? 0 : 5,
        },
        tabBarStyle: {
          position: "absolute",
          bottom: Platform.OS === "ios" ? 24 : 16,
          alignSelf: "center",
          height: width > 768 ? 75 : 65,
          backgroundColor: "#FFFFFF",
          borderRadius: width > 768 ? 25 : 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 8,
          paddingHorizontal: width > 768 ? 15 : 10,
          borderTopWidth: 0,
          width: tabBarWidth,
          marginHorizontal: width > 768 ? 32 : 16,
        },
        tabBarItemStyle: {
          padding: width > 768 ? 8 : 5,
          borderRadius: width > 768 ? 15 : 10,
          marginHorizontal: width > 768 ? 8 : 5,
          marginVertical: 2,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="BillScreen"
        component={BillScreen}
        options={{
          tabBarLabel: "Bills",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ focused, color, backgroundColor }) => (
            <View
              style={[
                styles.tabPointsContainer,
                { backgroundColor: focused ? "#3730A3" : "#ffffff" },
              ]}
            >
              <Text
                style={[
                  styles.tabTopText,
                  { color: focused ? "#FFD700" : "#FFD700" },
                ]}
              >
                -
              </Text>
              <Text
                style={[
                  styles.tabZapText,
                  { color: focused ? "#ffffff" : "#3730A3" },
                ]}
              >
                Z
              </Text>
              <Text
                style={[
                  styles.tabBottomText,
                  { color: focused ? "#FFD700" : "#FFD700" },
                ]}
              >
                -
              </Text>
            </View>
          ),
          tabBarLabel: "Tasks",
          tabBarActiveTintColor: "#3730A3",
          tabBarInactiveTintColor: "#94A3B8",
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="history" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="person" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabPointsContainer: {
    flexDirection: "row",
    positiontion: "absolute",
    top: -15,
    width: 50,
    height: 50,

    borderColor: "#ffffff",
    borderWidth: 4,
    borderRadius: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadow: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  tabTopText: {
    marginTop: -10,
    marginRight: -11,
    fontSize: 25,
    color: "#FFD700",
    fontWeight: "lighter",
  },
  tabZapText: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "bold",
    zIndex: 1,
  },
  tabBottomText: {
    marginBottom: -6,
    marginLeft: -11,
    fontSize: 25,
    fontWeight: "lighter",
  },
});
