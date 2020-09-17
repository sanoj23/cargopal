import React from 'react';
import RegisterClient from '../components/registerClient';
import RegisterAgent from '../components/registerAgent';
import Screen from '../components/screen';

export default function RegisterScreen(props) {
  const userType = props.location.state.user;

  return (
    <Screen title="Register" subtitle={`Register ${userType}`}>
      {userType && userType === 'customer' ? (
        <RegisterClient />
      ) : (
        <RegisterAgent />
      )}
    </Screen>
  );
}
