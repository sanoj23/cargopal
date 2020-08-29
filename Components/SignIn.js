import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const SignIn = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => this.onChangeText("username", val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => this.onChangeText("password", val)}
      />

      <Button
        title="Sign In"
        onPress={() => {
          props.navigation.navigate({ routeName: "HomePageScreen" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default SignIn;
