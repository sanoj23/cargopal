import React from 'react';
import Login from '../components/login';
import Screen from '../components/screen';

const windowHeight = window.innerHeight;

export default function LoginScreen(props) {
  return (
    <Screen>
      <Login />
    </Screen>
  );
}
