import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

import BookingScreen from './screens/customer/bookingScreen';
import HomeScreen from './screens/homeScreen';

import LandingScreen from './screens/landingScreen';
import RegisterScreen from './screens/registerScreen';
import TrackingScreen from './screens/customer/trackingScreen';
import ScheduleScreen from './screens/agent/scheduleScreen';
import OrdersScreen from './screens/customer/OrdersScreen';
import RequestsScreen from './screens/agent/requestsScreen';
import NotFound from './components/notFound';
import ShipmentsScreen from './screens/customer/ShipmentsScreen';

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
        <Route exact path="/booking" component={BookingScreen} />
        <Route exact path="/schedule" component={ScheduleScreen} />
        <Route exact path="/orders" component={OrdersScreen} />
        <Route exact path="/requests" component={RequestsScreen} />
        <Route path="/notfound" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
