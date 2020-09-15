import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import LandingScreen from './screens/landingScreen';

import TrackingScreen from './screens/trackingScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/tracking" component={TrackingScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
