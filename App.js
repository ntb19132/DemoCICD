import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the test demo for learning React-native CI/CD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16
  }
});
