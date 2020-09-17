import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";

import BookingScreen from "./screens/customer/bookingScreen";
import HomeScreen from "./screens/customer/homeScreen";

import LandingScreen from "./screens/landingScreen";
import RegisterScreen from "./screens/registerScreen";
import TrackingScreen from "./screens/customer/trackingScreen";
import ScheduleScreen from "./screens/agent/scheduleScreen";
import OrdersScreen from "./screens/customer/OrdersScreen";
import RequestsScreen from "./screens/agent/requestsScreen";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/tracking" component={TrackingScreen} />
        <Route exact path="/booking" component={BookingScreen} />
        <Route exact path="/schedule" component={ScheduleScreen} />
        <Route exact path="/orders" component={OrdersScreen} />
        <Route exact path="/requests" component={RequestsScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
