import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function BuyDataScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigation = useNavigation();

  const networks = [
    { id: 1, name: "MTN", color: "#FFBE00" },
    { id: 2, name: "Airtel", color: "#FF0000" },
    { id: 3, name: "Glo", color: "#00FF00" },
    { id: 4, name: "9mobile", color: "#009900" },
  ];

  const dataPlans = [
    { id: 1, name: "1GB", validity: "1 Day", price: "300" },
    { id: 2, name: "2GB", validity: "7 Days", price: "500" },
    { id: 3, name: "5GB", validity: "30 Days", price: "1500" },
    { id: 4, name: "10GB", validity: "30 Days", price: "2500" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Buy Data</Text>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Network</Text>
          <View style={styles.networkGrid}>
            {networks.map((network) => (
              <TouchableOpacity
                key={network.id}
                style={[
                  styles.networkCard,
                  selectedNetwork?.id === network.id && styles.selectedNetwork,
                  { borderColor: network.color },
                ]}
                onPress={() => setSelectedNetwork(network)}
              >
                <Text style={styles.networkName}>{network.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enter Phone Number</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="phone" size={24} color="#3730A3" />
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Data Plan</Text>
          <View style={styles.planGrid}>
            {dataPlans.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[
                  styles.planCard,
                  selectedPlan?.id === plan.id && styles.selectedPlan,
                ]}
                onPress={() => setSelectedPlan(plan)}
              >
                <Text style={styles.planData}>{plan.name}</Text>
                <Text style={styles.planValidity}>{plan.validity}</Text>
                <Text style={styles.planPrice}>₦{plan.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 90,
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#1e293b",
    marginBottom: 12,
  },
  networkGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  networkCard: {
    width: "48%",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  selectedNetwork: {
    backgroundColor: "#3730A3",
  },
  networkName: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  planGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  planCard: {
    width: "48%",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  selectedPlan: {
    borderColor: "#3730A3",
    backgroundColor: "#EEF2FF",
  },
  planData: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
  },
  planValidity: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: "600",
    fontWeight: "600",
    color: "#3730A3",
    marginTop: 8,
  },
  buyButton: {
    backgroundColor: "#3730A3",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
