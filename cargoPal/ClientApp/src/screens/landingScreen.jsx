import React from 'react';
import { Container, Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import Screen from '../components/screen';

export default function LandingScreen(props) {
  let history = useHistory();
  const windowHeight = window.innerHeight;

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
        <Container style={{ textAlign: 'center' }}>
          <h1>Log in to view the system</h1>
          <Button variant="primary" onClick={() => history.push('/login')}>
            Sign In
          </Button>
          <h2>No Account? </h2>
          <Button variant="secondary" onClick={() => history.push('/register')}>
            Register
          </Button>
          <p>Conitue as a guest</p>
        </Container>
      </div>
    </Screen>
  );
}
