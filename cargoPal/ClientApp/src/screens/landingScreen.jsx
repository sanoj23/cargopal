import React from 'react';
import { Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';

import LandingImage from '../assets/commons/background.jpeg';
import Login from '../components/login';

export default function LandingScreen(props) {
  let history = useHistory();
  const windowHeight = window.innerHeight;

  return (
    <div
      style={{
        backgroundImage: `url(${LandingImage})`,
        display: 'table-cell',
        height: windowHeight,
        width: window.innerWidth,
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          textAlign: 'initial',
          padding: 20,
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ padding: 10 }}>
            <Login />
          </div>

          <div style={{ borderLeft: '2px solid white', height: 'auto' }}></div>

          <div style={{ backgroundColor: 'inherit', width: 400 }}>
            <div style={{ padding: 60 }}>
              <h1>Sign Up</h1>
              <hr style={{ backgroundColor: 'white' }} />

              <Button
                variant="light"
                onClick={() =>
                  history.push({
                    pathname: '/register',
                    state: { user: 'customer' },
                  })
                }
                size="lg"
                style={{ width: '100%', margin: 10 }}
              >
                Customer
              </Button>

              <Button
                variant="dark"
                onClick={() =>
                  history.push({
                    pathname: '/register',
                    state: { user: 'agent' },
                  })
                }
                size="lg"
                style={{ width: '100%', margin: 10 }}
              >
                Agent
              </Button>
              <br />
              <br />
              <h1>Tracking </h1>
              <hr style={{ backgroundColor: 'white' }} />

              <Button
                variant="warning"
                onClick={() =>
                  history.push({
                    pathname: '/tracking',
                    state: { user: 'visitor' },
                  })
                }
                size="lg"
                style={{ width: '100%', margin: 10 }}
              >
                Track Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
