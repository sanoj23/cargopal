import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import RegisterClient from '../components/registerUser/registerClient';
import RegisterAgent from '../components/registerUser/registerAgent';

import RegisterAgentImage from '../assets/commons/agentRegister.jpg';
import RegisterClientImage from '../assets/commons/clientRegister.jpg';

export default function RegisterScreen(props) {
  const [alert, setAlert] = useState(false);
  let history = useHistory();

  const userType = props.location.state.user;
  const windowHeight = window.innerHeight;

  let backgroundImage;
  if (userType === 'customer') {
    backgroundImage = RegisterClientImage;
  } else {
    backgroundImage = RegisterAgentImage;
  }

  const handleClose = () => {
    setAlert(false);
    history.push('/');
  };

  const succcessAlert = (
    <>
      <Alert show={alert} variant="success">
        <Alert.Heading>You're officially our member now!</Alert.Heading>
        <p>
          You account has been created successfully. Login and start using your
          account. CargoPal welcomes you.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleClose} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        display: 'table-cell',
        height: windowHeight,
        width: window.innerWidth,
        verticalAlign: 'middle',
        textAlign: 'center',
        backgroundSize: 'cover',
        color: 'white',
      }}
    >
      {succcessAlert}
      <div
        style={{
          display: 'inline-block',
          textAlign: 'initial',
          padding: 20,
        }}
      >
        <h1>Resgister</h1>
        <hr style={{ backgroundColor: 'white' }} />
        {userType && userType === 'customer' ? (
          <RegisterClient alert={() => setAlert(true)} />
        ) : (
          <RegisterAgent alert={() => setAlert(true)} />
        )}
      </div>
    </div>
  );
}
