import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import Screen from '../../components/screen';
import Shipments from '../../components/shipments';
import OrderBooking from '../../components/orders/orderBooking';

import { getUserId } from '../../actions/authAction';
import { GetShipmentByUser } from '../../actions/shipmentAction';
import {
  GetBookingByShipment,
  UpdateBooking,
} from '../../actions/bookingAction';

class RequestsScreen extends Component {
  state = {
    shipments: [],
    bookings: [],
  };

  componentDidMount() {
    const user = getUserId();

    if (user === null) {
      this.props.history.push('/');
    } else {
      this.props.GetShipmentByUser();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.shipments.data !== this.props.shipments.data &&
      Array.isArray(this.props.shipments.data)
    ) {
      this.setState({
        shipments: this.props.shipments.data.filter((b) => b.status === 'open'),
      });
    }

    if (
      prevProps.bookings.data !== this.props.bookings.data &&
      Array.isArray(this.props.bookings.data)
    ) {
      this.setState({
        bookings: this.props.bookings.data.filter(
          (b) => b.status === 'pending'
        ),
      });
    }
  }

  GetAcceptedBookings = (shipmentId) => {
    this.props.GetBookingByShipment(shipmentId);
    if (this.props.bookings.error === 404) {
      this.setState({ bookings: [] });
    }
  };

  handleUpdate = (bookingId, accept) => {
    const bookingsBackup = this.state.bookings;

    let bookingUpdate = {};
    if (accept === 1) {
      bookingUpdate = { bookingId: bookingId, status: 'approved' };
    } else {
      bookingUpdate = { bookingId: bookingId, status: 'rejected' };
    }

    bookingsBackup.forEach((booking) => {
      if (booking.bookingId === bookingId) {
        booking.status = bookingUpdate.status;
      }
    });
    this.props.UpdateBooking(bookingUpdate);
    if (this.props.bookings.error) this.setState({ bookings: bookingsBackup });
  };

  render() {
    const { shipments, bookings } = this.state;

    return (
      <Screen title="View Requests" subtitle="List of pending customer orders.">
        <div
          style={{
            height: 260,
            overflowX: 'scroll',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {shipments &&
            shipments.map((shipment) => (
              <Shipments
                key={shipment.shipmentId}
                shipment={shipment}
                bookings={this.GetAcceptedBookings}
              />
            ))}
        </div>

        <hr />

        <div style={{ overflow: 'hidden', padding: 20 }}>
          {bookings.length <= 0 ? (
            <div
              style={{
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <h1>No bookings made</h1>
            </div>
          ) : (
            <div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#Id</th>
                    <th>Receiver Name</th>
                    <th>Receiver Phone</th>
                    <th>Item(s)</th>
                    <th>Instructions</th>
                    <th>Packaging</th>
                    <th>Status</th>
                    <th>Accept/Reject</th>
                  </tr>
                </thead>
                {bookings &&
                  bookings.map((booking) => (
                    <OrderBooking
                      key={booking.bookingId}
                      booking={booking}
                      update={this.handleUpdate}
                    />
                  ))}
              </Table>
            </div>
          )}
        </div>
      </Screen>
    );
  }
}

const mapStateToProps = ({ shipments, bookings }) => ({ shipments, bookings });

export default withRouter(
  connect(mapStateToProps, {
    GetShipmentByUser,
    GetBookingByShipment,
    UpdateBooking,
  })(RequestsScreen)
);
