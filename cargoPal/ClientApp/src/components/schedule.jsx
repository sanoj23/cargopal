import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: {},
    };
  }

  componentDidMount() {
    let shipment = this.props.schedule;
    this.setState({ schedule: { ...this.state.schedule, schedule: shipment } });
  }

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {
    this.setState({ schedule: {} });
  }

  render() {
    const { schedule } = this.state;
    console.log(this.state.schedule.schedule);

    const shipmentData = () => {
      const {
        shipmentId,
        startDate,
        endDate,
        origin,
        destination,
        price,
        status,
        capacity,
      } = this.props.schedule;

      return (
        <>
          <h2>Schedule For Shipment Id #{shipmentId}</h2>
          <div>
            <p>
              To: <b>{destination}</b> On: <b>{endDate}</b>
            </p>
            <p>
              From: <b>{origin}</b> On: <b>{startDate}</b>
            </p>
            <p>
              Price per Kilo: <b>${price}</b>
            </p>
            <p>
              Status: <b>{status}</b>
            </p>
            <p>
              Capacity: <b>{capacity}</b>
            </p>
          </div>
          <div style={{}}>
            <Button
              variant="danger"
              onClick={() => console.log('deleted')}
              style={{ marginRight: 10 }}
            >
              Delete
            </Button>
            <Button
              variant="warning"
              onClick={() => console.log('update')}
              style={{ marginLeft: 10 }}
            >
              Update
            </Button>
          </div>
        </>
      );
    };

    return <div>{schedule ? shipmentData() : null}</div>;
  }
}

export default Schedule;
