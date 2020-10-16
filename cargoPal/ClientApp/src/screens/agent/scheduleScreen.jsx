import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Schedule from '../../components/schedule';
import Screen from '../../components/screen';
import Shipments from '../../components/shipments';

import { getUserId } from '../../actions/authAction';
import {
  GetShipmentByUser,
  DeleteShipment,
  UpdateShipment,
} from '../../actions/shipmentAction';

class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      schedules: [],
      shipment: null,
    };
  }

  componentDidMount() {
    const user = getUserId();

    if (user === null) {
      this.props.history.push('/');
    } else {
      this.props.GetShipmentByUser();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ schedules: this.props.shipments.data });
    }
  }

  handleClick = () => {
    this.props.history.push('/addShipment');
  };

  handleDelete = (shipmentId) => {
    console.log(shipmentId);
    const schedulesCopy = this.state.schedules;
    this.props.DeleteShipment(shipmentId);

    if (this.props.shipments.hasError) {
      this.setState({ schedules: schedulesCopy });
    }

    this.setState({
      shipments: schedulesCopy.filter(
        (schedule) => schedule.shipmentId !== shipmentId
      ),
    });
    // find an alternative method
    // window.location.reload();
  };

  // handleUpdate = (bookingId, accept) => {
  //   const bookingsBackup = this.state.bookings;

  //   let bookingUpdate = {};
  //   if (accept === 1) {
  //     bookingUpdate = { bookingId: bookingId, status: 'approved' };
  //   } else {
  //     bookingUpdate = { bookingId: bookingId, status: 'rejected' };
  //   }

  //   bookingsBackup.forEach((booking) => {
  //     if (booking.bookingId === bookingId) {
  //       booking.status = bookingUpdate.status;
  //     }
  //   });
  //   this.props.UpdateBooking(bookingUpdate);
  //   if (this.props.bookings.error) this.setState({ bookings: bookingsBackup });
  // };

  GetShipment = (shipmentId) => {
    const { schedules } = this.state;
    const shipment = schedules.find((s) => s.shipmentId === shipmentId);
    if (shipment !== null) {
      this.setState({ shipment: shipment });
    } else {
      this.setState({ shipment: null });
    }
  };

  render() {
    const { schedules, shipment } = this.state;

    return (
      <Screen title="Schedule" subtitle="Manage your scheduled shipments here">
        <div>
          <Button
            variant="outline-success"
            style={{ margin: 3 }}
            onClick={this.handleClick}
          >
            Add New Shipment
          </Button>
        </div>
        <div
          style={{
            height: 260,
            overflowX: 'scroll',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {schedules &&
            schedules.map((shipment) => (
              <Shipments
                key={shipment.shipmentId}
                shipment={shipment}
                bookings={this.GetShipment}
              />
            ))}
        </div>

        <hr />

        {shipment ? (
          <Schedule schedule={shipment} />
        ) : (
          <div>
            <h5>Select a shipment to view more</h5>
          </div>
        )}
      </Screen>
    );
  }
}
const mapStateToProps = ({ shipments }) => ({ shipments });
const mapDispatchToProps = (dispatch) => ({
  GetShipmentByUser: () => dispatch(GetShipmentByUser()),
  DeleteShipment: (shipmentId) => dispatch(DeleteShipment(shipmentId)),
  UpdateShipment: (shipment) => dispatch(UpdateShipment(shipment)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
);
