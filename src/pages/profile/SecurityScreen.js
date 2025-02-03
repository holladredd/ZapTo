import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SecurityScreen() {
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [pinEnabled, setPinEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const navigation = useNavigation();
  const securityOptions = [
    {
      id: 1,
      title: "Change Password",
      icon: "lock",
      action: "changePassword",
      description: "Update your account password",
    },
    {
      id: 2,
      title: "PIN Setup",
      icon: "numeric",
      action: "setupPin",
      description: "Manage your security PIN",
    },
    {
      id: 3,
      title: "Two-Factor Authentication",
      icon: "two-factor-authentication",
      action: "2FA",
      description: "Extra layer of security",
      toggle: true,
      state: twoFactorEnabled,
      setState: setTwoFactorEnabled,
    },
    {
      id: 4,
      title: "Biometric Login",
      icon: "fingerprint",
      action: "biometric",
      description: "Use fingerprint or face ID",
      toggle: true,
      state: biometricEnabled,
      setState: setBiometricEnabled,
    },
    {
      id: 5,
      title: "Security PIN",
      icon: "shield-lock",
      action: "pin",
      description: "Enable PIN protection",
      toggle: true,
      state: pinEnabled,
      setState: setPinEnabled,
    },
    {
      id: 6,
      title: "Security Notifications",
      icon: "bell-ring",
      action: "notifications",
      description: "Email alerts for account activity",
      toggle: true,
      state: emailNotifications,
      setState: setEmailNotifications,
    },
  ];

  const handleSecurityOption = (action) => {
    switch (action) {
      case "changePassword":
        // Navigate to change password screen
        break;
      case "setupPin":
        // Navigate to PIN setup screen
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3730A3" />

      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <AntDesign name="left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Security Settings</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.securityStatus}>
          <MaterialCommunityIcons
            name="shield-check"
            size={40}
            color="#10B981"
          />
          <Text style={styles.statusText}>Your account is secure</Text>
          <Text style={styles.lastChecked}>Last security check: Today</Text>
        </View>

        {securityOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionCard}
            onPress={() => handleSecurityOption(option.action)}
            disabled={option.toggle}
          >
            <View style={styles.optionContent}>
              <View style={styles.optionIcon}>
                <MaterialCommunityIcons
                  name={option.icon}
                  size={24}
                  color="#3730A3"
                />
              </View>
              <View style={styles.optionInfo}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>
                  {option.description}
                </Text>
              </View>
              {option.toggle ? (
                <Switch
                  value={option.state}
                  onValueChange={option.setState}
                  trackColor={{ false: "#D1D5DB", true: "#818CF8" }}
                  thumbColor={option.state ? "#3730A3" : "#9CA3AF"}
                />
              ) : (
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#6B7280"
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 10,
  },
  securityStatus: {
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
    marginTop: 10,
  },
  lastChecked: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },
  optionCard: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    marginBottom: 10,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  optionInfo: {
    flex: 1,
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  optionDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  deviceButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F4F6",
    padding: 15,
    marginBottom: 10,
    paddingBottom: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  deviceButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#3730A3",
    marginLeft: 10,
  },
});
