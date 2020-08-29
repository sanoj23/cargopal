import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Signup from "../CustomerScreens/Signup.js";
import SignIn from "../Components/SignIn.js";
import HomePage from "../CustomerScreens/HomePage.js";
import StartScreen from "../Components/StartScreen.js";

import Book from "../CustomerScreens/Book";
import History from "../CustomerScreens/History";
import Schedule from "../CustomerScreens/Schedule";
import Track from "../CustomerScreens/Track";

const StartupNavigation = createStackNavigator({
  StartUp: StartScreen,
  SignupScreen: Signup,
  SignInScreen: SignIn,
  HomePageScreen: HomePage,

  BookScreen: Book,
  HistoryScreen: History,
  ScheduleScreen: Schedule,
  TrackScreen: Track,
});

export default createAppContainer(StartupNavigation);
