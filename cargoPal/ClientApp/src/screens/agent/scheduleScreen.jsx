import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Schedule from '../../components/schedule';
import Screen from '../../components/screen';

class ScheduleScreen extends Component {
  state = {
    schedules: [
      {
        id: 1,
        capacity: 100,
        available: 100,
        destination: 'Sri Lanka',
        origin: 'China',
      },
      {
        id: 2,
        capacity: 200,
        available: 200,
        destination: 'Sri Lanka',
        origin: 'India',
      },
      {
        id: 3,
        capacity: 200,
        available: 200,
        destination: 'Sri Lanka',
        origin: 'India',
      },
      {
        id: 4,
        capacity: 200,
        available: 200,
        destination: 'Sri Lanka',
        origin: 'India',
      },
      {
        id: 5,
        capacity: 200,
        available: 200,
        destination: 'Sri Lanka',
        origin: 'India',
      },
      {
        id: 6,
        capacity: 200,
        available: 200,
        destination: 'Sri Lanka',
        origin: 'India',
      },
    ],
  };

  componentDidMount() {
    console.log('Getting all shipments from database');
  }
  render() {
    const { schedules } = this.state;

    return (
      <Screen title="Schedule" subtitle="Manage you shipments here">
        <div>
          <Button
            variant="success"
            style={{ margin: 3 }}
            onClick={() => console.log('add schedule')}
          >
            Add New Shipment
          </Button>
        </div>

        <div style={{ overflow: 'hidden' }}>
          {schedules.map(({ id, capacity, available, destination, origin }) => (
            <Schedule
              key={id}
              capacity={capacity}
              available={available}
              destination={destination}
              origin={origin}
            />
          ))}
        </div>
      </Screen>
    );
  }
}

export default ScheduleScreen;
