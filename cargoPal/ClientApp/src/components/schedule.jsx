import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Schedule({ Schedule }) {
  const { origin, destination, capacity, startDate, endDate } = Schedule;

  return (
    <div style={{ marginTop: 5, marginBottom: 5 }}>
      <Card style={{ width: '100%', borderRadius: 20 }}>
        <Card.Body>
          <Card.Title>
            {origin} - {destination}
          </Card.Title>
          <hr />
          <div>
            <Card.Text>
              Capacity: <b>{capacity}</b> Available: <b>{capacity}</b>
            </Card.Text>

            <Card.Text style={{ display: 'flex' }}>
              <div style={{ marginRight: 30 }}>
                Departure: <b>{origin}</b> <br /> On:
                <b>{new Date(startDate).toLocaleDateString()}</b>
              </div>

              <div>
                Arrival: <b>{destination}</b> <br />
                On:
                <b>{new Date(endDate).toLocaleDateString()}</b>
              </div>
            </Card.Text>
          </div>
          <div style={{ float: 'right' }}>
            <Button
              variant="warning"
              style={{ margin: 3 }}
              onClick={() => console.log('update')}
            >
              Update{' '}
            </Button>
            <Button
              variant="danger"
              style={{ margin: 3 }}
              onClick={() => console.log('Deleted')}
            >
              Delete{' '}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
