import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);
  const gradientProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate all elements in parallel
    Animated.parallel([
      // Text animations
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 80,
        // duration: 3000,
        useNativeDriver: true,
      }),
      // Gradient animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(gradientProgress, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(gradientProgress, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ),
    ]).start();

    setTimeout(() => {
      navigation.replace("Login");
    }, 3000);
  }, []);

  const gradientColors = gradientProgress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#3730A3", "#4338CA", "#3730A3"],
  });

  return (
    <AnimatedGradient
      colors={[gradientColors, "#4338CA"]}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={styles.logoText}>Zap</Text>
        <Text style={styles.logoTextTop}>Top</Text>
      </Animated.View>
    </AnimatedGradient>
  );
}

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "800",
    letterSpacing: 2,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  logoTextTop: {
    color: "#FCD34D",
    fontSize: 80,
    fontWeight: "800",
    letterSpacing: 2,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
