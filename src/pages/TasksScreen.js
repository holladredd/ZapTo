import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const taskCategories = [
  {
    id: 1,
    title: "Video Tasks",
    description: "Watch videos to earn points",
    icon: "play-circle",
    route: "VideoTasks",
    color: "#3730A3",
  },
  {
    id: 2,
    title: "Survey Tasks",
    description: "Complete surveys for rewards",
    icon: "clipboard-text",
    route: "SurveyTasks",
    color: "#10B981",
  },
  {
    id: 3,
    title: "App Tasks",
    description: "Download and try new apps",
    icon: "cellphone",
    route: "AppTasks",
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Social Tasks",
    description: "Share and engage for points",
    icon: "share-variant",
    route: "SocialTasks",
    color: "#EC4899",
  },
];

export default function TasksScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3730A3" />

      <LinearGradient colors={["#3730A3", "#4338CA"]} style={styles.header}>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsLabel}>Available Tasks</Text>
          <Text style={styles.subtitle}>Complete tasks to earn Zap Points</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {taskCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => navigation.navigate(category.route)}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: category.color },
              ]}
            >
              <MaterialCommunityIcons
                name={category.icon}
                size={32}
                color="#fff"
              />
            </View>
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryDescription}>
                {category.description}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#6B7280"
            />
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
  },
  header: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  pointsContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  pointsLabel: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    opacity: 0.8,
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  categoryCard: {
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryInfo: {
    flex: 1,
    marginLeft: 15,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1F2937",
  },
  categoryDescription: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 2,
  },
});
