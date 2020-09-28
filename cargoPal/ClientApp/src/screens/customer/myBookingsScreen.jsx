import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Screen from '../../components/screen';
import Booking from '../../components/booking';

import { GetBookingByUser, DeleteBooking } from '../../actions/bookingAction';

class MyBookingsScreen extends Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    this.props.GetBookingByUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookings.data !== this.props.bookings.data) {
      this.setState({ bookings: this.props.bookings.data });
    }
  }

  handleDelete = (bookingId) => {
    this.props.DeleteBooking(bookingId);
  };

  render() {
    const { bookings } = this.state;
    console.log(bookings);
    return (
      <Screen title="My Bookings" subtitle="All your bookings">
        <Container>
          <Row>
            {bookings.map((booking) => (
              <Col sm={3} key={booking.bookingId}>
                <Booking
                  key={booking}
                  booking={booking}
                  onRemove={this.handleDelete}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Screen>
    );
  }
}

const mapStateToProps = ({ bookings }) => ({ bookings });

export default connect(mapStateToProps, { GetBookingByUser, DeleteBooking })(
  MyBookingsScreen
);
