import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.card}>
        <View>
          <Button
            style={styles.button}
            title="History"
            onPress={() => navigation.navigate("History")}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Button
            style={styles.button}
            title="Schedule"
            onPress={() => navigation.navigate("Schedule")}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Button
            style={styles.button}
            title="Book"
            onPress={() => navigation.navigate("Book")}
          />
        </View>
      </View>

      <View style={styles.card}>
        <Button
          style={styles.button}
          title="Track"
          onPress={() => navigation.navigate("Track")}
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
