import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StartScreen = (props) => {
  return (
    <View>
      <View style={styles.Header}>
        <Text>Cargo Shipping System</Text>
      </View>

      <Button title="Sign Up" onPress={() => {}} />

      <View style={styles.Text}>
        <Text>Already Have An Account?</Text>
      </View>

      <Button title="Sign In" onPress={() => {}} />
      <View style={styles.GuestButton}>
        <Button title="Continue as Guest " onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    fontSize: 20,
    fontWeight: "bold",
    height: 20,
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#5f9ea0",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "space-between",
  },
  GuestButton: {
    alignItems: "center",
  },
});

export default StartScreen;
