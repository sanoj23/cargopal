import React from 'react';

import Navigationbar from './navbar';
import { Container } from 'react-bootstrap';

const checkRoute = () => {
  // let path = window.location.pathname;
  // if (path === '/login' || path === '/register') return true;
  return false;
};

export default function Screen({ children, title, subtitle, ...otherProps }) {
  return (
    <div>
      {checkRoute() === true ? null : <Navigationbar />}

      <Container
        style={{
          backgroundColor: 'white',
          padding: 15,
          marginTop: 20,
          // borderStyle: 'solid',
        }}
      >
        <div style={{ sticky: 'top' }}>
          {!title ? null : (
            <>
              <h1 style={{ display: 'inline-block' }}>{title}</h1>
              <h6>{subtitle}</h6>
              <hr />
            </>
          )}
        </div>
        <div
          style={
            {
              // display: 'flex',
              // justifyContent: 'center',
              // alignItems: 'center',
              // backgroundColor: 'inherit',
              // borderStyle: 'solid',
            }
          }
        >
          {children}
        </div>
      </Container>
    </div>
  );
}
