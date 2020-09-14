import React from 'react';
import Login from '../components/login';
import Screen from '../components/screen';

const windowHeight = window.innerHeight;

export default function LoginScreen(props) {
  return (
    <Screen>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: windowHeight,
          backgroundColor: 'inherit',
        }}
      >
        <Login />
      </div>
    </Screen>
  );
}
