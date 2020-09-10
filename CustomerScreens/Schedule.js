import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const Schedule = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.title}>Search Shipments</Text>
        <TextInput
          style={styles.input}
          placeholder="From"
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Destination"
          autoCapitalize="none"
          placeholderTextColor="white"
        />
        <Button style={styles.button} title="Search" onPress={() => {}} />
      </View>
      <View style={styles.outputBox}>
        <Text style={styles.title}>Schedule</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  inputBox: {
    flex: 2,
    backgroundColor: "#d9e3f0",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "grey",
  },
  outputBox: {
    flex: 4,
    backgroundColor: "#c4def6",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "right",
    fontWeight: "bold",
  },
  input: {
    width: "40%",
    height: "20%",
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 15,
    fontWeight: "500",
  },
  button: {
    paddingBottom: "30px",
  },
});

export default Schedule;
