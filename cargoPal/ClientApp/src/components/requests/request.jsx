import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Table } from 'react-bootstrap';

// to be editted with a new component
import RequestBooking from '../requests/requestBookings';

import { GetBookingByShipment } from '../../actions/bookingAction';

class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shipment: {},
      bookings: null,
    };
  }

  componentDidMount() {
    this.setState({ shipment: this.props.shipment, bookings: null });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookings.data !== this.props.bookings.data) {
      this.setState({
        bookings: this.props.bookings.data.filter(
          (b) => b.status === 'pending'
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

    const {
      shipmentId,
      origin,
      destination,
      capacity,
      status,
    } = this.state.shipment;

    const shipment = (
      <div>
        <b>#ID: </b>
        {shipmentId} <b>Origin: </b>
        {origin} <b>Destination: </b>
        {destination} <b>Capacity:</b> {capacity} <b>Status: </b> {status}{' '}
      </div>
    );
    return (
      <>
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
              <Accordion.Collapse eventKey={shipmentId}>
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>BookingId</th>
                        <th>Name</th>
                        <th>Item</th>
                        <th>Package</th>
                        <th>Instructions</th>
                        <th>Accept/Reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(bookings) &&
                        bookings.map((booking) => (
                          <RequestBooking
                            key={booking.bookingId}
                            booking={booking}
                          />
                        ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            )}
          </Card>
        </Accordion>
      </>
    );
  }
}

const mapStateToProps = ({ bookings }) => ({ bookings });

export default connect(mapStateToProps, { GetBookingByShipment })(Request);
