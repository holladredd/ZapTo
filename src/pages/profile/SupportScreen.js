import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SupportScreen() {
  const navigation = useNavigation();

  const supportOptions = [
    {
      id: 1,
      title: "FAQs",
      icon: "frequently-asked-questions",
      description: "Find answers to common questions",
      action: "faqs",
    },
    {
      id: 2,
      title: "Live Chat",
      icon: "message-text",
      description: "Chat with our support team",
      action: "chat",
    },
    {
      id: 3,
      title: "Email Support",
      icon: "email",
      description: "Send us an email",
      action: "email",
    },
    {
      id: 4,
      title: "WhatsApp Support",
      icon: "whatsapp",
      description: "Message us on WhatsApp",
      action: "whatsapp",
    },
    {
      id: 5,
      title: "Community Forum",
      icon: "forum",
      description: "Join our community discussions",
      action: "forum",
    },
    {
      id: 6,
      title: "Video Tutorials",
      icon: "video",
      description: "Watch helpful guides",
      action: "tutorials",
    },
  ];

  const handleSupport = async (action) => {
    switch (action) {
      case "email":
        await Linking.openURL("mailto:support@zapto.com");
        break;
      case "whatsapp":
        await Linking.openURL("https://wa.me/1234567890");
        break;
      case "forum":
        await Linking.openURL("https://community.zapto.com");
        break;
      default:
        // Handle other support options
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3730A3" />

      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Support Center</Text>
          <View style={styles.placeholder} />
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.welcomeCard}>
          <MaterialCommunityIcons name="headphones" size={40} color="#3730A3" />
          <Text style={styles.welcomeText}>How can we help you?</Text>
          <Text style={styles.supportTime}>24/7 Customer Support</Text>
        </View>

        {supportOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionCard}
            onPress={() => handleSupport(option.action)}
          >
            <View style={styles.optionContent}>
              <View style={[styles.optionIcon, { backgroundColor: "#E0E7FF" }]}>
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
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color="#6B7280"
              />
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Direct Contact</Text>
          <Text style={styles.contactInfo}>support@zapto.com</Text>
          <Text style={styles.contactInfo}>+1 234 567 890</Text>
        </View>
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeCard: {
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2937",
    marginTop: 10,
  },
  supportTime: {
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
  contactCard: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 5,
  },
});
