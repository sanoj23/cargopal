import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const Track = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Package!</Text>
      <Text style={styles.subtitle}>Enter Your Bill Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Bill no."
        autoCapitalize="none"
        placeholderTextColor="white"
      />
      <Button style={styles.button} title="Track" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "50%",
    height: "10%",
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "black",
    borderRadius: 14,
    fontSize: 15,
    fontWeight: "500",
  },
  title: {
    fontSize: 20,
    textAlign: "right",
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "right",
    fontWeight: "bold",
    paddingBottom: 20,
  },
});

export default Track;
