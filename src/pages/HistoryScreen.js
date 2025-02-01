import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { filters, transactionGroups } from "../utils/Api";

export default function HistoryScreen() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3730A3" />

      {/* Header */}
      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <Text style={styles.headerTitle}>Transaction History</Text>
      </LinearGradient>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter.id}
            style={[
              styles.filterTab,
              selectedFilter === filter.id && styles.filterTabActive,
            ]}
            onPress={() => setSelectedFilter(filter.id)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === filter.id && styles.filterTextActive,
              ]}
            >
              {filter.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Date Groups */}
        {transactionGroups.map((group, index) => (
          <View key={index} style={styles.dateGroup}>
            <Text style={styles.dateHeader}>{group.date}</Text>

            {group.transactions.map((transaction, tIndex) => (
              <TouchableOpacity key={tIndex} style={styles.transactionCard}>
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: transaction.color },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={transaction.icon}
                    size={24}
                    color="#fff"
                  />
                </View>

                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionTitle}>
                    {transaction.title}
                  </Text>
                  <Text style={styles.transactionReference}>
                    Ref: {transaction.reference}
                  </Text>
                  <Text style={styles.transactionTime}>{transaction.time}</Text>
                </View>

                <View style={styles.amountContainer}>
                  <Text
                    style={[
                      styles.amount,
                      {
                        color:
                          transaction.type === "credit" ? "#10B981" : "#EF4444",
                      },
                    ]}
                  >
                    {transaction.type === "credit" ? "+" : "-"}₦
                    {transaction.amount}
                  </Text>
                  <Text
                    style={[
                      styles.status,
                      {
                        color:
                          transaction.status === "Success"
                            ? "#10B981"
                            : "#EF4444",
                      },
                    ]}
                  >
                    {transaction.status}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
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
    paddingBottom: 90,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    gap: 8,
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
  },
  filterTabActive: {
    backgroundColor: "#3730A3",
  },
  filterText: {
    color: "#64748B",
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#fff",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  dateGroup: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 12,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
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
  transactionReference: {
    fontSize: 12,
    color: "#64748B",
    marginBottom: 2,
  },
  transactionTime: {
    fontSize: 12,
    color: "#94A3B8",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
  },
});
