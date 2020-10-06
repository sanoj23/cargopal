import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Schedule from '../../components/schedule';
import Screen from '../../components/screen';

import {
  GetShipmentByUser,
  DeleteShipment,
} from '../../actions/shipmentAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      schedules: [],
    };
  }

  componentDidMount() {
    this.props.GetShipmentByUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shipments.data !== this.props.shipments.data) {
      this.setState({ schedules: this.props.shipments.data });
    }
    console.log(this.props.shipments.data);
  }

  handleClick = () => {
    console.log('reached');
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

  render() {
    const { schedules } = this.state;

    return (
      <Screen title="Schedule" subtitle="Manage you shipments here">
        <div>
          <Button
            variant="success"
            style={{ margin: 3 }}
            onClick={this.handleClick}
          >
            Add New Shipment
          </Button>
        </div>

        <div style={{ overflow: 'hidden' }}>
          {schedules.length > 0 &&
            schedules.map((schedule) => (
              <Schedule
                key={schedule.shipmentId}
                Schedule={schedule}
                onDelete={this.handleDelete}
              />
            ))}
        </div>
      </Screen>
    );
  }
}
const mapStateToProps = ({ shipments }) => ({ shipments });
const mapDispatchToProps = (dispatch) => ({
  GetShipmentByUser: () => dispatch(GetShipmentByUser()),
  DeleteShipment: (shipmentId) => dispatch(DeleteShipment(shipmentId)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleScreen)
);
