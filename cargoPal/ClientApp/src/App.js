import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import BookingScreen from './screens/customer/bookingScreen';
import HomeScreen from './screens/homeScreen';
import ProfileScreen from './screens/profileScreen';

import LandingScreen from './screens/landingScreen';
import RegisterScreen from './screens/registerScreen';
import TrackingScreen from './screens/customer/trackingScreen';
import ScheduleScreen from './screens/agent/scheduleScreen';
import OrdersScreen from './screens/customer/OrdersScreen';
import RequestsScreen from './screens/agent/requestsScreen';
import NotFound from './components/notFound';
import ShipmentsScreen from './screens/customer/ShipmentsScreen';
<<<<<<< HEAD
import MyBookingsScreen from './screens/customer/myBookingsScreen';
import AddShipmentScreen from './screens/addShipmnetScreen';
=======
>>>>>>> parent of 4fe8ce7... Merge branch 'cargo-expo-demo' of https://github.com/ShenukiPerera/cargo-expo-demo into cargo-expo-demo

export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingScreen} />
      <Switch>
        <Route exact path="/register" component={RegisterScreen} />
        <Route
          exact
          path="/home"
          render={(props) => <HomeScreen {...props} />}
        />
        <Route exact path="/tracking" component={TrackingScreen} />

        <Route exact path="/shipments" component={ShipmentsScreen} />

        <Route
          exact
          path="/booking"
          // component={BookingScreen}
          render={(props) => <BookingScreen {...props} />}
        />
        <Route exact path="/schedule" component={ScheduleScreen} />
        <Route exact path="/orders" component={OrdersScreen} />
        <Route exact path="/requests" component={RequestsScreen} />
        <Route exact path="/profile" component={ProfileScreen} />
        <Route exact path="/addShipment" component={AddShipmentScreen} />

        <Route path="/notfound" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
