import React from "react";
import { View, Text, StyleSheet } from "react-native";

const History = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Order History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 20,
    paddingTop: 20,
  },
});

export default History;
