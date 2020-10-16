import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

import { GetShipmentById } from '../../actions/shipmentAction';
import { getUserByUserId } from '../../actions/userAction';

import Screen from '../../components/screen';
import Tracking from '../../components/tracking';

class TrackingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: null,
      shipment: {},
      user: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ shipments: this.props.shipments.data });
      if (!this.props.shipments.error) {
        this.props.getUserByUserId(this.props.shipments.data.userId);
      }
    }
    if (prevProps.users.data !== this.props.users.data) {
      this.setState({ user: this.props.users.data });
    }
  }

  componentWillUnmount() {
    this.setState({ booking: null, shipment: null, user: null });
  }

  getInfo = (booking) => {
    this.setState({ booking: booking });
    this.props.GetShipmentById(booking.shipmentId);
  };

  DisplayBooking = () => {
    const {
      bookingId,
      item,
      instructions,
      packaging,
      status,
      receiverName,
      receiverPhone,
    } = this.state.booking;

    return (
      <>
        {this.state.booking ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#Id</th>
                <th>Receiver</th>
                <th>Phone</th>
                <th>Item</th>
                <th>Instructions</th>
                <th>Packaging</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bookingId}</td>
                <td>{receiverName}</td>
                <td>{receiverPhone}</td>
                <td>{item}</td>
                <td>{instructions}</td>
                <td>{packaging}</td>
                <td>{status}</td>
              </tr>
            </tbody>
          </Table>
        ) : null}
      </>
    );
  };

  DisplayShipment = () => {
    console.log('check');

    const { companyName, email, phone, address } = this.state.user;

    return (
      <>
        {this.state.user && this.state.shipment ? (
          <>
            <hr />
            <h4>{companyName}</h4>
            <h6>{address}</h6>
            <h6>{email}</h6>
            <h6>{phone}</h6>

            <hr />
            <h4>Shipment Status: {this.props.shipments.data.status}</h4>
            <hr />

            {this.state.booking ? this.DisplayBooking() : null}
          </>
        ) : null}
      </>
    );
  };

  render() {
    return (
      <Screen
        title="Tracking"
        subtitle="Enter the booking number to start tracking"
        navbar={`${this.state.userAuth}`}
      >
        <div>
          <Tracking func={this.getInfo} />
        </div>

        <hr />

        <div>
          {this.state.booking && this.state.shipment && this.state.user
            ? this.DisplayShipment()
            : null}
        </div>
      </Screen>
    );
  }
}

const mapStateToProps = ({ shipments, users }) => ({ shipments, users });
export default connect(mapStateToProps, { GetShipmentById, getUserByUserId })(
  TrackingScreen
);
