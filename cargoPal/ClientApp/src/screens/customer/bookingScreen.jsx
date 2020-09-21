import React, { Component } from 'react';

import Screen from '../../components/screen';
import Booking from '../../components/booking';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: 'will',
        lastName: 'smith',
        address: 'home',
        phone: '123456789',
      },
      schedule: {
        id: 1,
        destination: 'china',
      },
    };
  }

  componentDidMount() {
    // get the current user detials
  }

  render() {
    return (
      <Screen title="Booking" subtitle="Make your bookings here.">
        <Booking user={this.state.user} schedule={this.state.schedule} />
      </Screen>
    );
  }
}

export default BookingScreen;
