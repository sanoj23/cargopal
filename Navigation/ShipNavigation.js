import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import AgentHomePage from "../ShipOwnerScreens/AgentHomePage";

const ShipNavigation = createStackNavigator({
  Ship_HomePage: AgentHomePage,
});

export default ShipNavigation;
