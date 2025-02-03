import React, { useState } from "react";
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
export default function SurveyTasks() {
  const [userPoints, setUserPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const navigation = useNavigation();
  const surveyTasks = [
    {
      id: 1,
      title: "Quick Opinion Poll",
      description: "Share your thoughts on mobile apps",
      points: 200,
      duration: "2 mins",
      status: "ready",
      type: "quick",
      url: "https://survey-link-1.com",
    },
    {
      id: 2,
      title: "Product Research",
      description: "Help improve our services",
      points: 500,
      duration: "5 mins",
      status: "ready",
      type: "research",
      url: "https://survey-link-2.com",
    },
    {
      id: 3,
      title: "User Experience Survey",
      description: "Rate your app experience",
      points: 300,
      duration: "3 mins",
      status: "ready",
      type: "feedback",
      url: "https://survey-link-3.com",
    },
    {
      id: 4,
      title: "Market Research",
      description: "Premium survey with bonus points",
      points: 1000,
      duration: "10 mins",
      status: "ready",
      type: "premium",
      url: "https://survey-link-4.com",
    },
  ];

  const handleSurveyCompletion = async (task) => {
    try {
      await Linking.openURL(task.url);
      setUserPoints((prev) => prev + task.points);
      setCompletedTasks((prev) => [...prev, task.id]);
    } catch (error) {
      console.log("Survey error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#10B981" />

      <LinearGradient colors={["#10B981", "#059669"]} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <AntDesign name="left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Survey Tasks</Text>
          <View style={styles.pointsDisplay}>
            <MaterialCommunityIcons name="star" size={24} color="#FFD700" />
            <Text style={styles.pointsText}>{userPoints}</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{completedTasks.length}</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>
              {surveyTasks.length - completedTasks.length}
            </Text>
            <Text style={styles.statLabel}>Available</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Available Surveys</Text>

        {surveyTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[
              styles.taskCard,
              completedTasks.includes(task.id) && styles.completedTask,
            ]}
            onPress={() => handleSurveyCompletion(task)}
            disabled={completedTasks.includes(task.id)}
          >
            <View style={styles.taskHeader}>
              <View
                style={[
                  styles.taskIconContainer,
                  { backgroundColor: "#10B981" },
                ]}
              >
                <MaterialCommunityIcons
                  name="clipboard-text"
                  size={32}
                  color="#fff"
                />
              </View>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
              </View>
              <View style={styles.rewardContainer}>
                <Text style={[styles.pointsValue, { color: "#10B981" }]}>
                  +{task.points}
                </Text>
                <Text style={styles.duration}>{task.duration}</Text>
              </View>
            </View>

            {completedTasks.includes(task.id) && (
              <View style={styles.completedBadge}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color="#10B981"
                />
                <Text style={styles.completedText}>Completed</Text>
              </View>
            )}
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
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  pointsDisplay: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 20,
  },
  pointsText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 12,
    width: "45%",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10B981",
  },
  statLabel: {
    color: "#6B7280",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1F2937",
  },
  taskCard: {
    backgroundColor: "#F3F4F6",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  completedTask: {
    opacity: 0.7,
    backgroundColor: "#E5E7EB",
  },
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  taskInfo: {
    flex: 1,
    marginLeft: 15,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  taskDescription: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  rewardContainer: {
    alignItems: "flex-end",
  },
  pointsValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  duration: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  completedBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  completedText: {
    marginLeft: 5,
    color: "#10B981",
    fontWeight: "500",
  },
});
