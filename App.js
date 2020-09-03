import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import StartupNavigation from "./Navigation/StartupNavigation";
//import AdminNavigation from "./Navigation/AdminNavigation";
//import ShipNavigation from "./Navigation/ShipNavigation";
import StartScreen from "./Components/StartScreen";

export default function App() {
  let user = "customer";

  if (user === "customer") {
    return <StartupNavigation />;
  } //else if (user === "Admin") {
  //return <AdminNavigation />;
  // } else if (user === "ShipOwner") {
  // return;
  // }
}

const styles = StyleSheet.create({});
