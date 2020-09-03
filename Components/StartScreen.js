import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  headerStyle,
  ImageBackground,
} from "react-native";
import { navigation, navigate } from "react-native";
import "react-native-gesture-handler";

const StartScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Sign Up"
        onPress={() => {
          props.navigation.navigate({ routeName: "SignupScreen" });
        }}
      />

      <View style={styles.text}>
        <Text>Already Have An Account?</Text>
      </View>

      <Button
        title="Sign In"
        onPress={() => {
          props.navigation.navigate({ routeName: "SignInScreen" });
        }}
      />
      <View>
        <Button
          title="Continue as Guest "
          onPress={() => {
            props.navigation.navigate({ routeName: "HomePageScreen" });
          }}
        />
      </View>
    </View>
  );
};

StartScreen.navigationOptions = {
  headerTitle: "SHIP IT",
  alignItems: "center",
  fontSize: "40px",
};

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingTop: "600px",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    flex: 2,
    width: 10,
    height: 10,
    alignItems: "center",
  },
});

export default StartScreen;
