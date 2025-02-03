import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function VideoTasks() {
  const [userPoints, setUserPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const navigation = useNavigation();

  const videoTasks = [
    {
      id: 1,
      title: "Watch Product Ad",
      description: "30 seconds advertisement",
      points: 100,
      duration: "30s",
      status: "ready",
      type: "short",
    },
    {
      id: 2,
      title: "Gaming Trailer",
      description: "Watch new game trailer",
      points: 150,
      duration: "1m",
      status: "ready",
      type: "medium",
    },
    {
      id: 3,
      title: "App Tutorial",
      description: "Learn new app features",
      points: 200,
      duration: "2m",
      status: "ready",
      type: "tutorial",
    },
    {
      id: 4,
      title: "Premium Video",
      description: "Watch premium content",
      points: 300,
      duration: "3m",
      status: "ready",
      type: "premium",
    },
  ];

  const handleVideoWatch = async (task) => {
    try {
      // Video ad logic here
      setUserPoints((prev) => prev + task.points);
      setCompletedTasks((prev) => [...prev, task.id]);
    } catch (error) {
      console.log("Video error:", error);
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
          <Text style={styles.headerTitle}>Video Tasks</Text>
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
              {videoTasks.length - completedTasks.length}
            </Text>
            <Text style={styles.statLabel}>Available</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Available Videos</Text>

        {videoTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[
              styles.taskCard,
              completedTasks.includes(task.id) && styles.completedTask,
            ]}
            onPress={() => handleVideoWatch(task)}
            disabled={completedTasks.includes(task.id)}
          >
            <View style={styles.taskHeader}>
              <View style={styles.taskIconContainer}>
                <MaterialCommunityIcons
                  name="play-circle"
                  size={32}
                  color={
                    completedTasks.includes(task.id) ? "#9CA3AF" : "#3730A3"
                  }
                />
              </View>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
              </View>
              <View style={styles.rewardContainer}>
                <Text style={styles.pointsValue}>+{task.points}</Text>
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
  backButton: {
    marginRight: 16,
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
    color: "#3730A3",
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
    backgroundColor: "#fff",
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
    color: "#3730A3",
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
