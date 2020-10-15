import React from 'react';

import Navigationbar from './navBar/navbar';
import { Container } from 'react-bootstrap';

export default function Screen({ children, title, subtitle, navbar }) {
  return (
    <div>
      <Navigationbar />
      <Container
        style={{ backgroundColor: 'white', padding: 15, marginTop: 20 }}
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
        <div>{children}</div>
      </Container>
    </div>
  );
}
