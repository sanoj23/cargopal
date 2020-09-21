import React, { Component } from 'react';

import Screen from '../../components/screen';
import Tracking from '../../components/tracking';

class TrackingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, item: 'food' },
        { id: 2, item: 'good' },
      ],
    };
  }

  componentDidMount() {
    // reset forms
  }

  componentDidUpdate() {
    // reenter state of the shipment
  }

  requestTracking = (values) => {
    const track = this.state.items.find(
      (i) => i.id === parseInt(values.trackingNumber)
    );
    console.log(track);
  };

  render() {
    return (
      <Screen title="Tracking">
        <div
          style={{ borderStyle: 'solid', padding: 20, width: 'auto', left: 10 }}
        >
          <Tracking track={this.requestTracking.bind(this)} />
        </div>
        <div>
          <h1>Status: </h1>
        </div>
      </Screen>
    );
  }
}

export default TrackingScreen;
