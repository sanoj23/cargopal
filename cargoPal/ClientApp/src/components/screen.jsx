import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Navigationbar from './navBar/navbar';
import { getUserId } from '../actions/authAction';

export default function Screen({ children, title, subtitle, navbar }) {
  const history = useHistory();
  useEffect(() => {
    const user = getUserId();
    if (user === null) history.push('/');
  });

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
