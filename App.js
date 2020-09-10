import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import StartupNavigation from "./Navigation/StartupNavigation";
import AdminNavigation from "./Navigation/AdminNavigation";
import ShipNavigation from "./Navigation/ShipNavigation";

const App = () => {
  let user = "customer";
  if (user === "customer") {
    return <StartupNavigation />;
  } else if (user === "Admin") {
    return (
      <NavigationContainer>
        <AdminNavigation />;
      </NavigationContainer>
    );
  } else if (user === "ShipOwner") {
    return (
      <NavigationContainer>
        <ShipNavigation />;
      </NavigationContainer>
    );
  }
};
export default App;
