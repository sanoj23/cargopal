import React from 'react';

import Navigationbar from './navbar';
import { Button, Container } from 'react-bootstrap';

const checkRoute = () => {
  // let path = window.location.pathname;
  // if (path === '/login' || path === '/register') return true;
  return false;
};

export default function Screen({ children, title, button, buttonClick }) {
  return (
    <div>
      {checkRoute() === true ? null : <Navigationbar />}

      <Container
        style={{
          backgroundColor: 'white',
          padding: 15,
          marginTop: 20,
        }}
      >
        <div style={{ sticky: 'top' }}>
          {!title ? null : (
            <>
              <h1 style={{ display: 'inline-block' }}>{title}</h1>
              {button && (
                <Button
                  variant="outline-success"
                  style={{ float: 'right', marginTop: 10 }}
                  onClick={buttonClick}
                >
                  {button}
                </Button>
              )}
              <hr />
            </>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // height: windowHeight,
            backgroundColor: 'inherit',
          }}
        >
          {children}
        </div>
      </Container>
    </div>
  );
}
