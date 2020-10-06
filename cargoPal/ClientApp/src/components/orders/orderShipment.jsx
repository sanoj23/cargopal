import React, { Component } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import OrderBooking from '../orders/orderBooking';
import { GetBookingByShipment } from '../../actions/bookingAction';

class OrderShipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: null,
    };
  }

  componentDidMount() {
    this.setState({ bookings: null });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookings.data !== this.props.bookings.data) {
      this.setState({
        bookings: this.props.bookings.data.filter(
          (b) => b.status === 'Approved'
        ),
      });
    }
  }

  getBookings = () => {
    this.setState({ bookings: [] });
    const shipmentId = this.props.shipment.shipmentId;
    this.props.GetBookingByShipment(shipmentId);
  };

  render() {
    const { bookings } = this.state;
    const { shipmentId, origin, destination, capacity } = this.props.shipment;
    const shipment = (
      <div>
        <b>#ID: </b>
        {shipmentId} <b>Origin: </b>
        {origin} <b>Destination: </b>
        {destination} <b>Capacity:</b> {capacity}
      </div>
    );

    return (
      <>
        {console.log(bookings)}
        <Accordion>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey={shipmentId}
              onClick={this.getBookings}
            >
              {shipment}
            </Accordion.Toggle>

            {bookings === null || bookings.length === 0 ? (
              <Accordion.Collapse eventKey={shipmentId}>
                <Card.Body>No Bookings made</Card.Body>
              </Accordion.Collapse>
            ) : (
              Array.isArray(bookings) &&
              bookings.map((booking) => (
                <OrderBooking key={booking.bookingId} booking={booking} />
              ))
            )}
          </Card>
        </Accordion>
      </>
    );
  }
}
const mapStateToProps = ({ bookings }) => ({ bookings });

export default connect(mapStateToProps, { GetBookingByShipment })(
  OrderShipment
);
