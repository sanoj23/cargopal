import React, { Component } from 'react';

import Screen from '../../components/screen';
import Tracking from '../../components/tracking';

class TrackingScreen extends Component {
  state = {};

  componentDidMount() {
    // reset forms
  }

  componentDidUpdate() {
    // reenter state of the shipment
  }

  render() {
    return (
      <Screen title="Tracking">
        <div
          style={{ borderStyle: 'solid', padding: 20, width: 'auto', left: 10 }}
        >
          <Tracking />
        </div>
        <div>
          <h1>Status: </h1>
        </div>
      </Screen>
    );
  }
}

export default TrackingScreen;
