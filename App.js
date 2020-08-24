import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import StartScreen from "./Components/StartScreen";

export default function App() {
  return (
    <View style={styles.screen}>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 2,
  },
});
