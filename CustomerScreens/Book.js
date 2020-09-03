import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Book = (props) => {
  return (
    <View>
      <Text>Bookings page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    flexDirection: "column",
    width: "30%",
    elevation: 8,
    backgroundColor: "#d3d3d3",
  },
});

export default Book;
