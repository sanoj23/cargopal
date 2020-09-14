import React from 'react';

import Screen from '../components/screen';
import Register from '../components/register';

// const windowHeight = window.innerHeight;

export default function RegisterScreen(props) {
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
        <Register />
      </div>
    </Screen>
  );
}
