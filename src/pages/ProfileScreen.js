import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { quickActions, settingsSections } from "../utils/Api";
export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3730A3" />

      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>johndoe@example.com</Text>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Account Balance Section */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceTitle}>Point </Text>
          <View style={styles.pointsContainer}>
            <Text style={styles.topText}>-</Text>
            <Text style={styles.zapText}>Z</Text>
            <Text style={styles.bottomText}>-</Text>
            <Text style={styles.pointsText}>1,250</Text>
          </View>
          <TouchableOpacity style={styles.topUpButton}>
            <MaterialCommunityIcons name="wallet-plus" size={20} color="#fff" />
            <Text style={styles.topUpButtonText}>Top Up Zap</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={styles.actionButton}
              onPress={() => navigation.navigate(action.actions)}
            >
              <MaterialCommunityIcons
                name={action.icon}
                size={24}
                color="#3730A3"
              />
              <Text style={styles.actionText}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings Sections */}
        {settingsSections.map((section, index) => (
          <View key={index} style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity key={itemIndex} style={styles.settingsItem}>
                <View style={styles.settingsItemLeft}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={24}
                    color={item.color || "#3730A3"}
                  />
                  <Text style={styles.settingsItemText}>{item.title}</Text>
                </View>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialCommunityIcons name="logout" size={24} color="#EF4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 90, // Adds space above the tab bar
  },
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  header: {
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileHeader: {
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: "#E0E7FF",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  balanceCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  balanceTitle: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 16,
  },
  topUpButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3730A3",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
  },
  topUpButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    width: "23%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionText: {
    fontSize: 12,
    color: "#1E293B",
    marginTop: 8,
    textAlign: "center",
  },
  settingsSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 12,
  },
  settingsItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  settingsItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  settingsItemText: {
    fontSize: 16,
    color: "#1E293B",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEE2E2",
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    gap: 8,
  },
  logoutText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "600",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 4,
  },
  pointsText: {
    color: "#222222",
    fontSize: 25,
    marginLeft: 6,
    fontWeight: "bold",
  },
  zapText: {
    color: "#3730A3",
    fontSize: 25,
    fontWeight: "bold",
    zIndex: 1,
  },
  bottomText: {
    color: "#FFD700",
    marginLeft: -8,
    marginBottom: -2,
    fontSize: 25,
    fontWeight: "lighter",
  },
  topText: {
    color: "#FFD700",
    marginTop: -10,
    marginRight: -10,
    fontSize: 25,
    fontWeight: "lighter",
  },
});
