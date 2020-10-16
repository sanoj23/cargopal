import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Screen from '../../components/screen';
import Booking from '../../components/booking';

import { getUserId } from '../../actions/authAction';
import { GetBookingByUser, DeleteBooking } from '../../actions/bookingAction';

class MyBookingsScreen extends Component {
  state = {
    bookings: [],
  };

  componentDidMount() {
    const user = getUserId();

    if (user === null) {
      this.props.history.push('/');
    } else {
      this.props.GetBookingByUser();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookings.data !== this.props.bookings.data) {
      this.setState({ bookings: this.props.bookings.data });
    }
  }

  handleDelete = (bookingId) => {
    const bookingsCopy = this.state.bookings;
    this.props.DeleteBooking(bookingId);

    if (this.props.bookings.hasError) {
      this.setState({ bookings: bookingsCopy });
    }

    this.setState({
      bookings: bookingsCopy.filter(
        (booking) => booking.bookingId !== bookingId
      ),
    });
    // find an alternative method
    window.location.reload();
  };

  render() {
    const { bookings } = this.state;
    console.log(bookings);
    return (
      <Screen title="My Bookings" subtitle="All your bookings">
        <Container>
          <Row>
            {Array.isArray(bookings) &&
              bookings.map((booking) => (
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
