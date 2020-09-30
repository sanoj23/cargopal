import React, { Component } from 'react';

import Screen from '../../components/screen';
import Booking from '../../components/booking';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // get the current user detials
  }

  render() {
    return (
      <Screen title="Booking" subtitle="Make your bookings here.">
        <Booking schedule={this.state.schedule} />
      </Screen>
    );
  }
}

export default BookingScreen;
