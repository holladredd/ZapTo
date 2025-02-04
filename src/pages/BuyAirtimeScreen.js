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
export default function BuyAirtimeScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const navigation = useNavigation();
  const networks = [
    { id: 1, name: "MTN", color: "#FFBE00" },
    { id: 2, name: "Airtel", color: "#FF0000" },
    { id: 3, name: "Glo", color: "#00FF00" },
    { id: 4, name: "9mobile", color: "#009900" },
  ];

  const quickAmounts = ["100", "200", "500", "1000"];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Buy Airtime</Text>
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
          <Text style={styles.sectionTitle}>Enter Amount</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.nairaSymbol}>₦</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.quickAmounts}>
            {quickAmounts.map((quickAmount) => (
              <TouchableOpacity
                key={quickAmount}
                style={styles.quickAmountButton}
                onPress={() => setAmount(quickAmount)}
              >
                <Text style={styles.quickAmountText}>₦{quickAmount}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Airtime</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    // paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 80,
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
    fontWeight: "600",
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
  nairaSymbol: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3730A3",
    marginLeft: 12,
  },
  quickAmounts: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 12,
  },
  quickAmountButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#EEF2FF",
  },
  quickAmountText: {
    color: "#3730A3",
    fontWeight: "600",
  },
  buyButton: {
    backgroundColor: "#3730A3",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
