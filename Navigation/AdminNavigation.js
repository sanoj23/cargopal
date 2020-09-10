import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import AdminHomePage from "../AdminScreens/AdminHomePage";

const AdminNavigation = createStackNavigator({
  Admin_Home: AdminHomePage,
});

export default AdminNavigation;
