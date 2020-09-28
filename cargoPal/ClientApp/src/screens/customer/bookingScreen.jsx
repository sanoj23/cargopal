import React, { Component } from 'react';

import Screen from '../../components/screen';
import BookingForm from '../../components/bookingform';

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
        <BookingForm schedule={this.state.schedule} />
      </Screen>
    );
  }
}

export default BookingScreen;
