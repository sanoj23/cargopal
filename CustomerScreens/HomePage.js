//customer homepage with topMenu/ MenuBottons/ display history for the rest of the page
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomePage = (props) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.card}>
        <View style={styles.button}>
          <Button
            title="History"
            onPress={() => {
              props.navigation.navigate({ routeName: "HistoryScreen" });
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.button}>
          <Button
            title="Schedule"
            onPress={() => {
              props.navigation.navigate({ routeName: "ScheduleScreen" });
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.button}>
          <Button
            title="Book"
            onPress={() => {
              props.navigation.navigate({ routeName: "BookScreen" });
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.button}>
          <Button
            title="Track"
            onPress={() => {
              props.navigation.navigate({ routeName: "TrackScreen" });
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  button: {
    paddingHorizontal: 15,
    borderBottomColor: "black",
  },
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "#d3d3d3",
    padding: 20,
    borderRadius: 10,
  },
});

export default HomePage;
