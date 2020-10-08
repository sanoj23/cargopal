import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function Shipments({ shipment, bookings }) {
  const {
    shipmentId,
    origin,
    destination,
    price,
    status,
    startDate,
    endDate,
  } = shipment;

  const handleClick = () => {
    bookings(shipmentId);
  };

  return (
    <>
      <Card
        style={{
          width: '16rem',
          display: 'inline-block',
          margin: 10,
          overflow: 'hidden',
        }}
      >
        <Card.Body>
          <Card.Title>
            <b>#Id: </b> {shipmentId} <br />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {origin + '-' + destination}
          </Card.Subtitle>
          <Card.Text>
            {'$' + price} <br />
            {'Status: ' + status}
            <br />
            {`Start Date: ${new Date(startDate).toLocaleDateString()}`}
            <br />
            {`End Date: ${new Date(endDate).toLocaleDateString()}`}
          </Card.Text>
          <Button variant="link" onClick={handleClick}>
            View Bookings
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}