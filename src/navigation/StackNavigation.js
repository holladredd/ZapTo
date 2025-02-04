import React from "react";
// import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import LoginScreen from "../pages/auth/LoginScreen";
import { useAuth } from "../context/AuthContext";
import RegisterScreen from "../pages/auth/RegisterScreen";
import EditProfile from "../pages/profile/EditProfile";
import VideoTasks from "../pages/tasks/VideoTasks";
import SurveyTasks from "../pages/tasks/SurveyTasks";
import AppTasks from "../pages/tasks/AppTasks";
import SocialTasks from "../pages/tasks/SocialTasks";
import SecurityScreen from "../pages/profile/SecurityScreen";
import SupportScreen from "../pages/profile/SupportScreen";
import SplashScreen from "../pages/SplashScreen";
import BuyDataScreen from "../pages/BuyDataScreen";
import BuyAirtimeScreen from "../pages/BuyAirtimeScreen";
import { SafeAreaView } from "react-native";
// import SurveyTasks from "../pages/tasks/SurveyTasks";
// import AppTasks from "../pages/tasks/AppTasks";
// import SocialTasks from "../pages/tasks/SocialTasks";

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
    <SafeAreaView style={{ flex: 1 }}>
      <AuthStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <AuthStack.Screen name="Splash" component={SplashScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="SignUp" component={RegisterScreen} />
        <AuthStack.Screen
          name="edit-profile"
          component={EditProfile}
          options={{ title: "Edit Profile" }}
        />
        <AuthStack.Screen name="Security" component={SecurityScreen} />
        <AuthStack.Screen name="Support" component={SupportScreen} />
        <AuthStack.Screen name="VideoTasks" component={VideoTasks} />
        <AuthStack.Screen name="SurveyTasks" component={SurveyTasks} />
        <AuthStack.Screen name="AppTasks" component={AppTasks} />
        <AuthStack.Screen name="SocialTasks" component={SocialTasks} />
        <AuthStack.Screen name="Buy Data" component={BuyDataScreen} />
        <AuthStack.Screen name="Buy Airtime" component={BuyAirtimeScreen} />
        <AuthStack.Screen name="Home" component={TabNavigation} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};

export function StackNavigation() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
