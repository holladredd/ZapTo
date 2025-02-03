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
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { quickServices, transactions } from "../utils/Api";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3730A3" />

      {/* Header Section */}
      <LinearGradient
        colors={["#3730A3", "#4338CA"]}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.avatar}
              source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
            />
            <View>
              <Text style={styles.greeting}>Welcome back</Text>
              <Text style={styles.userName}>John Doe</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.walletButton}>
            <Ionicons name="wallet-outline" size={20} color="#fff" />
            <Text style={styles.walletBalance}>₦25,480.00</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={styles.topButton}
            onPress={() => navigation.navigate("Tasks")}
          >
            <LinearGradient
              colors={["#3730A3", "#4338CA"]}
              style={styles.gradientButton}
            >
              <AntDesign name="star" size={24} color="#FFD700" />
              <Text style={styles.topButtonText}>Earn Points</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.bottomButtonsRow}>
            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons name="wifi" size={20} color="#94A3B8" />
              <Text style={styles.bottomButtonText}>Buy Data</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomButton}>
              <MaterialCommunityIcons
                name="phone-plus"
                size={20}
                color="#94A3B8"
              />
              <Text style={styles.bottomButtonText}>Buy Airtime</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Quick Services
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Quick Services</Text>
          <View style={styles.servicesGrid}>
            {quickServices.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceCard}>
                <View style={[styles.serviceIcon]}>
                  <MaterialCommunityIcons
                    name={service.icon}
                    size={24}
                    color="#3730A3"
                  />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View> */}
        {/* Recent Transactions */}
        <View style={styles.recentTransactions}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.transactionCard}>
              <View style={[styles.transactionIcon]}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={24}
                  color="#3730A3"
                />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionPhone}>{item.phone}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
              </View>
              <Text style={styles.transactionAmount}>₦{item.amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 90, // Adds space above the tab bar
  },
  headerGradient: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  actionButtonsContainer: {
    padding: 16,
    gap: 16,
  },
  topButton: {
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  gradientButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 10,
    borderRadius: 20,
  },
  topButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  bottomButtonsRow: {
    flexDirection: "row",
    gap: 16,
  },
  bottomButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFFFff",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  bottomButtonText: {
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "500",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },
  greeting: {
    fontSize: 14,
    color: "#E0E7FF",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    marginTop: -30,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
  },
  seeAllButton: {
    color: "#3730A3",
    fontSize: 14,
    fontWeight: "500",
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  transactionIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1E293B",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 13,
    color: "#64748B",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  networkSection: {
    marginBottom: 24,
  },
  networkGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  networkCard: {
    width: "23%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
  },
  networkLogo: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  networkName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#1E293B",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
  },
  serviceCard: {
    width: "31%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  walletButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 12,
    gap: 8,
  },
  walletBalance: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  transactionPhone: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 4,
  },
});
