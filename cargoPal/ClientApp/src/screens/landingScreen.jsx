import React from 'react';
import { Image, Button } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import Screen from '../components/screen';

export default function LandingScreen(props) {
  let history = useHistory();
  const windowHeight = window.innerHeight;

  return (
    <div style={{ position: 'relative' }}>
      <h1>This is the page u need to do</h1>
    </div>
  );
}
