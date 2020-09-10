import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

import Signup from "../CustomerScreens/Signup.js";
import SignIn from "../Components/SignIn.js";
import HomePage from "../CustomerScreens/HomePage.js";
import StartScreen from "../Components/StartScreen.js";

import Settings from "../CustomerScreens/Settings";
import Support from "../CustomerScreens/Support";

import Book from "../CustomerScreens/Book";
import History from "../CustomerScreens/History";
import Schedule from "../CustomerScreens/Schedule";
import Track from "../CustomerScreens/Track";
import Account from "../CustomerScreens/Account";
import { createAppContainer } from "react-navigation";

const CustomerHomeStack = createStackNavigator();
const StartScreenStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const SupportStack = createStackNavigator();
const TrackStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const BookStack = createStackNavigator();
const ScheduleStack = createStackNavigator();
const AccountStack = createStackNavigator();

const SignInStack = createStackNavigator();
const SignupStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const SignupStackScreens = ({ navigation }) => (
  <SignupStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SignupStack.Screen
      name="Signup"
      component={Signup}
      options={{
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </SignupStack.Navigator>
);

const SignInStackScreens = ({ navigation }) => (
  <SignInStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SignInStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </SignInStack.Navigator>
);

const StartStackScreens = ({ navigation }) => (
  <StartScreenStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <StartScreenStack.Screen
      name="Start Screen"
      component={StartScreen}
      options={{
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </StartScreenStack.Navigator>
);

const CustomerHomeStackScreen = ({ navigation }) => (
  <CustomerHomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <CustomerHomeStack.Screen
      name="Home"
      component={HomePage}
      options={{
        title: "Overview",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </CustomerHomeStack.Navigator>
);

const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SettingsStack.Screen
      name="Settings"
      component={Settings}
      options={{
        title: "Settings",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </SettingsStack.Navigator>
);

const HistoryStackScreen = ({ navigation }) => (
  <HistoryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HistoryStack.Screen
      name="History"
      component={History}
      options={{
        title: "History",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </HistoryStack.Navigator>
);

const BookStackScreen = ({ navigation }) => (
  <BookStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <BookStack.Screen
      name="Book"
      component={Schedule}
      options={{
        title: "Book",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </BookStack.Navigator>
);

const ScheduleStackScreen = ({ navigation }) => (
  <ScheduleStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ScheduleStack.Screen
      name="Schedule"
      component={Schedule}
      options={{
        title: "Schedule",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </ScheduleStack.Navigator>
);

const TrackStackScreen = ({ navigation }) => (
  <TrackStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <TrackStack.Screen
      name="Track"
      component={Track}
      options={{
        title: "Track",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </TrackStack.Navigator>
);

const SupportStackScreen = ({ navigation }) => (
  <SupportStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SupportStack.Screen
      name="Support"
      component={Support}
      options={{
        title: "Support",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </SupportStack.Navigator>
);

const AccountStackScreen = ({ navigation }) => (
  <AccountStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <AccountStack.Screen
      name="Account"
      component={Account}
      options={{
        title: "Account",
        headerRight: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
        headerLeft: () => (
          <Button title="back" onPress={() => navigation.goBack()} />
        ),
      }}
    />
  </AccountStack.Navigator>
);

const StartupNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start Screen">
        <Drawer.Screen name="SignIn" component={SignInStackScreens} />
        <Drawer.Screen name="Signup" component={SignupStackScreens} />
        <Drawer.Screen name="Start Screen" component={StartStackScreens} />
        <Drawer.Screen name="Home" component={CustomerHomeStackScreen} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
        <Drawer.Screen name="History" component={HistoryStackScreen} />
        <Drawer.Screen name="Book" component={BookStackScreen} />
        <Drawer.Screen name="Schedule" component={ScheduleStackScreen} />
        <Drawer.Screen name="Track" component={TrackStackScreen} />
        <Drawer.Screen name="Support" component={SupportStackScreen} />
        <Drawer.Screen name="Account" component={AccountStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default StartupNavigation;
