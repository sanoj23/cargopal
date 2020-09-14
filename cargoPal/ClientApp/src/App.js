import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import LandingScreen from './screens/landingScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
