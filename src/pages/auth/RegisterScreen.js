import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const { register } = useAuth();

  // Usage
  // await register('John Doe', 'john@example.com', '+1234567890', 'password123');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>RegisterScreen</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Login")}
          // disabled={loading}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Home")}
          // disabled={loading}
        >
          <Text style={styles.registerButtonText}>Go HOme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  registerButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  registerButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
