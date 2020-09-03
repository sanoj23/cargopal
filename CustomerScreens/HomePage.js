import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";

const HomePage = (props) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.card}>
        <View>
          <Button
            style={styles.button}
            title="History"
            onPress={() => {
              props.navigation.navigate({ routeName: "HistoryScreen" });
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Button
            style={styles.button}
            title="Schedule"
            onPress={() => {
              props.navigation.navigate({ routeName: "ScheduleScreen" });
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Button
            style={styles.button}
            title="Book"
            onPress={() => {
              props.navigation.navigate({ routeName: "BookScreen" });
            }}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Button
          style={styles.button}
          title="Track"
          onPress={() => {
            props.navigation.navigate({ routeName: "TrackScreen" });
          }}
        />
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
    paddingHorizontal: 20,
    //borderBottomColor: "black",
    //backgroundColor: "#fff",
    height: "25%",
  },
  card: {
    padding: 20,
    width: "100%",
    borderColor: "black",
  },
});

export default HomePage;
