import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import LandingScreen from './screens/landingScreen';
import LoginScreen from './screens/loginScreen';
import { RegisterScreen as RegisterClient } from './screens/customer/registerScreen';
import { RegisterScreen as RegisterAgent } from './screens/agent/registerScreen';
import TrackingScreen from './screens/customer/trackingScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register/client" component={RegisterClient} />
        <Route exact path="/register/agent" component={RegisterAgent} />
        <Route exact path="/tracking" component={TrackingScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
