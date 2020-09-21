import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function Shipment({ shipment }) {
  const { origin, destination, startdate, enddate, capacity } = shipment;
  const history = useHistory();

  const getAgent = () => {
    const users = [
      { id: 1, name: 'Agent 01' },
      { id: 2, name: 'Agent 02' },
    ];

    const track = users.find((i) => i.id === parseInt(shipment.userId));
    return track.name;
  };

  return (
    <>
      <Card style={{ marginTop: 10, borderRadius: 20, overflow: 'hidden' }}>
        <Card.Body>
          <Card.Title>{getAgent()}</Card.Title>

          <Card.Text>
            To: <br />
            <b>{destination}</b> - <b>{enddate}</b>
          </Card.Text>
          <Card.Text>
            From: <br />
            <b>{origin}</b> - <b>{startdate}</b>
          </Card.Text>
          <Card.Text>
            Availability: <b>{capacity} </b>kg
          </Card.Text>

          <Button
            variant="outline-success"
            onClick={() => history.push('/booking')}
          >
            Book Shipment
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
