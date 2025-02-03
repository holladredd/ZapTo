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
  Share,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Clipboard from "expo-clipboard";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SocialTasks() {
  const [userPoints, setUserPoints] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const referralCode = "USER123"; // Would come from user profile
  const navigation = useNavigation();

  const socialTasks = [
    {
      id: 1,
      title: "Refer Friends",
      description: "Invite friends using your code",
      points: 500,
      icon: "account-plus",
      type: "referral",
      bonusText: "500 bonus points per referral",
    },
    {
      id: 2,
      title: "Share on Facebook",
      description: "Share ZapTop on Facebook",
      points: 200,
      icon: "facebook",
      type: "share",
      platform: "facebook",
    },
    {
      id: 3,
      title: "Follow on Twitter",
      description: "Follow our Twitter handle",
      points: 150,
      icon: "twitter",
      type: "follow",
      url: "https://twitter.com/zapto",
    },
    {
      id: 4,
      title: "Join Telegram",
      description: "Join our Telegram community",
      points: 300,
      icon: "television",
      type: "join",
      url: "https://t.me/zapto",
    },
    {
      id: 5,
      title: "Instagram Story",
      description: "Share ZapTop on Instagram",
      points: 250,
      icon: "instagram",
      type: "share",
      platform: "instagram",
    },
  ];

  const handleSocialTask = async (task) => {
    try {
      switch (task.type) {
        case "referral":
          const result = await Share.share({
            message: `Join ZapTop using my referral code: ${referralCode} and get bonus points! Download now: https://zapto.app/refer/${referralCode}`,
          });
          if (result.action === Share.sharedAction) {
            setUserPoints((prev) => prev + task.points);
          }
          break;

        case "share":
          await Share.share({
            message:
              "Earn rewards with ZapTop! Download now: https://zapto.app",
            title: "Share ZapTop",
          });
          setUserPoints((prev) => prev + task.points);
          break;

        case "follow":
        case "join":
          await Linking.openURL(task.url);
          setUserPoints((prev) => prev + task.points);
          break;
      }
      setCompletedTasks((prev) => [...prev, task.id]);
    } catch (error) {
      console.log("Social task error:", error);
    }
  };

  const copyReferralCode = async () => {
    await Clipboard.setStringAsync(referralCode);
    alert("Referral code copied to clipboard!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#EC4899" />

      <LinearGradient colors={["#EC4899", "#DB2777"]} style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <AntDesign name="left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Social Tasks</Text>
          <View style={styles.pointsDisplay}>
            <MaterialCommunityIcons name="star" size={24} color="#FFD700" />
            <Text style={styles.pointsText}>{userPoints}</Text>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        <View style={styles.referralCard}>
          <Text style={styles.referralTitle}>Your Referral Code</Text>
          <TouchableOpacity
            style={styles.referralCodeBox}
            onPress={copyReferralCode}
          >
            <Text style={styles.referralCodeText}>{referralCode}</Text>
            <MaterialCommunityIcons
              name="content-copy"
              size={20}
              color="#EC4899"
            />
          </TouchableOpacity>
          <Text style={styles.referralHint}>Tap to copy</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{completedTasks.length}</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>
              {socialTasks.length - completedTasks.length}
            </Text>
            <Text style={styles.statLabel}>Available</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Social Tasks</Text>

        {socialTasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[
              styles.taskCard,
              completedTasks.includes(task.id) && styles.completedTask,
            ]}
            onPress={() => handleSocialTask(task)}
            disabled={completedTasks.includes(task.id)}
          >
            <View style={styles.taskHeader}>
              <View
                style={[
                  styles.taskIconContainer,
                  { backgroundColor: "#EC4899" },
                ]}
              >
                <MaterialCommunityIcons
                  name={task.icon}
                  size={32}
                  color="#fff"
                />
              </View>
              <View style={styles.taskInfo}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
                {task.bonusText && (
                  <Text style={styles.bonusText}>{task.bonusText}</Text>
                )}
              </View>
              <View style={styles.rewardContainer}>
                <Text style={[styles.pointsValue, { color: "#EC4899" }]}>
                  +{task.points}
                </Text>
              </View>
            </View>

            {completedTasks.includes(task.id) && (
              <View style={styles.completedBadge}>
                <MaterialCommunityIcons
                  name="check-circle"
                  size={20}
                  color="#EC4899"
                />
                <Text style={[styles.completedText, { color: "#EC4899" }]}>
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
    paddingBottom: 20,
    // marginBottom: 20,
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
  referralCard: {
    backgroundColor: "#F3F4F6",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },
  referralTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  referralCodeBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
  },
  referralCodeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#EC4899",
    marginRight: 10,
  },
  referralHint: {
    color: "#6B7280",
    marginTop: 8,
    fontSize: 12,
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
    color: "#EC4899",
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
  bonusText: {
    fontSize: 12,
    color: "#EC4899",
    marginTop: 4,
    fontWeight: "500",
  },
  rewardContainer: {
    alignItems: "flex-end",
  },
  pointsValue: {
    fontSize: 16,
    fontWeight: "bold",
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
});
