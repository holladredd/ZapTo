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
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function AppTasks() {
  const [userPoints, setUserPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const navigation = useNavigation();
  const appTasks = [
    {
      id: 1,
      title: "Game Master",
      description: "Download and reach level 5",
      points: 1000,
      appIcon: "https://picsum.photos/50",
      status: "ready",
      type: "game",
      url: "https://play.google.com/store/apps/details?id=com.game.master",
      requirement: "Reach Level 5",
    },
    {
      id: 2,
      title: "Finance Pro",
      description: "Complete account setup",
      points: 800,
      appIcon: "https://picsum.photos/51",
      status: "ready",
      type: "finance",
      url: "https://play.google.com/store/apps/details?id=com.finance.pro",
      requirement: "Setup Account",
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "Track your first workout",
      points: 600,
      appIcon: "https://picsum.photos/52",
      status: "ready",
      type: "health",
      url: "https://play.google.com/store/apps/details?id=com.fitness.tracker",
      requirement: "Complete Workout",
    },
    {
      id: 4,
      title: "Shopping Rewards",
      description: "Make first purchase",
      points: 1500,
      appIcon: "https://picsum.photos/53",
      status: "ready",
      type: "shopping",
      url: "https://play.google.com/store/apps/details?id=com.shopping.rewards",
      requirement: "First Purchase",
    },
  ];

  const handleAppTask = async (task) => {
    try {
      await Linking.openURL(task.url);
      // In a real app, you'd implement verification logic here
      setUserPoints((prev) => prev + task.points);
      setCompletedTasks((prev) => [...prev, task.id]);
    } catch (error) {
      console.log("App task error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F59E0B" />

      <LinearGradient colors={["#F59E0B", "#D97706"]} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <AntDesign name="left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>App Tasks</Text>
          <View style={styles.pointsDisplay}>
            <View style={styles.pointsContainer}>
              <Text style={styles.topText}>-</Text>
              <Text style={styles.zapText}>Z</Text>
              <Text style={styles.bottomText}>-</Text>
              {/* <Text style={styles.pointsText}>1,250</Text> */}
              <Text style={styles.pointsText}>{userPoints}</Text>
            </View>
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
              {appTasks.length - completedTasks.length}
            </Text>
            <Text style={styles.statLabel}>Available</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Featured Apps</Text>

        {appTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[
              styles.taskCard,
              completedTasks.includes(task.id) && styles.completedTask,
            ]}
            onPress={() => handleAppTask(task)}
            disabled={completedTasks.includes(task.id)}
          >
            <View style={styles.taskHeader}>
              <Image source={{ uri: task.appIcon }} style={styles.appIcon} />
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
                <View style={styles.requirementContainer}>
                  <MaterialCommunityIcons
                    name="flag"
                    size={16}
                    color="#F59E0B"
                  />
                  <Text style={styles.requirementText}>{task.requirement}</Text>
                </View>
              </View>
              <View style={styles.rewardContainer}>
                <Text style={[styles.pointsValue, { color: "#F59E0B" }]}>
                  +{task.points}
                </Text>
                <MaterialCommunityIcons
                  name="download"
                  size={20}
                  color="#6B7280"
                />
              </View>
            </View>

            {completedTasks.includes(task.id) && (
              <View style={styles.completedBadge}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color="#F59E0B"
                />
                <Text style={[styles.completedText, { color: "#F59E0B" }]}>
                  Completed
                </Text>
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
    backgroundColor: "rgba(255,255,255,0.08)",
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
    color: "#F59E0B",
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
  appIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
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
  requirementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  requirementText: {
    fontSize: 12,
    color: "#F59E0B",
    marginLeft: 5,
    fontWeight: "500",
  },
  rewardContainer: {
    alignItems: "flex-end",
  },
  pointsValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
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
    fontWeight: "500",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 4,
  },
  zapText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    zIndex: 1,
  },
  bottomText: {
    color: "#FFD700",
    marginLeft: -6,
    fontSize: 20,
    fontWeight: "lighter",
  },
  topText: {
    color: "#FFD700",
    marginTop: -6,
    marginRight: -6,
    fontSize: 20,
    fontWeight: "lighter",
  },
});
