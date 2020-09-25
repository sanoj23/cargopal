import React, { Component } from 'react';

import Screen from '../../components/screen';
import Tracking from '../../components/tracking';

class TrackingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuth: {},
    };
  }

  componentDidMount() {
    // reset forms
    // if (!this.props.location.state.user) {
    //   const user = this.props.location.state.user;
    //   if (user && user === 'visitor') {
    //     this.setState({ userAuth: user });
    //   }
    // }
  }

  componentDidUpdate() {
    // reenter state of the shipment
    console.log(this.state.userAuth);
  }

  requestTracking = (values) => {
    const track = this.state.items.find(
      (i) => i.id === parseInt(values.trackingNumber)
    );
    console.log(track);
  };

  render() {
    return (
      <Screen title="Tracking" navbar={`${this.state.userAuth}`}>
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
